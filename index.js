//Original Images
function newImg (imgLink, left, bottom) {
    let newImg = document.createElement('img')
    newImg.src = imgLink
    newImg.style.position = 'fixed'
    newImg.style.left = left + 'px'
    newImg.style.bottom = bottom +'px'
    document.body.append(newImg)
}
newImg('assets/green-character.gif', 100, 100)
newImg('assets/pine-tree.png', 450, 200)
newImg('assets/tree.png', 200, 300)
newImg('assets/pillar.png', 350, 100)
newImg('assets/crate.png', 150, 200)
newImg('assets/well.png', 500, 425)

//Dissapearing Items
function newItem (imgSrc, left1, bottom1) {
let newItem = document.createElement('img')
newItem.src = imgSrc
newItem.style.position = 'fixed'
newItem.style.left = left1 +'px'
newItem.style.bottom = bottom1+'px'
document.body.append(newItem)

newItem.addEventListener('dblclick', function(){
    newItem.remove()
})
}

newItem('assets/sword.png', 500,405)
newItem('assets/sheild.png', 165,185)
newItem('assets/staff.png', 600,100)

//Background
function setBackground (src, width, height, alt) {
    let setBackground = document.createElement("img");
    setBackground.src = src;
    setBackground.width = width;
    setBackground.height = height;
    setBackground.alt = alt; 
    document.body.appendChild(setBackground);
}
setBackground ('assets/grass.png', window.innerWidth, window.innerHeight, grass)