var dummyjson = require('dummy-json');

var myHelpers = {
  orientation: function() {
    // Use randomArrayItem to ensure the seeded random number generator is used
    return dummyjson.utils.randomArrayItem(['North', 'South', 'East', 'West']);
  },
  sourceAccount: function() {
    return dummyjson.utils.randomArrayItem(['A', 'B']);
  },
  targetAccount: function() {
    return dummyjson.utils.randomArrayItem(['D', 'E']);
  },
  category: function() {
    return dummyjson.utils.randomArrayItem(['eat_out', 'shopping', 'other']);
  }
};

var template = `[
  {{#repeat 1000}}
  {
    "id": "{{@index}}",
    "sourceAccount": "{{sourceAccount}}",
    "targetAccount": "{{targetAccount}}",
    "amount": "{{int 0 10}}",
    "category": "{{category}}",
    "time": "{{date "2015-06-01T09:00" "2015-06-01T09:30"}}"
  }
  {{/repeat}}
]`;

exports.transactions = JSON.parse(dummyjson.parse(template, {helpers: myHelpers}));