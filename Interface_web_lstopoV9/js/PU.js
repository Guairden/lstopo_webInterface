class PU extends Node{
    constructor(path,depth){
        super(path,depth)
        this.type = "PU";
        //this.weight = '(' + path["@attributes"]["cache_size"].slice(-0,-3) + 'KB)';
    }

    displayDiv(){
        this.parent.div.appendChild(this.div)
    }
}