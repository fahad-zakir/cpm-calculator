document.getElementById('calculate').addEventListener('click', function() {
    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const cpm = parseFloat(document.getElementById('cpm').value);
    const impressions = parseFloat(document.getElementById('impressions').value);
    const errorElement = document.getElementById('error');

    const filledFields = [totalCost, cpm, impressions].filter(value => !isNaN(value)).length;

    if (filledFields < 2) {
        errorElement.textContent = "Enter two out of three options then hit ‘Calculate’ to identify the missing field. Oops! It does not appear you entered enough information. Please enter two values in order to solve for the other field.";
        return;
    } else if (filledFields === 3) {
        errorElement.textContent = "It looks like you entered all the information already! With this calculator, you just enter two of the fields and it solves for the last one.";
        return;
    } else {
        errorElement.textContent = "";
    }

    if (isNaN(totalCost)) {
        document.getElementById('totalCost').value = ((impressions / 1000) * cpm).toFixed(2);
    } else if (isNaN(cpm)) {
        document.getElementById('cpm').value = (totalCost / (impressions / 1000)).toFixed(2);
    } else if (isNaN(impressions)) {
        document.getElementById('impressions').value = ((totalCost / cpm) * 1000).toFixed(0);
    }
});

document.getElementById('startOver').addEventListener('click', function() {
    document.getElementById('totalCost').value = '';
    document.getElementById('cpm').value = '';
    document.getElementById('impressions').value = '';
    document.getElementById('error').textContent = '';
});
