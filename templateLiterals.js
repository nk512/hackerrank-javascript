function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    let d = Math.sqrt((Math.pow(perimeter,2)) - 16 * area);
    let s1 = ((perimeter + d) / 4);
    let s2 = ((perimeter - d) / 4);
    return [s2,s1];
}