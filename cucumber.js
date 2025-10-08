const fs = require('fs');
if (!fs.existsSync('./reports')) fs.mkdirSync('./reports');

module.exports = {
  default: `--require ./step-definitions/*.js --format progress --format json:./reports/cucumber-report.json --format html:./reports/cucumber-report.html ./features/*.feature`
};
