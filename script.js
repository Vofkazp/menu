let marker = document.querySelector('#marker'),
list = document.querySelectorAll('.menu-item');

function moveMarker(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveMarker(e.target);
    });
});