const sum = 3+5; // addtion operator
console.log(sum,'sum');

const sub = 8-3; // subtraction operator
console.log(sub,'sub');

const mul = 3*4; //multiplication
console.log(mul,'mul');

const div = 4/2; // division
console.log(div,'div');

const remainder = 5%2; // remainder
console.log(remainder,'remainder')

let x = 5 ; // = Assignment operator
let y = 6;
x++ // post increment  // 6
++y // pre increment // 7
x-- // post decrement // 5
--y // pre decrement 7-1 = 6
--x // pre decrement // 4 
console.log(x,'post increment +Operator', y,'pre increment +Operator');

// Comparison Operators

let num1 = 5;
let num2 = 6 ;
let num3 = 5;
//if else conditons
 if(num1 === num3){ //comparison ope
   console.log(num1===num3, 'equal')
 }else{
    console.log('not equal')
 };

// not equal to
 if(num1 !== num2){ // not equal comparison ope
    console.log(num1!==num2, 'equal')
  }else{
     console.log('not equal')
  }

// ternary operator
//   (condition) ? true : false
let sum1 = 8+2;
  let sum2 = 5+5;
  let sum3 = 6+7;
  (sum1===sum3) ? console.log('success') : console.log('false');

  let sub1 = 5-4;// 1
  let sub2 = 4-5; // -1
  let sub3 = 6-5;//1
  let sub4 =7-8;
  //true->false
  //false->success
  (sub1 === sub2) ? console.log('false') : console.log('success');

  // logical Operator
  // AND-> && 3- false 1-true
  // OR -> || 3 - true 1- false
  // NOT -> ! 

//   (sub1===sub3 1&&-1 sub2===sub4) ? console.log(true) :console.log('false')
   let value = true;
   console.log(!value);

   