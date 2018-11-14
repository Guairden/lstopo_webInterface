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
            this.createInfoPopup()
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

    createInfoPopup(){
        
        const modal = document.createElement('div')
        modal.id = "myModal"
        modal.classList.add("modal")
        
        const modalContent = document.createElement('div')
        modalContent.classList.add("modal-content")

        const modalHeader = document.createElement('div')
        modalHeader.classList.add("modal-header")

        const h2 = document.createElement('h2')
        h2.innerHTML = this.path["@attributes"].type

        const modalBody = document.createElement('div')
        modalBody.classList.add("modal-body")

        const p1 = document.createElement('p')
        p1.innerHTML = "gp_index : " + this.path["@attributes"].gp_index

        
        const p2 = document.createElement('p')
        p2.innerHTML = "complete_cpuset :" + this.path["@attributes"].complete_cpuset

        const p3 = document.createElement('p')
        p3.innerHTML = "complete_nodeset :" + this.path["@attributes"].complete_nodeset

        const p4 = document.createElement('p')
        const p5 = document.createElement('p')

        if(this.path["@attributes"].cache_associativity){
            p4.innerHTML = "cache_associativity :" + this.path["@attributes"].cache_associativity
            p5.innerHTML = "cache_type :" + this.path["@attributes"].cache_type    
        }else{
            p4.innerHTML = "os_index :" + this.path["@attributes"].os_index
        }
        

        modalBody.appendChild(p1)
        modalBody.appendChild(p2)
        modalBody.appendChild(p3)
        modalBody.appendChild(p4)
        modalBody.appendChild(p5)
        
        modalHeader.appendChild(h2)

        modalContent.appendChild(modalHeader)
        modalContent.appendChild(modalBody)

        modal.appendChild(modalContent)
        document.body.appendChild(modal)

        this.div.addEventListener('click', function(e) {
            //a little complex if that solve this problem : when you click on PU, Core popup event get triggered (PU being inside the core div..)
            if((e.currentTarget != e.target && e.target.tagName != ('P')) ||
                (e.currentTarget.classList.contains('Core') && e.target.tagName == 'P' && e.target.parentElement.classList.contains('PU') ))
                return;
            modal.style.display = "block";
        })
        
        
        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
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