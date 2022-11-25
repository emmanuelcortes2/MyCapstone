/* eslint-disable */
function toggle() {
  const x = document.getElementById('menu-mobile');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}

const data = [
  {
    photo: './images/user1.jpg',
    name: 'Mary Adams',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    photo: './images/user2.jpg',
    name: 'Kyan Bates',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    photo: './images/user3.jpg',
    name: 'Jayden-James Vaughan',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    photo: './images/user4.jpg',
    name: 'Arif Williams',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    photo: './images/user5.jpg',
    name: 'Cavan Fisher',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    photo: './images/user6.jpg',
    name: 'Emily Wormald',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    description2: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const speakersDiv = document.getElementById('speaker-container');

for (let i = 0; i <= 1; i += 1) {
  const speakers = `
    <div class="speaker-profile">
      <img id="profile-pic" src="${data[i].photo}" alt="speaker-image">
      <div id="profile-info">
        <h5>${data[i].name}</h5>
        <h6>${data[i].description}
        </h6>
        <hr width="60px">
        <p>${data[i].description2}
        </p>
      </div>
    </div>`;
  speakersDiv.innerHTML += speakers;
}

for (let i = 2; i < data.length; i += 1) {
  const speakersM = `
    <div class="speaker-profile" id="show-more${i}">
      <img id="profile-pic" src="${data[i].photo}" alt="speaker-image">
      <div id="profile-info">
        <h5>${data[i].name}</h5>
        <h6>${data[i].description}
        </h6>
        <hr width="60px">
        <p>${data[i].description2}
        </p>
      </div>
    </div>`;
  speakersDiv.innerHTML += speakersM;
}

const btn = document.getElementById('more');
const z = document.getElementById('show-more2');
const y = document.getElementById('show-more3');
const x = document.getElementById('show-more4');
const w = document.getElementById('show-more5');

window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}

btn.addEventListener('click', () => {
  if (x.style.display === 'grid') {
    x.style.display = 'none';
  } else {
    x.style.display = 'grid';
  }

  if (y.style.display === 'grid') {
    y.style.display = 'none';
  } else {
    y.style.display = 'grid';
  }

  if (w.style.display === 'grid') {
    w.style.display = 'none';
  } else {
    w.style.display = 'grid';
  }

  if (z.style.display === 'grid') {
    z.style.display = 'none';
  } else {
    z.style.display = 'grid';
  }

});
