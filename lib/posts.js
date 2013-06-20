'use strict';

module.exports = {
    getPost: function(postId, fn) {
        this.xmlrpc.methodCall('wp.getPost', [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, postId
        ], fn);
    },
    getPosts: function(filter, fields, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password
        ];
        if(filter){
            args.push(filter);
        }
        if(fields){
            args.push(fields);
        }
        this.xmlrpc.methodCall('wp.getPosts', args, fn);
    },
    newPost: function(content, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password
        ];
        if(content === undefined || content === null){
            throw new Error('Cannot create post with content object containing parameters.');
        }
        args.push(content);
        this.xmlrpc.methodCall('wp.newPost', args, fn);
    },
    editPost: function(postId, content, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password
        ];
        if(postId === undefined || postId === null){
            throw new Error('Cannot edit post without a post id.');
        }
        args.push(postId);
        if(content === undefined || content === null){
            throw new Error('Cannot edit post with content object containing parameters.');
        }
        args.push(content);
        this.xmlrpc.methodCall('wp.editPost', args, fn);
    },
    deletePost: function(postId, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password
        ];
        if(postId === undefined || postId === null){
            throw new Error('Cannot edit post without a post id.');
        }
        args.push(postId);
        this.xmlrpc.methodCall('wp.deletePost', args, fn);
    },
    getPostType: function(postTypeName, fields, fn) {
        var args = [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password
        ];
        if(postTypeName === undefined || postTypeName === null){
            throw new Error('Cannot get post type without a post type name.');
        }
        args.push(postTypeName);
        if(fields){
            args.push(fields);
        }
        this.xmlrpc.methodCall('wp.getPostType', args, fn);
    },
    getPostTypes: function(filter, fields, fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        if (filter) { args.push(filter); }
        if (fields) { args.push(fields); }
        this.xmlrpc.methodCall('wp.getPostTypes', args, fn);
    },
    getPostFormats: function(filter, fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        if (filter) { args.push(filter); }
        this.xmlrpc.methodCall('wp.getPostFormats', args, fn);
    },
    getPostStatusList: function(fn) {
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        this.xmlrpc.methodCall('wp.getPostStatusList', args, fn);
    }
};