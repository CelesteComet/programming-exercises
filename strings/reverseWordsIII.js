var reverseWord = function(w) {
    var reversed = "";
    for (var i = w.length - 1; i >= 0; i--) {
        reversed += w[i];
    }
    return reversed;
}
var reverseWords = function(s) {
   return s.split(" ").map(function(w) {
       return reverseWord(w);
   }).join(" ");
};