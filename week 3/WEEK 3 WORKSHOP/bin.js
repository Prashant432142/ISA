function binary(a){
    rev='';
    let c=parseInt(a);
    if (c<=1024){
        while(c>0)
        {
            let d=c%2;
            rev=d.toString() +rev;
            c=parseInt(c/2);
        }
        console.log(rev);
    }else{
        console.log("Not in range")
    }
}
binary(10);
binary(15);
binary(1025);