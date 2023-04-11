

// Redirect after customer logout
var REDIRECT_PATH = "/collections/all";
var logoutBtn = document.querySelector('a[href^="/account/logout"]');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        fetch(logoutBtn.href).then(() => window.location.href = REDIRECT_PATH)
    })
}

