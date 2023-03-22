var oddishOrEvenish = function(num) {
    let sum = 0;
    while (num !== 0) {
      let each = num % 10;
      sum += each;
      num = parseInt(num / 10); 
    }
    if (sum % 2 === 1) {
      console.log("Oddish");
    } else {
      console.log("Evenish");
    }
  };
  
  oddishOrEvenish(43);
  oddishOrEvenish(373);
  oddishOrEvenish(4433);
  