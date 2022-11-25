const main = document.querySelector("#main");
const character = document.querySelector("#character");

for (let i = 0; i <= 9; i++) {
    
    let newdiv = document.createElement("div");
    newdiv.style.backgroundColor = "gray";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.id = "button"
    newdiv.style.position = "absolute";
    newdiv.style.top = `${50*i}px`
    
    main.appendChild(newdiv);
}

for (let j = 0; j <= 9; j++) {
    
    for (let k = 1; k <= 9; k++) {
        
        let newdiv = document.createElement('div');
        newdiv.style.backgroundColor = "gray";
        newdiv.style.width = "50px";
        newdiv.style.height = "50px";
        newdiv.style.position = "absolute";
        newdiv.style.left = `${50*k}px`;
        newdiv.style.top = `${50*j}px`;
        
        main.appendChild(newdiv);
    }
}

character.style.left = "0px";
character.style.top = "0px";

main.appendChild(character)

// Very bad way to make a maze moment

for (let i = 1; i < 10; i++) {
    
    let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = "red";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.position = "absolute";
    newdiv.style.left = `${50}px`;
    newdiv.style.top = `${i*50-50}px`;
    
    newdiv.id = "bar";
    
    main.appendChild(newdiv);
}

for (let i = 1; i < 10; i++) {
    
    let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = "red";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.position = "absolute";
    newdiv.style.left = `${200}px`;
    newdiv.style.top = `${i*50}px`;
    
    newdiv.id = "bar";
    
    main.appendChild(newdiv);
}

for (let i = 1; i < 10; i++) {
    
    let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = "red";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.position = "absolute";
    newdiv.style.left = `${300}px`;
    newdiv.style.top = `${i*50-50}px`;
    
    newdiv.id = "bar";
    
    main.appendChild(newdiv);
}

for (let i = 1; i < 10; i++) {
    
    if (i%2 === 0 && i !== 2) {
        
        let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = "red";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.position = "absolute";
    newdiv.style.left = `${350}px`;
    newdiv.style.top = `${i*50-50}px`;
    
    newdiv.id = "bar";
    
    main.appendChild(newdiv);
    }
}

for (let i = 1; i < 10; i++) {
    
    if (i%2 !== 0) {
        
        let newdiv = document.createElement('div');
    newdiv.style.backgroundColor = "red";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.position = "absolute";
    newdiv.style.left = `${400}px`;
    newdiv.style.top = `${i*50-50}px`;
    
    newdiv.id = "bar";
    
    main.appendChild(newdiv);
    }
}

// End of the bad code

const bars = document.querySelectorAll('#bar');

const isBarAt = (x, y)=>{
    console.log(x, y)
    
    bars.forEach((el)=>{
        
        if (el.style.left === x && el.style.top === y) {
            
            console.log('yes')
            character.style.left = '0px';
            character.style.top = '0px';
            return true;
        }
    })
    
}

const move = (key) => {
    
    if (key === "a") {
        
        let n = parseInt(character.style.left.replace("px", ""));
        
        if (n-50>-50) {
            
            character.style.left = `${n-50}px`;
            isBarAt(character.style.left, character.style.top)
        }
        
    } else if (key === "d") {
        
        let n = parseInt(character.style.left.replace("px", ""));
        
        if (n+50<=450) {
            
            character.style.left = `${n+50}px`;
            isBarAt(character.style.left, character.style.top)
        }
        
    } else if (key === "w") {
        
        
        let n = parseInt(character.style.top.replace("px", ""));
        
        if (n-50>-50) {
            
            character.style.top = `${n-50}px`;
            isBarAt(character.style.left, character.style.top)
        }
        
    } else if (key === "s") {
        
        let n = parseInt(character.style.top.replace("px", ""));
        
        if (n-50<=350) {
            
            character.style.top = `${n+50}px`;
            isBarAt(character.style.left, character.style.top)
        }
        
    }
}

document.onkeydown = (k)=>{
    
    move(k.key);
}
