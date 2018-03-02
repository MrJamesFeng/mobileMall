// pages/home/home.js
var api = require("../../utils/api.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderList: [],
    venuesList:[],
    choiceList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.apis()
  },

  apis: function () {
    this.sliderList(() => { })
  },
  sliderList: function (cb) {

    api.GET(null, api.apis.sliderList).then(res => {
      this.setData({ sliderList: res })
 
      return null
    }).then(res => {
      api.GET(null, api.apis.venuesList).then(res => {
        this.setData({ venuesList:res.data})
        return null;
      }).then(res => {
        api.GET(null, api.apis.choiceList).then(res => {
          this.setData({ choiceList: res.data.dataList })
          return null
        }).then(res=>console.log(this.data))
      })
    })


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
  swiperChange: function (e) {

  }
})