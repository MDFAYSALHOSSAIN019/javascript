let n1=0;
let n2=1;
let box=0;
console.log(n1+ "\n" +n2);

for(let i=1; i<=6; i++){
    box=n1+n2;
    n1=n2;
    n2=box;
    console.log(box);

}