- 前端该做的，盒子模型
html结构划分好
- 要有一定的css命名词汇量

feed-item
feed-items
- 标签的语义化
 a代替div做盒子


            /* 文本最多三行 */
            -webkit-line-clamp:3;
            /* 将内部按照盒子划分 ，具体如何划分在下面写*/
            display: -webkit-box;
            /* 按照盒子的垂直划分 */
            -webkit-box-orient: vertical;
             overflow: hidden;



界面，切分，切图
按模块来切.feed-item 词汇量
块级元素 从上到下，从左到右
写良好结构及语义化的html
.feed-content>photos+h3+p+.author

- css
feed*-items content
- html结构及布局
从上到下 从左到右 语义化和功能性
1. 套路 content>h3+p
2. 盒子
3. a 作为盒子 在移动端是很正常的
display：block；
4. 盒子模型
文字line-height padding margin
5. 文字截断 tmall商铺信息是由商家填的，它的高度，不被限制 
display：webkit-box；新的盒子模型，像弹性布局flex一样，来划分父元素的空间；
overflow:hidden;
-webkit-line-clamp:3;行数为3行
-webkit-box-orient：vertica；默认在垂直上划分