// UC 3 - Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co

let email = 'abc.xyz@bridgelabz';

let EmailRE = RegExp('^[0-9a-zA-Z]+[+._-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$');

if (EmailRE.test(email)) {
    console.log(email + " is valid email.");
}
else {
    console.log(email + " is invalid email.");
}