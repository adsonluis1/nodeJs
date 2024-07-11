const Users = require('../models/Users')

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

    static async loginAccount(req, res){
        const {email, senha} = req.body
        const erros = {
            senha:false,
            email:false
        }

        console.log('foi')
        const account = await Users.findAll({raw:true,where:{email:email}})
        // check exist account
        if(account.length == 0){
            erros.email = true
            res.render('users/login',{erros})
            return
        }
        // check "senha" correct
        if(account[0].senha != senha){
            erros.senha = true
            res.render('users/login',{erros})
            return
        }

        
        console.log(account)
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

        // dps da verificação
        const newCount = {
            email,
            nome,
            senha
        }
        Users.create(newCount)
        erros.err = false
        done = true
        res.render('users/register',{erros,done})
    }
}