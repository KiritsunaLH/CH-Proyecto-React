const productos = [
    { id: "1", name: "African bow", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fafrican-bow.jpg?alt=media&token=ab62ecea-c31d-4b86-a279-27d7249e5ddc', categoria: "Bows", price: 27000 },
    { id: "2", name: "English Longbow", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Flongbow.png?alt=media&token=095ad65d-9cca-4fe1-a9bb-7d755b3f90a9', categoria: "Bows", price: 37000 },
    { id: "3", name: "Mongolian bow", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fmongolian-bow.jpg?alt=media&token=2ac5b94d-6a75-4356-8eca-7dff4c39dc2c', categoria: "Bows", price: 40000 },
    { id: "4", name: "Japanese Yumi", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fyumi.jpg?alt=media&token=9c7ec2e4-645a-4923-a22f-e9248393536c', categoria: "Bows", price: 55000 },
    { id: "5", name: "Flamberge", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fflamberge.png?alt=media&token=fed2b3e7-5290-480c-97a7-0bcab566d0da', categoria: "Weapon", price: 81000 },
    { id: "6", name: "Cup rapier", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fcup-rapier.jpg?alt=media&token=1a7279a8-ce88-4ee1-836b-8e7510446f68', categoria: "Weapon", price: 76000 },
    { id: "7", name: "Pudao", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fpudao.jpg?alt=media&token=e96eee79-95b5-438e-8495-498ebf116534', categoria: "Weapon", price: 57000 },
    { id: "8", name: "Viking spearhead", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fviking-spearhead.jpg?alt=media&token=c924af2a-991e-40f8-8e7b-afe15b000826', categoria: "Weapon", price: 5900 },
    { id: "9", name: "Nodachi", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fnodachi.jpg?alt=media&token=17c5a54a-1706-4cf5-b4db-e275a982d66d', categoria: "Weapon", price: 86000 },
    { id: "10", name: "Chinese War Sword", url: 'https://firebasestorage.googleapis.com/v0/b/ch-react-e-commerce.appspot.com/o/Images%2Fcn-war-sword.jpg?alt=media&token=f9992e05-db95-43ce-81dc-182d595f707b', categoria: "Weapon", price: 90400 }
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
