You are given a string S consisting of N letters 'a' and/or 'b'. In one move, you can swap one letter for the other ('a' for 'b' or 'b' for 'a').

Write a function that, given such a string S, returns the minimum number of moves required to obtain a string containingg no instances of three identical consecutive letters

examples:
1, S = 'baaaaa', the function should return 1. one move is 'baabaa'
2, S = 'baaabbaabbba', the function should return 2. 'bbaabbaabbaa'
3, S = 'baabab', the function should return 0

* N is an integer winthin range [0..200,000]
* S consists only of 'a' and/or 'b'

const getMoves = (S) => {
  let numberOfMoves = 0;
  const { length } = S;
  if (length < 3) {
    return numberOfMoves;
  }
  let numberOfA = 0;
  let numberOfB = 0;
  for(let i = 0; i < length; i++) {
    const s = S.charAt(i);
    if (s === 'a') {
      ++numberOfA;
      numberOfB = 0;
    } else {
      ++numberOfB;
      numberOfA = 0;
    }
    if (numberOfA === 3 ||numberOfB === 3) {
      ++numberOfMoves;
      numberOfA = 0;
      numberOfB = 0;
    }
  }
  return numberOfMoves;
}
