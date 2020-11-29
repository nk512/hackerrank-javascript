function Rectangle(a, b) {
    var area = a * b;
    var perimeter = 2 * (a + b);
    var obj = {
       length: a,
       width: b,
       perimeter: perimeter,
       area: area, 
   } 
   return obj;
}