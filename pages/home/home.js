// pages/home/home.js
Page({
  data:{
    name:'world',
    age:18,
    students:[
      { id: 1, name: 'aa', age: 11 },
      { id: 2, name: 'bb', age: 12 }
    ],
    counter:0
  },
  btn1(){
    //1. 错误做法，数据改变但是不会自动更新界面，不像vue的自动刷新用法
    // this.data.counter += 1,
    // console.log(this.data.counter)
    // 2.this.setData()内置改变data数据方法,大小写要准确
    this.setData({
      counter:this.data.counter + 1
    })
  },
  btn2(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  }
})