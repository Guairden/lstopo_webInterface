class NUMANode{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = "NUMANode";
        this.path = path;
        this.createElement();
    }
    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = this.type;
        div.appendChild(P);
        div.classList.add("NUMANode");
        this.parentElement.appendChild(div);
    }
}