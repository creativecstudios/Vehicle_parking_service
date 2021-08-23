//update
window.addEventListener('load', () => {
    var fromtable = sessionStorage.getItem('upobj');
    console.log(fromtable);

    $.ajax({
        url: "http://localhost:8080/vehi/" + fromtable,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            document.getElementById("customerName").value = data.customername;
            document.getElementById("address").value = data.address;
            document.getElementById("vehicletype").value = data.vehicletype;
            document.getElementById("vehicleNumber").value = data.vehiclenumber;
            document.getElementById("checkin").value = data.checkin;
            document.getElementById("checkout").value = data.checkout;
            document.getElementById("id").value = data.id;
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    })
})

function update() {
console.log("clicked");
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();

    var vehicletype = $('#vehicletype').val();

    var checkintime = checkin.substring(11);
    var checkouttime = checkout.substring(11);


    var hour = checkouttime.split(':')[0] - checkintime.split(':')[0];
    var min = checkouttime.split(':')[1] - checkintime.split(':')[1];

    //date
    var date = checkout.substring(8, 10) - checkin.substring(8, 10);

    if (min < 0) {
        hour--;
        min = 60 + min;
    }
    if (date > 0) {
        hour = date * 24 + hour;
    }

    var temp = 0;
    if (min > 0 && min <= 15) {
        temp = 1;
    }
    if (min > 15 && min <= 30) {
        temp = 2;
    }
    if (min > 30 && min <= 45) {
        temp = 3;
    }
    if (min > 45 && min <= 59) {
        temp = 4;
    }
    var totalcost = 0;

    if (vehicletype.value == "Car") {
        totalcost = 8 * hour + temp;

    }
    else {
        totalcost = 4 * hour + temp;

    }
    var updateinputs = {
        "id" : document.getElementById("id").value,
        "customername": document.getElementById("customerName").value,
        "address": document.getElementById("address").value,
        "vehicletype": vehicletype,
        "vehiclenumber": document.getElementById("vehicleNumber").value,
        "checkin": checkin,
        "checkout": checkout,
        "totalhours": hour,
        "totalcost": totalcost
    }
    $.ajax({
        url: "http://localhost:8080/vehi/",
        type: "PUT",
        dataType: "json",
        data: JSON.stringify(updateinputs),
        contentType: "application/json",
        success: function (data) {
            console.log(data);
        },
        error: function (e) {
            console.log(e);
        }

    })
}
