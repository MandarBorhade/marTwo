var readLineSync = require('readline-sync')

// Geometry quiz
var score = 0
var userName = readLineSync.question('Enter your name: ')

var questions = [
  {
    question: 'Which of is another word for ninja? ',
    answer: 'Shinobi'
  },
  {
    question: 'Which of the character had puppet on his back? ',
    answer: 'Gaara'
  },
  {
    question: 'Who was Rock Lee’s mentor? ',
    answer: 'Gai'
  },
  {
    question: 'Can you name Naruto’s last name? ',
    answer: 'uzumaki'
  },
  {
    question: 'Is Kakashi of the Uchiha clan? ',
    answer: 'No'
  }
]


function greet() {
  console.log('**************************************')
  console.log('Welcome to Naruto quiz ' + userName)
  console.log('**************************************')
}


//answer question check

function questionCheck(question, answer) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score += 1
  }
}

function gamePlay() {
  greet()

  questions.map(el => {
    questionCheck(el.question, el.answer)
  })

  console.log('**************************************')
  console.log(userName + ' ' + 'has scored ' + score)
}

gamePlay()
