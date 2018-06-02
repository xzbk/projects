//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputVal: '',
    msgData: []
  },
  //监听input框
  changeImputValue(e){
    //参数e为event对象，可打印查看其包含内容
    this.setData({
      inputVal: e.detail.value
    })
  },
  //添加评论
  addMsg(){
    //取得当前msgData数组，并设置值
    var list=this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //设置值，清空input框
    this.setData({
      msgData: list,
      inputVal: ''
    })
  },
  //删除评论
  delMsg(e){
    //获取索引值
    var index = e.target.dataset.index;
    //获取数据集合
    var list= this.data.msgData;
    //删除数组元素，从index开始，删除一个
    list.splice(index,1);
    this.setData({
      msgData: list
    })
  }
})
