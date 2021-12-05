// WHEN I open the planner, THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

// WHEN I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future
function blockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click into a time block, THEN I can enter an event

// WHEN I click the save button for that time block, THEN then text for that event is saved in local storage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".task").val();

    localStorage.setItem(time, task);
})

// WHEN I refresh the page, THEN the saved events persist
function workDay () {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);

        console.log(this);
        console.log(currentHour);

        if (currentTask !== null) {
            $(this).siblings(".task").val(currentTask);
        }
    });
}

blockColor();
workDay ();