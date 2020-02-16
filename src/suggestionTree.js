import {countries} from './countries';

class Node {
  constructor(key, data) {
    this._key = key;
    this._data = data;
    this._children = new Map();
    this._isFinal = false;
  }

  set key(key) {
    this._key = key;
  }

  set data(data) {
    this._data = data;
  }

  get key() {
    return this._key;
  }

  get data() {
    return this._data;
  }

  get isFinal() {
    return this._isFinal;
  }

  get children() {
    return this._children;
  }

  addChild(newChild) {
    if (!this._children.has(newChild.key)) {
      this._children.set(newChild.key, newChild);
    }
  }

  getChild(key) {
    return this._children.has(key) ? this._children.get(key) : null;
  }

  hasChild(key) {
    return this._children.has(key);
  }
}

export class Trie {
  constructor() {
    this._root = new Node('NULL',null);
  }

  insert(key, data) {
    let currentNode = this._root;
    for (let character of key) {
      let tmpNode = new Node(character, null);
      currentNode.addChild(tmpNode)
      currentNode = currentNode.getChild(character);
    }
    currentNode._isFinal = true;
    currentNode.data = data;
  }

  _DFS(node, listWords) {
    if (node.isFinal) {
     listWords.push(node.data);
    }

    for (let child of node.children.values()) {
      this._DFS(child, listWords);
    }

    return listWords;
  }

  check(prefix) {
    let currentNode = this._root;
    for (let character of prefix) {
      if (currentNode.hasChild(character)) {
        currentNode = currentNode.getChild(character);
      } else {
        return false;
      }
    }

    return true;
  }

  getPatternWord(prefix) {
    let currentNode = this._root;
    for (let character of prefix) {
      if (currentNode.hasChild(character)) {
        currentNode = currentNode.getChild(character);
      } else {
        break;
      }
    }

    return this._DFS(currentNode, []);
  }
}

//trie countries
export let trie = new Trie();

for (let [abbrev, countrieName] of Object.entries(countries)) {
  trie.insert(abbrev, countrieName);
  trie.insert(countrieName, countrieName);
}

export function getPreffixWords(prefix) {
            //trie countries
            // console.log(trie.getPatternWord(prefix));
            return trie.getPatternWord(prefix);
}
