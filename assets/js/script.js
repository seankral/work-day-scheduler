var timeBlocks = [];
var tasks = ["", "", "", "", "", "", "", "", ""];

var startTime = moment().hour(9).minute(0).seconds(0);
var endTime = moment().hour(17);


while (startTime <= endTime) {
    timeBlocks.push(startTime.clone().format("LT"));
    startTime.add(1, "hours")
}

$("#currentDay").text(moment().format("dddd, MMMM Do"))

var createTimeBlocks = function(event) {
    for ( var i = 0; i < timeBlocks.length; i++) {

        var $form = $("<form>").attr({data: i})
        $(".container").append($form)

        var $div = $("<div>", {"class": "row"})
        $($form).append($div)

        var $p = $("<p>", {"class": "hour"})
        .text(timeBlocks[i])
        $($div).append($p)

        var $input = $("<input>").attr({type: "text", class: "time-block"})
        $($div).append($input)

        var $btn = $("<input>").attr({id: "save", type: "submit", class: "saveBtn", data: i})
        $($div).append($btn)
    }

    debugger;

    loadTasks();
    
    $(".container").on("click", "#save", function(event) {
        
            var inputVal = {
                inputValue: document.forms[($(this).attr("data"))].elements[0].value
            };
        event.preventDefault();
        saveInput(inputVal, $(this).attr("data"));
    })

}

var saveInput = function(input, dataId) {
    console.log(tasks[dataId])
    
    if (localStorage.getItem('tasks') === null) {
        var inputVal = {
            task: input
        };
        tasks[dataId] = inputVal;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    else {
        tasks = localStorage.getItem('tasks')

        tasks = JSON.parse(tasks)

        var inputVal = {
            task: input
        }
        tasks[dataId] = inputVal;
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(tasks)
}


createTimeBlocks();

//loadTasks();

