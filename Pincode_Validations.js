// UC 4 - Make sure 400 088 is also valid along with 400088.

let PinCode1 = '400 088';
let PinCode2 = '400088';

let PinCodeRE = RegExp('^[1-9][0-9]{2}[ ]?[0-9]{3}$');

if (PinCodeRE.test(PinCode1)) {
    console.log(PinCode1 + " is valid Pin Code.");
}
else {
    console.log(PinCode1 + " is invalid Pin Code.");
}

if (PinCodeRE.test(PinCode1)) {
    console.log(PinCode2 + " is valid Pin Code.");
}
else {
    console.log(PinCode2 + " is invalid Pin Code.");
}