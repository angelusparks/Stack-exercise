class Stack {
  constructor() {
    this.Array = [];
  }

  push(name) {
    this.Array.push(name);
  }

  pop() {
    return this.Array.pop();
  }

  peek() {
    return this.Array[this.Array.length - 1];
  }

  isEmpty() {    
    return this.Array.length === 0;
  }

  isFull(){
    return this.Array.length === 4; 
  }

  size() {
    return this.Array.length;
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); 
console.log("Size = " + stack.size()); 
stack.push("Ricardo");
stack.push("Ana");
stack.push("Carlos");
stack.push("Mariana");
console.log(stack.isEmpty()); 
console.log(stack.isFull());
console.log("Size = " + stack.size());
console.log(stack);
console.log("peek = " + stack.peek());
console.log("pop = " + stack.pop());
console.log("Size = " + stack.size()); 
console.log(stack);
console.log("peek = " + stack.peek());