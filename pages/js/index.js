/* Choose section */

const toggleSectionButton = document.getElementById("toggle-section-button");
const sectionSelect = document.getElementById("section-select");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");

toggleSectionButton.addEventListener("click", function () {
    resetSections();
    const selectedOption = sectionSelect.value;
    if (selectedOption === "1") {
        toggleSection(section1);
    } else if (selectedOption === "2") {
        toggleSection(section2);
    } else if (selectedOption === "3") {
        toggleSection(section3);
    } else if (selectedOption === "4") {
        toggleSection(section4);
    } else if (selectedOption === "5") {
        toggleSection(section5);
    }
});

function resetSections() {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
}

function toggleSection(section) {
    section.style.display = "block";
}