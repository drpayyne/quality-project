var jsonAddition = require('json-addition');
var output = jsonAddition.addJSONs(
    { time: '11 minutes', count: { shops: 1, customers: ['a1'] } },
    { time: '22 minutes', count: { shops: 2, customers: ['b1', 'b2'] } }
);
console.log(output)