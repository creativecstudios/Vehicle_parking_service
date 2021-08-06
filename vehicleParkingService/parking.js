function submit() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var contactNumber = document.getElementById("contactNumber");
    var parkingHours = document.getElementById("parkingHours");
    var Vehicletype = document.getElementById("Vehicletype");
    var parkingdate = document.getElementById("parkingdate");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcontactNo = document.getElementById("lblcontactNo");
    var lblparkingHours = document.getElementById("lblparkingHours");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,vehicleNumber,contactNumber,parkingHours,Vehicletype,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvechNumber,lblcontactNo,lblparkingHours,lblvehicleType,lblparkingDate];

    for(var temp = 0; temp < submitarr.length; temp++){
        if(submitarr[temp].value == ""){
            submitarr[temp].style.border = "1px solid red";
            labelarr[temp].style.visibility = "visible";
            return false;
        }
    }
    // if(customerName.value == ""){
    //     customerName.style.border = "1px solid red";
    //     lblcustomerName.style.visibility = "visible";
    //     return false;
    // }
    // else if{
        
    // }
}

function reset(){
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var contactNumber = document.getElementById("contactNumber");
    var parkingHours = document.getElementById("parkingHours");
    var Vehicletype = document.getElementById("Vehicletype");
    var parkingdate = document.getElementById("parkingdate");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcontactNo = document.getElementById("lblcontactNo");
    var lblparkingHours = document.getElementById("lblparkingHours");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,vehicleNumber,contactNumber,parkingHours,Vehicletype,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvechNumber,lblcontactNo,lblparkingHours,lblvehicleType,lblparkingDate];

    for(var temp = 0; temp < submitarr.length; temp++){
            submitarr[temp].style.border = "1px solid grey";
            labelarr[temp].style.visibility = "hidden";
            submitarr[temp].value = "";
        
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
        customerName.style.border = "1px solid green";
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
        address.style.border = "1px solid green";
        lbladdress.style.visibility = "hidden";
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
        vehicleNumber.style.border = "1px solid green";
        lblvechNumber.style.visibility = "hidden";
    }
    
}
function onkeyupContactNumber(){
    var contactNumber = document.getElementById("contactNumber");
    var lblcontactNo = document.getElementById("lblcontactNo");
    if(contactNumber.value == ""){
        contactNumber.style.border = "1px solid red";
        lblcontactNo.style.visibility = "visible";
    }
    else{
        contactNumber.style.border = "1px solid green";
        lblcontactNo.style.visibility = "hidden";
    }
}
function onkeyupParkhours(){
    var parkingHours = document.getElementById("parkingHours");
    var lblparkingHours = document.getElementById("lblparkingHours");
    if(parkingHours.value == ""){
        parkingHours.style.border = "1px solid red";
        lblparkingHours.style.visibility = "visible";
    }
    else{
        parkingHours.style.border = "1px solid green";
        lblparkingHours.style.visibility = "hidden";
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
        Vehicletype.style.border = "1px solid red";
        lblvehicleType.style.visibility = "hidden";
    }
}
function onkeyupParkingDate(){
    var parkingdate = document.getElementById("parkingdate");
    var lblparkingDate = document.getElementById("lblparkingDate");
    if(parkingdate.value == ""){
        parkingdate.style.border = "1px solid red";
        lblparkingDate.style.visibility = "visible";
    }
    else{
        parkingdate.style.border = "1px solid green";
        lblparkingDate.style.visibility = "hidden";
    }
}