
const msgCloseBtn = document.getElementById('closeMessage');
msgCloseBtn.addEventListener('click', function () {
    const msg = document.getElementById('msg');
    msg.style.transition = 'opacity .25s ease, transform .25s ease';
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(-6px)';
    setTimeout(() => { msg.style.display = 'none'; }, 260);
});