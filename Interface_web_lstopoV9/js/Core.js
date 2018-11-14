class Core extends Node{
    constructor(path,depth){
        super(path,depth)
        this.type = "Core";
        //this.weight = '(' + path["@attributes"]["cache_size"].slice(-0,-3) + 'KB)';
    }
}