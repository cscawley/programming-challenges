class MyArray {
    constructor() {
        this.length = 0
        this.data={}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
      this.data[this.length] = item
      this.length++
    }
    pop() {
      const lastItem = this.data[this.length-1]
      delete this.data[this.length-1]
      this.length--
      return lastItem
    }
    delete(index){
      const item = this.data[index]
      this.shiftItems()
    }
    shiftItems(index) {
      for(let i = index; i < this.length - 1; i++)
      {
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length - 1]
      this.length--
    }//O(n)
  }
  const newArray = new MyArray();
  newArray.push('A')
  newArray.push('B')
  newArray.push('C')
  newArray.push('D')
  newArray.push('E')
  newArray.delete(0)
  console.log(newArray)