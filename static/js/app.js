var tableData = data;// from data.js
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

// Select the submit button
var submit = d3.select(".btn-default");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var datetimeInputValue = d3.select("#datetime").property("value");
    var cityInputValue = d3.select("#city").property("value");
    var stateInputValue = d3.select("#state").property("value");
    var countryInputValue = d3.select("#country").property("value");
    var shapeInputValue = d3.select("#shape").property("value");
  
    // Get filtered data by each input value
    var filteredTableData = tableData;// default get all data before filtering each input value
    if (datetimeInputValue != "")
    {
        filteredTableData = filteredTableData.filter(d => d.datetime === datetimeInputValue);
    }
    if (cityInputValue != "")
    {
        filteredTableData = filteredTableData.filter(d => d.city === cityInputValue);
    }
    if (stateInputValue != "")
    {
        filteredTableData = filteredTableData.filter(d => d.state === stateInputValue);
    }
    if (countryInputValue != "")
    {
        filteredTableData = filteredTableData.filter(d => d.country === countryInputValue);
    }
    if (shapeInputValue != "")
    {
        filteredTableData = filteredTableData.filter(d => d.shape === shapeInputValue);
    }
    
    console.log(filteredTableData);

    //Remove Old data
    d3.select("tbody").remove();
    d3.select("#ufo-table").append("tbody");

    //Append new filtered data
    var tbody = d3.select("tbody");
    filteredTableData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});