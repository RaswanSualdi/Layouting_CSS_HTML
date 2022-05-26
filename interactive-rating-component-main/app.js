
    let buttons = document.getElementsByTagName("button");
    for(let i = 0; i<buttons.length;i++){
        buttons[i].onclick = function(){
            buttons[i].style.opacity = "1";
        };
        
    }
