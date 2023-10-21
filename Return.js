const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function calculateDiscout(price, discout) {
    const result = (price * discout) / 100
    return result
}
calculateDiscout(250, 7)

cart.forEach(value => {

    if (value > 30) {
        const discout = calculateDiscout(value, 10)
        finalValue = finalValue + (value - discout)
    } else {
        finalValue += value
    }


    
});


console.log(finalValue)









