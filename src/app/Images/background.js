function setBackgroundToRepeat() {
    document.getElementById("backgroundImg") = function (){
    document.getElementById("backgroundImg").src = "./app/Images/logo.png";
    };
}

windows.onload = function(){
    setBackgroundToRepeat();
};