let x = "123456";
let temp = "";
console.log(x.length);

for(let i=x.length - 1;i>=0;i--)
{
    temp = temp + x[i];
}
console.log(temp);