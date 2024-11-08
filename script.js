// Lisab kerimisefekti, kui kasutaja jõuab iga ikooni nähtavale alale
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('show');
        }
    });
});
