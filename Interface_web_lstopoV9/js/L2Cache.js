class L2Cache extends Node{
    constructor(path,depth){
        super(path,depth)
        this.type = "L2Cache";
        //this.weight = '(' + path["@attributes"]["cache_size"].slice(-0,-3) + 'KB)';
    }
}