/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var root = createTree(beginWord, wordList);
    
    var hasEndWord = function(node, endWord) {
        if (node.val === endWord) { return true; }
        for (let i = 0; i < node.children.length; i++) {
            if (hasEndWord(node.children[i],endWord)) {
                return true;
            }            
        }
        return false;
    };
    
    var findLadderLength = function(rootNode, endWord) {
        var length = null;
        if (rootNode.val === endWord) { return 0; }   
        rootNode.children.forEach(c => {
           if (hasEndWord(c, endWord)) {
           var childLength = 1 + findLadderLength(c, endWord); 
               if (!length) { length = childLength; } else {
                   if (childLength < length) { length = childLength; }
               }               
           }
        });
        return length;
    };
    
    var ladderLength = findLadderLength(root, endWord);
    if (ladderLength === null) { return 0; } else {
        return 1 + ladderLength;
    }
};

var Node = function(val) {
    this.val = val;
    this.children = [];
};

var countLetterDiff = function(word1, word2) {
    var numDiff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) { numDiff++; }
    }
    return numDiff;
};

var createTree = function(beginWord, wordList) {
    // create Node for begin word
    var root = new Node(beginWord);
    
    var queue = [root];
    while (queue.length) {
        var processingNode = queue.pop();
        // go through word list and populate node's children
        wordList.forEach((word, idx) => {
           if (!word) { return null; }
           if (countLetterDiff(word, processingNode.val) === 1) {
               var node = new Node(word);
               processingNode.children.push(node);
               queue.unshift(node);
               wordList[idx] = null;
           } 
        });        
    }
    return root;
};