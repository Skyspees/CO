const form = document.getElementById('curhatForm');
const input = document.getElementById('curhatInput');
const list = document.getElementById('curhatList');
const kategori = document.getElementById('kategori');
const toggle = document.getElementById('darkToggle');

let curhatan = JSON.parse(localStorage.getItem('curhatan')) || [];

function renderCurhat() {
  list.innerHTML = "";
  curhatan.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'curhat-item';
    div.innerHTML = `
      <div class="kategori">#${item.kategori}</div>
      <p>${item.text}</p>
      <div class="reaksi">
        <img src="assets/icons/love.png" onclick="alert('Kirim cinta!')"/>
        <img src="assets/icons/hug.png" onclick="alert('Peluk virtual!')"/>
        <img src="assets/icons/spirit.png" onclick="alert('Semangat ya!')"/>
      </div>
    `;
    list.prepend(div);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  const kat = kategori.value;

  if (text && kat) {
    curhatan.push({ kategori: kat, text });
    localStorage.setItem('curhatan', JSON.stringify(curhatan));
    renderCurhat();
    input.value = "";
    kategori.value = "Umum";
  }
});

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

renderCurhat();