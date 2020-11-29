function getCount(objects) {
    let count = 0;
    objects.forEach(function(obj){
        if(obj.x == obj.y){
            ++count;
        }
    });
    return count;
}