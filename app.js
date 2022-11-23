function toggle (){
    const x = document.getElementById('menu-mobile');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
    } else {
      x.style.display = 'flex';
    }
}