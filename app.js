const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')


const nextYear = new Date().getFullYear() + 1 

const newYearTime = new Date(`january 01 ${nextYear} 2021 00:00:00`)


nextYearContainer.textContent = nextYear


const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds //Uma condição se o segundo for menor que 10 então acrescentar um zero antes do segundo, para ficar dois números ex: 01, 02, 03...
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}


const updateCountdown = () => {
    const currentTime = new Date() //Obter a Hora e Data Atual
    const difference = newYearTime - currentTime // Obter a diferencia entre as 00:00 do 1 dia do ano que vem e a data atual
    const days = Math.floor(difference / 1000 / 60 / 60 / 24) //Obter a quantidade d dias q faltam para o dia 1 do ano que vem chegar
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24 //Obter a quantidade d horas q faltam para o dia 1 do ano que vem chegar
    const minutes = Math.floor(difference / 1000 / 60) % 60 //Obter a quantidade d minutos q faltam para o dia 1 do ano que vem chegar
    const seconds = Math.floor(difference / 1000) % 60 //Obter a quantidade d minutos q faltam para o dia 1 do ano que vem chegar

    insertCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {

    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)

