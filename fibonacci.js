function f() {
    /* Creating variables in the global scope */
    if(f.res){
        f.res = f.x + f.y;
        var temp = f.y;
        f.y = f.y + f.x;
        f.x = temp;   
    }
    else {
        f.x = 0;
        f.y = 1;
        f.res = f.y;
    }
    return f.res;
}

/* Main scope which contains a "for" loop  */
var N = 10;
for (let i=0; i<N; i++) {
    console.log(f());
}
