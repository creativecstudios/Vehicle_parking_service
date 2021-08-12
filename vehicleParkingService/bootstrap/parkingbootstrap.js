
function submit() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var Vehicletype = document.getElementById("Vehicletype");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var parkingdate = document.getElementById("parkingdate");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvehicleType = document.getElementById("lblvehicleType");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,Vehicletype,vehicleNumber,checkin,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvehicleType,lblvechNumber,lblcheckin,lblparkingDate];

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
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    var parkingdate = document.getElementById("parkingdate");
    var vehicletype = document.getElementById("vehicletype").value;
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblparkingDate = document.getElementById("lblparkingDate");

    document.getElementById("totalcost").style.visibility = "hidden";

    var submitarr = [customerName,address,Vehicletype,vehicleNumber,checkin,checkout,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvehicleType,lblvechNumber,lblparkingHours,lblparkingDate];

 
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
    var checkin = document.getElementById("checkin");
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
    // var car = document.getElementById("car").value;
    // var bike = document.getElementById("bike").value;
    var Vehicletype = document.getElementById("vehicletype").value;
    var totalcost = document.getElementById("totalcost");
    totalcost.style.visibility = "visible";
    var hour = checkout.split(':')[0] - checkin.split(':')[0];
    var min = checkout.split(':')[1] - checkin.split(':')[1];
    
   //min = min.toString().length < 2 ? '0' + min : min;
    if(min < 0){
        hour--;
        min = 60 + min; 
    }
   // hour = hour.toString().length < 2
    if(Vehicletype.value == "Car"){
        document.getElementById("totalcost").innerHTML ="Total hours = "+ hour +" : "+min + " Total cost = "+ 5 * hour;
    }else{
        document.getElementById("totalcost").innerHTML ="Total hours = "+ hour +" : "+min + " Total cost = "+ 3 * hour;
    
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