//current date
$("#currentMoment").text(moment().format("MMMM Do, YYYY"));

//function save text area input
function saveInput() {
  //get id of parent (time block)
  let hour = $(this).parent().attr("id");
  //get value of children (text) of parent (time block)
  let task = $(this).children("textarea").val();
  //send both event and time of event to local storage
  localStorage.setItem(hour, task);
}

//pasrse int data to use in loop

//time reflect past, present, and future
//create call back function, using a loop, for each time block in the array
//first, make sure the blocks align with the current time
function changeTime() {
  let currentTime = moment().hour();
  //create loop, and select id
  $(".taskBlock").each(function () {
    const block = $(this);
    const blockTime = block.data("hour");
    if (blockTime < currentTime) {
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).addClass("present");
    } else {
      blockTime > currentTime;
      $(this).addClass("future");
    }
  });
}

//retrieve tasks from lcoal storage
$("#hour9 .taskBlock").val(localStorage.getItem("hour9"));
$("#hour10 .taskBlock").val(localStorage.getItem("hour10"));
$("#hour11 .taskBlock").val(localStorage.getItem("hour11"));
$("#hour12 .taskBlock").val(localStorage.getItem("hour12"));
$("#hour1 .taskBlock").val(localStorage.getItem("hour1"));
$("#hour2 .taskBlock").val(localStorage.getItem("hour2"));
$("#hour3 .taskBlock").val(localStorage.getItem("hour3"));
$("#hour4 .taskBlock").val(localStorage.getItem("hour4"));
$("#hour5 .taskBlock").val(localStorage.getItem("hour5"));

//event listeners
$(".saveBtn").on("click", saveInput);

//run function to align with color change
changeTime();
