const { User: UserRepository, User } = require("../entity");

/*
    signupDTO {
        username:'',
        userid:'',
        userpw:''
    }
*/
exports.postSignup = async (userEntity) => {
  try {
    const result = await UserRepository.create(userEntity);
    return result;
  } catch (error) {
    console.log("UserService  postSignup Error : ", error.message);
  }
};

exports.getProfile = async (userId) => {
  try {
    const result = await UserRepository.findOne({
      raw: true,
      where: {
        id: userId,
      },
    });
    return result;
  } catch (error) {
    console.log("UserService getProfile Error : ", error.message);
  }
};

exports.getUserList = async () => {
  try {
    const result = await UserRepository.findAll({
      raw: true,
    });
    return result;
  } catch (error) {
    console.log("UserService getUserList Error : ", error.message);
  }
};

exports.putProfile = async (userId, userModifyEntity) => {
  try {
    const updatedRows = await UserRepository.update(
      {
        pw: userModifyEntity.pw,
        name: userModifyEntity.name,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    // console.log(updatedRows);

    if (updatedRows > 0) {
      return {
        message: `User with id ${userId} was successfully modified.`,
      };
    } else {
      return { message: `No user found with id ${userId}.` };
    }
  } catch (error) {
    console.log("UserService putProfile Error : ", error.message);
  }
};

exports.deleteUser = async (userId) => {
  try {
    const deletedRows = await UserRepository.destroy({
      where: {
        id: userId,
      },
    });

    if (deletedRows > 0) {
      return { message: `User with id ${userId} was successfully deleted.` };
    } else {
      return { message: `No user found with id ${userId}.` };
    }
  } catch (error) {
    console.log("UserService getUserList Error : ", error.message);
  }
};
