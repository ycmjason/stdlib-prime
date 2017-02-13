var primes = [2, 3, 5, 7, 11];

function isPrime(n){
  for(var i = Math.floor(Math.sqrt(n)); i >= 2; i--){
    if(n % i == 0) return false;
  }

  return true;
}

function prime(n){
  n = n - 1;
  if(n < 0) return -1;
  if(primes[n]) return primes[n];

  for(var i = primes[primes.length - 1] + 1;; i++){
    if(isPrime(i)){
      primes.push(i);
      if(primes[n]) return primes[n];
    }
  }
}

function factorise(n){
  var factors = [1];
  for(var i = Math.floor(Math.sqrt(n)); i >= 2; i--){
    if(n % i == 0) factors.push(i);
  }
  return factors;
}

module.exports = prime;
module.exports.isPrime = isPrime;
module.exports.factorise = factorise;
module.exports.memoised = primes;
