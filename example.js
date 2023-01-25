const Person = [  
 [    
  {
    name: "bhawesh",
    age: 20,
  }],
  [
  {
    name: "yogesh",
    age: 21,
  },
  {
    name: "devesh",
    age: 22,
  },
  {
    name: "rani",
    age: 23,
  }
]
];
// Question Array2->Objects->Key value pair
Person.map((rani,index) => {
rani.map((yogesh) =>{
    console.log(yogesh.name, yogesh.age)
})
})

// for (i = 0; i < Person.length; i++) {
//     if (Person[i].name === 'yogesh') console.log(Person[i].name, Person[i].age)
// }
// for (i = 0; i <Person.length ; i++) {
//     console.log(Person[i]);
// };
// Person.map((value,index) =>{
//  console.log(value)
// })
// Person.forEach((value, index)=>{
//   console.log(value.name, value.age)
// })
//  const value = { name: 'rani' , age: 23}
