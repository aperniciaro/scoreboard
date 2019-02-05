let team1Counter = 0

let team2Counter = 0

let team1Name = 'Team 1'

let team2Name = 'Team 2'

let inningNumber = 1

let inningIncrement = 0

let inningSide = 'Top'

const main = () => {
  document.querySelector('.team1Score').textContent = 0
  document.querySelector('.team2Score').textContent = 0
  document.querySelector('.inning').textContent = 1
  document.querySelector('.inning-side').textContent = 'Top'
  team1Counter = 0
  team2Counter = 0
  inningNumber = 1
  inningSide = 'Top'
  inningIncrement = 0
  document.querySelector('#victory').classList.remove('winner')
  document.querySelector('#victory').classList.add('no-winner')
  document.querySelector('.team1').classList.remove('winning-team')
  document.querySelector('.team2').classList.remove('winning-team')
  document
    .querySelector('#team-1-add-1-button')
    .classList.remove('disabled-button')
  document
    .querySelector('#team-1-subtract-1-button')
    .classList.remove('disabled-button')
  document
    .querySelector('#team-2-add-1-button')
    .classList.remove('disabled-button')
  document
    .querySelector('#team-2-subtract-1-button')
    .classList.remove('disabled-button')
  console.log('page load')
}

const addInning = () => {
  inningIncrement++
  if (inningIncrement % 2 == 0 && inningIncrement < 17) {
    inningSide = 'Top'
    if (inningNumber < 9) {
      inningNumber++
    }
  } else {
    inningSide = 'Bottom'
  }
  document.querySelector('.inning').textContent = inningNumber
  document.querySelector('.inning-side').textContent = inningSide
  console.log(inningIncrement)
}

const subtractInning = () => {
  inningIncrement--
  if (inningIncrement % 2 != 0 && inningIncrement > 0) {
    inningSide = 'Bottom'
    if (inningNumber > 1) {
      inningNumber--
    }
  } else {
    inningSide = 'Top'
  }
  document.querySelector('.inning').textContent = inningNumber
  document.querySelector('.inning-side').textContent = inningSide
  console.log(inningIncrement)
}

const addTeam1 = () => {
  if (team1Counter < 20 && team2Counter < 21) {
    team1Counter++
  } else if (team1Counter == 20 && team2Counter < 21) {
    team1Counter++
    document
      .querySelector('#team-1-add-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-1-subtract-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-2-add-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-2-subtract-1-button')
      .classList.add('disabled-button')
    document.querySelector('#victory').classList.remove('no-winner')
    document.querySelector('#victory').classList.add('winner')
    document.querySelector('.team1').classList.add('winning-team')
    document.querySelector('.victor').textContent = team1Name
  }
  document.querySelector('.team1Score').textContent = team1Counter
}

const addTeam2 = () => {
  if (team2Counter < 20 && team1Counter < 21) {
    team2Counter++
  } else if (team2Counter == 20 && team1Counter < 21) {
    team2Counter++
    document
      .querySelector('#team-1-add-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-1-subtract-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-2-add-1-button')
      .classList.add('disabled-button')
    document
      .querySelector('#team-2-subtract-1-button')
      .classList.add('disabled-button')
    document.querySelector('#victory').classList.remove('no-winner')
    document.querySelector('#victory').classList.add('winner')
    document.querySelector('.team2').classList.add('winning-team')
    document.querySelector('.victor').textContent = team2Name
  }
  document.querySelector('.team2Score').textContent = team2Counter
}

const subtractTeam1 = () => {
  if (team1Counter > 0 && team1Counter < 21 && team2Counter < 21) {
    team1Counter--
  }
  document.querySelector('.team1Score').textContent = team1Counter
}

const subtractTeam2 = () => {
  if (team2Counter > 0 && team2Counter < 21 && team1Counter < 21) {
    team2Counter--
  }
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

document.querySelector('.reset-button').addEventListener('click', main)

document
  .querySelector('.inning-add-button')
  .addEventListener('click', addInning)

document
  .querySelector('.inning-subtract-button')
  .addEventListener('click', subtractInning)

document
  .querySelector('#team-1-add-1-button')
  .addEventListener('click', addTeam1)

document
  .querySelector('#team-1-subtract-1-button')
  .addEventListener('click', subtractTeam1)

document
  .querySelector('#team-2-add-1-button')
  .addEventListener('click', addTeam2)

document
  .querySelector('#team-2-subtract-1-button')
  .addEventListener('click', subtractTeam2)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', changeTeam1)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', changeTeam2)
