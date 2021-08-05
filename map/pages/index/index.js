let la,lo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0, //地图初次加载时的纬度坐标
    longitude: 0, //经度
    address:"" //地图名字
  },
  moveToLocation(){
    var that = this;
    console.log(la,lo)
    wx.chooseLocation({
      success:function(res){
        console.log(res)
        that.setData({
          address:res.address
        })
      },
      fail:function(err){
        console.log(err)
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