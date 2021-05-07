import config from '../../utils/config';

Page({
  data: {
    color: '#000',
    background: '#ffffff',
    list: []
  },

  onLoad() {
    wx.showShareMenu();
    console.warn(`【版本号】${config.VERSION}`);
    this.getJson();
  },

  getJson() {
    const ctx = this;
    wx.request({
      url: config.API_WB_TOP_FEED_RSS,
      success (res) {
        const {items} = res.data;
        if (items.length) {
          ctx.setData({
            list: items,
          });
        }
      }
    })
  }
})