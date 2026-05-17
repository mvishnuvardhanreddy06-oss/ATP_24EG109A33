
import exp from "express";
import  {UserModel}  from "../models/usermodel.js"
import  {ArticleModel}  from "../models/articalmodel.js"
import { verifyToken } from "../middlewares/verifiredToken.js"

export const adminApp = exp.Router();

// Get dashboard stats
adminApp.get("/dashboard-stats", verifyToken("ADMIN"), async (req, res) => {
  try {
    const totalUsers = await UserModel.countDocuments({ role: "USER" });
    const totalAuthors = await UserModel.countDocuments({ role: "AUTHOR" });
    const totalArticles = await ArticleModel.countDocuments();

    res.status(200).json({
      message: "stats",
      payload: { totalUsers, totalAuthors, totalArticles },
    });
  } catch (err) {
    res.status(500).json({ message: "error occurred", error: err.message });
  }
});

// Get all users and authors
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    const users = await UserModel.find({ role: { $ne: "ADMIN" } }, { password: 0 });
    res.status(200).json({ message: "users", payload: users });
  } catch (err) {
    res.status(500).json({ message: "error occurred", error: err.message });
  }
});

// Get all articles (for admin management)
adminApp.get("/all-articles", verifyToken("ADMIN"), async (req, res) => {
  try {
    const articles = await ArticleModel.find().populate("author", "email firstName lastName");
    res.status(200).json({ message: "all articles", payload: articles });
  } catch (err) {
    res.status(500).json({ message: "error occurred", error: err.message });
  }
});

// Block/Unblock user or author
adminApp.patch("/user-status", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId, isUserActive } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(userId, { isUserActive }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User status updated", payload: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "error occurred", error: err.message });
  }
});

// Block/Unblock article
adminApp.patch("/article-status", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId, isArticleActive } = req.body;
    const updatedArticle = await ArticleModel.findByIdAndUpdate(articleId, { isArticleActive }, { new: true }).populate(
      "author",
      "email firstName lastName",
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article status updated", payload: updatedArticle });
  } catch (err) {
    res.status(500).json({ message: "error occurred", error: err.message });
  }
});
