App({
  globalData: {
    systemInfo: {},
  },
  /* 生命周期 */
  // 小程序初始化完成时触发，全局只触发一次
  onLaunch(options) {
    this.getSystemInfo();
  },
  // 小程序启动，或从后台进入前台显示时触发
  onShow() {
  },

  getSystemInfo() {
    try {
      this.globalData.systemInfo = wx.getSystemInfoSync();
    } catch (e) {
      wx.navigateBack({
        delta: 2,
      });
      console.error('app.getSystemInfo:fail', e);
    }
  },
  // 小程序从前台进入后台时触发
  onHide() { },
  // 小程序发生脚本错误或 API 调用报错时触发
  onError() { },
  // 小程序要打开的页面不存在时触发
  onPageNotFound() { },
});
