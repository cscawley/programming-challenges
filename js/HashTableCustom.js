class HashTable {
    constructor(size){
        this.data = new Array(size);
        ['grapes', 100000]
    }
    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++){
            hash = (hash+key.charCodeAt(i)*i) %
            this.data.length
        }
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);
        // console.log(address)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        // console.log(this.data)
    }
    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let item in currentBucket) {
                if(currentBucket[item][0]===key){
                    return currentBucket[item][1]
                }
            }
        }else{
            return undefined
        }
    }
    keys(){
        if(this.data){
            let keyList = []
            for(let item in this.data) {
                keyList.push(this.data[item][0][0])
            }
            return keyList
        }else{
            return undefined
        }
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 50)
myHashTable.set('oranges', 2)
// const returnApples = myHashTable.get('apples')
// console.log(returnApples)
const returnKeys = myHashTable.keys()
console.log(returnKeys)