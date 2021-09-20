const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
    vote: {
      type: Number,
      default: 0,
    },
    link_to_vote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Option = mongoose.model('option', optionSchema);
module.exports = Option;
