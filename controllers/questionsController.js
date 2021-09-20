let Question = require('../models/questionSchema');
let Option = require('../models/optionsSchema');

module.exports.create = async (req, res) => {
  try {
    let question = await Question.create({
      content: req.body.content,
      options: [],
    });

    //api response
    return res.status(200).json({
      question: question,
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({
      message: 'Error while creating question',
    });
  }
};

//get question via id
module.exports.getQuestion = async (req, res) => {
  try {
    let question = await Question.findById(req.params.id);
    console.log(question);
    if (question == null) {
      return res.status(422).json({
        message: 'Question doesnt exist',
      });
    }
    return res.status(200).json({
      message: 'Here is your question',
      question: question,
    });
  } catch (error) {
    return res.status(422).json({
      message: 'Error while fetching question',
    });
  }
};

//delete question action
module.exports.deleteQuestion = async (req, res) => {
  try {
    let question = await Question.findById(req.params.id);
    // console.log(question);
    if (question == null) {
      return res.status(422).json({
        message: 'Question already deleted',
      });
    }
    // // delete all options from question
    await Option.deleteMany({ question: question.id });
    await question.remove();
    return res.status(200).json({
      message: 'Question deleted',
    });
  } catch (error) {
    return res.status(422).json({
      message: 'Error while deleting question',
    });
  }
};

// create option

module.exports.questionOptionsCreate = async (req, res) => {
  try {
    let question = await Question.findById(req.params.id);
    //get options array of question.
    let optionsArray = question.options;
    //create option
    let option = await Option.create({
      content: req.body.content,
      question: question.id,
      vote: 0,
    });
    //create link to vote field
    let link_to_vote = `/options/${option.id}/add_vote`;

    // add linktovote to option
    await option.updateOne({
      link_to_vote: link_to_vote,
    });
    await option.save();
    //push option inside array...
    await optionsArray.push(option);
    question.save();
    return res.status(200).json({
      option,
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({
      message: 'Error while deleting question',
      error: error,
    });
  }
};
