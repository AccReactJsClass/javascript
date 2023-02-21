// function checkWord(val1,val2){
//     let newValue1 = val1.toLowerCase();
//     let newValue2 = val2.toLowerCase();
//     newValue1 = newValue1.split('');
//     newValue2 = newValue2.split('');
//     let newArray = newValue1.concat(newValue2);
//     // console.log(newArray);
//     const tofindDuplicates = newArray => newArray.filter((item, index) => newArray.indexOf(item) !== index)
//     const duplicateElement = tofindDuplicates(newArray);
//     // console.log(duplicateElement= newValue1)
//     if(newValue1=duplicateElement){
//         console.log('hello')
//         if(newValue1.length =duplicateElement.length ){
//             console.log('true')
//         }
        
//     }else{
//         console.log('false')
//     }
// //    console.log( newValue1)
// // console.log(first)
// //    if(newValue1 = vv){
// //      console.log('true')
// //    }else{
// //     console.log('false')
// //    }
    
// }

// checkWord('Black','Kcla');

// console.log(-'3')

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};
arr.map((val)=>{
   console.log(counts[val])
})

 for (const num of arr) {
    console.log(num)
   counts[num] = counts[num] ? counts[num] + 1 : 1;
 }

// // console.log(counts);
// console.log(counts[5], counts[2], counts[9], counts[4]);