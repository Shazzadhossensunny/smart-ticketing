// scroll function
document.getElementById('buyTickets').addEventListener('click', function() {
    const paribahanInfo = document.getElementById('paribahan-info');
    paribahanInfo.scrollIntoView({ behavior: 'smooth' });
  });
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };