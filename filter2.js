var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.
var newArr = misc.filter( function(index) {
    return (!(typeof(index) === "string"))
});

console.log(newArr);
// Your code goes here
