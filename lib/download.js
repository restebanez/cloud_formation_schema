'use strict';

var fs = require('fs'),
    https = require('https'),
    Q = require('q');

function download(url, filepath) {
    var fileStream = fs.createWriteStream(filepath),
        deferred = Q.defer();

    fileStream.on('open', function () {
        https.get(url, function (res) {
            res.on('error', function (err) {
                deferred.reject(err);
            });

            res.pipe(fileStream);
        });
    }).on('error', function (err) {
        deferred.reject(err);
    }).on('finish', function () {
        deferred.resolve(filepath);
    });

    return deferred.promise;
}

module.exports = download;