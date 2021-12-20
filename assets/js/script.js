var timeBlocks = [];
var tasks = [];

var startTime = moment().hour(9).minute(0).seconds(0);
var endTime = moment().hour(17);


while (startTime <= endTime) {
    timeBlocks.push(startTime.clone().format("LT"));
    startTime.add(1, "hours")
}

$("#currentDay").text(moment().format("dddd, MMMM Do"))

var createTimeBlocks = function(event) {
    for ( var i = 0; i < timeBlocks.length; i++) {

        var $form = $("<form>")
        $(".container").append($form)

        var $div = $("<div>", {"class": "row"})
        $($form).append($div)

        var $p = $("<p>", {"class": "hour"})
        .text(timeBlocks[i])
        $($div).append($p)

        var $input = $("<input>").attr({type: "text", class: "time-block"})
        $($div).append($input)

        var $btn = $("<input>").attr({id: "save", type: "submit", class: "saveBtn"})
        $($div).append($btn)
    }
    
    $(".container").on("click", "#save", function(event) {
        var inputVal = {
            inputValue: $('.time-block').val()
        }
        event.preventDefault();
        saveInput(inputVal)
    })
}

var saveInput = function(input) {
    tasks.push(input)
    console.log(tasks)
}

createTimeBlocks();

