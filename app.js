// app.js
App({
  onLaunch() {
    //加载字体
    wx.loadFontFace({
      family: 'HYXinRenWenSongW',
      global: true,
      source: 'https://levent.obs.cn-east-3.myhuaweicloud.com/HYXinRenWenSongW.ttf'
    })
  },
  globalData: {
    userInfo: null
  }
})
