var rest = require('../Source/node_modules/restler');
 
rest.get('http://127.0.0.1:5000/display').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
    create_dict(result);
  }
});

function create_dict(result) {
 console.log(typeof result);
    str_dict = JSON.stringify(result);
    console.log(typeof str_dict);
    console.log(str_dict);
    //console.log(new_dict.get("CMPS 5J"));
   var res = str_dict.split(",");
    console.log(res);
   //var str_class = res[0].split(" \" ");
    //console.log(str_class);
   var str2 = res[0].match(/[^\s"']+|"([^"]*)"/gmi)
   console.log(str2);
   console.log(str2[1]);
   var dict = new Map();
   dict.set(str2[1], str2[3]);
   console.log(dict.get(str2[1]));

}


