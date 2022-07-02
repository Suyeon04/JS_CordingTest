var candyMachine = {
	status:{
		name : 'node',
        count:5
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    }
}
console.log(candyMachine.getCandy)
console.log(candyMachine.status.count)

var Human = function(type){
    this.type = type||'human';
}
Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    alert("hummmmm");
}

var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function(){
    alert(this.firstName+ " "+ this.lastName)
}
let oldZero = new Zero('human', 'zero', 'park')
Human.isHuman(oldZero)

// 프로미스
const condition = true;
const pormise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공')
    }else{
        reject('실패')
    }
})

pormise
    .then((message) =>{
        console.log(message);
    })
    .catch