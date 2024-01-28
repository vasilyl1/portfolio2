
const { Comment } = require('../models/Comment');

module.exports = {

    // Create a comment
  createComment(req, res) {
    Comment.create(req.body) 
      .then((comment) => res.json(comment))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

};