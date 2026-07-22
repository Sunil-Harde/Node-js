const fs = require("fs")

// fs.writeFile("text.txt", "my name is ram", (err) => {
//     console.log("file created successfully");

// })

// fs.readFile("text.txt", "utf-8", (err, data) => {
//     console.log(data);
// })


// fs.unlink("new.txt", (err) => {
//     console.log("file delete successfully");

// })


// fs.mkdir("server/by",(err)=>{
//     console.log("folder created successfully");
    
// })

fs.rmdir("hi",(err)=>{
    console.log("folder deleted successfully");
    
})

// fs.appendFile("text.txt", "\nhi", (err)=>{
//     console.log("file update successfully");
    
// })

// fs.rename("text.txt", "new.txt", (err)=>{
//     console.log("file name updated successfully");
    
// })