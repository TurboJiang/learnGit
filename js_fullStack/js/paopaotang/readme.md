class类 js中也有：通过函数创建类
es5中没有class关键字，如何做面向对象？
    js是面向对象，Function是一等对象-->用于创建类
    普通函数Player()
    当函数以new的方式被运行时：new Player()->作为类的构造函数被运行
    function Player(){this}
    this 一直都在，为函数中的一个常在，一个指针，指向一个对象Object即函数体{...}
        this.name=name
    
    函数运行方式的不同，函数体中的this指向不同
        当作为以普通函数被运行时，this没有使命(没有指定指向)，所以会自动指向全局——undifined；
        当作为构造函数被运行时 new Player()，此时this指向实例化的对象，构造函数需要的过程

#上述总结：
- 函数可以用来构造类 js借，通过this，this一直存在，this指针指向实例化对象，若没有指向实例化对象，则不能实现
    函数运行方式会导致this指向不一样：普通函数this指向前端的全局或者后端的window，若代码启动严格模式"use strict"，则可以避免上述问题、构造函数this指向实例化对象
- new ？初始化/构造：构造函数constructor
  new过程中发生了什么？将函数作为构造函数被运行，
    this指向{ } 
    constructor：this.name=name;传参