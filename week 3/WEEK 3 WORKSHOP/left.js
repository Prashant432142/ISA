function shiftToLeft(num,shift){
    if (shift>0){
        c=num*(2**shift);
        console.log(c);
    }
 }
shiftToLeft(5,2);
shiftToLeft(10,3);
shiftToLeft(-32,2);
shiftToLeft(-6,5);
shiftToLeft(12,4);
shiftToLeft(46,6);