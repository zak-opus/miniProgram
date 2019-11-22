// pages/home/home.js
// 注册一个页面
Page({
  // 1.初始化绑定数据
  data:{
    list:[]
  },
  // 3.监听wxml相关事件
  handleGetUserInfo(event){
    console.log(event)
  },
  // 2.监听生命周期
  onLoad(){
    console.log('页面被加载完成')
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        const data = res.data.data.keywords.list;
        this.setData({
          list: data
        })
      }
    })
  },
  onShow(){
    console.log('页面显示出来')
  },
  onReady(){
    console.log('页面渲染完成')
  },
  onHide(){
    console.log('页面关闭')
  },
  onUnload(){
    console.log('页面销毁')
  },
  // 4.监听其他事件：页面滚动、上拉下拉加载更多
  onPageScroll(obj){
    // console.log(obj)
  },
  onReachBottom(){
    console.log('滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉加载更多')
  }
})