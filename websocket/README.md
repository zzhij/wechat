## 遇到的问题
* Page is not constructed because it is not found.
  * 由于对应的js中没有定义Page，所以引起来报错
* 路由跳转的问题
```
/* wx.navigateTo({ // 跳转 但是不能跳转到tabBar的链接 跳转到普通页面有返回按钮
      url: '/pages/index/index',
}) */
wx.switchTab({ // 可以跳转到tabBar中的链接
  url: '/pages/index/index',
})
```