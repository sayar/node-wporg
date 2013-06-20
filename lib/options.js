'use strict';

module.exports = {
    getOptions: function(options, fn){
        if(options === undefined || options === null){
            throw new Error('Cannot get options item without options specification.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, options];
        this.xmlrpc.methodCall('wp.getOptions', args, fn);
    },
    setOptions: function(options, fn){
        if(options === undefined || options === null){
            throw new Error('Cannot set options item without options specification.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, options];
        this.xmlrpc.methodCall('wp.setOptions', args, fn);
    }
};