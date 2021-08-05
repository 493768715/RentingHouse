// pages/before-publish/before-publish.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choose_item: [
            {name: '房源转租', src: '/image/icon/hot.png', type: 'zhuanzu'}
            // {name:'租房动态',src:'/image/icon/publish-zhuanzu.png',type:'discuss'}
        ]
    },
    publish(e) {
        app.WxHttpRequestGet('house/add_check', {}, function (res) {
            var data = res.data;
            console.log(data.code)
            if (data.code == 400) {
                app.ShowModel('', data.msg);
                setTimeout(function () {
                    wx.switchTab({
                        url: '/pages/my/my'
                    })
                }, 1500)
                return false
            } else {
                wx.navigateTo({
                    url: '/pages/publish/publish'
                })
            }
        }, app.InterError)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        app.wxshowloading('加载中...');
        wx.setNavigationBarTitle({title: app.globalData.city + "房源发布"})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.hideLoading()
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
