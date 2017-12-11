function checkPrime(number) {

      if (number % 1 === 0 || ==2) {
        return "Prime";

    } else if (number > 1) {
        for (var i = 2; i < number/2; i++){
            if(number % i == 0){

                return "Prime"
            }
        }

    } else {

     return "Not Prime";


}
