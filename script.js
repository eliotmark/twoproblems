function prime_position(n) {
    if(n == 1) {
        return 2;
    }else if(n == 2) {
        return 3;
    }
    var x = 4;
    var count = 2;
    while(true) {
        for(var i=2; i<(x-1); i++) {
            if(x%i == 0) {
                break;
            }
            if(i == x-2) {
                count++;
                break;
            }
        }
        if(count == n) {
            return x;
        }
        x++;
    }
}

function sort_subtract(n) {
    var x = n.toString();
    var arr = [];
    for(var i=0; i<x.length; i++) {
        arr[i] = parseInt(x.substring(i, i+1));
    }
    var y = "";
    var z = "";
    var big = arr.sort(function(a, b){return b-a});
    for(var i=0; i<big.length; i++) {
        y += big[i].toString();
    }
    var small = arr.sort();
    for(var i=0; i<small.length; i++) {
        z += small[i].toString();
    }
    return parseInt(y)-parseInt(z);
}