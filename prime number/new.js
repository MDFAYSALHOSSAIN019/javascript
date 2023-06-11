let n=5246624;
let box=0;

for(let i=1; i<=n; i++){

    if(n%i==0){
        box=box+1;
    }
}
if(box==2){
    console.log("prime number");
}
else{
    console.log("not prime number");
}



