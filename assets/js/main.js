
//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//creo un array con la lista della spesa

const shopList = [

    'banana',
    'mela',
    'pera'
]

//creo una variabile while

let listElement = 0;
let i = 0;

while ( i < shopList.length ) {
    
    let listElement = shopList[i];

    console.log(listElement);

    

    i++
    
    listElement = document.getElementById('shop_list');
    
}

   


