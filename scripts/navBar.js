let navBar = document.getElementById("top-nav");

document.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        navBar.className = "scrolled-nav-bar"
        desktopNavControls = navBar.getElementsByTagName("li")
        for(var i = 0; i < desktopNavControls.length; i++ ){
            desktopNavControls[i].className = "desktop-nav-control-scrolled";
        }
        document.getElementById("logo").src = "assets/img/logo.svg";
        
    }
    else{
        navBar.className = "nav-site";
        desktopNavControls = navBar.getElementsByTagName("li")
        for(var i = 0; i < desktopNavControls.length; i++ ){
            desktopNavControls[i].className = "desktop-nav-control";
        }
        document.getElementById("logo").src = "assets/img/logo-white.svg";
    }
})