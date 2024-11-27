function isAuthenticated(req,res,next){
    console.log(req.session);
    if(req.session.user){
        next();
    }else{
        res.redirect("/login")
    }
}

export {isAuthenticated} 