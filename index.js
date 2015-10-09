var leetpass = {
  range: {
    A: ['A', '4', '@'],
    B: ['B', '8', '6', 'ß'],
    // C: ['C', '©', 'ç', 'Ç', '¢'],
    // E: ['E', '3', '€'],
    E: ['E', '3'],
    G: ['G', '9'],
    I: ['I', '!'],
    //J : [] ,
    L: ['L', '1'],
    O: ['O', '0'],
    Q: ['Q', '9'],
    // R: ['®'],
    S: ['S', '5', '§', '$'],
    T: ['T', '7', '+'],
    Y: ['Y', '¥'],
    Z: ['Z', '2'],
    // '-': ['-', '~', '–', '—'],
    // _: ['_', '¯'],
    ' ': ['-', '_', '.', '~']
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  create: function(string) {
    var _this = this;
    var replaced = '';
    var range = _this.range;
    var split = string ? string.split('') : [];

    split.forEach(function(v,k){
      var vtUC = v.toUpperCase();
      var char = v;

      if (range[vtUC]) {
        char = range[vtUC][_this.rand(0, range[vtUC].length - 1)];
      }
      else {
        char = v;
      }
      char = k === Math.floor(Math.random()*split.length) ? char.toUpperCase() : char.toLowerCase();
      replaced += char;
    });
    if (string && string === replaced) {
      _this.create(string);
    }
    else {
      return replaced;
    }
  }
};

module.exports = exports = leetpass;
