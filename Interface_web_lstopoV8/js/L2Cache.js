class L2Cache{
    constructor(path,parentElement){
        this.parentElement = parentElement;
        this.type = path["@attributes"].type;
        this.path = path;
        this.weight = '(' + path["@attributes"]["cache_size"].slice(-0,-3) + 'KB)';
        this.div = this.createElement();
        this.createInfoPopup()
    }

    createElement(){
        const div = document.createElement('div');
        const P = document.createElement('p');

        P.innerHTML = this.type + this.weight;
        div.appendChild(P);
        div.classList.add("L2");
        this.parentElement.appendChild(div);
        return div
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
        h2.innerHTML = "modalHeader"

        const modalBody = document.createElement('div')
        modalBody.classList.add("modal-body")

        const p1 = document.createElement('p')
        p1.innerHTML = this.path["@attributes"].gp_index

        const p2 = document.createElement('p')
        p2.innerHTML = "Some other text..."

        modalBody.appendChild(p1)
        modalBody.appendChild(p1)

        modalHeader.appendChild(h2)

        modalContent.appendChild(modalHeader)
        modalContent.appendChild(modalBody)

        modal.appendChild(modalContent)
        document.body.appendChild(modal)

        this.div.addEventListener('click', function() {
          modal.style.display = "block";
        })
      
      
        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }
}