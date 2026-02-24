function benchQualityChecker(coatingThickness, isHighTraffic) {
    if (coatingThickness < 50){
        return "Terrible - Replace immediately!";
    }
        else if (coatingThickness >= 50 && coatingThickness <= 100){
            if (isHighTraffic === true){
                return "Poor - Needs recoating soon";
            }
            else if (isHighTraffic === false){
                return "Acceptable - Monitor closely";
            }
        }
            else if (coatingThickness >= 101 && coatingThickness <= 150){
                return "Good - No action needed";
            }
                else if (coatingThickness > 150){
                    return "Excellent - Overcoated!";
                }
}
