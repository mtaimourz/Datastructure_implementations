// Helper function to create a cycle in a linked list
// pos is the 0-based index of the node to connect the tail to
// If pos is -1, no cycle is created
function createCycle(head, pos) {
  if (!head || pos < -1) return head;
  
  let tail = head;
  let cycleNode = null;
  let index = 0;
  
  // Find the tail and the node at position pos
  while (tail.next !== null) {
    if (index === pos) {
      cycleNode = tail;
    }
    tail = tail.next;
    index++;
  }
  
  // Check if we need to set cycleNode to the last node
  if (index === pos) {
    cycleNode = tail;
  }
  
  // Create the cycle
  if (pos >= 0 && cycleNode) {
    tail.next = cycleNode;
  }
  
  return head;
}

// Helper function to create a cycle by connecting to a node with a specific value
function createCycleByValue(head, value) {
  if (!head) return head;
  
  let tail = head;
  let cycleNode = null;
  
  // Find the tail and the node with the specified value
  while (tail.next !== null) {
    if (tail.data === value && !cycleNode) {
      cycleNode = tail;
    }
    tail = tail.next;
  }
  
  // Check the last node as well
  if (tail.data === value && !cycleNode) {
    cycleNode = tail;
  }
  
  // Create the cycle
  if (cycleNode) {
    tail.next = cycleNode;
  }
  
  return head;
}

module.exports = {
  createCycle,
  createCycleByValue
};