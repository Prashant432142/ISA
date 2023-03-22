function addUp(num){
    let sum=0;
    if(num>0 && num<1000){
        for (let i=1;i<num+1;i++){
            sum=sum+i;
        }
        console.log(`Sum upto ${num} is ${sum}`);
    }
}
addUp(4);
addUp(13);
addUp(600);