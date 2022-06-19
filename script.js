let project1 = document.getElementById('project1');
let project2 = document.getElementById('project2');
let project3 = document.getElementById('project3');
let link1 = document.getElementsByClassName('project1__link')[0];
let link2 = document.getElementsByClassName('project2__link')[0];
let link3 = document.getElementsByClassName('project3__link')[0];

link1.style.display = 'none';
link2.style.display = 'none';
link3.style.display = 'none';

project1.addEventListener('click', () => {
    if (link1.style.display === 'none') {
        link1.style.display = 'block';
    } else {
        link1.style.display = 'none';
    }
})

project2.addEventListener('click', () => {
    if (link2.style.display === 'none') {
        link2.style.display = 'block';
    } else {
        link2.style.display = 'none';
    }
})

project3.addEventListener('click', () => {
    if (link3.style.display === 'none') {
        link3.style.display = 'block';
    } else {
        link3.style.display = 'none';
    }
})

let timer = document.getElementById('time');

function showTime () {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    timer.innerHTML = date+' '+time;
}

setInterval(showTime, 1000);

