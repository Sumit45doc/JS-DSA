class Queue{
  constructor(){
    this.items = []
  };

  enqueue(element){
    this.items.push(element);
  };

  dequeue(){
    this.items.shift()
  };

  peek(){
    if(this.items.length === 0) return null;
    return this.items[0]
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

const queue = new Queue();
module.exports = queue;