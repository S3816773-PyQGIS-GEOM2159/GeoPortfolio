document.getElementById('arrow').addEventListener('click', function() {
    document.getElementById('main-title-page').style.left = '-100vw';
    document.getElementById('links-page').style.left = '0';
});

document.querySelectorAll('.back-arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        document.getElementById('main-title-page').style.left = '0';
        document.getElementById('links-page').style.left = '100vw';
        document.querySelectorAll('#about-page, #academics-page, #experience-page, #skills-page').forEach(function(page) {
            page.style.left = '200vw';
        });
    });
});

document.querySelectorAll('.link').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('links-page').style.left = '-100vw';
        document.getElementById(link.id.replace('-link', '-page')).style.left = '0';
    });
});
