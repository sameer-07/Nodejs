const request = require('request');

const url ='http://www.google.com'

request({url : url},function(err,response){
    const data =JSON.parse(response.body)
    console.log(data.currently)

} )


