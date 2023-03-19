document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.code);
    if (event.code === 'ArrowDown') {
      fetch('/scroll', {
        method: 'POST',
        body: new URLSearchParams({
          'direction': 'down'
        })
      });
    } else if (event.code === 'ArrowUp') {
      fetch('/scroll', {
        method: 'POST',
        body: new URLSearchParams({
          'direction': 'up'
        })
      });
    }
  });