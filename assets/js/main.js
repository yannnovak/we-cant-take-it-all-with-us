document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/js/links.json')
        .then(response => response.json())
        .then(data => {
            const captionElems = document.getElementsByClassName('caption');
            const noticeElems = document.getElementsByClassName('censorship-notice');
            for (let elem of captionElems) {
                elem.textContent = data.caption;
            }
            for (let elem of noticeElems) {
                elem.textContent = data.notice;
            }
            const imgElems = document.querySelectorAll('#gallery img');
            if (data.images && Array.isArray(data.images)) {
                imgElems.forEach((img, i) => {
                    if (data.images[i]) {
                        img.src = data.images[i];
                    }
                });
            }
        })
        .catch(error => console.error('Error fetching links:', error));
});