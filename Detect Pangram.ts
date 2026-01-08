export const isPangram = (phrase: string)=>{
  let word=
  phrase.trim().
  toLowerCase().
  split('').
  filter(b=>b!=b.toUpperCase());
  let letters={'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0, 'm':0, 'n':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0} 
  word.map(a=>{
    const key=a as keyof typeof letters;
    if(letters.hasOwnProperty(key)){
      letters[key]+=1;
    } 
  });
  console.log(word)
  for(let b of Object.entries(letters)){
    if(b[1]<1) return false;
  }
  return true;
}
console.log(isPangram("hello gad"));