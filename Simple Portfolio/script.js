const icon = document.querySelector('i');
const nav = document.querySelector('nav');

const sun = document.createElement('i');
sun.classList.add('fa-solid', 'fa-sun');

const moon = document.createElement('i');
moon.classList.add('fa-solid', 'fa-moon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        nav.appendChild(sun);
        icon.remove();
    } else {
        nav.appendChild(moon);
        sun.remove();
    }
});

sun.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    sun.remove();
    nav.appendChild(moon);
});

moon.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    moon.remove();
    nav.appendChild(sun);
});