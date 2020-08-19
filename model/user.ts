const readline = require("readline");
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function user (username: string, password: string ,firstName :string, lastName : string , Address : string)
{
    this.username=username;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.Address=Address;
}
var userData
rl.question("Enter username ? ", function(name) {
    rl.question("Enter password ? ", function(pass) {
        rl.question("Enter firstName ? ", function(fname) {
            rl.question("Enter lastName ? ", function(lname) {
                rl.question("Enter Address ? ", function(address) {
                     userData  = new user(`${name}`,`${pass}`,`${fname}`,`${lname}`,`${address}`);
                     console.log(userData);
                     let data = JSON.stringify(userData, null, 2);
                     var comma = `\,`;
                     
                     fs.appendFile("userDetails.json", `\"${name}\" : `+data+`\,`, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    
                        console.log("The file was saved!");
                    });
                    rl.close();
                });
            });
        });
    });
});

