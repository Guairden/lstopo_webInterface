class OSDev{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = path["@attributes"].type;
        this.path = path;
        this.createElement();
    }
    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = this.type;
        div.appendChild(P);
        div.classList.add("OSDev");
        this.parentElement.appendChild(div);
    }
}

class FalseOSDev{
    constructor(parentElement){
        this.parentElement = parentElement;
        this.createElement();
    }
    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = "FalseOSDev";
        div.appendChild(P);
        div.classList.add("FalseOSDev");
        this.parentElement.appendChild(div);
    }
}