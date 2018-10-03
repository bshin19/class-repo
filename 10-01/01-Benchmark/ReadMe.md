Benchmark NPM Package
https://www.npmjs.com/package/benchmark

Sufficiently large values of length will cause heap size exceeded errors. If/when you run into this,  run the benchmark with the following command:

node --max-old-space-size=4096 linearSearch.js