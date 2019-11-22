// 注册一个小程序
App({
  onLaunch: function () {
    // console.log('初始化完成')
  },
  onShow: function (options) {
    console.log(options)
    // 生命周期做什么 1.判断小程序的进入场景
    switch(options.scene){
      case 1001:
      // console.log('通过1001')
      break;
    }
  },
  onHide: function () {
    // console.log('关闭了')
  },
  onError: function (msg) {
    // console.log('发生了错误'+msg)
  }
})
