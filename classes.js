class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        let perimeter = 0;
        this.sides.forEach(function(side){
            perimeter += side;
        });
        return perimeter;
    }
}