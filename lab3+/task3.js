var Cache_C = /** @class */ (function () {
    function Cache_C() {
        this.MapCache = new Map();
    }
    Cache_C.prototype.add = function (key, value, ttl) {
        var LifeTTL = Date.now() + ttl;
        this.MapCache.set(key, { value: value, LifeTTL: LifeTTL });
    };
    Cache_C.prototype.get = function (key) {
        var result = this.MapCache.get(key);
        if (!result) {
            return null;
        }
        if (Date.now() > (result === null || result === void 0 ? void 0 : result.LifeTTL)) {
            this.MapCache.delete(key);
            return null;
        }
        return result.value;
    };
    Cache_C.prototype.clearExpired = function () {
        var date_now = Date.now();
        for (var _i = 0, _a = this.MapCache; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (date_now > value.LifeTTL) {
                this.MapCache.delete(key);
            }
        }
    };
    return Cache_C;
}());
var cache = new Cache_C();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(function () { return console.log(cache.get("price")); }, 6000);
