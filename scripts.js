function showDescription() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films');
    request.onload = function () {
        var data = JSON.parse(this.response);
		var paragraph = document.getElementById("movieList");
        if (request.status = 200) {
            paragraph.innerText = "LIST:";
            for (let film of data) {
                console.log(film.title)
                paragraph.innerText += '\n'+film.title
            }
        } else {
            paragraph.innerText = "ERROR";
			paragraph.classList.add("error");
        }
    }
    request.send();
}

function pickVehicleFromMovie() {
    var e = document.getElementById("selected");
    var vehicleId = e.options[e.selectedIndex].value;
	var paragraph = document.getElementById("description");
	
    if (vehicleId == 'empty') {
        paragraph.innerText = "Pick vehicle from movie and see description"
        paragraph.classList.remove("error");
        paragraph.classList.remove("descriptionVehicle");
    } else {
		paragraph.classList.add("descriptionVehicle");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://ghibliapi.herokuapp.com/vehicles/?id='+vehicleId);
        request.onload = function () {
            var data = JSON.parse(this.response);
            if (request.status = 200) {
                paragraph.innerText = data[0].description;
				paragraph.classList.add("descriptionVehicle");
            } else {
                paragraph.innerText = "ERROR"
				paragraph.classList.add("error");
            }
        }
        request.send();
    }
}
