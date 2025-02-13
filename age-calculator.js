const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const allFields = document.querySelectorAll(".wrong");
const caps = document.querySelectorAll(".upperCase")
const button = document.getElementById("arrow");
const yearDisplay = document.getElementById("year-display");
const monthDisplay = document.getElementById("month-display");
const dayDisplay = document.getElementById("day-display");
const displayBlocs = document.querySelectorAll(".display");
const resetBtn = document.getElementById("reset");
const dayMsg = document.getElementById("day-msg");
const msg = document.querySelectorAll(".msg");




button.addEventListener("click", () => {
    let numbers = /^\d{1}[0-9]?/g;
    let numbers2 = /^\d{4}/g;

    if((numbers.test(day.value && month.value)) && 
    (day.value <= 31 && day.value >= 1) && 
    (month.value <= 12 && month.value >= 1) && 
    numbers2.test(year.value) && 
    (year.value <= 2025 && year.value >= 1875)) {
        
        allFields.forEach(value => {
            value.classList.remove("red");
        })
       caps.forEach(value => {
        value.classList.remove("wrongSpan");
       })
       msg.forEach(value => {
        value.classList.remove("wrongSpan");
       })


       let today = new Date();
       

       let ageYears = today.getFullYear() - parseInt(year.value);
       let ageMonths = today.getMonth() + 1 - parseInt(month.value);
       let ageDays = today.getDate() -1 - parseInt(day.value);


       if(ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
       }

       if(ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
       }

       year.value = "";
       month.value = "";
       day.value = "";
       yearDisplay.value = ageYears;
       monthDisplay.value = ageMonths;
       dayDisplay.value = ageDays;

    }else {
        allFields.forEach(value => {
            value.classList.toggle("red");
        })
       caps.forEach(value => {
        value.classList.toggle("wrongSpan");
       })
       msg.forEach(value => {
        value.classList.toggle("wrongSpan");
       })
       
    }
})


resetBtn.addEventListener("click", () => {
    yearDisplay.value = "";
    monthDisplay.value = "";
    dayDisplay.value = "";
})


