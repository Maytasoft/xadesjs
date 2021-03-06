console.warn("Runing: NodeJS");

var fs = require("fs");
var assert = require("assert");
var select = require("xpath.js");
var DOMParser = require("xmldom-alpha").DOMParser;
var XMLSerializer = require("xmldom-alpha").XMLSerializer;
xadesjs = require("../../built/xades.js");

var WebCrypto = require("node-webcrypto-ossl");
xadesjs.Application.setEngine("OpenSSL", new WebCrypto());
console.log("WebCrypto:", xadesjs.Application.crypto.name);

var readXml = function(path, cb) {
    fs.readFile(path, function(e, buf) {
        if (e)
            assert.equal(false, true, "Error on XML reading " + path);
        else {
            var doc = new DOMParser().parseFromString(buf.toString(), "application/xml");
            cb(doc);
        }
    })
}

module.exports = {
    select: select,
    xadesjs: xadesjs,
    DOMParser: DOMParser,
    XMLSerializer: XMLSerializer,
    readXml: readXml,
    assert: assert
}