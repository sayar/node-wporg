var vows = require('vows')
    , assert = require('assert')
    , http = require('http')
    , Client = require('../lib/client')
    , fs = require("fs");

vows.describe('Client').addBatch({
    //////////////////////////////////////////////////////////////////////
    // Test Constructor functionality
    //////////////////////////////////////////////////////////////////////
    'A constructor' : {
        // Test standard Client initialization
        'with url options' : {
            topic: function () {
                var client = new Client({username: "test", password: "test",
                    url: "http://wordpress.org", isSecure: true});
                return client;
            }
            , 'contains the correct default args' : function (topic) {
                assert.deepEqual(topic.defaultArgs, {
                    username: "test",
                    password: "test"});
            }
        }
        // Test passing string URI for options
        , 'with a string URI for options' : {
            topic: function () {
                var client = new Client({username: "test", password: "test",
                    url: "http://wordpress.org", isSecure: true});
                return client.xmlrpc.options;
            }
            , 'parses the string URI into URI fields' : function (topic) {
                assert.strictEqual(topic.host, 'wordpress.org');
                assert.strictEqual(topic.path, '/');
                assert.equal(topic.port, null);
            }
        }
    }
}).export(module);
