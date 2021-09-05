const productos = [
    { id: "1", name: "African bow", url: 'reactecommerce/src/images/african-bow.jpg', categoria: "Bows", price: 27000 },
    { id: "2", name: "English Longbow", url: 'reactecommerce/src/images/longbow.png', categoria: "Bows", price: 37000 },
    { id: "3", name: "Mongolian bow", url: 'reactecommerce/src/images/mongolian-bow.jpg', categoria: "Bows", price: 40000 },
    { id: "4", name: "Japanese Yumi", url: 'reactecommerce/src/images/yumi.jpg', categoria: "Bows", price: 55000 },
    { id: "5", name: "Flamberge", url: 'reactecommerce/src/images/flamberge.png', categoria: "Weapon", price: 81000 },
    { id: "6", name: "Cup rapier", url: 'reactecommerce/src/images/cup-rapier.jpg', categoria: "Weapon", price: 76000 },
    { id: "7", name: "Pudao", url: 'reactecommerce/src/images/pudao.jpg', categoria: "Weapon", price: 57000 },
    { id: "8", name: "Viking spearhead", url: 'reactecommerce/src/images/viking-spearhead.jpg', categoria: "Weapon", price: 30500 },
    { id: "9", name: "Nodachi", url: 'reactecommerce/src/images/nodachi.jpg', categoria: "Weapon", price: 86000 },
    { id: "10", name: "Chinese War Sword", url: 'reactecommerce/src/images/cn-war-sword.jpg', categoria: "Weapon", price: 90400 }
];

function getProductos(id) {
    if (id === undefined) {
        return productos
    } else {
        return productos.find(producto => producto.id === id)
    }
}

export let task = new Promise((resolve) => {
    //console.log("ejecutando promesa") 
    setTimeout(() => {
        resolve(getProductos());
    }, 3000);
});
