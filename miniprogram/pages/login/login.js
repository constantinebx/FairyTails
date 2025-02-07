Page({
    data:{
        userInfo:'',
    },
    onLoad(){
        let user=wx.getStorageSync('user')
        this.setData({
            userInfo:user
        })
    },
    login(){
        console.log('点击事件执行了')
        wx.getUserProfile({
          desc: '必须授权才能使用',
          success:res=>{
            let user=res.userInfo
            wx.setStorageSync('user', user)
            console.log('成功',res)
            this.setData({
                userInfo:user
            })
            wx.navigateTo({
              url: '/pages/index/index',
            })
          },
          fall:res=>{
            console.log('失败',res)
          }
        })
    },
    nologin(){
       this.setData({
         userInfo:''
       })
       wx.setStorageSync('user', null)
    }
})