const a=[1,2,3,4,5,2,1,1];
b=a.indexOf(1);
for (b;b>-1;b=a.indexOf(1)){
    a.splice(b,1);
    console.log(a)
}

