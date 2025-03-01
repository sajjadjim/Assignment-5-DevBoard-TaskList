// button 1 complete toggole button
document
  .getElementById("btn-complete1")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 1 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
  <div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
      You have Completed The Task <span class="font-semibold">Fix Mobile Button Issue</span> at ${time}
  </div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete1").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });

// button 2 complete toggole button
document
  .getElementById("btn-complete2")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 2 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
<div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
    You have Completed The Task <span class="font-semibold">Add Dark Mode</span> at ${time}
</div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete2").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });

// button 3 complete toggole button
document
  .getElementById("btn-complete3")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 3 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
  <div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
      You have Completed The Task <span class="font-semibold">Optimize Home page</span> at ${time}
  </div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete3").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });

// button 4 complete toggole button
document
  .getElementById("btn-complete4")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 4 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
<div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
    You have Completed The Task <span class="font-semibold">Add new emoji 🤲</span> at ${time}
</div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete4").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });

// button 5 complete toggole button
document
  .getElementById("btn-complete5")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 5 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
  <div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
      You have Completed The Task <span class="font-semibold">Integrate OpenAI API  </span> at ${time}
  </div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete5").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });

// button 5 complete toggole button
document
  .getElementById("btn-complete6")
  .addEventListener("click", function (event) {
    const count_number = document.getElementById("count-number").innerText;
    //   new converted number
    const convert_new_number = parseInt(count_number);
    const new_update_number = convert_new_number - 1;
    document.getElementById("count-number").innerText = new_update_number;
    // total task calculation part
    const total_task = document.getElementById("total-task").innerText;
    const total_task_converted = parseInt(total_task);
    // Update the Total task Value
    const new_update_total_task = total_task_converted + 1;
    document.getElementById("total-task").innerText = new_update_total_task;
    alert("Welcome Task 6 completed !!!");
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    p.classList.add("rounded-xl", "mt-1");

    p.innerHTML = `
<div class="bg-[#F4F7FF] rounded-lg p-3 mt-[20px] opacity-60">
    You have Completed The Task <span class="font-semibold">Improve Job searching </span> at ${time}
</div>
`;
    container.appendChild(p);
    // disable Part here
    document.getElementById("btn-complete6").style.backgroundColor = "#bebef4";
    this.disabled = true;
    checkCompletion();
  });
/////////////////////////////////////////////////////////////////////
// Check the All Task are complete
let task_Complete = 0; // Track completed tasks

function checkCompletion() {
  task_Complete++;

  if (task_Complete === 6) {
    alert("All tasks are successfully completed! Congratulation🎉🎉");
  }
}
