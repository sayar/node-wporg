var xmlrpc = require('xmlrpc')
    , _ = require('underscore')
    , check = require('validator').check;

function Client(options){
    // Invokes with new if called without
    if (false === (this instanceof Client)) {
        return new Client(options);
    }

    if(typeof options != "object"){
        throw new Error("Options is not an object");
    }

    ["username", "password", "url"].forEach(function(item){
        if (!options.hasOwnProperty(item) && options[item] instanceof String ){
            throw new Error("Missing constructor parameter in options or is not a string: " + item);
        }
    });
    if (!options.hasOwnProperty("isSecure") && options.isSecure instanceof Boolean){
        throw new Error("Missing constructor parameter in options or is not a string: isSecure");
    }

    check(options.url).notEmpty().isUrl();
    check(options.username).notEmpty();
    check(options.password).notEmpty();

    this.xmlrpc = options.isSecure ? xmlrpc.createSecureClient(options) : xmlrpc.createClient(options);
    this.defaultArgs = {
        username: options.username,
        password: options.password
    };
}

_.extend(Client.prototype, require('./users'));
_.extend(Client.prototype, require('./options'));
_.extend(Client.prototype, require('./posts'));
_.extend(Client.prototype, require('./media'));
_.extend(Client.prototype, require('./taxonomies'));
_.extend(Client.prototype, require('./comments'));

module.exports = Client;
