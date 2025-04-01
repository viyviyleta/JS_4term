class Cache_C<T>{

    private MapCache = new Map<string, {value:T, LifeTTL: number}>();

    add(key:string, value: T, ttl:number){
        const LifeTTL = Date.now() + ttl;
        this.MapCache.set(key,{value, LifeTTL}) ;
    }

    get(key:string) : T | null{
        const result = this.MapCache.get(key);

        if(!result){
            return null;
        }
        if(Date.now() > result?.LifeTTL){
            this.MapCache.delete(key);
            return null;
        }

        return result.value;
    }

    clearExpired(){
        const date_now = Date.now();

        for(const [key, value] of this.MapCache){
            if(date_now > value.LifeTTL){
                this.MapCache.delete(key);
            }
        }
    }
}

const cache = new Cache_C<number>();

cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(() => console.log(cache.get("price")), 6000); 