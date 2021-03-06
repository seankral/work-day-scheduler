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

    tasks = JSON.parse(localStorage.getItem("tasks"))

    console.log(tasks)

    for ( var i = 0; i < timeBlocks.length; i++) {

        var $form = $("<form>").attr({data: i})
        $(".container").append($form)

        var $div = $("<div>", {"class": "row"})
        $($form).append($div)

        var $p = $("<p>", {"class": "hour"})
       .text(timeBlocks[i])
        $($div).append($p)

        if (tasks !== null) {
            var $input = $("<input>").attr({value: tasks[i], type: "text", class: "time-block"})
            $($div).append($input)
        } else {
            var $input = $("<input>").attr({type: "text", class: "time-block"})
            $($div).append($input)
        }

        var $btn = $("<input>").attr({id: "save", type: "submit", class: "saveBtn", data: i})
        $($div).append($btn)
    }
    
    $(".container").on("click", "#save", function(event) {
        
            var inputVal = {
                inputValue: document.forms[($(this).attr("data"))].elements[0].value
            };
        event.preventDefault();
        saveInput(inputVal, $(this).attr("data"));
    })

}

var saveInput = function(input, dataId) {
    //console.log(tasks[dataId])
    if (tasks === null) {
        tasks = ["", "", "", "", "", "", "", "", ""]
    }

    if (localStorage.getItem('tasks') === null) {
        tasks[dataId] = input.inputValue;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    else {
        tasks = localStorage.getItem('tasks')

        tasks = JSON.parse(tasks)


        tasks[dataId] = input.inputValue;
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
}

createTimeBlocks();

//loadTasks();

