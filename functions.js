// check prime number
function checkPrime(number) {
    if (number % 1 != 0 || number <= 0) {
        return "Not Prime ";

    } else if (number > 4) {
        for (var i = 2; i <= number / 2; i++) {
            if (number % 1 == 0 || number % i == 0) {
                return "Not Prime"
            }
        }
        return "Prime"
    } else {
        return "Prime"

    }
}



