function add(num1:number,num2:number):number{
    return num1+num2;
}
let sum:number=add(1,2);
console.log(sum);

function display(id:number,name:string,){
    console.log(id,name);
}
display(1,'ABC');

function area(l:number,b:number):number{
    return l*b;
}
let a:number=area(2,3);
console.log(a);

function addNum(){
    let a:number=1;
    let b:number=2;  
    return a+b;
}
let c:number=addNum();
console.log(c);

let result =function(a:number,b:number,c:number){
    return a-b*c;

};
console.log(3,2,5);









