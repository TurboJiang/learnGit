pc相对于mobile来讲，界面更复杂 强调布局layout
文档流 从上到下 从左到右
flex要谨慎使用，最新css3技术
兼容性


float 会影响其他相邻的元素 使用overflow：hidden去除影响
离开文档流:float与position:absolute
    


- pc端，先布局(layout)使用float、inline-block(行内块级元素)



- 设置inline-block，两个盒子因为其他空格等元素导致换行，1>将两个盒子连接在一起
    2>父级设置font-size：0，但此时所有文字虚另设大小(公共盒子中)


bug：兄弟间的间隔 
    相对年轻一些 在低版本的ie浏览器不支持
    .col-4,.col-8{
        height: 200px;
        /* 行内元素不能设置宽高 */
        display: inline-block;
    }
    <div class="col-8"></div><div class="col-4"></div>