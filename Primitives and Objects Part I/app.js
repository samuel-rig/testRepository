// product --> Object.prototype --> null 
const product = new Object ({
    name: 'Influence'
})
    
Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product)