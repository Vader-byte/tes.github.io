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
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
})


















// sweet