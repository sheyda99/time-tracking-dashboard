const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('id');

    if (id === 'daily') {
        loadTaskDaily();
        hover(element);
    }
    else if (id === 'weekly') {
        loadtaskWeekly();
        hover(element);
    }
    else if (id === 'monthly') {
        loadTaskMonthly();
        hover(element);
    }
});

function hover(element) {
    for (let i = 0; i < 3; i++) {
        element.parentElement.parentElement.children[i].className = "";
    }
    element.parentElement.className = "active";
}

function loadTaskDaily() {
    const work = container.querySelector('.work');
    addContent(work, '5hrs', 'Last Day - 7hrs');

    const play = container.querySelector('.play');
    addContent(play, '1hrs', 'Last Day - 2hrs');

    const study = container.querySelector('.study');
    addContent(study, '0hrs', 'Last Day - 1hrs');

    const exercise = container.querySelector('.exercise');
    addContent(exercise, '1hrs', 'Last Day - 1hrs');

    const social = container.querySelector('.social');
    addContent(social, '1hrs', 'Last Day - 3hrs');

    const selfCare = container.querySelector('.self-care');
    addContent(selfCare, '0hrs', 'Last Day - 1hrs');
}

function loadtaskWeekly() {
    const work = container.querySelector('.work');
    addContent(work, '32hrs', 'Last Week - 36hrs');

    const play = container.querySelector('.play');
    addContent(play, '10hrs', 'Last Week - 8hrs');

    const study = container.querySelector('.study');
    addContent(study, '4hrs', 'Last Week - 7hrs');

    const exercise = container.querySelector('.exercise');
    addContent(exercise, '4hrs', 'Last Week - 5hrs');

    const social = container.querySelector('.social');
    addContent(social, '5hrs', 'Last Week - 10hrs');

    const selfCare = container.querySelector('.self-care');
    addContent(selfCare, '2hrs', 'Last Week - 2hrs');
}

function loadTaskMonthly() {
    const work = container.querySelector('.work');
    addContent(work, '103hrs', 'Last Month - 128hrs');

    const play = container.querySelector('.play');
    addContent(play, '23hrs', 'Last Month - 29hrs');

    const study = container.querySelector('.study');
    addContent(study, '13hrs', 'Last Month - 19hrs');

    const exercise = container.querySelector('.exercise');
    addContent(exercise, '11hrs', 'Last Month - 18hrs');

    const social = container.querySelector('.social');
    addContent(social, '21hrs', 'Last Month - 23hrs');

    const selfCare = container.querySelector('.self-care');
    addContent(selfCare, '7hrs', 'Last Month - 11hrs');
}

function addContent(element, time, lastTime) {
    element.querySelectorAll('.time')[0].innerHTML = time;
    element.querySelectorAll('.last-time')[0].innerHTML = lastTime;
    return element;
}