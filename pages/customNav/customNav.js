// pages/customNav/customNav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTab:'home'
  },
  switch(e){
    console.log(e.detail)
    this.setData({
      curTab:e.detail
    });
  }
})