const num1=process.argv[2]
const num2=process.argv[3]
console.log (num1.split("").reverse().join(""),num2.split("").reverse().join(""))

function reverse_to_num(num){
    num=num.split("").reverse().join("")
    return Number(num)
}

console.log(reverse_to_num(num1)+reverse_to_num(num2))

