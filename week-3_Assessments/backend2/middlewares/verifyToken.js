import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies.token
    //if token is not there
    if(!token)
        return res.status(401).json({message:"plz login"})
    // if token is existed
    try{
    const decodedtoken=verify(token,process.env.SECREATE_KEY)
    //add decoded user detais to req object
    req.user=decodedtoken
    next()
}catch(err){
    res.status(401).json({message:"session expired..plz login again"})
}

}