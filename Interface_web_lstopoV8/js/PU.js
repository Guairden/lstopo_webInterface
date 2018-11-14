class PU{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = "PU";
        this.index = path["@attributes"]["os_index"];
        this.path = path;
        this.createElement();
    }
    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = this.type + this.index;
        div.appendChild(P);
        div.classList.add("PU");
        this.parentElement.appendChild(div);
    }
}
