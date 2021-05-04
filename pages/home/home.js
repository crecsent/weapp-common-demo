Page({
  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '请输入范围在0~9内的整数',
    num:'',
    list:[]
  },
  copyToClipboard(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: (res) => {
        wx.showToast({
          title: '已复制到剪贴板',
          duration: 500
        });
      }
    });
  },
  toPage(e){
    wx.navigateTo({
      url: '/pages/customNav/customNav',
    });
  },
  renderList(e){
    let list = [];
    let num = parseInt(this.data.num);
    for(let i=1;i<=num;i++){
      list.push({id:i,text:`第${i}项`});
    }
    this.setData({
      list:list
    });
  },
  clickItem(e){
    let {id} = e.currentTarget.dataset;
    wx.showToast({
      title: `点击了第${id}项`,
      icon: 'none',
      duration: 500
    });
  }
})