
function onkeyupCustomerName() {
    var customerName = document.getElementById("customerName");
    var lblcustomerName = document.getElementById("lblcustomerName");

    if (customerName.value == "" || customerName.value.replace(/\s/g, "").length <= 0) {
        customerName.style.border = "1px solid red";
        lblcustomerName.style.visibility = "visible";
    }
    else {
        customerName.style.border = "1px solid grey";
        lblcustomerName.style.visibility = "hidden";
    }
}

function onkeyupAddress() {
    var address = document.getElementById("address");
    var lbladdress = document.getElementById("lbladdress");
    if (address.value == "" || address.value.replace(/\s/g, "").length <= 0) {
        address.style.border = "1px solid red";
        lbladdress.style.visibility = "visible";
    }
    else {
        address.style.border = "1px solid grey";
        lbladdress.style.visibility = "hidden";
    }
}

function onkeyupVechicleType() {
    var vehicletype = document.getElementById("vehicletype");

    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;

    var checkintime = checkin.substring(11);
    var checkouttime = checkout.substring(11);

    var totalcost = document.getElementById("totalcost");

    if (checkin != "" && checkout != "") {

        var hour = checkouttime.split(':')[0] - checkintime.split(':')[0];
        var min = checkouttime.split(':')[1] - checkintime.split(':')[1];

        //year 
        var year = checkout.substring(0, 4) - checkin.substring(0, 4);
        if (year < 0) {
            totalcost.innerHTML("checkout year is greater than checkin year");
        }

        //month
        var month = checkout.substring(5, 7) - checkin.substring(5, 7);
        if (month < 0) {
            totalcost.innerHTML("checkout month is greater than checkin month");

        }

        //date
        var date = checkout.substring(8, 10) - checkin.substring(8, 10);
        if (date < 0) {
            totalcost.innerHTML("checkout date is greater than checkin date");
        }

        //time
        var checkintime = checkin.substring(11);
        var checkouttime = checkout.substring(11);

        //hour min
        var hour = checkouttime.split(':')[0] - checkintime.split(':')[0];
        if (hour < 0) {
            totalcost.innerHTML("checkout time is greater than checkin time");
        }
        var min = checkouttime.split(':')[1] - checkintime.split(':')[1];

        if (date > 0) {
            hour = date * 24 + hour;
        }
        if (min < 0) {
            hour--;
            min = 60 + min;
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

        if (vehicletype.value == "Car") {
            totalcost.innerHTML = (hour + "hours : " + min + "mins Total cost = " + (8 * hour + temp));
        }
        else {
            totalcost.innerHTML = (hour + "hours : " + min + "mins Total cost = " + (4 * hour + temp));
        }
    }

}

function onkeyupVehicleNo() {
    var vehicleNumber = document.getElementById("vehicleNumber");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var regex = /^[a-zA-Z]{2}\s[0-9]{2}\s[A-Za-z]{2}\s[0-9]{4}$/;
    if (vehicleNumber.value == "" || vehicleNumber.value.replace(/\s/g, "").length <= 0) {
        vehicleNumber.style.border = "1px solid red";
        lblvechNumber.style.visibility = "visible";
    }
    else if (!regex.test(vehicleNumber.value)) {
        lblvechNumber.innerHTML = "enter valid vehicle number  ex : TN 23 SD 2342";
        lblvechNumber.style.visibility = "visible";
    }
    else {
        vehicleNumber.style.border = "1px solid grey";
        lblvechNumber.style.visibility = "hidden";
    }
}


function validation() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var Vehicletype = document.getElementById("vehicletype");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");

    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblcheckout = document.getElementById("lblcheckout");

    var submitarr = [customerName, address, Vehicletype, vehicleNumber, checkin, checkout];
    var labelarr = [lblcustomerName, lbladdress, lblvehicleType, lblvechNumber, lblcheckin, lblcheckout];
    var regex = /^[a-zA-Z]{2}\s[0-9]{2}\s[A-Za-z]{2}\s[0-9]{4}$/;

    for (var temp = 0; temp < submitarr.length; temp++) {
        if (submitarr[temp].value == "") {
            submitarr[temp].style.border = "1px solid red";
            labelarr[temp].style.visibility = "visible";
            return false;
        }
        else {
            submitarr[temp].style.border = "1px solid grey";
        }
    }
    if (!regex.test(vehicleNumber.value) && vehicleNumber.value != "") {
        vehicleNumber.style.border = "1px solid red";
        lblvechNumber.innerHTML = "enter valid vehicle number *tn 23 er 2342";
        lblvechNumber.style.visibility = "visible";
        return false;
    }
    return true;
}

function submit() {
    var temp = validation();

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


    console.log(typeof(temp));
    if (temp == true) {

        alert("submited");
        var forminputs = {
            "customername": document.getElementById("customerName").value,
            "address": document.getElementById("address").value,
            "vehicletype": vehicletype,
            "vehiclenumber": document.getElementById("vehicleNumber").value,
            "checkin": checkin,
            "checkout": checkout,
            "totalhours": hour,
            "totalcost": totalcost
        };
        $.ajax({
            url: "http://localhost:8080/vehi/",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(forminputs),
            contentType: "application/json",
            async: true,
            success: function (data) {
                forminputs = data;
                console.log(forminputs);
            }
        })
       
    }
}

function reset() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var vehicletype = document.getElementById("vehicletype");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvehicletype = document.getElementById("lblvehicletype");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblckeckout = document.getElementById("lblcheckout");
    document.getElementById("totalcost").style.visibility = "hidden";

    var submitarr = [customerName, address, vehicletype, vehicleNumber, checkin, checkout];
    var labelarr = [lblcustomerName, lbladdress, lblvehicletype, lblvechNumber, lblcheckin, lblckeckout];


    for (var temp = 0; temp < submitarr.length; temp++) {
        submitarr[temp].innerHTML = "";
        submitarr[temp].style.border = "1px solid grey";
        labelarr[temp].style.visibility = "hidden";
    }

}

//table form db
window.addEventListener('load', () => {

    $.ajax({

        url: "http://localhost:8080/vehi",
        type: "GET",
        datatype: "json",
        columns: [{
            "id": "id",
            "customername": "customername",
            "address": "address",
            "vehicletype": "vehicletype",
            "vehiclenumber": "vehiclenumber",
            "checkin": "checkin",
            "checkout": "checkout",
            "totalhours": "totalhours",
            "totalcost": "totalcost"
        }],

        success: function (columns) {

            // console.log(columns);
            let temp = 0;
            let i = 0;
            let len = columns.length;
            while (temp < len) {

                var table = document.getElementById("vehicletable").getElementsByTagName('tbody')[0];

                var newRow = table.insertRow(-1);

                cell1 = newRow.insertCell(0);
                cell1.innerHTML = ++i;

                cell2 = newRow.insertCell(1);
                cell2.innerHTML = columns[temp].customername;

                cell3 = newRow.insertCell(2);
                cell3.innerHTML = columns[temp].address;

                cell4 = newRow.insertCell(3);
                cell4.innerHTML = columns[temp].vehicletype;

                cell5 = newRow.insertCell(4);
                cell5.innerHTML = columns[temp].vehiclenumber;

                cell6 = newRow.insertCell(5);
                cell6.innerHTML = columns[temp].checkin;

                cell7 = newRow.insertCell(6);
                cell7.innerHTML = columns[temp].checkout;

                cell8 = newRow.insertCell(7);
                // let expdate = new Date(columns[i].expirydate).toDateString().substring(4);
                cell8.innerHTML = columns[temp].totalhours;

                cell9 = newRow.insertCell(8);
                cell9.innerHTML = columns[temp].totalcost;

                cell10 = newRow.insertCell(9);
                cell10.innerHTML = `<i class = 'fas fa-pencil-alt' onclick='tableobj(this)'></i>`;

                cell11 = newRow.insertCell(10);
                cell11.innerHTML = columns[temp].id;

                cell11.style.display = "none";

                temp++;
            }

            var dtt = $("#vehicletable").DataTable({
                "dom": 'lfrtip',
                "searching": true,
                "lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],
                "responsive": true,
                "oLanguage": {
                    "oPaginate": {
                        "sNext": '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
                        "sPrevious": '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>'
                    },
                    "sPaginationType": "full_numbers",
                    "iDisplayLength": 3
                },

            });
            $("#category").on("change", function () {
                dtt.columns(1).search(this.value).draw();
            })

        },
        error: function (e) {

            console.log(e);
        }

    });
})
function tableobj(thisafs) {
    var updatebtn = document.getElementById("update");
    update.style.visibility = "visible";
    var obj = $(thisafs).parent().siblings('td').eq(9).text();
    sessionStorage.setItem('upobj', obj);
    window.location = "update.html";
    console.log(obj);
}



