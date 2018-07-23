function test () {

    const input = document.getElementById("input_filed").value;
    console.log(input);

    const xhttp = new XMLHttpRequest();
 
    xhttp.open('GET', `http://localhost:3000/departureBoards/${input}`, true);
 
    xhttp.setRequestHeader('Content-Type', 'application/json');
 
    xhttp.onload = function() {
        // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
        console.log(xhttp.status);
        console.log(xhttp.response);
        if (xhttp.status === 200) {
            console.log('Success');
            parseResponseFromAPI(xhttp.response);
        }
    }
 
    xhttp.send();
}

function parseResponseFromAPI(response) {

    const JSONresponse = JSON.parse(response);
    const busList = JSONresponse.slice(1);
    console.log(busList);
    
    const newDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    newDiv.appendChild(h2);
    h2.appendChild(document.createTextNode('Results'));

    busList.forEach(busStop => {

        // Creating bus stop name
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(busStop.stopName));
        newDiv.appendChild(h3)

        // Create list
        const ul = document.createElement('ul');
        
        // Populate list
        busStop.buses.forEach(bus => {
            console.log(bus.expectedArrival);
            const timeNow = moment();
            const arriveTime = moment(bus.expectedArrival);
            const duration = moment.utc(arriveTime.diff(timeNow)).format("HH:mm:ss")
            const li = document.createElement('li');
            console.log(duration);
            li.appendChild(document.createTextNode(`${duration}: ${bus.lineId} to ${bus.destination}`));
            ul.appendChild(li);
        });

        newDiv.appendChild(ul);
    });

    document.getElementById('body').appendChild(newDiv);
}

