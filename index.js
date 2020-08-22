class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase().split('').concat(string.slice(1)).join('');
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z]/g, string);
  }
}

let soma  = Formatter.sanitize('1soma');
console.log(soma);
