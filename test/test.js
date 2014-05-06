var test = require('tape');

var Board = require('../');

test('can make board',function(t){
  var b = Board();
  t.ok(b,'returns object');
  t.ok(b.bootloader,'should have bootloader property');
  t.end(); 
})
