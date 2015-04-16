// A crawler has this parts:
// - fetcher: it fetches all the html document and store them
// - extracter: it parses the html documents and transforms it into a machine readable format
// - generateSchema: it actully generates the cloud formation schema
// - patcher: TODO


"use strict";

// using revealing module pattern
var cloudFormationSchema = (function(){

    var fs = require('fs');
    var path = require('path');

    var fetcher = require('./lib/fetcher');
    var extracter = require('./lib/extracter');
    var generateSchema = require('./lib/generateSchema');

    var urlToCrawl = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html';

    // generated file from the html docs
    var basePath = path.dirname(require.resolve('./base_path'));
    var parsedCFDocFileName = basePath + '/generated_files/parsedCFDoc';

    var CFResourceSchema = basePath + '/generated_files/cloudFormationResources.js';
    
    function crawl(){
        console.log('Crawling from: ' + urlToCrawl);
        fetcher.crawl(urlToCrawl).then(function (htmlFileNames) {
            extracter.run(parsedCFDocFileName, htmlFileNames).then(function (parsedCFDocFileName) {
                generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
            })
        })
    }
    // this method is for developing purposes
    function generateSchemaFromParsedCFDoc(){
        generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
    }
    
    function loadAllCFResources(){
        return require(CFResourceSchema).schema;
    }

    // Public methods
    return {
        crawl: crawl,
        loadAllCFResources: loadAllCFResources,
        generateSchemaFromParsedCFDoc: generateSchemaFromParsedCFDoc
    }

}());

module.exports = cloudFormationSchema;