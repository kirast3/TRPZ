//Task 1
function dayOfWeek() {
    const dayOfWeek = {
        daysen: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        daysua: [ 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя']
    }
    for (let i = 0; i < 1; i++){
        let lang = prompt("Виберіть мову “ua” або “en”?", '').toLowerCase();
        if ( lang === 'ua' || lang === 'en') {
            if (lang === 'ua') {
                for (let y = 0; y < 1; y++) {
                    let selDay =+ prompt('Введіть номер дня неділі від 1 до 7?', '')
                    if (selDay <= 7) {
                        alert(dayOfWeek.daysua[selDay - 1])
                    } else if ( selDay > 8 || selDay <= 0 ) {
                        alert('mistake, try again')
                        y--;
                    }
                }
            } else if (lang === 'en') {
                for (let y = 0; y < 1; y++) {
                    let day =+ prompt('Enter the day number of the week (from 1 to 7)?', '')
                    if (day <= 7) {
                        alert(dayOfWeek.daysen[day - 1])
                    } else if ( day > 8 || day <= 0 ) {
                        alert('mistake, try again')
                        y--;
                    }
                }
            }
        } else {
            alert('mistake, try again');
            i--;
        }
    }
}

dayOfWeek();

//Task 2
function chessBoard(length, width) {
    this.length = length;
     this.width = width;
    let string = '';
    let str = '';
    for (;length > 0; length--){
        string += '\n'
        string += length;
        for (let y = 1; y < width + 1; y++){
            if ( y % 2 !== 0){
                string += " #"
            } else string += " @"
        }
    }
    console.log(string)
    for (let i = 0; i < width; i++) {
        str += String.fromCodePoint(65 + i) + ' ';
    }
    console.log('  ' + str);
}

// let board = new chessBoard(4, 4);
// console.log(board);

//Task 3
class Random {
    static nextDouble(low,high){
        return ((Math.random() * high) + low).toFixed(1);
    }
    static nextInt(low,high){
        return Math.floor(Math.random() * high) + low;
    }
    static nextElement(array){
        return array[Math.floor(Math.random() * array.length)]
    }
}

// console.log(Random.nextDouble(1,10))
// console.log(Random.nextInt(1,10))
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(Random.nextElement(arr))

