'use strict';
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

const maxAttempts = 3;
let counter = 0;
let arrOfNames = [];
let arrOfVotes = [];
let currentData = [];
let arrOfViews = [];

var Products = function (name, source) {

    this.name = name;
    this.source = source;
    this.votes = 0;
    this.views = 0;
    Products.globArr.push(this);
    arrOfNames.push(this.name);

}

Products.globArr = [];

new Products('bag', 'Images/bag.jpg');
new Products('banana', 'Images/banana.jpg');
new Products('bathroom', 'Images/bathroom.jpg');
new Products('boots', 'Images/boots.jpg');
new Products('breakfast', 'Images/breakfast.jpg');
new Products('bubblegum', 'Images/bubblegum.jpg');
new Products('chair', 'Images/chair.jpg');
new Products('cthulhu', 'Images/cthulhu.jpg');
new Products('dog-duck', 'Images/dog-duck.jpg');
new Products('dragon', 'Images/dragon.jpg');
new Products('pen', 'Images/pen.jpg');
new Products('pet-sweep', 'Images/pet-sweep.jpg');
new Products('scissors', 'Images/scissors.jpg');
new Products('shark', 'Images/shark.jpg');
new Products('sweep', 'Images/sweep.png');
new Products('tauntaun', 'Images/tauntaun.jpg');
new Products('unicorn', 'Images/unicorn.jpg');
new Products('water-can', 'Images/water-can.jpg');
new Products('wine-glass', 'Images/wine-glass.jpg');


let leftIndex;
let middleIndex;
let rightIndex;

function renderThreeImages() {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();

    while ((leftIndex === middleIndex) || (leftIndex === rightIndex) || (middleIndex === rightIndex) || currentData.includes(leftIndex) || currentData.includes(middleIndex) || currentData.includes(rightIndex)) {
        leftIndex = generateRandomIndex();
        middleIndex = generateRandomIndex();
        rightIndex = generateRandomIndex();
    }
    currentData = [leftIndex, middleIndex, rightIndex];
    // console.log(currentData);
    // while () {
    //     leftIndex = generateRandomIndex();
    //     middleIndex = generateRandomIndex();
    //     rightIndex = generateRandomIndex();

    // } 
    // currentData = [leftIndex , middleIndex , rightIndex];
    // console.log(currentData);

    leftImageElement.src = Products.globArr[leftIndex].source;
    middleImageElement.src = Products.globArr[middleIndex].source;
    rightImageElement.src = Products.globArr[rightIndex].source;

    Products.globArr[leftIndex].views++;
    Products.globArr[middleIndex].views++;
    Products.globArr[rightIndex].views++;




}
renderThreeImages();




leftImageElement.addEventListener('click', handleClick);
middleImageElement.addEventListener('click', handleClick);
rightImageElement.addEventListener('click', handleClick);

let b;
function handleClick(event) {

    counter++;

    if (maxAttempts >= counter) {
        if (event.target.id === 'left-image') {
            Products.globArr[leftIndex].votes++;
        }
        else if (event.target.id === 'middle-image') {
            Products.globArr[middleIndex].votes++;
        }
        else if (event.target.id === 'right-image') {
            Products.globArr[rightIndex].votes++;
        }
        renderThreeImages();

        console.log(event.target.id);
    } else {
        const b = document.getElementById('qq');
        b.addEventListener('click', handleResult);
        section.removeEventListener('click',handleClick)

      
    }



}
function handleResult(){
    renderList();
    gettingCharts();
}

function generateRandomIndex() {
    return Math.floor(Math.random() * Products.globArr.length)
}
generateRandomIndex();

function renderList() {

    const ul = document.getElementById('unList');
    ul.innerHTML = "";

    for (let i = 0; i < Products.globArr.length; i++) {
        let li = document.createElement('li');
        arrOfVotes.push(Products.globArr[i].votes);
        arrOfViews.push(Products.globArr[i].views);




        ul.appendChild(li);
      
        li.textContent = `${Products.globArr[i].name} got ${Products.globArr[i].votes} votes and have ${Products.globArr[i].views} views}`
    }
    leftImageElement.removeEventListener('click', handleClick);
    middleImageElement.removeEventListener('click', handleClick);
    rightImageElement.removeEventListener('click', handleClick);
}

function gettingCharts() {
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrOfNames,
            datasets: [{
                label: '# of Votes',
                data: arrOfVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }, {
                label: '# of Views',
                data: arrOfViews,
                backgroundColor: [
                    'rgba(207, 79, 100, 1)',
                ],
                borderColor: [
                    'rgba(100, 10, 12, 1)',
                ],
                borderWidth: 1

            }
            ]
        },

    });
}
