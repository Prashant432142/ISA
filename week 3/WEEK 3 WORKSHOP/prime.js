// var primeInRange=function (start,end){
//     let i;
//     for(i=start;i<end;i++){
//         if (start<=1){
//             console.log("Less than or equal to 1 is not prime")
//             break;
//         }else{
//             let flag=0;
//             for(let j=2;j<i;j++){
//                 if(i%j==0){
//                     flag=1;
//                     break;
//                 }
//             }
//             if (flag==0){
//                 console.log(i)
//             }
//         }
//     }
// }

function primeInRange(n1,n2){
    for (n1;n1<=2;n1++){
        if (n1<2){
            continue
        }
        let isPrime = true;
        for(let j=2;j<Math.sqrt(n1);j++){
            if (n1 % j===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log("Prime Number in Range:",n1);
        }
    }
    console.log("No prime number in Range");
    return false;
 }


primeInRange(10,16);
primeInRange(62, 66);
primeInRange(3, 5);