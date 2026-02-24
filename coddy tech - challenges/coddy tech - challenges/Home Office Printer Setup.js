// Write a function checkOfficeSetup that takes hasInk, hasPaper, extraSupplies and returns the next setup step needed.
// The function determines what action is needed to complete your home office printer setup based on current supplies.
// Conditions:

// If no ink: return "Refill ink"
// If no paper: return "Load paper"
// If extra supplies > 5: return "Organize supplies"
// Otherwise: return "All set!"
// Parameters:

// hasInk (boolean): Whether printer has ink
// hasPaper (boolean): Whether printer has paper
// extraSupplies (number): Count of additional office supplies
// Returns: String indicating the next setup step needed. Format: "Refill ink", "Load paper", "Organize supplies", or "All set!"

function checkOfficeSetup(hasInk, hasPaper, extraSupplies) {
    if (!hasInk){
        return "Refill ink";
    }
        else if (!hasPaper){
            return "Load paper";
        }
            else if (extraSupplies > 5){
                return "Organize supplies";
            } else {
                return "All set!";
            }       
};

