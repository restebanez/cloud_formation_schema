// A crawler has this parts:
// - fetcher: it fetches all the html document and store them
// - extracter: it parses the html documents and transforms it into a machine readable format
// - generateSchema: it actully generates the cloud formation schema
// - patcher: TODO


"use strict";



// using revealing module pattern
if (typeof window === 'undefined') {
    // running within node.js
    var cloudFormationSchema = (function () {

        var fs = require('fs');
        var path = require('path');

        var fetcher = require('./lib/fetcher');
        var extracter = require('./lib/extracter');
        var generateSchema = require('./lib/generateSchema');

        var search = require('./lib/search');

        var urlToCrawl = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html';

        // generated file from the html docs
        var basePath = path.dirname(require.resolve('./base_path'));
        var parsedCFDocFileName = basePath + '/generated_files/parsedCFDoc';

        var CFResourceSchema = basePath + '/generated_files/cloudFormationResources.js';

        function throwIfresourceSchemaDoesNotExist() {
            if (!fs.existsSync(CFResourceSchema)) {
                throw(CFResourceSchema + " file doesn't exist. crawl() it first")
            }
        }

        function crawl() {
            console.log('Crawling from: ' + urlToCrawl);
            fetcher.crawl(urlToCrawl).then(function (htmlFileNames) {
                extracter.run(parsedCFDocFileName, htmlFileNames).then(function (parsedCFDocFileName) {
                    generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
                })
            })
        }

        // this method is for developing purposes
        function generateSchemaFromParsedCFDoc() {
            generateSchema.writeSchema(parsedCFDocFileName, CFResourceSchema);
        }

        function loadSchemaResources() {
            throwIfresourceSchemaDoesNotExist();
            return require(CFResourceSchema).schema;
        }

        function loadResourcesSchema() {
            throwIfresourceSchemaDoesNotExist();
            return require('./static_schema/cf_schema').schema;

        }

        function searchResource(awsResource) {
            throwIfresourceSchemaDoesNotExist();
            var resourcesSchema = require(CFResourceSchema).schema;
            var getSchemaResourcebyAwsType = search.getSchemaResourcebyAwsType;
            return getSchemaResourcebyAwsType(resourcesSchema, awsResource);
        }

        // Public methods
        return {
            crawl: crawl,
            loadResourcesSchema: loadResourcesSchema,
            loadSchema: loadSchemaResources,
            generateSchemaFromParsedCFDoc: generateSchemaFromParsedCFDoc,
            searchResource: searchResource
        }

    }());

} else {
    // running in the browser
    var cloudFormationSchema = (function () {
        var search = require('./lib/search');


        function searchResource(awsResource) {
            var resourcesSchema = require('./generated_files/cloudFormationResources').schema;
            var getSchemaResourcebyAwsType = search.getSchemaResourcebyAwsType;
            return getSchemaResourcebyAwsType(resourcesSchema, awsResource);
        }
        // Public methods
        return {
            searchResource: searchResource
        }

    }());

}
module.exports = cloudFormationSchema;
