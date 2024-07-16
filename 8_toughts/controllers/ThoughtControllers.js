const Posts = require('../models/Posts')

module.exports = class ThoughtControllers {
    static createFormThought(req, res){
        res.render('thought/createThought')
    }
    
    static async editFormThought (req, res){
        const {id} = req.params
        const {email,nome} = req.session.account
        
        const thought = await Posts.findOne({raw:true,where:{id:id}})
        const user = JSON.parse(thought.user) 

        if(email != user.email){
            res.redirect('/user/dashbord')
            return
        }



        res.render('thought/editThought',{thought})
    }

    static async addThought (req, res){
        const {title} = req.body
        const {email, nome} = req.session.account
        
        const user = {
            email,
            nome
        }
        
        await Posts.create({title, user})
        res.redirect('/')
    }

    static async deleteThought (req, res){
        const {id} = req.params

        await Posts.destroy({where:{id:id}})
        res.redirect('/user/dashbord')
    }

    static async editThought (req, res){
        const {title, id} = req.body
        const {email, nome} = req.session.account
        const user = {
            email, 
            nome
        }

        const thought = {
            title,
            id,
            user
        }

        await Posts.update(thought, {where:{id:id}})
        res.redirect('/')
    }
}