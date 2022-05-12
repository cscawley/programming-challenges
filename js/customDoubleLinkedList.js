// Better operation for searching
// More complex management
// More memory
class DoubleLinkedList {
    constructor(initial) {
        this.Head = {
            value: initial,
            prev: null,
            next: null
        }
        this.tail = this.Head
        this.length = 1
    }
    printList() {
        const myArray = []
        let currentNode = this.Head
        while (currentNode !== null) {
            myArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(this.Head)
        console.log(myArray)
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
    append(value) {
        // const appendNode = this.tail
        console.log(this.tail)
        const newNode = {
            value: value,
            prev: null,
            next: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = this.tail.next
        this.length++
    }
    prepend(value) {
               // create new object
        // assign this.Head to newobject.next
        // { {}}
        // 
        const newHead = {
            value: value,
            prev: null,
            next: null
        }
        // points next in the new object to the full head object
        newHead.next = this.Head
        this.Head.prev = newHead
        // point the head 
        this.Head = newHead
        this.length++
    }
    insert(index, value) {
        if (index > this.length) {
            this.append(value)
            return this.printList()
        }
        const newHead = {
            value: value,
            prev: null,
            next: null
        }
        const lead = this._traverseToIndex(index - 1)
        const follow = lead.next
        newHead.next = follow
        newHead.prev = lead   
        lead.next = newHead
        follow.prev = newHead
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
}

const myLinkedList = new DoubleLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(7)
myLinkedList.prepend(3)
myLinkedList.insert(4,1)
myLinkedList.printList()