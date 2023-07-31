console.log("Screen Running.. ")

document.querySelector('.close-sign').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.three-bar').style.display = 'inline';
        document.querySelector('.close-sign').style.display = 'none';
    }
    else{
        setTimeout( () => {
            document.querySelector('.close-sign').style.display = 'inline';
        }, 200);
        
        document.querySelector('.three-bar').style.display = 'none';
    }
})
