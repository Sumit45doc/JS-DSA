class OptiQueue{
  constructor(){
    this.items = {}
    this.rear = 0
    this.front = 0
  };

  enqueue(element){
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(){
    const item = this.items[this.front];
    if(!item) return
    delete this.items[this.front];
    this.front++;
    return item;
  }

  print(){
    console.log(this.items)
  }
  
}


const queue = new OptiQueue();
module.exports = queue;
