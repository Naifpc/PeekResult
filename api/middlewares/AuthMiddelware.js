const {verify} = require("jsonwebtoken");

const validateToken = (req, res, next) =>{
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({error: "user not logged in"});

    try{

        const validToken = verify (accessToken, "pLFriwTWOsakqMX")

        if(validToken) {
            return next();
        }

    }catch(err){
        return res.status(500).json({ error: err });
    }

}

module.exports = {validateToken};