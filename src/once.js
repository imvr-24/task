

function before(n, func) {
    let result
    if (typeof func !== 'function') {
        console.log(`not a function`);
    }
    return function(...args) {
      if (--n > 0) {
        result = func.apply(this, args)
      }
      if (n <= 1) {
        func = undefined
      }
      return result
    }
}


function once(func) {
    return before(2, func)
}

function add(a, b) {
    return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(1, 2)); // 3
console.log(onceAdd(2, 2)); // 3