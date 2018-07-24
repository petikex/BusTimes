function inputAction () {

    const input = document.getElementById("input_filed").value;
    console.log(input);

    const xhttp = new XMLHttpRequest();
 
    xhttp.open('GET', `http://localhost:3000/departureBoards/${input}`, true);
 
    xhttp.setRequestHeader('Content-Type', 'application/json');
 
    xhttp.onload = function() {

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
    let longitudes = [];
    let latitudes = [];

    busList.forEach(busStop => {
        longitudes.push(busStop.long);
        latitudes.push(busStop.lat);

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
    console.log('Testing google maps markers');
    initMap(longitudes, latitudes);
    document.getElementById('body').appendChild(newDiv);

    
}

function initMap(longitudes, latitudes) {
    const london = {lat: 0, lng: 51.5}
    var map = new google.maps.Map(document.getElementById('map'), 
        {zoom : 4, center : london}
    );
    for (let i = 0; i<longitudes.length; i++) {
        var marker = new google.maps.Marker({position : {lng : longitudes[i], lat : latitudes[i]}});
        marker.setMap(map);
    }
}