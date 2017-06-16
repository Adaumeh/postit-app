"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringSplosion = function () {
  function StringSplosion(Str) {
    _classCallCheck(this, StringSplosion);

    this.Str = Str;
  }

  _createClass(StringSplosion, [{
    key: "manipulate",
    value: function manipulate() {
      var str_exploded = "";
      var sss = "";

      var strExplode = this.Str.split("");
      for (var i = 0; i < strExplode.length; i++) {

        for (var j = 0; j < i; j++) {
          str_exploded += this.Str[j];
        }
      }
      return str_exploded + this.Str;
    }
  }]);

  return StringSplosion;
}();

var stringSplosion = new StringSplosion('Str');

module.exports = StringSplosion;
