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

speakers = `
<div class="speaker-profile">
<img id="profile-pic" src="${data[0].photo}" alt="">
<div id="profile-info">
    <h5>${data[0].name}</h5>
    <h6>${data[0].description}
    </h6>
    <hr width="60px">
    <p>${data[0].description2}
    </p>
</div>
</div>
<div class="speaker-profile">
<img id="profile-pic" src="${data[1].photo}" alt="">
<div id="profile-info">
    <h5>${data[1].name}</h5>
    <h6>${data[1].description}
    </h6>
    <hr width="60px">
    <p>${data[1].description2}
    </p>
</div>
</div>
<div class="speaker-profile">
<img id="profile-pic" src="${data[2].photo}" alt="">
<div id="profile-info">
    <h5>${data[2].name}</h5>
    <h6>${data[2].description}
    </h6>
    <hr width="60px">
    <p>${data[1].description2}
    </p>
</div>
</div>
<div class="speaker-profile">
<img id="profile-pic" src="${data[3].photo}" alt="">
<div id="profile-info">
    <h5>${data[3].name}</h5>
    <h6>${data[3].description}
    </h6>
    <hr width="60px">
    <p>${data[3].description2}
    </p>
</div>
</div>
<div class="speaker-profile">
<img id="profile-pic" src="${data[4].photo}" alt="">
<div id="profile-info">
    <h5>${data[4].name}</h5>
    <h6>${data[4].description}
    </h6>
    <hr width="60px">
    <p>${data[4].description2}
    </p>
</div>
</div>
<div class="speaker-profile">
<img id="profile-pic" src="${data[5].photo}" alt="">
<div id="profile-info">
    <h5>${data[5].name}</h5>
    <h6>${data[5].description}
    </h6>
    <hr width="60px">
    <p>${data[5].description2}
    </p>
</div>
</div>`;

document.getElementById('speaker-container').innerHTML = speakers;