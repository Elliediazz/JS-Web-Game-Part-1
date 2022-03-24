
function newImg(imgSrc, left, bottom) {
    let newImg = document.createElement('img')
    newImg.src = imgSrc
    newImg.style.position = 'fixed'
    newImg.style.left = left + 'px'
    newImg.style.bottom = bottom +'px'
    document.body.append(newImg)
    return newImg
}

function newItem(imgSrc, left, bottom) {
    let newItem = newImg(imgSrc, left, bottom)

    newItem.addEventListener('dblclick', function(){
    newItem.remove()
    })
}
//Images
newImg('assets/green-character.gif', 100, 100)
newImg('assets/pine-tree.png', 450, 200)
newImg('assets/tree.png', 200, 300)
newImg('assets/pillar.png', 350, 100)
newImg('assets/crate.png', 150, 200)
newImg('assets/well.png', 500, 425)

//Dissapearing Items
newItem('assets/sword.png', 500,405)
newItem('assets/sheild.png', 165,185)
newItem('assets/staff.png', 600,100)


