module.exports.checkAuth = function (req, res, next) {
    const account = req.session.account
    if (!account || account == undefined) {
      res.redirect('/user/login')
      return
    }
    
    next()
  }