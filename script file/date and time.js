function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
   date_time = document.getElementById("datetime")
   date_time.innerHTML = `
   <span class="date font-semibold">${date}
   <br></span>${time}
   `;
}
setInterval(updateDateTime, 1000);
updateDateTime();