var _ = require('underscore');

module.exports = {
    getUsersBlogs: function (fn) {
        this.xmlrpc.methodCall('wp.getUsersBlogs', [
            this.defaultArgs.username, this.defaultArgs.password
        ], fn);
    },
    getUser: function (userId, fields, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, userId
        ];
        if(fields){
            args.push(fields);
        }
        this.xmlrpc.methodCall('wp.getUser', args, fn);
    },
    getUsers: function(filter, fields, fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        if (filter) { args.push(filter); }
        if (fields) { args.push(fields); }
        this.xmlrpc.methodCall('wp.getUsers', args, fn);
    },
    getProfile: function(fields, fn) {
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        this.xmlrpc.methodCall('wp.getProfile', args, fn);
    },
    editProfile: function(content, fn){
        if(content === undefined || content === null){
            throw new Error("Cannot edit profile with content object containing parameters.");
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, content];
        this.xmlrpc.methodCall('wp.editProfile', args, fn);
    },
    getAuthors: function(fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        this.xmlrpc.methodCall('wp.getAuthors', args, fn);
    }
};