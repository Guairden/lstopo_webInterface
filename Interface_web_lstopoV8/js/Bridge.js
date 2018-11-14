class Bridge{
    constructor(path,parentDiv){
        this.parentDiv = parentDiv;
        this.type = "Bri";
        this.path = path;
        this.div = document.createElement('div');
        this.createElement();
    }
    createElement(){
        const P = document.createElement('p');
        P.innerHTML = this.type;
        this.div.appendChild(P);
        this.div.classList.add("Bridge");
        this.parentDiv.appendChild(this.div);
    }
    getDiv(){
        return this.div;
    }
}
