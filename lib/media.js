'use strict';

module.exports = {
    getMediaItem: function(attachmentId, fn){
        if(attachmentId === undefined || attachmentId === null){
            throw new Error('Cannot get media item without attachment ID.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, attachmentId];
        this.xmlrpc.methodCall('wp.getMediaItem', args, fn);
    },
    getMediaLibrary: function (filter, fn) {
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        if (filter) { args.push(filter); }
        this.xmlrpc.methodCall('wp.getMediaLibrary', args, fn);
    },
    uploadFile: function(data, fn){
        if(data === undefined || data === null){
            throw new Error('Cannot upload file without the data');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, data];
        this.xmlrpc.methodCall('wp.uploadFile', args, fn);
    }
};