# WHIS IS BFC？
    Block Formatting Context 块级格式化上下文

# BFC de 原理（渲染规则）
1. 正常的文档流会存在边距折叠的问题（父与子元素，兄弟元素之间），水平方向的外边距不存在折叠问题——>因为水平方向不存在块级元素（块级元素必须单独占满一行）；
2. BFC容器不会与浮动元素的box重叠
3.BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响容器里面的元素，里面的元素也不会影响外面的元素
4. 计算BFC的高度时，浮动子元素也参与计算（也是通常的清除浮动的原理）
5. 内部的Box会在垂直方向上一个接一个的放置 inline-block会水平放置
6. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此

#怎样才能形成BFC？（创建BFC）
1. float的值不能为none
2. overflow的值不能为visible
3. display的值为table-cell, table-caption, inline-block中的任何一个
4. position的值不为relative和static 
5. 弹性盒 flex boxes (元素的display: flex或inline-flex)；


#正常的容器&BFC容器
- BFC防止外边距折叠,不与浮动的元素重叠
- 正常容器改为BFC容器<div class="aaa" style="overflow:auto;"></div>
