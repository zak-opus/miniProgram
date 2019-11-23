// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[1,2,3]
    }
  },
  // 接收页面传递的样式
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // console.log(event)
      const index = event.currentTarget.dataset.index;
      const title = event.currentTarget.dataset.title;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("itemclick",{index:index,title:title})
    }
  }
})
