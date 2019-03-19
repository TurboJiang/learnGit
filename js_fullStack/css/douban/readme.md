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
下良好结构及语义化的html
.feed-content>photos+h3+p+.author