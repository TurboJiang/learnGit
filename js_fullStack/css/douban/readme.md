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