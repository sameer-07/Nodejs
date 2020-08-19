var readline = require("readline");
var fs = require('fs');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function user(username, password, firstName, lastName, Address) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.Address = Address;
}
var userData;
rl.question("Enter username ? ", function (name) {
    rl.question("Enter password ? ", function (pass) {
        rl.question("Enter firstName ? ", function (fname) {
            rl.question("Enter lastName ? ", function (lname) {
                rl.question("Enter Address ? ", function (address) {
                    userData = new user("" + name, "" + pass, "" + fname, "" + lname, "" + address);
                    console.log(userData);
                    var data = JSON.stringify(userData);
                
                    fs.appendFile("userDetails.json", "\"" + name + "\" : " + data + ",", function (err) {
                        if (err) {
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
