const firebaseAdmin = require("firebase-admin");
const asyncWrapper = require("../middleware/asyncWrapper");
const sendResponse = require("../utils/sendResponse");
const { StatusCodes } = require("http-status-codes");

const getAllOrders = asyncWrapper(async (req, res, next) => {
  const { farmerId } = req.params;
  const db = firebaseAdmin.database();
  const ordersRef = db.ref("Orders");
  const data = await ordersRef.once("value");
  const ordersData = data.val();
  const customData = Object.values(ordersData)
    .filter((order) => order.farmerId === farmerId)
    .map((order) => {
      return order.products.map((prodData) => {
        return {
          createdAt: order.createdAt,
          cartQuantity: prodData.quantitynumber,
          name: prodData.name,
          price: prodData.quantitynumber * +prodData.price,
        };
      });
    })
    .flat();
  return await sendResponse(res, StatusCodes.OK, customData);
});

module.exports = { getAllOrders };
