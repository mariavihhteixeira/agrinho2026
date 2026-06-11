// Animar números da seção de resultados
const nums = document.querySelectorAll('.num');

nums.forEach(num => {
    const updateNum = () => {
        const target = +num.getAttribute('data-target');
        const current = +num.innerText;
        const increment = target / 100;

        if(current < target){
            num.innerText = Math.ceil(current + increment);
            setTimeout(updateNum, 30);
        } else {
            num.innerText = target;
        }
    }
    updateNum();
});
