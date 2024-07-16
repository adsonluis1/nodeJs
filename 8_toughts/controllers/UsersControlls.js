const Users = require('../models/Users')
const Posts = require('../models/Posts')
const bcrypt = require('bcryptjs')

async function checkingEmailExists (email){
    const vEmail = await Users.findAll({where:{email:email}})
    return vEmail.length == 0 ? false : true
}

module.exports = class UsersControlls {    
    static formCreateAccount(req, res){
        let erros = {
            err: false,
            email: false
        } 
        res.render('users/register',{erros})
    }

    static formLoginAccount(req, res){
        let erros = {
            err: false,
            email: false
        }
        res.render('users/login',{erros})
    }

    static async dashbord(req, res){
    const {email,nome} = req.session.account
    const user = {
        email, 
        nome
    }
    const jsonthougths = await Posts.findAll({raw:true,where:{user:user}})
    const thoughts = []
    jsonthougths.map((thought)=>{
        const user = JSON.parse(thought.user)
        thought.user = user
        thoughts.push(thought)
    })
    res.render('users/dashbord', {thoughts})
    }

    static async loginAccount(req, res){
        const {email, senha} = req.body
        const erros = {
            senha:false,
            email:false
        }

        let account = await Users.findAll({raw:true,where:{email:email}})
        // check exist account
        account = account[0]
        if(account.length == 0){
            erros.email = true
            res.render('users/login',{erros})
            return
        }
        // check "senha" correct
        const senhaMatch = bcrypt.compareSync(senha, account.senha)
        if(!senhaMatch){
            erros.senha = true
            res.render('users/login',{erros})
            return
        }
        
        
        req.session.account = account
        req.session.save(()=>{
            res.redirect('/')
        })
    }

    static logoutAccount (req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(`Not logouted Account: ${err}`)
                return
            }
            console.log('Logouted Account')
            res.redirect('/')
        })
        
        
    }

    static async createAccount(req, res){
        let erros = {
            err: false,
            email: false
        } 
        let done = false
        const {email,nome,senha,senhaConfirme} = req.body
        if(!/^\w+@\w+.\w+(.[a-z]+)?$/.test(email)){
            erros.err = true
        }
        if(senha != senhaConfirme){
            erros.err = true
        }
        if(erros.err == true){
            res.render('users/register',{erros})
            return
        }
        // verificação de email
        if(await checkingEmailExists(email)){
            erros.email= true
            res.render('users/register',{erros})
            return
        }

        // fortificando a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync(senha, salt)

        // dps da verificação
        const newAccount = {
            email,
            nome,
            senha:hashedSenha
        }
        Users.create(newAccount)
        erros.err = false
        done = true
        res.render('users/register',{erros,done})
    }
}