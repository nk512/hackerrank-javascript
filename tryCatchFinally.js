function reverseString(s) {
    try{
        var splitStr = s.split("");
        var reverseArr = splitStr.reverse();
        var reverseStr = reverseArr.join("");
        console.log(reverseStr);
    }
    catch(er){
        console.log(er.message);
        console.log(s);
    }
}