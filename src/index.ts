import './globals.css';

window.Webflow ||= [];
window.Webflow.push(() => {
  main();
});

function main() {
  const clients = [
    'Anidjar & Levine',
    'Atlanta Braves',
    'Ben Simmons',
    'Bommarito Auto Group',
    'Buffalo Bills',
    'Cason Wallace',
    'Charlie Moore',
    'Colby Jones',
    'Collin Gillespie',
    'Courtland Sutton',
    'Damar Hamlin',
    'Dansby Swanson',
    'Dave Grutman',
    'Dave Portnoy',
    'David Njoku',
    'Denver Broncos',
    'DJ Irie',
    'Dwayne Haskins',
    'Excel Sports Management',
    'Garrett Bolles',
    'Glen Levine',
    'Jack Conklin',
    'Jeff Petry',
    'Jerry Jeudy',
    'John Bommarito',
    'Johnny Davis',
    'Jonathan Taylor',
    'Jonnu Smith',
    'Jordan Poyer',
    'Jorge Masvidal',
    'Josiah Jordan James',
    'Julian Okwara',
    'Justin Minaya',
    'Justin Simmons',
    'Kalen King',
    'Karlo Markovic',
    'Keaton Wallace',
    'Khloe Kardashian',
    'Kim Kardashian',
    'Kool Aid McKinstry',
    'Lawrence Guy',
    'Levi Wallace',
    'Lupo Yacht Club',
    'Mark Williams',
    'Matt Harvey',
    'Matt Milano',
    'Miami Marlins',
    'Micah Hyde',
    'Michael Devoe',
    'Michael Vick',
    'Mike Gesick',
    'Milaysia Fulwiley',
    'Minkah Fitzpatrick',
    'Mitch Trubisky',
    'Najee Harris',
    'New York Mets',
    'Nikola Jokic',
    'Ousmane Dieng',
    'Pat Surtain II',
    'Patty Mills',
    'Rachel Bush',
    'Reece Beekman',
    'Robert Saleh',
    'Romeo Okwara',
    'Russell Wilson',
    'Sal Stewart Jr.',
    'Salvon Ahmed',
    'Sean Payton',
    'Serena Williams',
    'Trayce Jackson-Davis',
    'Tredavious White',
    'Tremaine Edmunds',
    'Tyreek Hill',
    'VaynerSports',
    'Venus Williams',
    'Vintage Culture',
    'Von Miller',
    'YachtLife',
    'Zach Neto',
    'Zvonimir Ivisic',
  ];

  // const shuffledClients = clients.sort(() => Math.random() - 0.5);
  const shuffledClients = clients;

  const numRows = 3;
  const rowLength = Math.ceil(clients.length / numRows);
  const speed = 5;
  const animationDuration = 300 / speed;

  const section = document.querySelector('.section_clients');
  if (!section) return;

  for (let i = 0; i < numRows; i++) {
    const container = document.createElement('div');
    container.classList.add('row-container');
    const row = document.createElement('div');
    row.classList.add('client-row');

    for (let j = 0; j < rowLength; j++) {
      const client = document.createElement('div');
      client.classList.add('client');
      client.textContent = shuffledClients[i * rowLength + j];
      row.appendChild(client);
    }

    switch (i % 2) {
      case 0:
        row.style.animation = `slide-right ${animationDuration - i * 10}s linear infinite`;
        break;
      case 1:
        // row.style.transform = 'translateX(-100%)';
        row.style.animation = `slide-left ${animationDuration + i * 10}s linear infinite`;
        break;
    }

    const clone = row.cloneNode(true);

    container.appendChild(row);
    container.appendChild(clone);
    section.appendChild(container);
  }
}
