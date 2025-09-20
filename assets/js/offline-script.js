function checkOnlineStatus() {
    if (navigator.onLine) {
        document.body.classList.add('censored');

    } else {
        document.body.classList.remove('censored');
    }
}

window.addEventListener('load', checkOnlineStatus);

window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);