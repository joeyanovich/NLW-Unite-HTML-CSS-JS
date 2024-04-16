// const attendee = {
//   name: "Joey Dias",
//   email: "joeydias@gmail.com",
//   registeredAt: new Date(2024, 2, 22, 19, 20),
//   checkInAt: new Date(2024, 2, 25, 22, 0)
// }

let attendees = [
  {
    name: "Joey Dias",
    email: "joeydias@gmail.com",
    registeredAt: new Date(2024, 2, 22, 19, 20),
    checkInAt: new Date(2024, 2, 1, 20, 20)
  },
  {
    name: "Joedison Dias",
    email: "joedisondias@gmail.com",
    registeredAt: new Date(2024, 1, 22, 19, 20),
    checkInAt: new Date(2024, 1, 5, 50, 20)
  },
  {
    name: "Maria Silva",
    email: "mariasilva@gmail.com",
    registeredAt: new Date(2024, 3, 10, 10, 30),
    checkInAt: new Date(2024, 3, 10, 9, 45)
  },
  {
    name: "Carlos Ferreira",
    email: "carlosferreira@gmail.com",
    registeredAt: new Date(2024, 2, 28, 14, 15),
    checkInAt: new Date(2024, 2, 28, 14, 0)
  },
  {
    name: "Ana Souza",
    email: "anasouza@gmail.com",
    registeredAt: new Date(2024, 3, 1, 18, 0),
    checkInAt: new Date(2024, 3, 1, 17, 30)
  },
  {
    name: "Pedro Oliveira",
    email: "pedrooliveira@gmail.com",
    registeredAt: new Date(2024, 2, 15, 9, 45),
    checkInAt: new Date(2024, 2, 15, 9, 30)
  },
  {
    name: "Juliana Santos",
    email: "julianasantos@gmail.com",
    registeredAt: new Date(2024, 1, 28, 11, 20),
    checkInAt: new Date(2024, 1, 28, 11, 0)
  },
  {
    name: "Rafaela Lima",
    email: "rafaelalima@gmail.com",
    registeredAt: new Date(2024, 2, 5, 16, 30),
    checkInAt: new Date(2024, 2, 5, 16, 15)
  },
  {
    name: "Luiz Costa",
    email: "luizcosta@gmail.com",
    registeredAt: new Date(2024, 3, 8, 13, 10),
    checkInAt: new Date(2024, 3, 8, 12, 45)
  },
  {
    name: "Mariana Alves",
    email: "marianaalves@gmail.com",
    registeredAt: new Date(2024, 2, 10, 20, 0),
    checkInAt: new Date(2024, 2, 10, 19, 45)
  }
];


const createNewAttendee = (attendee) => {
  return `
    <tr>
      <td>
        <strong>${attendee.name}</strong>
        <br>
        <small>${attendee.email}</small>
      </td>
      <td>${attendee.registeredAt}</td>
      <td>${attendee.checkInAt}</td>
    </tr>
  `
}

const updateList = (attendees) => {
  let output = ""

  for (let attendee of attendees) {
    output = output + createNewAttendee(attendee)
  }
  document
    .querySelector('tbody')
    .innerHTML = output
}


updateList(attendees)