/* Task 2*/
let reformat = (text) => {
  var new_txt = text.replace(/[aeiouAEIOU]/g, "").toLowerCase();
  return new_txt.charAt(0).toUpperCase() + new_txt.slice(1);
};

console.log(reformat("liMeSHArp DeveLoper TEST"));
