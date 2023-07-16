// UC 2 - Ensure @ and validate the mandatory 2nd part i.e. bridgelabz.

let email = 'abc.xyzbridgelabz.co.in';

let EmailRE = RegExp('^[0-9a-zA-Z]+[+._-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$');

if (EmailRE.test(email)) {
    console.log(email + " is valid email.");
}
else {
    console.log(email + " is invalid email.");
}