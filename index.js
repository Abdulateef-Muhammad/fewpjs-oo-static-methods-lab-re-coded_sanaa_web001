class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase().split('').concat(string.slice(1)).join('');
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z]/g, '');
  }

  static titleize(string) {
    let preps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(' ').map(
      function(word) {
        return !preps.includes(word)? Formatter.capitalize(word): word;
      }
    ).join(' ');
  }
}

let soma  = Formatter.titleize('I am the one');
console.log(soma);
