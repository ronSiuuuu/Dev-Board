const Taskbtn = document.querySelectorAll('.btn-primary');

let task =0;
for (let i =0;i<Taskbtn.length;i++){
    const btn = Taskbtn[i];
    btn.addEventListener('click',function(event){
       
task++;
alert('Board Update Successfully');


const TaskAssigned = document.getElementById('Task-assigned').innerText;
const convertedTaskAssigned = parseInt (TaskAssigned);

const TaskCompleted = document.getElementById('Task-completed').innerText;
const convertedTaskCompleted = parseInt (TaskCompleted);

document.getElementById('Task-completed').innerText = Math.abs(convertedTaskCompleted+task);

let TaskAssignedDone = document.getElementById('Task-assigned').innerText = Math.abs(convertedTaskAssigned-task);

btn.classList.add('btn-disabled');
const completedTime = new Date().toLocaleTimeString();
console.log(completedTime);

let parent = event.target.parentElement.parentElement;

let title = parent.children[1].innerText;
const activityLog = document.getElementById('activityLog-container');
let history = document.createElement ('p');
history.innerText = ` You have Completed The Task ${title} at ${completedTime}
                    
`
history.classList.add('bg-slate-100', 'p-2', 'rounded-md');
activityLog.appendChild(history);

if (TaskAssignedDone===0){
    alert('Congrats! you have done all task successfully');
}


task--;




    })
}



 document.getElementById('clear-btn').addEventListener('click',function(event){
    const activityLog = document.getElementById('activityLog-container');
    activityLog.innerText = " ";


})

document.getElementById('theme-btn').addEventListener('click', function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256); 
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    
});

document.getElementById('Discover').addEventListener('click',function(){
    window.location.href = "Feq.html";
})
 
const parentDate = document.getElementById('date');
const UpdatedDate = document.createElement('p');
const currentDate =  new Date ().toDateString().split(' ');
const day = document.createTextNode(currentDate[0]);
const br = document.createElement('br');
const rest = document.createTextNode(`${currentDate[1]} ${currentDate[2]} ${currentDate[3]}`)

UpdatedDate.appendChild(day);
UpdatedDate.appendChild(br);
UpdatedDate.appendChild(rest);
parentDate.appendChild(UpdatedDate);

