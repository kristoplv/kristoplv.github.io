var opener = document.querySelector("#openMenu");
var canvas = document.getElementById("canv");
var closer;

const menu_about = '<container class="menu" id="openedMenu"><div class="right-menu"><div class="menu-logo"></div><div class="menu-item">About us</div><div class="menu-item">Completed projects</div><div class="menu-item">Contact us</div></div><div class="left-menu-about" id="hidden-text"><p>What is YDC?</p><br><p class="p-text" style="font-size: 1.2em;">YDC is an opportunity for You to create Your Digital Company! Our mission is to bring every small business to a Global scale by offering: <ul><li>Custom websites</li><li>Professional Facebook/Instagram accounts</li><li>Councelling on maintaining a digital company</li></ul></p></div><div id="closeMenu"></div></container>';
opener.addEventListener("click", openMenu);


function openMenu(){
        document.body.innerHTML += menu_about;
        document.getElementById("canv").style.animationName = "blurImage";
        document.getElementById("canv").style.filter = "blur(5px)";
        closer = document.querySelector("#closeMenu");
        closer.addEventListener("click", closeMenu);
        document.getElementById("hidden-text").style.display = "inline-block";
}
function closeMenu(){
    document.querySelector("#openedMenu").remove();
    document.getElementById("canv").style.animationName = "deleteBlur";
    document.getElementById("canv").style.filter = "";
    opener = document.querySelector("#openMenu");
    opener.addEventListener("click", openMenu);

}
