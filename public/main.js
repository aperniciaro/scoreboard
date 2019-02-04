let team1Counter = 0

let team2Counter = 0

let team1Name = 'Team 1'

let team2Name = 'Team 2'

const main = () => {
  // document.querySelectorAll('p').textContent = 0
  document.querySelector('.team1Score').textContent = 0
  document.querySelector('.team2Score').textContent = 0
  console.log('page load')
}

const addTeam1 = () => {
  team1Counter++
  document.querySelector('.team1Score').textContent = team1Counter
}

const addTeam2 = () => {
  team2Counter++
  document.querySelector('.team2Score').textContent = team2Counter
}

const subtractTeam1 = () => {
  team1Counter--
  document.querySelector('.team1Score').textContent = team1Counter
}

const subtractTeam2 = () => {
  team2Counter--
  document.querySelector('.team2Score').textContent = team2Counter
}

const changeTeam1 = () => {
  team1Name = document.querySelector('.name-field-1').value
  document.querySelector('.team-1-name').textContent = team1Name
  console.log(team1Name)
}

const changeTeam2 = () => {
  team2Name = document.querySelector('.name-field-2').value
  document.querySelector('.team-2-name').textContent = team2Name
  console.log(team2Name)
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeam1)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractTeam1)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeam2)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractTeam2)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', changeTeam1)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', changeTeam2)
