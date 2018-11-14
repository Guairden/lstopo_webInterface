class L3Cache{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = "L3Cache";
        this.path = path;
        this.weight = '(' + path["@attributes"]["cache_size"].slice(-0,-3) + 'KB)';
        this.createElement();
    }
    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = this.type + this.weight;
        div.appendChild(P);
        div.classList.add("L3Cache");
        this.parentElement.appendChild(div);
    }
}