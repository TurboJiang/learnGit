// js创建类的方式：函数名首字母大写即为类
//严格模式   
//"use strict"
function Player(name){
    // constructor构造函数
    //this指向：全局 || 指向的对象
    console.log(this);
    this.name=name;
    // 初始没有值
    this.enemy=null;
};
// js类的方法要定义在prototype链上
// 添加原型链->添加方法：赢
Player.prototype.win=function(){
    console.log(this.name+"win");
}
// 添加原型链->添加方法：输
Player.prototype.lose=function(){
    console.log(this.name+"lose");
}
// 函数使用的三种方式：1、2、3
// 1、函数调用：this指向全局
// Player("皮蛋");
// 实例化对象：this指向实例化对象
// 2、new Player();
var player1=new Player("皮蛋");
// var player2=new Player("小乖");
// console.log(player1.name);
// console.log(player2.name);
// 3、win、lose函数，作为对象的方法被调用:this会指向对象本身
player1.win();
var player2=new Player("小乖");
player2.lose();
// 对战关系
player1.enemy=player2;
player2.enemy=player1;