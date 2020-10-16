import Vue from "vue";
// global filters
Vue.filter("uperCase", function(v){
    return v.toUpperCase();
});
Vue.filter("reversing", function(v){
  return v.split("").reverse().join("");
});
Vue.filter("shorten", function(value, textlength, suffix){
   return value.substring(0, textlength, suffix);
});