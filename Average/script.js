const students = [
 {
  name: 'Jorge',
  firstExam: 6,
  secondExam: 8,
 },
 {
  name: 'Camila',
  firstExam: 10,
  secondExam: 9,
 },
 {
  name: 'Augusto',
  firstExam: 3,
  secondExam: 7,
 },
 {
  name: 'Nina',
  firstExam: 5,
  secondExam: 7,
 },
]

function average(firstExam, secondExam) {
  return ((firstExam + secondExam) / 2.).toFixed(2)
  
}

for (const student of students) {
  const avg = average(student.firstExam, student.secondExam);
  if (avg >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${avg}
Parabéns, ${student.name}! Você foi aprovado(a)!
    `);
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${avg} 
Não foi dessa vez, ${student.name}! Tente novamente!`);
  }
}