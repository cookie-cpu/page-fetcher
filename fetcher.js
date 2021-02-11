const request = require('request');
const fs = require('fs')



let input = process.argv.splice(2);
let URL = input[0];


request(URL, function(error,response,body){
  console.log(`Error: ${error}`)
  console.log(`Status Code: ${response}`)
  console.log(`Body: ${body}`)
})

console.log(input);