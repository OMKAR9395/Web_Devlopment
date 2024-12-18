let items = [250,645,300,900,50];

let i=0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] -= offer;
    console.log(`value ofter offer = ${items[i]}`);
    i++;
}