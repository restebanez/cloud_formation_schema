// A crawler has this parts:
// - fetcher: it fetches all the html document and store them
// - extracter: it parses the html documents and transforms it into a machine readable format
// - generateSchema: it actully generates the cloud formation schema
// - patcher: TODO


"use strict";

// using revealing module pattern
var cloudFormationSchema = (function(){

    var fs = require('fs');

    var fetcher = require('./lib/fetcher');
    var extracter = require('./lib/extracter');
    var generateSchema = require('./lib/generateSchema');

    var urlToCrawl = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html';

    // generated file from the html docs
    var parsedCFDocFileName = './generated_files/parsedCFDoc.json';

    //var CFResourceSchema = '../bsite/js/build/json-form-viewer-cf/cf-schemas/generatedResource.js';
    var CFResourceSchema = './generated_files/cloudFormationResources.js';


    function crawl(){
        if (!fs.existsSync(parsedCFDocFileName)) {
            console.log('Crawling from: ' + urlToCrawl);
            fetcher.crawl(urlToCrawl).then(function (htmlFileNames) {
                extracter.run(parsedCFDocFileName, htmlFileNames).then(function (parsedCFDocFileName) {
                    generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
                })
            })
        }
    }
    // this method is for developing purposes
    function generateSchemaFromParsedCFDoc(){
        generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
    }
    
    function loadCFSchema(){
        return require(CFResourceSchema);
    }

    // Public methods
    return {
        crawl: crawl,
        loadCFSchema: loadCFSchema,
        generateSchemaFromParsedCFDoc: generateSchemaFromParsedCFDoc
    }

}());

module.exports = cloudFormationSchema;