'use strict';

module.exports = {
    getTaxonomy: function(taxonomy, fn){
        if(taxonomy === undefined || taxonomy === null){
            throw new Error('Cannot get taxonomy item without taxonomy parameter.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, taxonomy];
        this.xmlrpc.methodCall('wp.getTaxonomy', args, fn);
    },
    getTaxonomies: function(fn){
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password];
        this.xmlrpc.methodCall('wp.getTaxonomies', args, fn);
    },
    getTerm: function(taxonomy, termId, fn){
        if(taxonomy === undefined || taxonomy === null){
            throw new Error('Cannot get taxonomy term without taxonomy parameter.');
        }
        if(termId === undefined || termId === null){
            throw new Error('Cannot get taxonomy term without term parameter.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, taxonomy, termId];
        this.xmlrpc.methodCall('wp.getTerm', args, fn);
    },
    getTerms: function(taxonomy, filter, fn){
        if(taxonomy === undefined || taxonomy === null){
            throw new Error('Cannot get taxonomy term without taxonomy parameter.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, taxonomy];
        if (filter) {args.push(filter);}
        this.xmlrpc.methodCall('wp.getTerms', args, fn);
    },
    newTerm: function(content, fn){
        if(content === undefined || content === null){
            throw new Error('Cannot create term without content object parameter.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, content];
        this.xmlrpc.methodCall('wp.newTerm', args, fn);
    },
    editTerm: function(termId, content, fn){
        if(termId === undefined || termId === null){
            throw new Error('Cannot edit term without term id parameter.');
        }
        if(content === undefined || content === null){
            throw new Error('Cannot edit term without content object parameter.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, termId, content];
        this.xmlrpc.methodCall('wp.editTerm', args, fn);
    },
    deleteTerm: function(taxonomy, termId, fn){
        if(taxonomy === undefined || taxonomy === null){
            throw new Error('Cannot delete term without taxonomy parameter.');
        }
        if(termId === undefined || termId === null){
            throw new Error('Cannot delete term without term id.');
        }
        var args = [this.defaultArgs.blogId, this.defaultArgs.username,
            this.defaultArgs.password, taxonomy, termId];
        this.xmlrpc.methodCall('wp.deleteTerm', args, fn);
    }
};