import exp from 'express'
export const userApp=exp.Router()
import { verifyToken } from '../middlewares/verifiredToken.js'
import { ArticleModel } from '../models/articalmodel.js'
//read articles of all authors
userApp.get('/articles',verifyToken("USER"),async(req,res)=>{
    //read articles
    const articlesList=await ArticleModel.find({isArticleActive:true})
    //send res
    res.status(200).json({message:"articles",payload:articlesList})
})
//add comments to an article
userApp.put('/articles',verifyToken("USER"),async(req,res)=>{
    //get bodt from req
    const {articleId,comment}=req.body
    // check article
    const articleObj=await ArticleModel.findOne({_id:articleId,isArticleActive:true}).populate("comments.user");
    //if article not found
    if(!articleObj)
        return res.status(404).json({message:"article not found"})
    //get user ID
    const userId=req.user?.id
    //add comment to comment array of articleDocument
    articleObj.comments.push({user:userId,comment:comment})
    //save the document
    await articleObj.save()
    //send res
    res.status(200).json({message:"comment added",payload:articleObj})
})