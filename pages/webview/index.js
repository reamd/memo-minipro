Page({
  data: {
    url: '',
  },

  onLoad(opt) {
    const { url, share } = opt;
    // 屏蔽分享按钮
    wx.hideShareMenu();
    if (String(share) === 'true') {
      wx.showShareMenu();
    }

    this.setData({
      url: decodeURIComponent(url),
    });
  }
})