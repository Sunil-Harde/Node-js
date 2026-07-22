
let arr = ['ram',"sham", "rakesh","raman",2,3,2]


// for(let i =0; i<arr.length; i++){

//     console.log(arr[i])

// }


for(let i of arr){
    console.log(i);   
}

arr.forEach((data,index)=>{
    console.log(data,index)

})

// let i =0 

// while(i<10){
//     console.log(i)
//     i++
// }
