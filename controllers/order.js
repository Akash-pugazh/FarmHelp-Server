const firebaseAdmin = require("firebase-admin");
const asyncWrapper = require("../middleware/asyncWrapper");
const sendResponse = require("../utils/sendResponse");
const { StatusCodes } = require("http-status-codes");

const getAllOrders = asyncWrapper(async (req, res, next) => {
  const db = firebaseAdmin.database();
  const ordersRef = db.ref("order");
  const data = await ordersRef.once("value");
  const ordersData = data.val();
  return await sendResponse(res, StatusCodes.OK, "Orders Fetched", ordersData);
});

module.exports = { getAllOrders };
