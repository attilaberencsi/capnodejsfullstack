class RiskValidation {
    constructor(Risk) {
      this.risk = Risk;      
    }

    validateRisk() {
        if ( this.risk.impact >= 100000 ) { 
            let theTitle = this.risk.title;
            console.log(`Problem with Risk ${theTitle}`);            
        }
    }
  }

  module.exports = RiskValidation;