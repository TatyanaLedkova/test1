let startBtn = document.getElementById("start"),
budget = document.querySelectorAll('.budget-value')[0],
dayBudget = document.querySelectorAll('.daybudget-value')[0],
level = document.querySelectorAll('.level-value')[0],
expensesValue = document.querySelectorAll('.expenses-value')[0],
optionalExpenses = document.querySelectorAll('.optionalexpenses-value')[0],
income = document.querySelectorAll('.income-value')[0],
monthSavings = document.querySelectorAll('.monthsavings-value')[0],
yearSavings = document.querySelectorAll('.yearsavings-value')[0],
expensesItem = document.getElementsByClassName('expenses-item'),
expensesItemBtn = document.querySelector('.expenses-item-btn'),
expensesBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
choose = document.querySelector('.choose-income'),
checkbox = document.querySelector('#savings'),
chooseSum = document.querySelector('.choose-sum'),
choosePercent = document.querySelector('.choose-percent'),
year = document.querySelector('.year-value'),
month = document.querySelector('.month-value'),
day = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = true;
expensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function() {
    expensesItemBtn.disabled = false;
    expensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
    time=prompt("Введите дату в формате YYYY-MM-DD", "");
    money=+prompt("Ваш бюджет на месяц", "");

    while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for (i=0; i < expensesItem.length; i++) {
        let a=expensesItem[i].value,
            b = expensesItem[++i].value

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i-1;
        }
        expensesValue.textContent = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i=0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        
        appData.moneyPerDay = ((appData.budget -+ appData.expensesValue) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
    
         if (appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень достатка";
        } else  if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Высокий уровень достатка";
        } else {
        level.textContent = "Произошла ошибка";
        }
    } else {
        dayBudget.textContent = "Произошла ошибка";
    }
});
choose.addEventListener('input', function() {
    let items = choose.value;
        appData.choose = items.split(", ");
        income.textContent = appData.choose;
});

checkbox.addEventListener('click', function() {
   if (appData.savings == true) {
       appData.savings = false;
   } else {
       appData.savings = true;
   }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData={budjet:money,
        expenses:{},
        optionalExpenses:{},
        income:[],
        timeData: time,  
        savings: false};

