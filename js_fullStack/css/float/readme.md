#清除浮动de五种方法：
   - 在父元素底部加一行代码<div style="clear: both/left/right;"></div>
   - 利用"块级格式化上下文"BFC来给父元素增加css；div.父元素{
       overflow:auto/hidden/scroll;}
   - 使用css中的after伪元素，给父元素div添加一个同级clearfix的类名；.clearfix{
       content："";
       clear:both;
       diaplay:block;
   }
   - 给父元素增加一行css，.content{
         <!-- 不建议使用 -->
         float:felt;
   }
   - 一个更优雅的改进 --尼古拉斯大师 方法
   把display设置为table，可以创建一个匿名的表格单元，可以直接触发BFC
    .claearfix::after{
        content:"";
        display:table;
        clear:both;
    }