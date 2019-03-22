## 界面大框架及经验

水平方向一般禁止出现滚动条，垂直方向出现滚动条
- 若水平和垂直两个方向都出现滚动的话，页面会摇晃，容易产生误操作
- 垂直方向滚动是开发主要方式

        /* 在水平方向x轴上禁止出现滚动条，隐藏 */
            overflow-x: hidden;
            /* y轴上滚动 */
            overflow-y: scroll;
            /* 移动端，搭配垂直方向滚动使用 */
            -webkit-overflow-scrolling: touch;




 /* 单屏应用经典跨设备页面处理 */

        /* 主流产品 手机是主要的浏览物 pc上班的时候看一下 */
        /* 如何在多种端都可以良好显示 ipad 100%宽度 pc960 左右留白 */
        /* 非pc100% pc 960px */
        max-width: 960px;
        /* 居中 */
        margin: 0 auto;
        /* 最小高度为页面的高度 */
        min-height: 100%;

- margin:0 auto; max-width:960px;

- flex布局
    1. flex-grow 放大
    2. flex-basis flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值
    3. flex-wrap 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向


    当网页由pc到mobile时，缩小阵仗

经验：
    由简单的适配pc到mobile，为了照顾所有的用户
    在pc端大手大脚一点，设置最大宽度max-width;居中margin：0 auto; padding ;margin
    在mobile中，使用flex-shrink让关键部分不被改变（flex-shrink：0），不重要的部分flex-shrink：number;