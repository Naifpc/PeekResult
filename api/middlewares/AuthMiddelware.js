const {verify} = require("jsonwebtoken");

const validateToken = (req, res, next) =>{
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({error: "user not logged in"});

    try{

        const validToken = verify (accessToken, "pLFriwTWOsakqMX")
        req.user = validToken ;
        if(validToken) {
            return next(); //move forward with request 
        }

    }catch(err){
        return res.status(500).json({ error: err });
    }

}

module.exports = {validateToken};