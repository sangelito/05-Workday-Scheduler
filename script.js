var todayDate = dayjs().format('dddd, MMM DD YYYY');
$("#currentDay").html(todayDate); 

$(document).ready(function () {
  // listener for click events on the save button. 
    $(".saveBtn").on("click", function () {
      // values from JQuery description 
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      
      //Able to store locally 
      localStorage.setItem(time, text);
    }) 
// TODO: Add code to apply the past, present, or future class to each time
    
function timeTracker(){
      //current number of hours 
      var timeNow = dayjs().hour();
        console.log("timeNow" + timeNow)

      //loop over time blocks
      $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("-")[1]); 

          if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
          }

          else if (blockTime === timeNow){
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
          }

          else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
          }
      })
    }
timeTracker()

// Retrieve info from local storage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

});
