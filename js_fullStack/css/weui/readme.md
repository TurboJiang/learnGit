#WEUI
来自于微信的前端开发框架
- 微信生态 公众号 小程序
weui.css在基础上做开发
- app生态
内嵌的html
- pc 传统网站 Bootstrap


- 界面的编写过程
    - html结构，独立于样式
        dom文档流，从左到右，从上到下写盒子
        - 取类名很重要
        BEM规范
        Block 区块  weui-cell(独立的区块)
                  weui-button  30-50个复用的组件
        Element 元素 weui-cell__Element（元素用两个下划线）
                    weui-cell__hd
                    weui-cell__bd
                    weui-cell__ft
            通用词汇 hd+bd+ft 头+主体+尾
    - 再写样式

- 离开文档流（文档流为从上到下从左到右）
    里面的元素不再受影响，before脱离了正常的文档流（position：absolute）
    weui-cells border-top使用盒子模型，元素在页面上的占位，是需要综合考虑内容w*h
    padding border margin position的定位
- 1px 边框
    css像素 1px 在手机里
    硬件物理像素 retina 2px  3倍retina 3px
    使用tranform:scaleY(0.5)压一下（压到一半，实现0.5像素）
    浏览器不会处理小数点像素再配合transform:origin 基点
    上边线从下往上压 scaleY


- 弹性布局flex
    不受块级的约束，它的内部是一个新世界
    弹性布局是父与子们一起的布局
    有好用的对齐方式 align-items纵轴对齐居中
    justify-content 横轴
    在一堆子元素中只给一个元素设置flex：1这个元素成为主元素
    其他元素占完自己该占的盒子模型的内容后剩余的空间都交给主体元素
