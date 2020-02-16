"use strict";

exports.__esModule = true;
exports.getPreffixWords = getPreffixWords;
exports.trie = exports.Trie = void 0;

var _countries = require("./countries");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node =
/*#__PURE__*/
function () {
  function Node(key, data) {
    this._key = key;
    this._data = data;
    this._children = new Map();
    this._isFinal = false;
  }

  var _proto = Node.prototype;

  _proto.addChild = function addChild(newChild) {
    if (!this._children.has(newChild.key)) {
      this._children.set(newChild.key, newChild);
    }
  };

  _proto.getChild = function getChild(key) {
    return this._children.has(key) ? this._children.get(key) : null;
  };

  _proto.hasChild = function hasChild(key) {
    return this._children.has(key);
  };

  _createClass(Node, [{
    key: "key",
    set: function set(key) {
      this._key = key;
    },
    get: function get() {
      return this._key;
    }
  }, {
    key: "data",
    set: function set(data) {
      this._data = data;
    },
    get: function get() {
      return this._data;
    }
  }, {
    key: "isFinal",
    get: function get() {
      return this._isFinal;
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
  }]);

  return Node;
}();

var Trie =
/*#__PURE__*/
function () {
  function Trie() {
    this._root = new Node('NULL', null);
  }

  var _proto2 = Trie.prototype;

  _proto2.insert = function insert(key, data) {
    var currentNode = this._root;

    for (var _iterator = key, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var character = _ref;
      var tmpNode = new Node(character, null);
      currentNode.addChild(tmpNode);
      currentNode = currentNode.getChild(character);
    }

    currentNode._isFinal = true;
    currentNode.data = data;
  };

  _proto2._DFS = function _DFS(node, listWords) {
    if (node.isFinal) {
      listWords.push(node.data);
    }

    for (var _iterator2 = node.children.values(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var child = _ref2;

      this._DFS(child, listWords);
    }

    return listWords;
  };

  _proto2.check = function check(prefix) {
    var currentNode = this._root;

    for (var _iterator3 = prefix, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var character = _ref3;

      if (currentNode.hasChild(character)) {
        currentNode = currentNode.getChild(character);
      } else {
        return false;
      }
    }

    return true;
  };

  _proto2.getPatternWord = function getPatternWord(prefix) {
    var currentNode = this._root;

    for (var _iterator4 = prefix, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var character = _ref4;

      if (currentNode.hasChild(character)) {
        currentNode = currentNode.getChild(character);
      } else {
        break;
      }
    }

    return this._DFS(currentNode, []);
  };

  return Trie;
}(); //trie countries


exports.Trie = Trie;
var trie = new Trie();
exports.trie = trie;

for (var _i5 = 0, _Object$entries = Object.entries(_countries.countries); _i5 < _Object$entries.length; _i5++) {
  var _Object$entries$_i = _Object$entries[_i5],
      abbrev = _Object$entries$_i[0],
      countrieName = _Object$entries$_i[1];
  trie.insert(abbrev, countrieName);
  trie.insert(countrieName, countrieName);
}

function getPreffixWords(prefix) {
  //trie countries
  return trie.getPatternWord(prefix);
}