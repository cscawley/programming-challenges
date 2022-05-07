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
        // Initial thoughts
        // if this.Head.next === null
        // this.Head.next = {value: value, next: null}
        // {value: value, next : {value: value, next: null}}
        // else if this.Head.next.next
        // we don't need this traversal pattern, we are already pointing to the end of the list!
        // add an object of the new appended value to this.tail.next
        this.tail.next = {value: value, next: null}
        // reassign the tail to the object we just inserted
        this.tail = this.tail.next
        // increment length
        this.length++
        // ez
        console.log(this.Head.next)
    }
    prepend(value) {
        // create new object
        // assign this.Head to newobject.next
        // { {}}
        // 
        const newHead = {
            value: value,
            // point this address to the head object
            next: null
        }
        // points next in the new object to the full head object
        newHead.next = this.Head
        // point the head 
        this.Head = newHead
        this.length++
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList)