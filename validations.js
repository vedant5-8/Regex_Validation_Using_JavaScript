// UC 2 - Restrict the PIN code from taking alphabets or special characters at the beginning.

let PinCode = "A400088";

let PinCodeRE = RegExp('^[1-9][0-9]{5}$');

if (PinCodeRE.test(PinCode)) {
    console.log("Valid Pin Code.");
}
else {
    console.log("Invalid Pin Code.");
}