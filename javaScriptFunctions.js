// function person(name,age){
//     console.log(name,age);    //function call
// };
// person('bhawesh', 21);
// person('roshan', 60);
// person('titas', 19);

// function person(name) {
//     return name
// };
// console.log(person('priyota'));

// function person(name){
//     return name
// };
// person('prakriti');

// let age = 24; // global var
// function person(name){
//     let company = 'kiwitech' //local variable
//     console.log(company,age, 'local var','global var');
//     return name;
// }
// console.log(age, 'global var1');
// console.log(person('Titas'));
// priyota
// function add(num1, num2) {
//     return num1 + num2
//   }
//   function subs(num1, num2) {
//     return num1 - num2
//   }
//   function mul(num1, num2) {
//     return num1 * num2
//   }
//   function div(num1, num2) {
//     return num1 / num2
//   }
//   console.log(add(2, 3))
//   console.log(subs(2, 3))
//   console.log(mul(2, 3))
//   console.log(div(2, 3))
// titas
// function calculate(num1, num2) {
//     let a = num1 + num2
//     let b = num1 * num2
//     let c = num1 / num2
//     let d = num1 - num2
//     console.log(`sum${a} mul${b} div${c} sub${d}`)
//   }
//   calculate(9, 7);
//furqan
// function calculate(num1, num2) {
//     console.log(num1 + num2);
//     console.log(num1 - num2);
//     console.log(num1 * num2);
//     console.log(num1 / num2);
//   }
// calculate(2,4);

// const car = {brand:'bmw', model:'bmw S2', color:'black'};
// console.log(car.model,'model');
// console.log(car.brand,'brand');

// const details = {
//     name:'bhawesh',
//     age: 45,
//     children:1,
// }
// console.log(details.children)

let data = {
  phone_number: "6388430012",
  phone_verified_at: "2023-01-16T15:11:12.000000Z", //ye
  plaid_account_details: {
    id: 1,
    user_id: { user1: 1, user2: 2, user3: { user31: 31 } },
    token: "access-sandbox-578ea479-851f-439e-b797-7e19725e50d0", //ye furqan
  },
  account: "1111222233331111", //ye
};
console.log(data.plaid_account_details.user_id.user3.user31, 'titas') //titas
console.log(data.plaid_account_details.user_id.user3.user31, 'yogesh')
console.log(data.plaid_account_details.user_id.user3.user31, 'rani');
console.log(data.plaid_account_details.user_id.user3.user31, 'priyota')
console.log(data.plaid_account_details.user_id.user3.user31, 'prakriti');
console.log(data.plaid_account_details.user_id.user3.user31, 'furqan');
// console.log(data.plaid_account_details.token, data.phone_number, data.account)
// console.log(data.plaid_account_details.token); //furqan
// console.log(data.plaid_account_details.token,data.phone_verified_at,data.account)// titas
// console.log(data.account);
// console.log(data.plaid_account_details.token);
// console.log(data.phone_verified_at);
