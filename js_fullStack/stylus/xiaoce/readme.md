# stylus
    不再写css，写的是css的预编译语言stylus：快
    一套语法 支持现代css 开发，
    compile过程

    脚本命令(将style.styl编译为style.css)：stylus style.styl -o style.css
    (-o ：output 输出的)
    实时编译stylus文件，css文件更新相同内容 stylus -w style.styl -o style.css
    (一直监听style.styl文件的修改，实时的生成css文件)

1. 跟css规则说拜拜：{}:;——>tab
2. stylus提供嵌套功能：可以帮我们补上前面的选择器，现在我们的css就模块化了从此css就有了编程感觉了
3. &运算符：依然使用tab缩进，但是它与上一级同级 适用与同一个元素多个类名 .active、或者为类，伪状态
4. 变量定义：将常用的或者重复使用的，在最上面统一定义后，可以修改一处所有使用了此变量的地方都会跟着修改
            css不是编程语言，表达性的；
        ===>成为网站的风格
    
css 语法
- overflow:hidden;
- flex align-items 搞定vertical-align有时搞不好的东西
        vertical-align 一般用于兄弟元素之间 img+兄弟元素
- flex-rendering：optimizeLegibility;
    抗锯齿 在高清手机上的文字边缘不出现锯齿
- flex-shrink：0 大小不退让
    flex-grow
- 第几个元素的选择
    :first-child  :last-child
    :nth-child(2n) :nth-child(2n+1)
- -apple-system

