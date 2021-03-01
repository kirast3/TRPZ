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