const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', ()=>{
    this.classList.toggle('active');
    if(mobileMenu.style.display==='block'){
        mobileMenu.style.display='none';
    }else{
        mobileMenu.style.display='block';
    }
if(!isClickInsideNav && mobileMenu.style.display==='block'){
    mobileMenu.style.display='none';
    hamburger.classList.remove('active')
}

})
