var animation = anime.timeline({
    targets: '.params-inheritance-demo .el',
    delay: function(el, i) { return i * 200 },
    duration: 800, // Can be inherited
    easing: 'easeInQuad', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: false // Is not inherited
  });

  document.querySelector('#btn').addEventListener('click', f1)

  function f1() {
    animation
    .add({
        targets: '#moon',
        top: '110px',
        duration: 1110,
        easing: 'spring(1, 80, 10, 0)'
        
        
    })
    .add({
        targets: '#stars',
        top: '0px',
        
        
    })
    .add({

        targets: '#mountains_behind',
        bottom: '0px',
        easing: 'spring(1, 80, 10, 0)'
        
        
    })
    .add({
        targets: '#mountains_front',
        bottom: '0px',
        easing: 'spring(1, 80, 10, 0)'
        

    });

    anime({
        targets: '#btn',
        translateY: 1150,
        loop: 1,
        easing: 'easeOutInQuad',
        duration: 2500,
      });
  }
 