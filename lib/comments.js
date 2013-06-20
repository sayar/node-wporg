'use strict';

module.exports = {
    getCommentCount: function (postId, fn) {
        this.xmlrpc.methodCall('wp.getCommentCount', [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, postId
        ], fn);
    },
    getComment: function (commentId, fn) {
        this.xmlrpc.methodCall('wp.getComment', [
            this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, commentId
        ], fn);
    },
    getComments: function (filter, fn) {
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        if (filter) { args.push(filter); }
        this.xmlrpc.methodCall('wp.getComments', args, fn);
    },
    newComment: function(postId, comment, fn){
        if(postId === undefined || postId === null){
            throw new Error('Cannot add comment without a post id.');
        }
        if(comment === undefined || comment === null){
            throw new Error('Cannot add comment with content object containing parameters.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, postId, comment];
        this.xmlrpc.methodCall('wp.newComment', args, fn);
    },
    editComment: function(commentId, comment, fn){
        if(commentId === undefined || commentId === null){
            throw new Error('Cannot edit comment without a comment id.');
        }
        if(comment === undefined || comment === null){
            throw new Error('Cannot edit comment with content object containing parameters.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, commentId, comment];
        this.xmlrpc.methodCall('wp.editComment', args, fn);
    },
    deleteComment: function(commentId, fn){
        if(commentId === undefined || commentId === null){
            throw new Error('Cannot delete comment without a comment id.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, commentId];
        this.xmlrpc.methodCall('wp.deleteComment', args, fn);
    },
    getCommentStatusList: function(fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        this.xmlrpc.methodCall('wp.getCommentStatusList', args, fn);
    }
};