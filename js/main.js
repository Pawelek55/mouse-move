let container = document.querySelector('.container');
let text = document.querySelector('h1');
let walk = 800 // 100px;

function shadow(e){
//    let width = container.offsetWidth;
//    let heigth = container.offsetHeight; bottom text is the same but it witten in Es6
    let { offsetWidth: width, offsetHeight: heigth } = container;
    let { offsetX: x, offsetY: y} = e;
//    console.log(x, y);
    
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
//    console.log(x,y)
    
    let xWalk = Math.round((x / width * walk) - walk /2);
    let yWalk = Math.round((y / heigth * walk) - walk /2);
    console.log(xWalk, yWalk);
    
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 0, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 0, 255, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 150, 255, 0.7)
    `;
}

container.addEventListener('mousemove', shadow);