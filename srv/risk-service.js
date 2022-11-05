const cds = require('@sap/cds');
const RiskValidation = require('./RiskValidation');

module.exports = cds.service.impl(async function () {
    this.after('READ', 'Risks', risksData => {
        const risks = Array.isArray(risksData) ? risksData : [risksData];        
        risks.forEach(
            risk => {
                risk.criticality = risk.impact >= 100000 ? 1 : 2;
                const riskValidation = new RiskValidation(risk);
                riskValidation.validateRisk();                
            }
        );

        //return risksData.notify("Data retrieved successfully");
    });
});