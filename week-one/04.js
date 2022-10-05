// P: string 
// R: the string reversed in word order and letter order of each word
// E: "   The white space at the beginning of this string doesn't match the whitespace at the end. " => " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
// P: reverse the string, then reverse each word in the string

function solve(s){
	return s.split(' ').reverse().map(e => e.split('').reverse().join('')).join(' ')
  
}

solve("   The white space at the beginning of this string doesn't match the whitespace at the end. ")