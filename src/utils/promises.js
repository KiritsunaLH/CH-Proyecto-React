const productos = [
    { id: "1", name: "African bow", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/african-bow.jpg?alt=media&token=238db24e-1b3f-47be-9706-91a03daaa83a', categoria: "Bows", price: 27000 },
    { id: "2", name: "English Longbow", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/longbow.png?alt=media&token=97526762-8f94-4113-9c98-f2c6a2679a8c', categoria: "Bows", price: 37000 },
    { id: "3", name: "Mongolian bow", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/mongolian-bow.jpg?alt=media&token=488107f8-3eff-4b5a-a648-35ae3785e324', categoria: "Bows", price: 40000 },
    { id: "4", name: "Japanese Yumi", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/yumi.jpg?alt=media&token=858bdb82-9c28-42d8-a691-07a7f60a76e4', categoria: "Bows", price: 55000 },
    { id: "5", name: "Flamberge", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/flamberge.png?alt=media&token=d19dc089-c085-4d4b-b473-089d290bc859', categoria: "Weapon", price: 81000 },
    { id: "6", name: "Cup rapier", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/cup-rapier.jpg?alt=media&token=e46c2420-c096-4500-b903-ee0d5f064597', categoria: "Weapon", price: 76000 },
    { id: "7", name: "Pudao", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/pudao.jpg?alt=media&token=ff83b172-2a30-4ad2-84d9-1ec2c4b5c062', categoria: "Weapon", price: 57000 },
    { id: "8", name: "Viking spearhead", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/viking-spearhead.jpg?alt=media&token=21bfabab-f37f-4d4b-bcc7-2c0b0f24de59', categoria: "Weapon", price: 30500 },
    { id: "9", name: "Nodachi", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/nodachi.jpg?alt=media&token=27087ea3-b992-4180-99e6-e0833eef0275', categoria: "Weapon", price: 86000 },
    { id: "10", name: "Chinese War Sword", url: 'https://firebasestorage.googleapis.com/v0/b/my-project-1470689042195.appspot.com/o/cn-war-sword.jpg?alt=media&token=2fe42552-725f-47b9-86f8-2601c9cb337d', categoria: "Weapon", price: 90400 }
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
