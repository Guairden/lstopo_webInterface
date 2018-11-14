function createPackage(){

    const package = document.createElement('div');
    const titre = document.createElement('h5');
    titre.innerHTML = "Package";
    package.appendChild(titre);
    package.classList.add("package");
    document.body.appendChild(package);

    return package;
}