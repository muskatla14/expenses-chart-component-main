"use strict";


import data from './data.json' assert {type: 'json'};


    for (let index = 0; index <= data.length; index++) {
        const element = data[index];
        console.log(element);

        console.log(element.day);
        console.log(element.amount);
        createBar(element.day, element.amount)
    }

    function createBar(day, amount) {   
        // const ulContainer = document.querySelector('.bar-chart');
        const spending = document.querySelector('.spending');
        const ul = document.querySelector('.bar-chart-list');  
        spending.appendChild(ul);
        const li = document.createElement('li');
        li.classList.add('list-item');
        ul.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = amount;
        li.appendChild(span)
        const bar = document.createElement('div');
        bar.classList.add('bar');  
        bar.style.height = `${amount}%` 
        li.appendChild(bar);
        const small = document.createElement('small');
        li.appendChild(small);
        small.innerHTML = day;
        console.log(li);
 }

//  createBar();