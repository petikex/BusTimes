let locations = []

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
    

    const busList = response.slice(1);
    
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'results');
    const h2 = document.createElement('h2');
    newDiv.appendChild(h2);
    h2.appendChild(document.createTextNode('Results'));

    busList.forEach(busStop => {
        locations.push({lng : busStop.long, lat :busStop.lat});
        // Creating bus stop name
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(busStop.stopName));
        newDiv.appendChild(h3)

        // Create list
        const ul = document.createElement('ul');
        
        // Populate list
        busStop.buses.forEach(bus => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${bus.expectedArrival}: ${bus.lineId} to ${bus.destination}`));
            ul.appendChild(li);
        });

        newDiv.appendChild(ul);
    });
    document.getElementById('body').appendChild(newDiv);
    let avgLat = 0;
    let avgLng = 0;
    let desrciptions = {};
    locations.forEach(location => {
        avgLat = avgLat + location.lat;
        avgLng = avgLng + location.lng;
    })
    let numofLocations = locations.length;
    avgLat = avgLat/numofLocations;
    avgLng = avgLng/numofLocations;
    let googleMap = new google.maps.Map(document.getElementById("map"), {
        center: {lat: avgLat, lng: avgLng},
        zoom: 18
      });
    locations.forEach(location => {
        let marker = new google.maps.Marker({
            position: location,
            title:"Hello World!"
       })
       marker.setMap(googleMap);
    })
       
}

