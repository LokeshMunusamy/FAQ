const down = document.querySelectorAll('.down');
const hide = document.querySelectorAll('.hide');
down.forEach((icon, index) => {
    icon.addEventListener('click', () => {
       
        const answer = hide[index];
        if (answer.style.display === 'none') {
            answer.style.display = 'block';  
            icon.setAttribute('name', 'chevron-up-outline');  
        } 
        else {
            answer.style.display = 'none';  
            icon.setAttribute('name', 'chevron-down-outline');  
        }
        hide.forEach((div, i) => {
            if (i !== index) {
                div.style.display = 'none';
                down[i].setAttribute('name', 'chevron-down-outline');
            }
        });
    });
});
    
   