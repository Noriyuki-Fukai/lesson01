const dan = process.argv[2]
for(i=1;i<=dan; i++){
    const array = []; 
    for(j=1;j<=dan-i; j++){
        array.push(" ");
    }
        for (j=1;j<=2*i-1;j++){
    array.push("*");
    }
    const result = array.join("");
    console.log(result);

}