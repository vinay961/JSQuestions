$(document).ready(function(){
    const taskInput = $('#taskInput');
    const taskList = $('#taskList');

    $('#addTaskBtn').on("click",function(){
        const taskText = taskInput.val().trim();

        if(taskList === ''){
            alert("Please Enter a Task");
            return;
        }
        const newTask = `
        <li>
            <span>${taskText}</span>
            <button class="btn delete">Delete</button>
        </li>
        `;

        taskList.append(newTask);
        taskInput.val('');
    })

    taskList.on('click', 'span', function () {  // event deligation --> taskList is parentSelector while span is child selector within parentSelector.
        $(this).parent().toggleClass('completed');
    });

    taskList.on('click', '.delete', function () {
        $(this).parent().remove();
    });
    $('#clearCompletedBtn').on('click', function () {
        $('li.completed').remove();
    });
})