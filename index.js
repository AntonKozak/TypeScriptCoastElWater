// learning for fun 
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0];
var calculatePayments = function (_a, wData, elRate, wRate) {
    var readings = _a.readings, mode = _a.mode;
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (_a, electricityUserData, waterUserData) {
    var el = _a[0], water = _a[1];
    var text = "    Hello!\n    this ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of el\n    coast ").concat(monthPayments[0], "\u20AC\n    \n    used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    coast ").concat(monthPayments[1], "\u20AC");
    return text;
};
var invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
