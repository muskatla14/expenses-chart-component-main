
        fetch('./data.json') 
        .then(res => {
            return res.json();
        })
        .then((data) => {
            const days = data;
            days.forEach(day => {
                createBar(day.day, day.amount)
                
            });
            })
        .catch((e) => {
            console.log("ERROR!",e)
        })
    
    
    function createBar(day, amount) {   
            const spending = document.querySelector('.spending');
            const ul = document.querySelector('.bar-chart-list');  
            spending.appendChild(ul);
            const li = document.createElement('li');
            li.classList.add('list-item');
            ul.appendChild(li);
            const span = document.createElement('span');
            span.classList.add('day-amount')
            span.innerHTML = `$${amount}`;
            li.appendChild(span)
            const bar = document.createElement('div');
            bar.classList.add('bar');  

            // Check is current day
            const d = new Date();
            let currentDay = d.toString().substring(0, 3).toLowerCase();
            if(day === currentDay) {
                bar.classList.add('currentDay')
            }

            bar.style.height = `${amount}%` 
            bar.addEventListener('click', (e) => {
                span.style.display = 'block';
            })
            li.appendChild(bar);
            const small = document.createElement('small');
            li.appendChild(small);
            small.innerHTML = day;
     }




