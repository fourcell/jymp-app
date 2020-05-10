"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOrder = exports.deleteShopping = exports.getShopping = exports.appDatails = exports.setShopping = void 0;

var _http = require("../../http");

var setShopping = function setShopping(parm) {
  return (0, _http.post)('/setShopping', parm);
}; //详情页数据获取


exports.setShopping = setShopping;

var appDatails = function appDatails(parm) {
  return (0, _http.get)("/appDatails?id=".concat(parm));
}; //购物车数据获取


exports.appDatails = appDatails;

var getShopping = function getShopping(parm) {
  return (0, _http.get)("/getShopping?userId=".concat(parm));
}; //删除购物车单个数据


exports.getShopping = getShopping;

var deleteShopping = function deleteShopping(userId, skuId) {
  return (0, _http.get)("/deleteShopping?userId=".concat(userId, "&skuId=").concat(skuId));
}; //获取确认订单的数据


exports.deleteShopping = deleteShopping;

var setOrder = function setOrder(parm) {
  return (0, _http.post)('/setOrder', parm);
};

exports.setOrder = setOrder;