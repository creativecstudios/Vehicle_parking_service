$(function(){
    var $vehicleform = $("#vehicleform");

    if($vehicleform.length){
        $vehicleform.validate({
            rules :{
                customername :{
                    required : true
                },
                address :{
                    required : true
                },
                vehiclenumber :{
                    required : true
                },
                checkin : {
                    required : true
                },
                checkout : {
                    required : true
                },
                parkingdate :{
                    required : true
                }

            },
            messages :{
                customername :{
                    required : "customername is required"
                },
                address : {
                    required : "address is required"
                },
                vehiclenumber : {
                    required : "vehicle number is required"
                },
                checkin : {
                    required : "checkin time is required"
                },
                checkout : {
                    required : "checkout time is required"
                },
                parkingdate :{
                    required : "parking date is required"
                }

            }
        })
    }
})
// $("#checkout").change(function(){
//    var checkin =  $("#checkin")
// })x