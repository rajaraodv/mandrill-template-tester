//Recursively converts {name:'product': content:'phone'} to {'product': 'phone'} so handlebars template can consume them

var convertNameContent = function(obj, result) {
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object' && obj[i].name && obj[i].content) {
            result[obj[i].name] = obj[i].content;
        } else if (typeof obj[i] == 'object') {
         	convertNameContent(obj[i], result);
        }
    }
    return result;
};

module.exports= convertNameContent;