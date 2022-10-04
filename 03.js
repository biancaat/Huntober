// P: string 
// R: return the string with the elements from the key replaced with ' '
// E: 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters' => ' you could think this is hard to read before replacing the key characters'
// P: declare the key elements in a key array variable, loop through string if string character == key element, replace the character with ' ', return the filtered string

function solve(s){
    let key = ['A','_','K','E','Y','!']
    
    let arr = s.split('')
    
    let newArr = []
    
    for (let i = 0; i< arr.length ;i ++){
      for (let e = 0; e< key.length; e++){
      if (arr[i] == key[e]){
        arr.splice(i,1,' ')
      }
      }
    }
      return arr.join('')
      
    }
    
    solve('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters')