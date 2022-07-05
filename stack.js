class Stack{
  constructor(){
    this.items = []
  };

  push(element){
    this.items.push(element)
  };

  pop(){
    this.items.pop()
  };

  peek(){
    return this.items[this.items.length - 1]
  };

  isEmpty(){
    return this.items.length === 0
  };

  size(){
    return this.items.length;
  }

  print(){
    return console.log(this.items.toString())
  }
}

const stack = new Stack();
module.exports = stack;