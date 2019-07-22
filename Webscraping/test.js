var rest = require('../Source/node_modules/restler');
 
rest.get('http://127.0.0.1:5000/lowerdivCSE').on('complete', function(result) {
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
   var res = str_dict.split(" ,");
    console.log(res);
   //var str_class = res[0].split(" \" ");
    //console.log(str_class);
   var str2 = res[0].match(/[^\s"']+|"([^"]*)"/gmi)
   console.log("------------------------");
   console.log(str2);
   console.log(str2[1]);
   var dict = new Map();
   var start = 1
   var end = 3
   console.log(Math.floor(str2.length/4));
   var num_items = Math.floor((str2.length)/4)
   for(var i = 0; i < num_items; i++) 
{
   dict.set(str2[start], str2[end]);
   console.log(dict.get(str2[start]));
   start += 4;
   end += 4;
}
console.log(dict);
}
