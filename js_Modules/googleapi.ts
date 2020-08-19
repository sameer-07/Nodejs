const request1 = require('request')
var url1;
  function getUrl(Newurl) {
    url1=Newurl 
}
console.log(getUrl('http://ip-api.com/json/'))
request1({url : url1,json:true}, function(error, res) {
    if(error)
    {
        console.log("can not find the location")
    }
    else{
  var ipuser = res.body
  console.log('lantitude:'+ipuser.lat + ", "+'\n longitude:' + ipuser.lon)
    }
})

console.log("i am at last")