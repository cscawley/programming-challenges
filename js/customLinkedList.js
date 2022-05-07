class LinkedList {
    constructor(initial) {
        this.Head = {
            value: initial,
            next: null
        }
        this.tail = this.Head
        this.length = 1
    }
    append(value) {
        // if this.Head.next === null
        // this.Head.next = {value: value, next: null}
        // {value: value, next : {value: value, next: null}}
        // else if this.Head.next.next
        this.tail.next = {value: value, next: null}
        this.tail = this.tail.next
        this.length++
        console.log(this.Head.next)
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList)
myLinkedList.append(5)
console.log(myLinkedList)
myLinkedList.append(16)
console.log(myLinkedList)