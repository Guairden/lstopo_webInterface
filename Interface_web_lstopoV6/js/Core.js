class Core{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = "Core";
        this.path = path;
        this.div = document.createElement('div');
        this.createElement();
    }
    createElement(){
        const P = document.createElement('p');
        P.innerHTML = this.type;
        this.div.appendChild(P);
        this.div.classList.add("Core");
        this.parentElement.appendChild(this.div);
    }
    getDiv(){
        return this.div;
    }
}
