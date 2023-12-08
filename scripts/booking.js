document.addEventListener('DOMContentLoaded', function () {
    const dayElements = document.querySelectorAll('.day-selector li');
    const fullDayButton = document.getElementById('full');
    const halfDayButton = document.getElementById('half');
    const clearButton = document.getElementById('clear-button');
    const calculatedCostElement = document.getElementById('calculated-cost');

    let selectedDays = [];
    let dailyRate = 35;

    function updateDay(elementId) {
        const dayIndex = selectedDays.indexOf(elementId);

        if (dayIndex === -1) {
            selectedDays.push(elementId);
        } else {
            selectedDays.splice(dayIndex, 1);
        }

        calculateCost();
    }

    dayElements.forEach(dayElement => {
        dayElement.addEventListener('click', function () {
            dayElement.classList.toggle('clicked');
            updateDay(dayElement.id);
        });
    });

    function clearDays() {
        dayElements.forEach(dayElement => {
            dayElement.classList.remove('clicked');
        });

        selectedDays = [];
        calculateCost();
    }

    clearButton.addEventListener('click', function () {
        clearDays();
    });

    function setDailyRate(rate) {
        dailyRate = rate;

        fullDayButton.classList.toggle('clicked', rate === 35);
        halfDayButton.classList.toggle('clicked', rate === 20);

        calculateCost();
    }

    fullDayButton.addEventListener('click', function () {
        setDailyRate(35);
    });

    halfDayButton.addEventListener('click', function () {
        setDailyRate(20);
    });

    function calculateCost() {
        const totalCost = selectedDays.length * dailyRate;
        calculatedCostElement.textContent = totalCost;
    }
});

