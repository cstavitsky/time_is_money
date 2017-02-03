var elements = document.getElementsByTagName('*');
var annualSalary = 75000;
var salaryAfterTaxes = (75000*0.75);
var yearlyWorkdays = 260; //assume 5 days per week
var dailyHoursWorked = 8; //assume typical 8-hour office day
var hourlyRate = (salaryAfterTaxes/yearlyWorkdays)/dailyHoursWorked;

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/\$\d+.\d+\b/gi, dollarsToHours(text));

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function dollarsToHours(v) {
  // Remove dollar-sign
  v = v.replace("$", "");

  // Convert Dollars to Hours
  hours = parseFloat(v) / hourlyRate;
  
  // Cap to two decimal places
  // And convert to string
  hoursString = hours.toFixed(2) + ''
  return hoursString + ' hours worth of work' ;
}
