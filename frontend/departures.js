function inputAction () {

    const input = document.getElementById("input_filed").value;
    console.log(input);

    const xhttp = new XMLHttpRequest();
 
    xhttp.open('GET', `http://localhost:3000/departureBoards/${input}`, true);
 
    xhttp.setRequestHeader('Content-Type', 'application/json');
 
    xhttp.onload = function() {
        console.log(xhttp.response);
        const JSONresponse = JSON.parse(xhttp.response);

        const prevResults = document.getElementById('results');
        if (prevResults) {
            prevResults.parentElement.removeChild(prevResults);
        }

        // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
        if (JSONresponse[0].status === 200) {
            console.log('Success');
            parseResponseFromAPI(JSONresponse);
        } else {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'results');

            const h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(JSONresponse[0].status));
            newDiv.appendChild(h3);

            const p = document.createElement('p');
            p.appendChild(document.createTextNode(JSONresponse[1].error));
            newDiv.appendChild(p);

            document.getElementById('body').appendChild(newDiv);

        }
    }
 
    xhttp.send();
}

function parseResponseFromAPI(response) {
    
    // Getting rid off the status code
    const busList = response.slice(1);

    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'results');
    
    // Google maps stuff
    document.getElementById('body').appendChild(newDiv);

    // Calculating the average posotion => centre of map
    let avgLat = 0;
    let avgLng = 0;
    busList.forEach(busStop => {
        avgLat = avgLat + busStop.lat;
        avgLng = avgLng + busStop.long;
    })
    const numofLocations = busList.length;
    avgLat = avgLat/numofLocations;
    avgLng = avgLng/numofLocations;

    // Setting up map
    const googleMap = new google.maps.Map(document.getElementById("map"), {
        center: {lat: avgLat, lng: avgLng},
        zoom: 18
    });

    // Adding markers
    busList.forEach(busStop => {
        const marker = new google.maps.Marker({
            position: {lng: busStop.long, lat: busStop.lat},
            title:"Hello World!"
        })
        const descriptionString = createDescription(busStop);
        const infoWindow = new google.maps.InfoWindow({
            content: descriptionString
        });
        marker.addListener('click', function() {
            infoWindow.open(googleMap, marker);
        });

       marker.setMap(googleMap);
    })
       
}

// Creates the description in html from
function createDescription(busStop) {
    let description = `<h3>${busStop.stopName}</h3><ul>`;

    busStop.buses.forEach(bus => {
        description += `<li>${bus.expectedArrival}: ${bus.lineId} to ${bus.destination}</li>`;
    });
    description += '</ul>';
    return description;
}

