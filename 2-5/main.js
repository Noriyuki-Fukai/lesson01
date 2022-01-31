const kakaku = process.argv[2]
console.log("100円玉"+(kakaku/100|0)+"枚")
console.log("10円玉"+((kakaku%100)/10|0)+"枚")
console.log("1円玉"+((kakaku%100)%10|0)+"枚")