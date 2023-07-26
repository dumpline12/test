// pages/infor22/infor22.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
text:"你觉得花好看吗？",
text2:"",
cnt1:0,
cnt2:1
  },
fn(){
this.setData({cnt:1})
},
tapName()
{
  this.setData({cnt1:1})
  this.setData({cnt2:0})
  

wx.request({
  url: 'http://127.0.0.1:7001',
data:{
abc:this.data.text
},
  success:(res)=>
  {
    this.setData({text2:res.data.ResponseText})
    console.log(res)
  }
})
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

  }
})