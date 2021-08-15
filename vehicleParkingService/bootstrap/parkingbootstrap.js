function submit() {
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var Vehicletype = document.getElementById("vehicletype");
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
    var lblcheckout = document.getElementById("lblcheckout");
    var lblparkingDate = document.getElementById("lblparkingDate");

    var submitarr = [customerName,address,Vehicletype,vehicleNumber,checkin,checkout,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvehicleType,lblvechNumber,lblcheckin,lblcheckout,lblparkingDate];

    if(checkout.value < checkin.value){
        lblcheckout.innerHTML = "Negative values are not allowed";
        lblcheckout.style.visibility = "visible";
        checkout.style.border = "1px solid red";
        return false;
    }
    
    for(var temp = 0; temp < submitarr.length; temp++){
        if(submitarr[temp].value == ""){
            submitarr[temp].style.border = "1px solid red";
            labelarr[temp].style.visibility = "visible";
            return false;
        }
    }
    alert("submitted successfully");
}

function reset(){
    //inputfields
    var customerName = document.getElementById("customerName");
    var address = document.getElementById("address");
    var vehicleNumber = document.getElementById("vehicleNumber");
    var checkin = document.getElementById("checkin");
    var checkout = document.getElementById("checkout");
    var parkingdate = document.getElementById("parkingdate");
    var vehicletype = document.getElementById("vehicletype");
    //labels
    var lblcustomerName = document.getElementById("lblcustomerName");
    var lbladdress = document.getElementById("lbladdress");
    var lblvechNumber = document.getElementById("lblvechNumber");
    var lblcheckin = document.getElementById("lblcheckin");
    var lblckeckout = document.getElementById("lblcheckout");
    var lblparkingDate = document.getElementById("lblparkingDate");
    var lblvehicletype = document.getElementById("lblvehicletype")
    document.getElementById("totalcost").style.visibility = "hidden";

    var submitarr = [customerName,address,vehicletype,vehicleNumber,checkin,checkout,parkingdate];
    var labelarr = [lblcustomerName,lbladdress,lblvechNumber,lblcheckin,lblckeckout,lblparkingDate,lblvehicletype];

 
    for(var temp = 0; temp < submitarr.length; temp++){
            submitarr[temp].value = "";
            submitarr[temp].style.border = "1px solid grey";
            labelarr[temp].style.visibility = "hidden";
    }

}

function onkeyupCustomerName(){
    var customerName = document.getElementById("customerName");
    var lblcustomerName = document.getElementById("lblcustomerName");
    
    if(customerName.value == "" || customerName.value.replace(/\s/g,"").length <= 0)  {
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
    if(address.value == "" || address.value.replace(/\s/g,"").length <= 0){
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
    if(vehicleNumber.value == "" || vehicleNumber.value.replace(/\s/g,"").length <= 0){
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

    var Vehicletype = document.getElementById("vehicletype").value;
    var totalcost = document.getElementById("totalcost");
    totalcost.style.visibility = "visible";
    var lblcheckout = document.getElementById("lblcheckout");

    var hour = checkout.split(':')[0] - checkin.split(':')[0];
    var min = checkout.split(':')[1] - checkin.split(':')[1];
   
    var dummy = document.getElementById("checkout");
    if(checkout == "" || checkout == 0){
        dummy.style.border = "1px solid red";
        lblcheckout.style.visibility = "visible";
    }else{
        dummy.style.border = "1px solid grey";
        lblcheckout.style.visibility = "hidden";
    }
    if(checkout != "" && hour < 0){
        lblcheckout.innerHTML = "Negative values not allowed";
        lblcheckout.style.visibility = "visible";
        dummy.style.border = "1px solid red";
    }
    if(hour > 0){
        dummy.style.border = "1px solid grey";
        lblcheckout.style.visibility = "hidden";
    }
   

    var temp = 0;
    if(min < 0){
        hour--;
        min = 60 + min; 
    }
    if(min > 0  && min <= 15){
        temp = 1;
    }
    if(min >= 16 && min <= 30){
        temp = 2;
    }
    if(min >= 31 && min <= 45){
        temp = 3;
    }
    if(min >= 46 && min <= 59){
        temp = 4;
    }
    
   // hour = hour.toString().length < 2
    if(Vehicletype == "Car"){
        document.getElementById("totalcost").innerHTML ="Total hours = "+ hour +" hours : "+min +" mins & Total cost = "+  (temp * 2 + hour * 8)  ;
    }
    if(Vehicletype == "Bike"){
        document.getElementById("totalcost").innerHTML ="Total hours = "+ hour +" hours : "+min + "mins & Total cost = "+ (hour * 4 + temp) ;
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


