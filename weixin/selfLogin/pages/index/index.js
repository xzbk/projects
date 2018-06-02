//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },
  username: function(e){
    var uname=e.detail.value
    this.setData({
      username: uname
    })
    console.log(uname)
  },
  password: function(e){
    var pwd = e.detail.value;
    this.setData({
      password: pwd
    })
    console.log(pwd)
  },
  commit: function(){
    wx.request({
      url: 'http://192.108.1.102:8080/agriculture/showPdtDetail?pid=2',
      success: function(res){
          console.log(res.data)
      }
    })
  }
})
