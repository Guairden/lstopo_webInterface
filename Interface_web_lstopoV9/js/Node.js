class Node{
    constructor(nodeInfo){
        if(nodeInfo){
            this.depth = nodeInfo.depth
            this.path = nodeInfo.path
            this.logical_index = nodeInfo.logical_index
            this.sibling_rank = nodeInfo.sibling_rank
            this.arity = nodeInfo.arity
            this.package = nodeInfo.package
            this.parent = this.findParent(nodeInfo)
            this.div = this.createDiv()
            create
        }  
    }

    createDiv(){
        const node = document.createElement('div')
        const p = document.createElement('p')
        p.innerHTML = this.path["@attributes"].type
        node.appendChild(p)
        node.classList.add(this.path["@attributes"].type)
        return node;
    }

    findParent(nodeInfo){
        let parent = null
        nodes.forEach(node => {
            if(nodeInfo.parent[2] === 0){
                if(node.depth === nodeInfo.parent[0] && node.logical_index === nodeInfo.parent[1])
                    parent = node
            }else{
                if(node.depth === nodeInfo.parent[0] && node.logical_index === this.logical_index)
                    parent = node
            }
        });
        return parent
    }

    displayDiv(parent){
        parent.appendChild(this.div)
    }
}