// const firebaseAdmin = require("firebase-admin");
// const asyncWrapper = require("../middleware/asyncWrapper");
// const sendResponse = require("../utils/sendResponse");
// const { StatusCodes } = require("http-status-codes");

// const getAllUsers = asyncWrapper(async (req, res, next) => {
//   const db = firebaseAdmin.database();
//   const usersRef = db.ref("users");
//   const data = await usersRef.once("value");
//   const usersData = data.val();
//   return await sendResponse(res, StatusCodes.OK, "Users Fetched", usersData);
// });

// const getUserByUserKey = asyncWrapper(async (req, res, next) => {
//   const { userKey } = req.body;
//   const db = firebaseAdmin.database();
//   const userRef = db.ref("users").child(userKey);
//   const data = await userRef.once("value");
//   if (!data.exists()) {
//     return await sendResponse(res, StatusCodes.NOT_FOUND, "User Not Fount");
//   }
//   const userData = data.val();
//   return await sendResponse(res, StatusCodes.OK, "User Fetched", userData);
// });

// module.exports = {
//   getUserByUserKey,
//   getAllUsers,
// };
