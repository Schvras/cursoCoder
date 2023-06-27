const quaseArray = {
    0: 'Jean',
    1: 'Bruna',
    2: 'Vanderlei'
}

console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value: function(){
        return Object.values(this)
    }
})

console.log(quaseArray[0])
console.log(quaseArray.toString())