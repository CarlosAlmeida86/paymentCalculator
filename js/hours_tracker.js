function calculatePayment() {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    let totalDiff = 0;
    for (const day of days) {
        for (let i = 1; i <= 5; i++) {
            const start = new Date(`1970-01-01 ${document.getElementById(`${day}Start${i}`).value}`);
            const end = new Date(`1970-01-01 ${document.getElementById(`${day}End${i}`).value}`);
            totalDiff += end - start;
        }
    }

    const totalPayment = (totalDiff / 1000 / 60 / 60) * document.getElementById("payment").value;
    localStorage.setItem("totalPayment", totalPayment);
    document.getElementById("totalPayment").innerText = totalPayment;
}

function calculateWeeklyHours() {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const weeks = [1, 2, 3, 4, 5];
    for (const week of weeks) {
        let totalDiff = 0;
        for (const day of days) {
            const start = new Date(`1970-01-01 ${document.getElementById(`${day}Start${week}`).value}`);
            const end = new Date(`1970-01-01 ${document.getElementById(`${day}End${week}`).value}`);
            totalDiff += end - start;
        }
        const totalHours = totalDiff / 1000 / 60 / 60;
        console.log(`Week ${week}: ${totalHours} hours`);
        document.getElementById(`week${week}Hours`).innerHTML = `Week ${week}: ${totalHours} hours`;
    }
}


// Reset weeks

// <button id="resetWeek1">Reset Week 1</button>
const resetWeek1Button = document.getElementById("resetWeek1");
resetWeek1Button.addEventListener("click", function () {
    const week1StartInputs = [
        document.getElementById("monStart1"),
        document.getElementById("tueStart1"),
        document.getElementById("wedStart1"),
        document.getElementById("thuStart1"),
        document.getElementById("friStart1"),
        document.getElementById("satStart1"),
        document.getElementById("sunStart1"),
    ];

    const week1EndInputs = [
        document.getElementById("monEnd1"),
        document.getElementById("tueEnd1"),
        document.getElementById("wedEnd1"),
        document.getElementById("thuEnd1"),
        document.getElementById("friEnd1"),
        document.getElementById("satEnd1"),
        document.getElementById("sunEnd1"),
    ];

    for (let i = 0; i < week1StartInputs.length; i++) {
        week1StartInputs[i].value = "";
        week1EndInputs[i].value = "";
    }

    calculatePayment();
});

// <button id="resetWeek2">Reset Week 2</button>
const resetWeek2Button = document.getElementById("resetWeek2");
resetWeek2Button.addEventListener("click", function () {
    const week2StartInputs = [
        document.getElementById("monStart2"),
        document.getElementById("tueStart2"),
        document.getElementById("wedStart2"),
        document.getElementById("thuStart2"),
        document.getElementById("friStart2"),
        document.getElementById("satStart2"),
        document.getElementById("sunStart2"),
    ];

    const week2EndInputs = [
        document.getElementById("monEnd2"),
        document.getElementById("tueEnd2"),
        document.getElementById("wedEnd2"),
        document.getElementById("thuEnd2"),
        document.getElementById("friEnd2"),
        document.getElementById("satEnd2"),
        document.getElementById("sunEnd2"),
    ];

    for (let i = 0; i < week2StartInputs.length; i++) {
        week2StartInputs[i].value = "";
        week2EndInputs[i].value = "";
    }

    calculatePayment();
});

// <button id="resetWeek3">Reset Week 3</button>
const resetWeek3Button = document.getElementById("resetWeek3");
resetWeek3Button.addEventListener("click", function () {
    const week3StartInputs = [
        document.getElementById("monStart3"),
        document.getElementById("tueStart3"),
        document.getElementById("wedStart3"),
        document.getElementById("thuStart3"),
        document.getElementById("friStart3"),
        document.getElementById("satStart3"),
        document.getElementById("sunStart3"),
    ];

    const week3EndInputs = [
        document.getElementById("monEnd3"),
        document.getElementById("tueEnd3"),
        document.getElementById("wedEnd3"),
        document.getElementById("thuEnd3"),
        document.getElementById("friEnd3"),
        document.getElementById("satEnd3"),
        document.getElementById("sunEnd3"),
    ];

    for (let i = 0; i < week3StartInputs.length; i++) {
        week3StartInputs[i].value = "";
        week3EndInputs[i].value = "";
    }

    calculatePayment();
});

// <button id="resetWeek4">Reset Week 4</button>
const resetWeek4Button = document.getElementById("resetWeek4");
resetWeek4Button.addEventListener("click", function () {
    const week4StartInputs = [
        document.getElementById("monStart4"),
        document.getElementById("tueStart4"),
        document.getElementById("wedStart4"),
        document.getElementById("thuStart4"),
        document.getElementById("friStart4"),
        document.getElementById("satStart4"),
        document.getElementById("sunStart4"),
    ];

    const week4EndInputs = [
        document.getElementById("monEnd4"),
        document.getElementById("tueEnd4"),
        document.getElementById("wedEnd4"),
        document.getElementById("thuEnd4"),
        document.getElementById("friEnd4"),
        document.getElementById("satEnd4"),
        document.getElementById("sunEnd4"),
    ];

    for (let i = 0; i < week4StartInputs.length; i++) {
        week4StartInputs[i].value = "";
        week4EndInputs[i].value = "";
    }

    calculatePayment();
});

// <button id="resetWeek5">Reset Week 5</button>
const resetWeek5Button = document.getElementById("resetWeek4");
resetWeek5Button.addEventListener("click", function () {
    const week5StartInputs = [
        document.getElementById("monStart5"),
        document.getElementById("tueStart5"),
        document.getElementById("wedStart5"),
        document.getElementById("thuStart5"),
        document.getElementById("friStart5"),
        document.getElementById("satStart5"),
        document.getElementById("sunStart5"),
    ];

    const week5EndInputs = [
        document.getElementById("monEnd5"),
        document.getElementById("tueEnd5"),
        document.getElementById("wedEnd5"),
        document.getElementById("thuEnd5"),
        document.getElementById("friEnd5"),
        document.getElementById("satEnd5"),
        document.getElementById("sunEnd5"),
    ];

    for (let i = 0; i < week5StartInputs.length; i++) {
        week5StartInputs[i].value = "";
        week5EndInputs[i].value = "";
    }

    calculatePayment();
});

/* Choose section */

window.onload = function() {
    resetSections();
    numberOfSectionsInput.value = null;
    amountOfWeeksContainer.innerHTML = "";
};

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const displaySectionsButton = document.getElementById("display-sections");
const numberOfSectionsInput = document.getElementById("number-of-sections");
const amountOfWeeksContainer = document.getElementById("day-of-week");

displaySectionsButton.addEventListener("click", function () {
    resetSections();
    const numberOfSections = Number(numberOfSectionsInput.value);

    if (!numberOfSections) {
        amountOfWeeksContainer.innerHTML = "Please select a number of sections.";
        return;
    }

    switch (numberOfSections) {
        case 1:
            toggleSection(section1);
            showAmountOfWeeks(1);
            break;
        case 2:
            toggleSection(section1);
            toggleSection(section2);
            showAmountOfWeeks(2);
            break;
        case 3:
            toggleSection(section1);
            toggleSection(section2);
            toggleSection(section3);
            showAmountOfWeeks(3);
            break;
        case 4:
            toggleSection(section1);
            toggleSection(section2);
            toggleSection(section3);
            toggleSection(section4);
            showAmountOfWeeks(4);
            break;
        case 5:
            toggleSection(section1);
            toggleSection(section2);
            toggleSection(section3);
            toggleSection(section4);
            toggleSection(section5);
            showAmountOfWeeks(5);
            break;
        default:
            amountOfWeeksContainer.innerHTML = "Please enter a number between 1 and 5.";
    }
});

function resetSections() {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    amountOfWeeksContainer.innerHTML = "";
}

function toggleSection(section) {
    section.style.display = "block";
}

function showAmountOfWeeks(week) {
    if (week === 1)
        amountOfWeeksContainer.innerHTML = "Displaying " + week + " eek";
    else
        amountOfWeeksContainer.innerHTML = "Displaying " + week + " eeks";
}

