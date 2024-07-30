document.getElementById("calculate").addEventListener("click", function () {
  const totalCost = parseFloat(
    document.getElementById("totalCost").value.replace(/[$,]/g, "")
  );
  const cpm = parseFloat(
    document.getElementById("cpm").value.replace(/[$,]/g, "")
  );
  const impressions = parseFloat(
    document.getElementById("impressions").value.replace(/[$,]/g, "")
  );
  const errorElement = document.getElementById("error");

  const filledFields = [totalCost, cpm, impressions].filter(
    (value) => !isNaN(value)
  ).length;

  if (filledFields < 2) {
    errorElement.textContent =
      "Enter two out of three options then hit ‘Calculate’ to identify the missing field. Oops! It does not appear you entered enough information. Please enter two values in order to solve for the other field.";
    return;
  } else if (filledFields === 3) {
    errorElement.textContent =
      "It looks like you entered all the information already! With this calculator, you just enter two of the fields and it solves for the last one.";
    return;
  } else {
    errorElement.textContent = "";
  }

  if (isNaN(totalCost)) {
    const calculatedTotalCost = (impressions / 1000) * cpm;
    document.getElementById("totalCost").value = `$${numberWithCommas(
      Math.round(calculatedTotalCost)
    )}`;
  } else if (isNaN(cpm)) {
    const calculatedCpm = totalCost / (impressions / 1000);
    document.getElementById("cpm").value = `$${numberWithCommas(
      Math.round(calculatedCpm)
    )}`;
  } else if (isNaN(impressions)) {
    const calculatedImpressions = (totalCost / cpm) * 1000;
    document.getElementById("impressions").value = numberWithCommas(
      Math.round(calculatedImpressions)
    );
  }
});

document.getElementById("startOver").addEventListener("click", function () {
  document.getElementById("totalCost").value = "";
  document.getElementById("cpm").value = "";
  document.getElementById("impressions").value = "";
  document.getElementById("error").textContent = "";
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
