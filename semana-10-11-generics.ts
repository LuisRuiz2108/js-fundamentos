function memoize<T, R>(fn: (arg: T) => R) {
    const cache = new Map<T, R>();

    return function (arg: T): R {
        if(cache.has(arg)) {
            return cache.get(arg)!;
        }

        const resultado = fn(arg);
        cache.set(arg, resultado);
        return resultado;
    }
}

