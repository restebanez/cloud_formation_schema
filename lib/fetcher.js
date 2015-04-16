"use strict";

var fs = require('fs'),
    $ = require('jquery')(require("jsdom").jsdom().parentWindow),
    Q = require("q"),
    download = require('./download'); // returns fileName path

var fetcher = (function(){
    var directoryDownloadedFiles = 'downloaded_files',
        rootUrl = '', // assigned in the crawl method
        rootUrlSelector = '#divContent > div.section > div.highlights > ul > li a';

    function getFullPathFileNameFromUrl(url){
        var lastOne = url.split('/').length - 1;
        var fileName = url.split('/')[lastOne];
        return directoryDownloadedFiles + '/' + fileName;
    }

    function makeDownloadedFilesFolderIfNecessary(){
        if (!fs.existsSync(directoryDownloadedFiles)){
            console.log('creating directory: ' + directoryDownloadedFiles);
            fs.mkdirSync(directoryDownloadedFiles);
        }
    }

    function getFile(url){
        var deferred = Q.defer();
        var fullPathFileName = getFullPathFileNameFromUrl(url);

        fs.exists(fullPathFileName, function(exists) {
            if (exists) {
                console.log(fullPathFileName + ' already exists');
                deferred.resolve(fullPathFileName);
            } else {
                download(url, fullPathFileName).then(function(fullPathFileName){
                    deferred.resolve(fullPathFileName);
                })
            }
        });
        return deferred.promise;
    }

    function getFiles(urls){
        console.log('LENGTH:');
        console.log(urls.length);
        return Q.all(urls.map(function(url){
            return getFile(url);
        }))
    }

    function extractLinksToCrawl(fullPathFileName){
        var fileName = fullPathFileName.replace(directoryDownloadedFiles + '/','');
        var fileContent = fs.readFileSync(fullPathFileName,'utf8');

        var deferred = Q.defer();
        var links = $(fileContent).find(rootUrlSelector);

        var fqdnLinks = [];
        console.log('Number of links to crawl: ' + links.length);
        links.each(function(index, link){
            var relativeURL = $(link).attr('href');
            var fullUrl = rootUrl.replace(fileName, relativeURL);
            fqdnLinks.push(fullUrl);
        });

        deferred.resolve(fqdnLinks);
        return deferred.promise;
    }

    function getLinksToCrawl(){
        return getFile(rootUrl).then(extractLinksToCrawl);
    }

    function crawl(urlToCrawl){
        rootUrl = urlToCrawl;
        var deferred = Q.defer();
        makeDownloadedFilesFolderIfNecessary();
        getLinksToCrawl().then(getFiles).then(function(fileNames){
            deferred.resolve(fileNames);
        });
        return deferred.promise;
    }
    return {
        crawl: crawl // it returns the list of fileNames
    }
})();

module.exports = fetcher;