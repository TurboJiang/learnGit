# 作用域 scope
document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorAll
window BOM
    全局定义了var name="jyf";
    全局变量    js中的为window
    局部变量    function(){} 只能调用函数，不能直接访问元素；
            window js为内嵌在浏览器中的脚本语言，
                    与其他语言不一样的地方在于有一个window
                全局变量挂载在window上
                调用名字consloe.log(name);或者consloe.log(window.name);均能找到
            window （typeof查询类型） object类型
    所有基本类型：数值型、布尔型、字符串、null、undifined、Symbol object
    const let比var优秀的地方：遵守块级作用域
    全局->函数局部->块级作用域
    scope 范围
    定时器：setTimeout() 异步的内置函数
        for()循环立即同步执行
        1000ms之后i的值在var时（没有生成块级作用域）直接变成了10
        使用let时立即使用了块级作用域 for（）{块级作用域 let}
            1000ms后可以立即找到i的值