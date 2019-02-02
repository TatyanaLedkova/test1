let money, time;
function start() {
    money=+prompt("Ваш бюджет на месяц", "");
    time=prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData={budjet:money,
        expenses:{},
        optionalExpenses:{},
        income:[],
        timeData:time,  
        savings:true,
        chooseExpenses: function() {
            // Цикл for
    
    for (i=0; i < 2; i++) {
        let a=prompt("Введите обязательную статью расходов в этом месяце", ""),
            b=prompt("Во сколько это обойдётся?", "");

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i-1;
        }
    }

        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budjet / 30).toFixed();
            alert("Ежедневный бюджет " + appData.moneyPerDay);
        },
        detectLevel: function(){
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else  if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            };
        },
        checkSavings: function() {
            if (appData.savings==true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с Вашего депозита:" +appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i=0; i < 3; i++) {
                let opt = prompt("Статья необязательных расходов", "");
                    appData.optionalExpenses[i] = opt;
            }
        },
        chooseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 50 ) {
                console.log("Ok");
                appData.income =items.split(", ");
                appData.income.push(prompt("Может что-то ещё?"));
                appData.income.sort();
            } else {
                i = i--;
            };
            appData.income.forEach(function (item, i, income) {
                let j=1;
                console.log(j + "Способ дополнительного заработка: " + item);
              });
        },
        detectKey: function() {
            for (let key in appData) {
            console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
            };
        }
    };

    
    

//     var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });
     
// Цикл while

// while (i=0, i<2, i++) {
//     let a=prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b=prompt("Во сколько это обойдётся?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// Цикл do

// do {
//     let a=prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b=prompt("Во сколько это обойдётся?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Произошла ошибка");
//     }
// } while (i=0, i<2, i++);