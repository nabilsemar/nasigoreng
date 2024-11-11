
document.addEventListener('contextmenu', event => event.preventDefault());

const instagram = document.getElementById('instagram');
instagram.addEventListener('click', function() {
    window.location.href = "instagram://user?username=iphulls_";
});

const tiktok = document.getElementById('tiktok');
tiktok.addEventListener('click', function() {
    window.location.href = "https://www.tiktok.com/@iphulls_";
});

const openplaylist = document.getElementById('playlist-galau');
openplaylist.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/playlist/0cFVj6cmmmLWCHq668gOIp?si=9bf3dcc98b3e489e';
});

function jir() {
    setTimeout(function() {
        alert('Jir dari kata anjir. Bisa digunakan macam-macam kondisi. Bisa digunakan saat terkejut, terkagum-kagum, kesal, dan sebagainya. Mirip dengan "damn" bahasa Inggris.');
    });
}

const rickroll = document.getElementById("ri");
const background = document.querySelector('.rickroll');
var audio = document.getElementById("rickroll");
background.style.display = 'none'; 
background.style.zIndex = -3;
rickroll.addEventListener('click', () => {
    if (background.style.zIndex === '-3'){
        background.style.display = 'block'; 
        background.style.zIndex = 2;
        audio.play();
    }else{
        background.style.zIndex = -3;

    }
});

const ipul = document.getElementById('ipul');
instagram.style.display = 'none'; 
tiktok.style.display = 'none'; 
ipul.addEventListener('click', () => {
    if (instagram.style.display === 'none') {
        instagram.style.display = 'block'; 
        instagram.style.animation = 'igm 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        tiktok.style.display = 'block'; 
        tiktok.style.animation = 'ttm 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
    }else{
        setTimeout(function() {
        instagram.style.display = 'none'; 
        tiktok.style.display = 'none'; 
        }, 200);
        instagram.style.animation = 'igo 0.2s ease-in-out forwards';
        tiktok.style.animation = 'tto 0.2s ease-in-out forwards';
    }
});