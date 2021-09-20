module.exports.create = (req, res) => {
  return res.status(200).json({
    message: 'question create',
  });
};
//get question via id
module.exports.getQuestion = (req, res) => {
  return res.status(200).json({
    message: 'question get',
  });
};

module.exports.questionOptionsCreate = (req, res) => {
  return res.status(200).json({
    message: 'option create',
  });
};

module.exports.deleteQuestion = (req, res) => {
  return res.status(200).json({
    messageL: 'Question deleted',
  });
};
