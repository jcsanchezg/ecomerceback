const User = require("../models/users"); //model allows generate o modify database users
const bcrypts = require ('bcryptjs');
const { response } = require("express");
const jwt = require ('jsonwebtoken');

const getUser = async (request, response) => {
  try {
    const users = await User.find({});
    response.json({ users });
  } catch (error) {
    response
      .status(500)
      .json({ message: "there is an error getting data from db" });
  }
};

//create user and need with jwt
const createUser = async (request, response) => {
  const { email, password } = request.body; //get this data from request
  //generate ramdom string to use on password
  const salt = await bcrypts.genSalt(5);
  const hashedPassword = await bcrypts.hash(password,salt);

  try {
    //create a user with encryp pass
    const newUser = await User.create({ email, password : hashedPassword });
    const payload = {user:{id:newUser._id}}
    // response.json(newUser);

    // sing jwt
    jwt.sign(payload,process.env.SECRET,{expiresIn:360000},
      (error,token)=>{
        // callback if is an error return token
        if(error) throw error
        response.json({token})
      })
  } catch (error) {
    response.status(400).json({
      message: error,
    });
  }
};

//login
const loginUser = async (request, response)=>{
  const {email, password} = request.body;

  try{
    let foundUser = await User.findOne({email:email}) //search for user
    if(!foundUser){
      // if not user send an error
      return response.status(400).json({message:'user not exist'});
    }
    // if all is ok evaluate that pass is same that on db
    const passOk = await bcrypts.compare(password, foundUser.password);
    // if pass is wrong response a message
    if(!passOk){
      return await response.status(400).json({message:"passdord incorrect "+foundUser.password+" "+password})
    }
    // if all ok genereate webtoken
    // data for jwt
    const payload = {
      user:{id:foundUser.id}
    }
    // firma del jwt
    if(email && passOk){
      jwt.sign(payload,process.env.SECRET, {expiresIn: 360000}, (error, token) => {
        if (error) throw error
        response.json ({token})
      })
    } else {response.json( {message:'got an error'},error ) }
  } catch (error) { 
    response.json( {message:'got an error ', error} )
  }
}

// verify user
const verifyUser = async(resquest,response) => {
  try {
    // configure when user is on db return data without pass
    const user = await User.findById(request.user.id).select('-password');
    response.json({user})
  } catch (error){
    // if we got an error message
    response.status(500).json({
      message:'there is an error on verify token',
      error
    })
  }
}

//update
const updateUser = async (request, response) => {
  const { id, username, email, password } = request.body;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true }
    );
    response.json(updateUser);
  } catch (error) {
    response.status(500).json({
      message: "here is an error updating user",
    });
  }
};

//delete
const deleteUsers = async (request, response) => {
  const { id } = request.body;

  try {
    const deleteuser = await User.findByIdAndDelete({ _id: id });
    response.json(deleteuser);
  } catch (error) {
    response.status(500).json({
      message: "there is an error deleting user",
    });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUsers, loginUser,verifyUser };
