const vertical = process.argv[2]
const horizon = process.argv[3]
const ICON_1 = "*"
const ICON_2 = "-"
for (let v = 1; v <= vertical; v++){
    let word = ""
    for (let h=1 ;h<=horizon ;h++){
        if (v % 2==0){
            if(h%2==0){
                word += ICON_1;
            }
            else{
                word += ICON_2;
            }
        }else {
            if(h%2==0){
                word += ICON_2
            }
            else{
                word += ICON_1
            }
        }

            
    }
    console.log(word)
}
