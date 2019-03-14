dom event(事件)
- dom 
    onclick 事件注册只有一个，后设的会将先设的覆盖掉 dom0
    addEventListener('click' function(){//代码块}) 事件注册数量不限 dom2
    addEventListener('keyup' function(){//代码块}) 事件注册数量不限 dom3
- dom事件流
    捕获(capture):true
        window.addEventListener('click',()=>{
            console.log();
        },true);->document.documentElement.addEventListener->document.body.addEventListener->父级.addEventListener->子级.addEventListener
    冒泡(bubble):false
        window.addEventListener('click',()=>{
            console.log();
        },false);<-document.documentElement.addEventListener<-document.body.addEventListener<-父级.addEventListener<-子级.addEventListener

    事件按照dom流的顺序执行我们的事件回调
    处于目标阶段的时候，事件调用顺序是取决于事件注册的顺序
- event
    event.stopPropagation()阻止父级事件冒泡
    event.stopImmediatePropagation();阻止后续事件冒泡
- 事件代理（事件委托）
    event-question.html
    原理：事件冒泡，当点击本元素时访问父级元素，以拿到本元素的标签console出内容
