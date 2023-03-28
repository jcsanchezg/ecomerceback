const jwt = require('jsonwebtoken')

module.exports = (request,response,next) => {
    //extract token comes on request
    const token = request.header('Authorization')

    //if not token header, return error
    if(!token){
        return response.status(401).json({
            message:"there is not token, unauthorized"
        })
    }
    
    try {
        //confirm token using jwt libary
        const openToken=jwt.verify(token,process.env.SECRET)

        //if all goes ok, add to request new property with uncypher token
        request.user=openToken.user;

        //next when is invoked correctly goes next function
        next()
    } catch(error){
        response.json({
            message:"there is an error with token auth",
            error
        })
    }
}