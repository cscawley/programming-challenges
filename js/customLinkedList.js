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
        // console.log(this.Head.next)
    }
    prepend(value) {
        // create new object
        // assign this.Head to newobject.next
        // { {}}
        // 
        const newHead = {
            value: value,
            // this address will end up pointing to the head object
            next: null
        }
        // points next in the new object to the full head object
        newHead.next = this.Head
        // point the head 
        this.Head = newHead
        this.length++
    }
    printList() {
        const myArray = []
        let currentNode = this.Head
        while (currentNode !== null) {
            myArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(myArray)
    }
    insert(index, value) {
        if (index > this.length) {
            this.append(value)
            return this.printList()
        }
        const newHead = {
            value: value,
            next: null
        }
        const lead = this._traverseToIndex(index - 1)
        const follow = lead.next
        newHead.next = follow   
        lead.next = newHead
        this.length++
        return this.printList()
    }
    remove(index){
        // check if index is beyond this.length
        if (index > this.length) {
            return undefined
        } else if (index+1 === this.length) {
            this._traverseToIndex(index - 1).next = null
        }
        else if (index === 0) {
            this.Head = this._traverseToIndex(index + 1)
        } else {
            const lead = this._traverseToIndex(index - 1)
            const unwanted = lead.next
            const follow = unwanted.next
            lead.next = follow
        }
        this.length--
        return this.printList()
    }
    _traverseToIndex(index) {
        let increment = 0
        let currentNode = this.Head
        if (index > this.length) {
            return undefined
        }
        while (currentNode !== null ) {
            if (increment === index){
                // return object at index
                // console.log(currentNode)
                return currentNode
            } else {
                currentNode = currentNode.next 
            }
            increment++
        }
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 70)
myLinkedList.remove(4)