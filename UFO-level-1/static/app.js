// from data.js
var tableData = data;

// Select table
var tbody = d3.select("tbody");


//Filter by date
function filterDate() {
    // Delete existing rows
    tbody.html("");

    //Grab reference to input text
    var date = d3.select("#datetime");
    var inputDate = date.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);

    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

//Append filtered results to table when button is clicked
var button = d3.select("#filter-btn");

button.on("click", filterDate);