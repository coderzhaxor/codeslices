const showMenu = () => {
    const nav = document.getElementById('navbar-menu');
    let isHidden = nav.classList.contains('hidden');

    // Jika navbar-menu punya class hidden
    if(isHidden) {
        // Maka hapus class tersebut dan gantikan dengan block
        // agar menampilkan menu
        nav.classList.remove('hidden');
        nav.classList.add('block');
    } else {
        // Jika navbar-menu tidak punya class hidden
        // Maka buatlah menjadi hidden untuk menutup menu
        nav.classList.add('hidden');
        nav.classList.remove('block')
    }
    
    ScrollReveal().reveal('.card-scroll');
}
