class NUMANode extends Node{
    constructor(path,depth){
        console.log(arguments.length)
        if(arguments.length == 1){
            super(path,depth)
            this.type = "NUMANode";
        }else{
            super()
            this.type = "NUMANode";
            this.path = path;
            this.createElement();
        }
    }

    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');
        P.innerHTML = this.type;
        div.appendChild(P);
        div.classList.add("NUMANode");
        document.body.appendChild(div);
    }
    
}