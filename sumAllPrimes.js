function sumPrimes(num) {
    let primes = [];
    let sum = 0;
    for(var i = 2; i <= num; i++) {
        primes[i] = true;
    }
   let limit = Math.sqrt(num);
    for(let i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j <= num; j += i) {
                primes[j] = false;
            }
        }
    }
    for(let i = 2; i <= num; i++) {
        if(primes[i] === true) {
            sum += i;
        }
        
    }
    return sum;
}
  