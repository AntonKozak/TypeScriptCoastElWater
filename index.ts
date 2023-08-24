// learning for fun 
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

const waterUserData = {
    readings: 3,
    units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0];

const calculatePayments = (
    { readings, mode }: { readings: number; mode: string },
	wData: { readings: number },
	elRate: number,
	wRate: number
    ): void => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings*elRate * 0.7;
    }else {
        monthPayments[0] = readings * elRate;
    }

    monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = ([el, water]: number[],electricityUserData: { readings: number; units: string }, waterUserData: {readings: number; units: string}) => {
    const text = `    Hello!
    this ${electricityUserData.readings} ${electricityUserData.units} of el
    coast ${monthPayments[0]}€
    
    used ${waterUserData.readings} ${waterUserData.units} of water
    coast ${monthPayments[1]}€`;
    
    return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);