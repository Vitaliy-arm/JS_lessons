function censor() {
    const censoredArr = []; // [ ['asv', 'sds'], ['aaa', 'bbb'] ]

    return function(str1, str2 = '') {
        if (str2) {
            censoredArr.push([str1, str2]);
        } else {
            for (let pair of censoredArr) {
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1]) // с первой пары берет нулевое значение и меняет на первое значение
            }
            return str1;
        }
    }
}

const changeScene = censor();

changeScene('PHP', 'JS'); // ['PHP', 'JS']

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programing language for backend web-development'));
// должно распечатать 'JS is the most popular programing language for frontend web-development'