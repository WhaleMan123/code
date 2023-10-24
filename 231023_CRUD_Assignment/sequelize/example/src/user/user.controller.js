const userService = require("./user.service");

exports.create = async (req, res, next) => {
  try {
    const signupDTO = req.body; // DTO
    const userEntity = {
      id: signupDTO.userid,
      pw: signupDTO.userpw,
      name: signupDTO.username,
    };
    const response = await userService.postSignup(userEntity);
    res.status(200).json(response);
    console.log("UserController create Success");
  } catch (error) {
    console.log("UserController create Error : ", error.message);
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // console.log(userId);
    const response = await userService.getProfile(userId);
    res.status(200).json(response);
    console.log("UserController findOne Success");
  } catch (error) {
    console.log("UserController findOne Error : ", error.message);
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const response = await userService.getUserList();
    res.status(200).json(response);
    console.log("UserController findAll Success");
  } catch (error) {
    console.log("UserController findAll Error : ", error.message);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // console.log(userId);
    const userModifyDTO = req.body; // DTO
    const userModifyEntity = {
      // userid는 변경 불가하다고 가정한다!
      pw: userModifyDTO.userpw,
      name: userModifyDTO.username,
    };
    const response = await userService.putProfile(userId, userModifyEntity);
    res.status(200).json(response);
    console.log("UserController update Success");
  } catch (error) {
    console.log("UserController update Error : ", error.message);
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const response = await userService.deleteUser(userId);
    res.status(200).json(response);
    console.log("UserController delete Success");
  } catch (error) {
    console.log("UserController delete Error : ", error.message);
    next(error);
  }
};
