function retrunEvenValues(array){
    let evenNum = [];
    for(let i =0; i < array.length; i++){
        if(array[i] % 2 ===0){
            evenNum.push(array[i]);
        }
    }
    console.log('os numeros pares são:', evenNum);
}

let array = [1, 2, 3, 5, 6, 7];

retrunEvenValues(array);