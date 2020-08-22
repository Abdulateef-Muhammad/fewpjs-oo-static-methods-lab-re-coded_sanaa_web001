class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase().split('').concat(string.slice(1)).join('');
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z]/g, string);
  }

  static titleize(string) {
    let preps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(' ').map(
      word => !preps.includes(word)? this.capitalize(word): word;
    );
  }
}

let soma  = Formatter.sanitize('I am the one');
console.log(soma);
