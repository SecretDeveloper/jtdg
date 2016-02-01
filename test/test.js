var assert = require('assert');
var jTDG = require('../jTDG.js');

describe('jTDG', function() {
  describe('#test()', function () {
    it('should return "test"', function () {
      assert.equal("test", jTDG.test());
    });
  });
});
