'use strict';
var money=prompt("Ваш бюджет на месяц", ""),
    time=prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData={money:money, time:time},
    expenses={"ответ на первый вопрос":"ответ на второй вопрос"},
    optionalExpenses={},
    income={},
    savings=false,
    answer1=prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2=prompt("Во сколько это обойдётся?", "");
alert(money/30);


