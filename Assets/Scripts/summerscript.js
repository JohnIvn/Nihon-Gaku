function checkAnswer() {
    var points = 0;
    
    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "1a") {
        points++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "2b") {
        points++;
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "3c") {
        points++;
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "4c") {
        points++;
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "5d") {
        points++;
    }

    document.getElementById("result").innerText = "Points: " + points + "/5";
    
    document.getElementById("submitBtn").disabled = true;
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
alertTrigger.addEventListener('click', () => {
    appendAlert('!', 'success')
})
}