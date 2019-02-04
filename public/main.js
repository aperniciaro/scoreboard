let team1Counter = 0

let team2Counter = 0

const main = () => {
  document.querySelectorAll('p').textContent = '0'
}

const addTeam1 = () => {
  team1Counter++
  document.querySelector('team1Score').textContent = team1Counter
}

const addTeam2 = () => {
  team2Counter++
  document.querySelector('team2Score').textContent = team2Counter
}

const subtractTeam1 = () => {
  team1Counter--
  document.querySelector('team1Score').textContent = team1Counter
}

const subtractTeam2 = () => {
  team2Counter--
  document.querySelector('team2score').textContent = team2Counter
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.add-one-button')
  .addEventListener('click', increaseCounter)

document
  .querySelector('.add-one-button')
  .addEventListener('click', increaseCounter)

document
  .querySelector('.add-one-button')
  .addEventListener('click', increaseCounter)

document
  .querySelector('.add-one-button')
  .addEventListener('click', increaseCounter)
