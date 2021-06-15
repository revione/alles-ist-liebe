const Deutsche = {
  singular: {
    left: {
      paragraph: [
        'Ihr seid herzlich zu unserer Hochzeitsfeier eingeladen!',
        'Wir feiern',
        'am 3.7.2021 ab 13 Uhr',
        'im Park Türrschmidtstraße',
        'Für Getränke wird gesorgt sein und wir bitten Euch, etwas kleines zu Essen mitzubringen. Ihr könnt in dieser Liste eintragen, was ihr mitbringen wollt:',
        'Erlaubt ist nur Kleidung, in der Ihr Euch wohlfühlt. Da reisen das Schönste auf der Welt ist, möchten wir eine kleine Reise mit Euch machen. Bitte bringt dafür eines Euer Lieblings-Accessoires mit, welches Ihr auf einer Reise gefunden habt…',
        'Wir freuen uns sehr auf Euch!',
        'Solltet Ihr nicht kommen können, feiern wir einfach wann anders nach!',
        'Un abrazo von Revi und May',
        'Wenn Ihr uns ein Geschenk mitbringen wollt, freuen wir uns über Pflanzen jeder Art und Größe für unsere neue Wohnung und über einen kleinen Beitrag für unsere Flitterwochen auf der Insel der Piraten...'
      ]
    }
  },
  plural: {
    left: {
      paragraph: [
        'Du bist herzlich zu unserer Hochzeitsfeier eingeladen!',
        'Wir feiern',
        'am 3.7.2021 ab 13 Uhr',
        'im Park Türrschmidtstraße',
        'Für Getränke wird gesorgt sein und wir bitten Dich, etwas Kleines zu Essen mitzubringen. Du kannst in dieser Liste eintragen, was Du mitbringen magst:',
        'Erlaubt ist nur Kleidung, in der Du Dich wohlfühlst. Da reisen das Schönste auf der Welt ist, möchten wir eine kleine Reise mit Dir machen. Bitte bring dafür eines Deiner Lieblings-Accessoires mit, welches Du auf einer Reise gefunden hast...',
        'Wir freuen uns sehr auf Dich!',
        'Solltest Du nicht kommen können, feiern wir einfach wann anders nach!',
        'Un abrazo von Revi und May',
        'Wenn Du uns ein Geschenk mitbringen magst, freuen wir uns über Pflanzen jeder Art und Größe für unsere neue Wohnung und über einen kleinen Beitrag für unsere Flitterwochen auf der Insel der Piraten...'
      ]
    }
  }
}

const Spanish = {
  singular: {
    left: {
      paragraph: [
        'Vamos a festejar nuestra boda el 3 de Julio del 2021 en Berlín.',
        'Aunque quisiéramos verte ahí, sabemos que la distancia nos separa. Así que pronto cuando estemos reunidos celebraremos juntos!',
        'Te llevamos en nuestros corazones, así nos acompañas siempre.',
        'Te amamos.',
        'Un abrazo fuerte de Revi y May'
      ]
    }
  },
  plural: {
    left: {
      paragraph: [
        'Vamos a festejar nuestra boda el 3 de Julio del 2021 en Berlín.',
        'Aunque quisiéramos verlos ahí, sabemos que la distancia nos separa. Así que pronto cuando estemos reunidos celebraremos juntos!',
        'Los llevamos en nuestros corazones, así nos acompañan siempre.',
        'Los amamos.',
        'Un abrazo fuerte de Revi y May'
      ]
    }
  }
}

const English = {
  singular: {
    left: {
      paragraph: [
        'You are very welcome to our marriage party!',
        'We will party',
        'am 3.7.2021 ab 13 Uhr',
        'im Park Türrschmidtstraße',
        'We will organize the drinks and would like to ask you if you could bring something to eat. You can write on the following list the things you want to bring.',
        'It is only allowed to wear clothes which are comfortable for you. Since travelling is the most beautiful thing in the world we would like you to bring one of your favourite accessories from a journey…',
        'Should you not be able to be there, we will have a party together at a different moment!',
        'Un abrazo from Revi and May'
      ]
    }
  },
  plural: {
    left: {
      paragraph: [
        'You are very welcome to our marriage party!',
        'We will party',
        'am 3.7.2021 ab 13 Uhr',
        'im Park Türrschmidtstraße',
        'We will organize the drinks and would like to ask you if you could bring something to eat. You can write on the following list the things you want to bring.',
        'It is only allowed to wear clothes which are comfortable for you. Since travelling is the most beautiful thing in the world we would like you to bring one of your favourite accessories from a journey…',
        'Should you not be able to be there, we will have a party together at a different moment!',
        'Un abrazo from Revi and May'
      ]
    }
  }
}

export default Object.assign(
  {},
  { deutsche: Deutsche },
  { spanish: Spanish },
  { english: English }
)
