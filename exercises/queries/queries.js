const Post = require('./post')

const postByTitle =(title) => {
 return  Post.findOne({title:title}).exec()
}

const postsForAuthor = (authorId) => {
    return Post.find({author:authorId})
}

const fullPostById = (id) => {
  return Post.findById(id).populate().exec()
}

const allPostsSlim = (fieldsToSelect) => {
  return Post.find({}).select(fieldsToSelect)
}

const postByContentLength = (maxContentLength, minContentLength) => {
  return Post.find({contentLength:{
    $lt:maxContentLength,
    $gt:minContentLength}
  }).exec()
}

const addSimilarPosts = (postId, similarPosts) => {
   return Post.findByIdAndUpdate(postId,{
     $push:{sigitmilarPosts:{$each:similarPosts}},
    }, {new:true}
   ).exec()
}
module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}
