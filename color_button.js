function button() {
    let randVal = 1 + Math.floor(Math.random() + Math.random() + Math.random())
    if(randVal === 1) {
        document.body.style.backgroundColor = '#16558F'
    }
    else if(randVal === 2) {
        document.body.style.backgroundColor = '#0583D2'
    } 
    else if(randVal === 3) {
        document.body.style.backgroundColor = '#61B0B7'
    }
    else if(randVal === 4) {
        document.body.style.backgroundColor = '#B8E3FF'
    }
    else {
        document.body.style.backgroundColor = blue
    }
}
