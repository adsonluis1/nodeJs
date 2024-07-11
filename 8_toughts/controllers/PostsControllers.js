const Posts = require('../models/Posts')

module.exports = class PostsControllers {
    static async showPosts(req, res){
        const posts = await Posts.findAll({raw:true})
        
        res.render('showPosts',{posts})
    }


}