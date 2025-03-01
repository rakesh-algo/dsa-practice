class Node {
  constructor() {
    this.children = new Map();
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  // Inserts a word into the Trie
  insert(word) {
    let currentNode = this.root;

    for (const ch of word) {
      if (!currentNode.children.has(ch)) {
        currentNode.children.set(ch, new Node());
      }
      currentNode = currentNode.children.get(ch);
    }
    currentNode.isTerminal = true;
  }

  // Helper method to get suggestions based on a node and prefix
  getSuggestions(node, prefix) {
    let result = [];
    if (node.isTerminal) {
      result.push(prefix);
    }
    
    for (const [key, value] of node.children.entries()) {
      result = result.concat(this.getSuggestions(value, prefix + key));
    }
    return result;
  }

  // Returns all words in the Trie that start with the given prefix
  startsWith(prefix) {
    let result = [];
    let currentNode = this.root;
    let isPrefixExists = true;

    for (const ch of prefix) {
      if (currentNode.children.has(ch)) {
        currentNode = currentNode.children.get(ch);
      } else {
        isPrefixExists = false;
        break;
      }
    }
    if (isPrefixExists) {
      result = this.getSuggestions(currentNode, prefix);
    }
    return result;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("hello");
trie.insert("hell");
trie.insert("helicopter");
trie.insert("hero");
trie.insert("her");

console.log(trie.startsWith("hel")); // ["hello", "hell", "helicopter"]
console.log(trie.startsWith("her")); // ["hero", "her"]
console.log(trie.startsWith("he"));  // ["hello", "hell", "helicopter", "hero", "her"]
console.log(trie.startsWith(""));    // ["hello", "hell", "helicopter", "hero", "her"]
