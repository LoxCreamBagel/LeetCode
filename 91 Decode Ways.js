/**
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways).
 * For example, "11106" can be mapped into:
 *  "AAJF" with the grouping (1 1 10 6)
 *  "KJF" with the grouping (11 10 6)
 *  Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 */

/**
 * Given a string s containing only digits, return the number of ways to decode it.
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    // Length between 1 and 100
    if (s.length < 1 || s.length > 100)
        return 0;
    
    // Only Natural Numbers allowed
    const allNumbers = /^\d+$/g;
    if (s.search(allNumbers) === -1)
        return 0;
  
    // Ensure any 0 comes only after a 1 or 2
    if (s.search(/(?<!1|2)0/) !== -1)
        return 0;
    
    // 1 digit means 1 potential combo
    if (s.length === 1)
        return 1;
    
    const decodeTrees = buildPhraseTree(s, 0);
    console.log(decodeTrees);
    const ways = decodeTrees.reduce((sum, treeNode) => sum + treeNode.numTerminatedChildren, 0);
    return ways;
  };
  
  var buildPhraseTree = function(s, index) {
      const nodes = [];
      if (index < s.length) {
          // If only 1 character is left, then it will be 1 character long
          const twochar = s.substring(index, index+2) + "";
          
          if (twochar.match(/^0\d?$/))
              return null;
  
          if (twochar.match(/[12]0/)) {
              // Treat this as a single digit, 10 or 20
              
              const node = new TreeNode(twochar);
              const children = buildPhraseTree(s, index + 2);
              
              if (children !== null) {
                  node.addLeaves(children);
                  nodes.push(node);
                  return nodes;
              }
  
          } else if (twochar.match(/1[1-9]|2[1-6]/)) {
              // this is 11-19 or 2-26, make 2 decodings
              
  
              const twoCharNode = new TreeNode(twochar);
              const children = buildPhraseTree(s, index + 2);
              if (children !== null) {
                  twoCharNode.addLeaves(children);
                  nodes.push(twoCharNode);
              }
  
              const oneCharNode = new TreeNode(twochar[0]);
              console.log(`1[1-9]|2[1-6]  ${twochar[0]}`);         
              
              const children1 = buildPhraseTree(s, index + 1)
              if (children1 !== null) {
                  oneCharNode.addLeaves(children1);
                  nodes.push(oneCharNode)
              }
              return nodes;
          } else {
              // make 1 decoding
              const oneCharNode = new TreeNode(twochar[0]);
              const children = buildPhraseTree(s, index + 1);
              
              if (children !== null) {
                  oneCharNode.addLeaves(children);
                  nodes.push(oneCharNode) 
                  return nodes;
              }           
          }
      }
      return nodes;
  }
  
  class TreeNode {
    /**
     * @param {string} value 
     */
    constructor(value) {
      this.parent = null;
      this.value = value;
      this.children = [];
      this.numTerminatedChildren = 1;
    }
  
    /**
     * 
     * @param {TreeNode[]} newLeaves 
     */
    addLeaves(newLeaves) {
      if (newLeaves.length == 0) 
          return;
      
      // We Adding children, so set this back to 0
      if (this.children.length == 0)
          this.numTerminatedChildren = 0;
  
      newLeaves.forEach(node => {
          // node.parent = this;
          this.children.push(node);
          this.numTerminatedChildren += node.numTerminatedChildren;
      });
    }
  }
  