const slider = document.querySelector('.slider-homepage');

function activate(e) {
  const items = document.querySelectorAll('.item-homepage');
  e.target.matches('.next-homepage') && slider.append(items[0])
  e.target.matches('.prev-homepage') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);