const prev = document.getElementById('prev');
const next = document.getElementById('next');

const progressLine = document.querySelector('#line');
const circles = document.querySelectorAll('.circle');

let currActive = 1;

prev.addEventListener('click', clickPrev);
next.addEventListener('click', clickNext);


function clickNext(e) {
    currActive++;
    if (currActive >= circles.length) {
        currActive = circles.length;
    }
    updateProgress();
    // console.log(currActive);
}


function clickPrev(e) {
    currActive--;
    if (currActive < 1) {
        currActive = 1;
    }
    updateProgress();
}

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currActive) {
            circle.classList.add('filled');
        } else {
            circle.classList.remove('filled');
        }
    });
    
    const fills = document.querySelectorAll('.filled');
    line.style.width = ((currActive -1) / (circles.length - 1)) * 100 + '%';
    
    // console.log(fills);
    if (currActive >= 2) {
        prev.disabled = false;
    } else {
        prev.disabled = true;
    }

    if (currActive >= circles.length) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }
    

}
