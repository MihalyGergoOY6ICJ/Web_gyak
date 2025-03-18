const button = document.querySelector('#btn');
button.addEventListener('click', () =>{
    
    let inputValue = document.getElementById("input").value;
    if(inputValue != ""){
        const list = document.querySelector('#list');
        const line = document.createElement('li');
        line.textContent = inputValue;
        line.classList.add('task');
        line.addEventListener('click', () =>{
            line.classList.add('done');
        });
        list.appendChild(line);
    }
});