// const btns = document.querySelectorAll('.btn');
// const values = document.querySelector('#value');
// let count = 0;




// btns.forEach(test => test.addEventListener('click', ccc =>{



//     const items = ccc.currentTarget.classList;

//     if(items.contains('decrease'))
//     {
//         count--;

//     }else if(items.contains('increase'))
//     {
//        count++;
      
//     }
//     else
//     {
//         count = 0;
//     }


//     if(count > 0)
//     {
//      values.style.color = 'green';
//     }
//     else if ( count < 0)
//     {
//         values.style.color = 'red';

//     }
//     else (count === 0)
//     {
//         values.style.color = 'black';
//     }

//     values.textContent = count;




// }));


const btns = document.querySelectorAll('.btn');
const values = document.querySelector('#value');
let count = 0;

btns.forEach(btn => btn.addEventListener('click', ck =>{

    const loc = ck.currentTarget.classList;

    if(loc.contains('increase'))
    {
        count ++;

    }else if(loc.contains('decrease'))
    {
        count --;
    }
    else{
        count = 0;
    }

    values.textContent = count;


}))


///Dark-Theme///

const btnns = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selectedDark');
const selectedIcon = localStorage.getItem('selectedIcon');

const getTheme = () => document.body.classList.contains(darkTheme)? 'dark':'light'
const getIcon = () => btnns.classList.contains(iconTheme)? 'uil-moon' : 'uil-sun'

if(selectedTheme)
{
    document.body.classList[selectedTheme ===  'dark' ? 'add':'remove'](darkTheme);
    btnns.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}

btnns.addEventListener('click', () =>{

document.body.classList.toggle(darkTheme);
btnns.classList.toggle(iconTheme)

localStorage.setItem(getTheme,'selectedDark');
localStorage.setItem(getIcon, 'selectedIcon');





})
