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

        var $input = $("<input>").attr({type: "text", class: "time-block", data: [i]})
        $($div).append($input)

        var $btn = $("<input>").attr({id: "save", type: "submit", class: "saveBtn", data: [i]})
        $($div).append($btn)
    }
    
    $(".container").on("click", "#save", function(event) {
        //console.log($(this).attr("data"))
        if ($(this).attr("data") === $('.time-block').attr("data")) {
            var inputVal = {
                inputValue: $('.time-block').val(),
                dataId: $('.time-block').attr('data')
        }

        
        }
        event.preventDefault();
        saveInput(inputVal)
    })
}

var saveInput = function(input) {
    console.log(input)
    
    if (localStorage.getItem('tasks') === null) {
        var inputVal = {
            task: input
        };
        tasks.push(inputVal)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    else {
        tasks = localStorage.getItem('tasks')

        tasks = JSON.parse(tasks)

        var inputVal = {
            input: input
        }
        tasks.push(inputVal)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
}



createTimeBlocks();

