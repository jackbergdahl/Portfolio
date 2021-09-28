const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const bigProfilePic = document.getElementById('proficPic');
const spinPic = document.querySelector('spinProfilPic');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');   
});

function spinPicture() {
    document.getElementById('profilPic').onclick=function(spinPicture) {
    this.classList.toggle('flip');
    }
}
spinPicture();


//open picture in new window                    
//var h = screen.height;
//var w = screen.width;
//document.getElementById('profilPic').onclick=function(spinPicture){
//window.open('/Photos/0.jpg', '_blank' , 'width='+w+', height='+h+'');
//}



