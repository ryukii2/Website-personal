function toggleMenu() {
    const overlay = document.getElementById("overlayMenu");
    const hamburger = document.querySelector(".hamburger");
    
    if (overlay.style.width === "100%") {
        // Tutup menu
        overlay.style.width = "0";
        hamburger.classList.remove("active");
    } else {
        // Buka menu
        overlay.style.width = "100%";
        hamburger.classList.add("active");
    }
}

// Tutup menu ketika user mengklik link di dalam overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlayLinks = document.querySelectorAll('.overlay-content a:not(.closebtn)');
    const overlayButton = document.querySelector('.overlay-content .btn-login');
    
    // Tutup menu ketika link diklik
    overlayLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // Tutup menu ketika button diklik
    if (overlayButton) {
        overlayButton.addEventListener('click', function() {
            toggleMenu();
        });
    }
    
    // Tutup menu ketika user mengklik di luar area menu
    const overlay = document.getElementById("overlayMenu");
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            toggleMenu();
        }
    });
});

// Tambahan: Handle resize window untuk memastikan menu tertutup ketika layar diperbesar
window.addEventListener('resize', function() {
    const overlay = document.getElementById("overlayMenu");
    const hamburger = document.querySelector(".hamburger");
    
    if (window.innerWidth > 768) {
        overlay.style.width = "0";
        hamburger.classList.remove("active");
    }
});