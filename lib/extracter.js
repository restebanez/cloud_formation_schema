
"use strict";

// using revealing module pattern
var extracter = (function(){
    var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
    var fs = require('fs');
    var _ = require('lodash');
    var path = require('path');
    var Q = require("q");

    var downloadedFilesDirectory = 'downloaded_files';

    var patchResources = {

        "AWS::EC2::EIP": function(resources, resource){
            console.log('post process AWS::EC2::EIP');
            delete resources[resource].properties.Properties.properties.Domain.type;
            // domain is only used when EIP belongs to a VPC
            resources[resource].properties.Properties.properties.Domain["anyOf"] = [
                { "type": { "enum": [ "vpc" ] } },
                { }
            ];
        },

        run: function(resources){
            for(var resource in resources){
                switch(resource) {
                    case "AWS::EC2::EIP":
                        this["AWS::EC2::EIP"](resources, resource);
                        break;

                }
            }
        }

    };


    function extractProperties(htmlContent, typeName){
        var properties = {};

        var currentAttrName = '';
        var latestAttrName = '';
        $(htmlContent).find('#divContent > div.section > div > div.variablelist > dl').children().map(function(){


            var htmlElementName = $(this).prop('nodeName');

            console.log('htmlElementName:' + htmlElementName);
            if(htmlElementName === 'DT'){ // this is the attribute name
                currentAttrName = $(this).text();
                if(currentAttrName === undefined){
                    throw('error: It could not get the attr name:' + $(this) );
                }
                //console.log('currentAttrName: ' + currentAttrName);
                properties[currentAttrName] = {};

            } else if(htmlElementName === 'DD') { // this are the properties of the attribute
                console.log('currentAttrName: ' + currentAttrName);
                var count = 0;


                $(this).children().each(function(){
                    var text = $(this).text().replace(/\n/g, '').replace(/\s+/g, ' ');
                    var currentElementName = $(this).prop('nodeName');
                    var isStillaDescription = true;


                    if(currentElementName === undefined) throw('currentElementName not found');
                    if(currentElementName === 'P'){
                        properties[currentAttrName]['title'] = currentAttrName;
                        if(count === 0) { // description is always the first one
                            properties[currentAttrName]['description'] = text;
                            latestAttrName = 'description';
                        } else if(/^Required:/i.test(text)) {
                            properties[currentAttrName]['required'] = text.replace(/^Required: /i,'');
                            latestAttrName = 'required';
                            isStillaDescription = false;
                        } else if(/^Type:/i.test(text)){
                            properties[currentAttrName]['type'] = text.replace(/^Type: /i,'');
                            latestAttrName = 'type';
                            isStillaDescription = false;
                        } else if(/^Update requires/i.test(text)) {
                            properties[currentAttrName]['update requires'] = text.replace(/^Update requires: /i,'');
                            latestAttrName = 'update';
                            isStillaDescription = false;
                        } else {
                            if(isStillaDescription){
                                if(properties[currentAttrName]['description-extra'] === undefined){
                                    properties[currentAttrName]['description-extra'] = text;
                                } else {
                                    properties[currentAttrName]['description-extra'] += text;
                                }

                            } else {
                                properties[currentAttrName]['unknown-attr'] = text;
                            }

                        }
                        count++;
                    } else if(currentElementName === 'DIV'){
                        if($(this).find('.aws-note').html()) {
                            console.log('indisedddddd ' + currentAttrName + ' ' + latestAttrName + ' ' + text);

                            properties[currentAttrName][latestAttrName + '-note'] = text.replace(/^note:/i, '');
                        } else if($(this).find('.itemizedlist').html()) {
                            console.log('transform this in an array')
                            console.log($(this).find('.itemizedlist').html());
                            var textTitle = $(this).find('.itemizedlist').find('p').text();
                            if(/^Update requires/i.test(textTitle)){
                                // this replaces the attribute
                                properties[currentAttrName]['update requires'] = [];
                                $(this).find('.itemizedlist').find('li').map(function(){
                                    properties[currentAttrName]['update requires'].push($(this).text().replace(/^Update requires: /i,''))
                                });
                                console.log(properties[currentAttrName]['update requires']);
                            } else if(latestAttrName === 'description') {
                                properties[currentAttrName]['description-extras'] = [];
                                $(this).find('.itemizedlist').find('li').map(function(){
                                    properties[currentAttrName]['description-extras'].push($(this).text())
                                });

                            } else {
                                properties[currentAttrName][latestAttrName + '-unknown-itemizedlist'] = [];
                                $(this).find('.itemizedlist').find('li').map(function(){
                                    properties[currentAttrName][latestAttrName + '-unknown-itemizedlist'].push($(this).text())
                                });
                            }
                        } else {
                            properties[currentAttrName][latestAttrName + '-unknown-element'] = text;

                        }
                    } else if(currentElementName === 'PRE'){
                        if(isStillaDescription){
                            properties[currentAttrName]['description-example'] = text;

                        } else {
                            properties[currentAttrName][latestAttrName + '-example'] = text;
                        }


                    } else {
                        // here we include post process manual fixes as an alternative to complicated jQuery matchers
                        if(typeName === "AWS::EC2::VPNConnection" && currentAttrName === "CustomerGatewayId" && text == "Replacement"){
                            properties[currentAttrName]["update requires"] = text;
                        } else if(typeName === "AWS::EC2::VPNConnection" && currentAttrName === "VpnGatewayId" && text == "Replacement") {
                            properties[currentAttrName]["update requires"] = text;
                        } else if(typeName === "AWS::EC2::VPNConnection" && text === "Update requires"){
                            // ignore it
                        }
                        else {
                            console.log('Unknwon element-name: ' + currentElementName);
                            properties[currentAttrName]['unknown-element'] = text;
                        }

                    }

                });

            } else {
                throw('ERROR, expecting either DD or DT, got:' + htmlElementName);

            }
        });

        return properties;
    }

    function saveToFile(parsedCFDocFileName, fileContent){
        var deferred = Q.defer();
        var folderName = path.dirname(parsedCFDocFileName);
        if (!fs.existsSync(folderName)){
            console.log('creating directory: ' + folderName);
            fs.mkdirSync(folderName);
        }

        fs.writeFile(parsedCFDocFileName, JSON.stringify(fileContent, null, 4), function(err) {
            if(err) {
                console.log(err);
                deferred.reject(err);
            } else {
                console.log("JSON saved to " + parsedCFDocFileName);
                deferred.resolve(parsedCFDocFileName);
            }
        });
        return deferred.promise;

    }

    function run(parsedCFDocFileName, htmlFiles){
        var result = {};
        var typeSelector = '.topictitle';

        htmlFiles.map(function(htmlFileName){
            var htmlContent = fs.readFileSync(htmlFileName,'utf8');


            var typeName = $(htmlContent).find(typeSelector).text();
            console.log('typeName: ' + typeName);

            result[typeName] = extractProperties(htmlContent, typeName);
        });

        return saveToFile(parsedCFDocFileName, result);

    }


    // Public methods
    return {
        run: run
    }
}());

module.exports = extracter;
