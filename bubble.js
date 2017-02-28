var m = [2, 1, 3, 9, 10, 6, 7, 8, 4, 5];
console.log('before: ', m);
var count = m.length-1;
for (var i = 0; i < count; i++)
    for (var j = 0; j < count-i; j++)
        if (m[j]> m[j+1]) {
            var max = m[j];
                m[j] = m[j+1];
                m[j+1] = max;
        }
console.log('after: ', m);

