const str = "Ab,c,de!$,f,g,@#";

const reverseStrWOSpecialChars = (s) => {
  let tempArr = new Array(s.length);

  let x = 0;
  for (i = 0; i < s.length; i++) {
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
      tempArr[x] = s[i];
      x++;
    }
  }

  let str = "";
  for (let i = x - 1; i >= 0; i--) {
    str += tempArr[i];
  }

  x = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
      ans += str[x];
      x++;
    } else {
      ans += s[i];
    }
  }

  return ans;
};

console.log(reverseStrWOSpecialChars(str));
