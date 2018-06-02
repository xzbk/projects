// pages/news/news.js
const app = getApp();
var com = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始数据'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(com);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changeData: function(){
    this.setData({
      msg: app.a
    })
  },
  state: function(){
    this.setData({
      msg: com.hello('me')
    });
  },
  state1: function () {
    this.setData({
      msg: com.back('you')
    });
  }
})