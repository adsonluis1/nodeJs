import inquirer from "inquirer";

inquirer.prompt([
    {name:'nota1',message:'digite sua primeira nota'},
    {name:'nota2',message:'digite sua segunda nota'}
]).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})