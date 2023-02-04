const LinkedList = () => {
  let head = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (head === null) {
      return (head = newNode);
    }
    let pointer = head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    length++;
    if (head === null) {
      return (head = newNode);
    }
    newNode.nextNode = head;
    head = newNode;
  };

  const size = () => {
    if (!head) return null;
    return length;
  };

  const getHead = () => {
    if (!head) return null;
    return head.value;
  };

  const tail = () => {
    if (!head) return null;
    let pointer = head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const at = (index) => {
    if (!head) return null;
    let pointer = head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    if (!head) return null;
    if (head.nextNode === null) {
      head = null;
    }
    at(size() - 2).nextNode = null;
    length--;
  };

  const cointains = (value) => {
    if (!head) return null;
    let pointer = head;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return pointer.value === value ? true : false;
  };

  const find = (value) => {
    if (!head) return null;
    let index = 0;
    let pointer = head;
    while (pointer.nextNode !== node) {
      if (pointer.value === value) return index;
      pointer = pointer.nextNode;
      index++;
    }
    return pointer.value === value ? index : null;
  };

  const toString = () => {
    if (!head) return null;
    let pointer = head;
    let result = "";
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value}) -->`);
      pointer = pointer.nextNode;
    }
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
    return result;
  };

  const insertAt = (value, index) => {
    if (!head) return null;
    const newNode = Node(value);
    length++;
    let pointer = head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  const removeAt = (index) => {
    if (!head) return null;
    if (index > length || index < 0) return;
    if (index === 0) head = head.nextNode;
    else {
      const prePointer = at(index - 1);
      prePointer.nextNode = prePointer.nextNode.nextNode;
    }
    length--;
  };
};
