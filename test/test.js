var assert = require('assert');

var prime = require('../f/lib/prime');

describe('Prime', function() {
  describe('#isPrime()', function() {
    var primes = [2,  3,  5,  7,   11,   13,   17,   19,   23,   29,  31,   37,   41,   43,   47,   53,   59,   61,   67,   71,  73,   79,   83,   89,   97,  101,  103,  107,  109,  113,   127,  131];
    primes.forEach((p) => {
      it(`should say ${p} is prime`, function() {
        assert(prime.isPrime(p));
      });
    });

    var compunds = [4, 6, 8, 10, 12, 14, 15, 24934];
    compunds.forEach((c) => {
      it(`should say ${c} is not prime`, function() {
        assert(!prime.isPrime(c));
      });
    });
  });


  describe('#prime(n)', function() {
    var primes = [2,  3,  5,  7,   11,   13,   17,   19,   23,   29,  31,   37,   41,   43,   47,   53,   59,   61,   67,   71,  73,   79,   83,   89,   97,  101,  103,  107,  109,  113,   127,  131].reverse();
    primes.forEach((p, i) => {
      it(`${primes.length-i}th prime should be ${p}`, function() {
        assert.equal(prime(primes.length-i), p);
      });
    });
  });
});
