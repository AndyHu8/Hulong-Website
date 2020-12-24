//Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarmenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => 
{
    navbarmenu.classList.toggle('is-active');
});

//tabs
const all_tabs = document.querySelectorAll('.tabs li');
const all_tabContent_Box = document.querySelectorAll('#tab-content > div');

all_tabs.forEach((tab) => 
{
    tab.addEventListener('click', () => 
    {
        all_tabs.forEach(item => item.classList.remove('is-active')); //Jeder Tab wird "is-active" entfernt
        tab.classList.add('is-active'); //An dem geklickten tab wird "is-active" hinzugefügt

        const target = tab.dataset.target; //Name vom target
        all_tabContent_Box.forEach(box => 
            {
                if(box.getAttribute('id') === target)
                {
                    box.classList.remove('is-hidden');
                }
                else 
                {
                    box.classList.add('is-hidden');
                }
            });
    });
});