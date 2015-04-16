"use strict";

// using revealing module pattern
var generateSchema = (function(){
    var fs = require('fs');
    var _ = require('lodash');


    // generate an array of array which items are only "type" == "Strings" &&
    // transform it to valid schema
    // test it with

    function extractAttrs(resourceItem){
        return _.mapValues(resourceItem, function(attrItem){
           return _.pick(attrItem, ['title','description', 'type']);
        });
    }

    function transformAttrsType(resourceItem){
        return _.mapValues(resourceItem, function(attrItem, attrName){
            var text = attrItem["type"];
            console.log(text);
            if(/A list of strings/i.test(text)){
                attrItem["type"] = 'array';
                attrItem["items"] = { "type": "string" };
            } else if(/Boolean/i.test(text)){
                attrItem["type"] = 'boolean';
            } else if(/Number/i.test(text)){
                attrItem["type"] = 'integer';
            } else if(/String/i.test(text)){
                attrItem["type"] = 'string';
            } else {
                console.log('--' + attrName + ' Type no match: ' + text);
            }
            return attrItem;
        });
    }

    function getRequiredAttrs(resourceItem){
        var required = [];
        _.mapValues(resourceItem, function(attrItem, attrName){
            if(/^yes$/i.test(attrItem["required"])){
                required.push(attrName);
            }
        });
        return required;
    }

    function makeJsonSchema(resourceItem, resourceName){
        var required = getRequiredAttrs(resourceItem);
        var properties = extractAttrs(resourceItem);
        properties = transformAttrsType(properties);
        //console.log(properties);
        return {

            "properties": {
                "Type": {
                    "enum": [resourceName]
                },
                "Properties": {
                    "title": ' ' + resourceName,
                    "type": "object",
                    "properties": properties,
                    "required": required
                }
            },
            "required": [
                "Properties"
            ]
        }

    }

    function filterByAttributeType(attrItem){
        if( attrItem["type"] === "String" ||
    //        attrItem["type"] === "A list of strings" ||
            attrItem["type"] === "Boolean" ||
            attrItem["type"] === "Number"
        ){
            return attrItem;
        }
    }

    function filterByAttributeRequired(attrItem){
        if(/^(yes|no)$/i.test(attrItem["required"])){
            return attrItem;
        }
    }

    function filterResource(resourceItem, resourceName){
        var filteredResourceItem = _.pick(resourceItem, filterByAttributeType);
        filteredResourceItem = _.pick(filteredResourceItem, filterByAttributeRequired);

        return makeJsonSchema(filteredResourceItem, resourceName);
    }

    function getResourcesTypes(parsedCFDocFileName){
        var cfDoc = JSON.parse(fs.readFileSync(parsedCFDocFileName,'utf8'));
        return _.mapValues(cfDoc, filterResource);
    }

    function generateSchema(parsedCFDocFileName){
        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "Resource",
            "description": "Cloudformation template resource",
            "properties": {
                "Properties": {
                    "type": "object"
                },
                "Type": {
                    "type": "string"
                }
            },
            "required": [
                "Type"
            ],
            "type": "object",
            "definitions": {
                "resource_types": getResourcesTypes(parsedCFDocFileName)
            }
        }
    }

    function writeSchema(parsedCFDocFileName, outputFilename){
        var fileContent = "var schema =\n";
        fileContent += JSON.stringify(generateSchema(parsedCFDocFileName), null, 4);
        fileContent += ";\n";
        fileContent += "exports.schema = schema;\n";
        fs.writeFile(outputFilename, fileContent, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        })
    }

    // Public methods
    return {
        writeSchema: writeSchema
    }
}());

module.exports = generateSchema;
