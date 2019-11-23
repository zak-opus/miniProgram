// pages/home/home.js
Page({
  data:{
    imagePath:'',
    isTrue:true,
    list:[
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
  },
  handleChooseAlbum:function(){
    wx.chooseImage({
      success: (res)=>{
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
      }
    })
  },
  aa(){
    console.log('加载了一张')
  }
})