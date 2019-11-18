const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        if(nav.style.display == 'flex') {
            setTimeout(() => {
                nav.style.display = '';
            }, 500)
        }
        else nav.style.display = 'flex';

        setTimeout(() => {
            nav.classList.toggle('nav-active');
        }, 1);
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();