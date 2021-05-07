const Runner = require("run-my-sql-file");
 
Runner.connectionOptions({
   host:"localhost",
   user:"root",
   password:"Mushishi"
});
 
const resetSchema = "./db/schema.sql";
 
Runner.runFile(resetSchema, (err)=>{
   if(err){
      console.log(err);
   } else {
      console.log("Schema successfully reset!");
   }
});