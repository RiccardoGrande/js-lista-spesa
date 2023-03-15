
//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//creo un array con la lista della spesa

const shopList = [

    'banana',
    'mela',
    'pera'
]

//creo una variabile while

let listElement = document.getElementById('shop_list');
let i = 0;

while ( i < shopList.length ) {
    
    let item = shopList[i];
    console.log(item);

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listElement.appendChild(li);
    // inserisco il valore di item all'interno di li
    // inserisco l'elemento li dentro al mio listElement
    

    i++;
}

   


