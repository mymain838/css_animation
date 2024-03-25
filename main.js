let logoText = document.querySelector('.logo_text');

window.addEventListener('scroll', function () {
  let value = this.window.scrollY;
  console.log(value);
  if (value > 300) {
    logoText.style.animation = 'slide 1s ease-out forwards';
  } else {
    logoText.style.animation = 'disappear 1s ease-out forwards';
  }
});
