const hourLmnt = document.querySelector('.hour')
const minuteLmnt = document.querySelector('.minute')
const secondLmnt = document.querySelector('.second')
const timeLmnt = document.querySelector('.time')
const dateLmnt = document.querySelector('.date')
const toggleLmnt = document.querySelector('.toggle')

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

toggleLmnt.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})