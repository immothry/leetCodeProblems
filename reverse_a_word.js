let name = "Mahatma Ghandhi"

function letsReverseAWord(name){

    let words = name.split(" ")
    let reversedName = ""

    for (let i = 0; i < words.length; i++){
        let word = words[i]
        let reversedWord = ""
        for (let j = word.length - 1; j >= 0; j--){
            reversedWord += word[j]
        }
        reversedName += reversedWord + " "
    }

    return reversedName
}
console.log(letsReverseAWord(name));