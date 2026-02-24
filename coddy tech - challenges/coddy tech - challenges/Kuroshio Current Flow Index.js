function calculateKuroshioFlow(temperature, salinity, depth) {
    
    const baseValue = 50;

    let indexFlow = baseValue 
        + (temperature * 0.5)
        - (salinity * 0.3)
        + (depth / 10);

    if (indexFlow < 0) {
        indexFlow = 0;
    } else if (indexFlow > 100) {
        indexFlow = 100;
    }

    return Math.round(indexFlow * 10) / 10;
}