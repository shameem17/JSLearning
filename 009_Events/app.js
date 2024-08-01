const subscribeButton = document.getElementById("subscribeButton")
const likeButton = document.getElementById('likeButton')
// Event
function clickHandler(){
    subscribeButton.innerHTML = 'Subscribed';
    subscribeButton.style.backgroundColor = 'gray';
}

likeButton.onclick = function(){
    likeButton.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
    likeButton.style.backgroundColor = 'white';
    likeButton.style.color = 'gray';
    likeButton.style.border = '1px black solid';
}
// add listener
subscribeButton.addEventListener('mouseenter',function(){
    this.style.backgroundColor = '#262262';
});
subscribeButton.addEventListener('mouseleave', function(){
     this.style.backgroundColor = 'red';
});
function hoverHandler(){ 
     this.style.backgroundColor = '#262262';
}

// bubling, event capturing
document.getElementById('ul').addEventListener('click', function(){
    console.log("ul clikced");
},
// false // false for bubling
 true   // true for event capturing
);

document.getElementById('li').addEventListener('click', function(){
    console.log("li clikced");
},
// false // false for bubling
   true // true for event capturing
);

// events
/*
 onclick 
 ondblclick --> double click
 oncontexmenu -->right click
 onmouseenter
 onmouseout
 onkeypress
 onkeyup
 onresize
 onscroll
 ....

*/