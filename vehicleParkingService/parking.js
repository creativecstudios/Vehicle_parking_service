function submit() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var Vehicletype = document.getElementById("Vehicletype");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    var parkingdate = document.getElementById("parkingdate");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblckeckin");
    var lblcheckout = document.getElementById("lblckeckout");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,Vehicletype,vehicleNumber,checkin,checkout,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvehicleType,lblvechNumber,lblcheckin,lblcheckout,lblparkingDate];

    for(var temp = 0; temp < submitarr.length; temp++){
        if(submitarr[temp].value == ""){
            submitarr[temp].style.border = "1px solid red";
            labelarr[temp].style.visibility = "visible";
            return false;
        }
    }
}

 

function reset(){
    //inputfields 
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var Vehicletype = document.getElementById("Vehicletype");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    var parkingdate = document.getElementById("parkingdate");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblckeckout = document.getElementById("lblckeckout");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,Vehicletype,vehicleNumber,checkin,checkout,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvehicleType,lblvechNumber,lblcheckin,lblckeckout,lblparkingDate];

    for(var temp = 0; temp < submitarr.length; temp++){
            submitarr[temp].value = "";
            submitarr[temp].style.border = "1px solid grey";
            labelarr[temp].style.visibility = "hidden";
    }

}


function onkeyupCustomerName(){
    var customerName = document.getElementById("customerName");
    var lblcustomerName = document.getElementById("lblcustomerName");
    if(customerName.value == ""){
        customerName.style.border = "1px solid red";
        lblcustomerName.style.visibility = "visible";
    }
    else{
        customerName.style.border = "1px solid grey";
        lblcustomerName.style.visibility = "hidden";
    }
}
function onkeyupAddress(){
    var address = document.getElementById("address");
    var lbladdress = document.getElementById("lbladdress");
    if(address.value == ""){
        address.style.border = "1px solid red";
        lbladdress.style.visibility = "visible";
    }
    else{
        address.style.border = "1px solid grey";
        lbladdress.style.visibility = "hidden";
    }
}
function onkeyupVechicleType(){
    var Vehicletype = document.getElementById("Vehicletype");
    var lblvehicleType = document.getElementById("lblvehicleType");
    if(Vehicletype.value == ""){
        Vehicletype.style.border = "1px solid red";
        lblvehicleType.style.visibility = "visible";
    }
    else{
        Vehicletype.style.border = "1px solid grey";
        lblvehicleType.style.visibility = "hidden";
    }
}
function onkeyupVehicleNo(){
    var vehicleNumber = document.getElementById("vehicleNumber");
    var lblvechNumber = document.getElementById("lblvechNumber");
    if(vehicleNumber.value == ""){
        vehicleNumber.style.border = "1px solid red";
        lblvechNumber.style.visibility = "visible";
    }
    else{
        vehicleNumber.style.border = "1px solid grey";
        lblvechNumber.style.visibility = "hidden";
    }
    
}

function onkeyupcheckin(){
    var checkin = document.getElementById("checkin");
    var lblcheckin = document.getElementById("lblcheckin");

    if(checkin.value == "" || checkin.value == 0){
        checkin.style.border = "1px solid red";
        lblcheckin.style.visibility = "visible";
    }
    else{
        checkin.style.border = "1px solid grey";
        lblcheckin.style.visibility = "hidden";
    }
}

function onkeyupcheckout(){
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var vehicletype = document.getElementById("Vehicletype");

    var hours = checkout.split(':')[0] - checkin.split(':')[0];
    var min = checkout.split(':')[1] - checkin.split(':')[1];

    if(min < 0){
        hours--;
        min = 60 + min;
    }

    if(vehicletype.value == "Car"){
        document.getElementById("totalcost").innerHTML = "Total hours = " + hours +' : '+ min + " Total cost is "+ 5 * hours;
    }
    else{
        document.getElementById("totalcost").innerHTML = "Total hours = " + hours +' : '+ min + " Total cost is "+ 3 * hours;
    }

}
function onkeyupParkingDate(){
    var parkingdate = document.getElementById("parkingdate");
    var lblparkingDate = document.getElementById("lblparkingDate");
    if(parkingdate.value == ""){
        parkingdate.style.border = "1px solid red";
        lblparkingDate.style.visibility = "visible";
    }
    else if(parkingdate.value != ""){
        parkingdate.style.border = "1px solid grey";
        lblparkingDate.style.visibility = "hidden";
    }
}