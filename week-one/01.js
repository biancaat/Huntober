// P: jumbled string
// R: a string with specific characters that look simillar swapped to original character. the characters are case sensitive and work in both directions
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// E: "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."  => "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// P: loop through string, if element == element in key, return the inverse. 

function fix(str) {
    let arr = str.split('')
    let decode = []
    
    for (let i = 0; i<=arr.length; i++){
      let exp = arr[i]
      switch (exp){
        case '0' :
            decode.push('O')
          break;
        case 'O':
          decode.push('0')
          break;
         case '1' :
            decode.push('I')
          break;
        case 'I':
          decode.push('1')
          break;
         case '2' :
            decode.push('Z')
          break;
        case 'Z':
          decode.push('2')
          break;
         case '3' :
            decode.push('E')
          break;
        case 'E':
          decode.push('3')
          break;	
         case '4' :
            decode.push('h')
          break;
        case 'h':
          decode.push('4')
          break;
         case '5' :
            decode.push('S')
          break;
        case 'S':
          decode.push('5')
          break;
         case '6' :
            decode.push('G')
          break;
        case 'G':
          decode.push('6')
          break;
          case '7' :
            decode.push('L')
          break;
        case 'L':
          decode.push('7')
          break;  
         case '8' :
            decode.push('B')
          break;
        case 'B':
          decode.push('8')
          break; 
         case '9' :
            decode.push('q')
          break;
        case 'q':
          decode.push('9')
          break; 
        default:
          decode.push(arr[i])
      }
    }
     return decode.join('')
   }
   
   fix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")