AOS.init()

const container = document.querySelector('.container');
  for (let i = 1; i <= 55; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    container.appendChild(heart);
  }

  function animateHeart(){
    anime({
      targets: '.heart',
      translateX: function(){
        return anime.random(-300,300);
      },
      translateY: function(){
        return anime.random(-400,400);
      },
      rotate: 45,
      scale: function(){
        return anime.random(1,1.5);
      },
      easing: 'easeInOutBack' ,
      duration: 3000,
      delay: anime.stagger(10),
      complete: animateHeart,
    })
  }

animateHeart()


const t = document.querySelector('#disini');
t.addEventListener('click', function() {
  Swal.fire('test')
})










AOS.init()





// sweet
