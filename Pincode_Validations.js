// UC 1 - The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post.

let PinCode = 400088;

let PinCodeRE = RegExp('^[1-9][0-9]{5}$');

if (PinCodeRE.test(PinCode)) {
    console.log("Valid Pin Code.");
}
else {
    console.log("Invalid Pin Code.");
}