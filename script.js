
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
   
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


let count = 0;
const cartCount = document.getElementById('cartCount');

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    btn.textContent = 'Added ✓';
    setTimeout(() => { btn.textContent = 'Add +'; }, 1000);
  });
});


const offerBtn = document.getElementById('offerBtn');
const offerText = document.getElementById('offerText');

offerBtn.addEventListener('click', () => {
  offerText.textContent = '🎉 Today Offer: Biryani + Cold Drink = Rs 499 only! COD Available.';
});


const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    darkBtn.textContent = '☀️';
  } else {
    darkBtn.textContent = '🌙';
  }
});