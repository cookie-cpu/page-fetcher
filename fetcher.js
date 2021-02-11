const request = require('request');
const fs = require('fs')

let input = process.argv.splice(2);
//console.log(input);
let URL = input[0];
let filePath = input[1];

request(URL, (error, response, body) => {

  if (error){
    console.log(`Error occured: ${error}`)
  }
  fs.writeFile(filePath, body, function(error){
    if (error){
      console.log(`Error occured: ${error}`)
    } else {
      let data = body.length;
      console.log(`Downloaded and saved ${data} bytes to ${filePath}`)
    }
  })
})

