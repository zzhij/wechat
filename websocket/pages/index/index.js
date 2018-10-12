//index.js
//获取应用实例
const app = getApp()

/* Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
 */
let socket;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    stock: {
      JD: 50,
      tencent: 100
    },
    flag: {
      JD: 50,
      tencent: 100
    }
  },
  connect() {
    const _this = this;
    const socket = wx.connectSocket({
      url: 'ws://localhost:8080',
    });
    /* socket.onMessage( data => { // 可以几首服务器返回的数据
      console.log(data)
    }) */
    wx.onSocketMessage(data => { // 可以几首服务器返回的数据
      // console.log(JSON.parse(data.data).JD)
      /* _this.setData({
        flag: _this.stock
      }) */
      _this.setData({
        flag: this.data.stock,
        stock:JSON.parse(data.data)
      })
      console.log(this.data.stock, this.data.flag)
    })
  },
  sendData() {
    wx.connectSocket({
      url: 'ws://localhost:8080',
    });
    wx.onSocketOpen( res => {
      wx.sendSocketMessage({
        data: ['123'],
      })
    })
  }
})
