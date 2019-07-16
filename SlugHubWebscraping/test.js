var rest = require('../Source/node_modules/restler');
 
rest.get('http://127.0.0.1:5000/display').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});
