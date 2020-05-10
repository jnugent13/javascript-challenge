// from data.js
var tableData = data;

// Select table
var tbody = d3.select("tbody");

//Grab reference to input text
var date = d3.select("#datetime")

//Filter by date
function filterDate(event) {
    var inputDate = d3.event.target.value;

    var filteredData = tableData.filter(event => event.datetime === inputDate);

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