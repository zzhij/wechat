// pages/play/index.js
const musicObj = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcome: "欢迎",
    isPlay: true, // 默认是否播放
    imageControl: './../../image/pause.png', // 默认的音乐播放路径
    imageControlPlay: './../../image/pause.png', // 播放路径
    imageContralStop: './../../image/play.png',  // 暂停路径
    playRotate: 'paly-auto', // 播放时旋转的class
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    musicObj.src = 'http://m10.music.126.net/20180928162827/b401b683a5e7e24663f3a93ec7a0b599/ymusic/611b/a94d/1fa5/57575cbc0134ceb45ea79b97424dae6b.mp3'
    musicObj.play();
    // 默认播放
    this.setData({
      playRotate:'play-auto'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击按钮事件
   */
  clickMe: function() {
    console.log('12345');
    this.setData({
      welcome: '数据修改！'
    })
  },
  /**
   * 播放
   */
  play: function() {
    const _this = this;
    musicObj.play();
    // 播放时间设置
  },
  /**
   * 停止
   */
  stop: function() {
    musicObj.pause();
  },
  /**
   * 获取音乐的长度
   */
  getMusicLength: function() {

  },
  /**
   * 控制播放
   */
  playControl: function() {
    if(this.data.isPlay) {
      this.stop();
      this.setData({
        imageControl: this.data.imageContralStop,
        isPlay: false,
        playRotate: ''
      })
    }else {
      this.play();
      this.setData({
        imageControl: this.data.imageControlPlay,
        isPlay: true,
        playRotate: 'play-auto'
      })
    }
    
  }
})