//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: true,
    arr: ['apple','banana','orange'],
    obj: [{name:'app'},{name:'ban'}]
  },
  change(){
    this.setData({
      show: !this.data.show
    })
  }
})
