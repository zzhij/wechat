## 注意事项
* 页面的.json只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个键。
* swiper, image 等组件都有默认宽高
* 样式规范
* app.json中 的tabBar的pagePath已经设置的路径  在组件页面中通过navigator跳转时没有反应
* scroll-view 滑动组件时 一定要加上滑动属性 scroll-x="true"
* scroll-view 组件上应用flex 布局没有效果 其子元素并不能自动排列



## 样式实现

* 动态切换class (当有动画时，默认加载出来的动画没有效果，类似旋转)
* tabBar 位置在顶部时，设置的图标是不显示的 （81 * 81的图片）