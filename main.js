'use strict';
         
var  time, money, listCosts, costs;
function detectDayBudget(){
money=+prompt("Ваш бюджет на месяц?");

while(isNaN(money)||money==""||typeof money==null){
  money=+prompt("Ваш бюджет на месяц?");
}
time=prompt("Введите дату в формате YYYY-MM-DD");
appData.money=money;
appData.timeData=time;
}

let appData={
    ThisMoney:money,
    timeData:time,
    expences: {},
    optionalExpences:{},
    income:[],
    saving:true,
    checkSaves:function(){
      if(appData.saving==true){
        let save=prompt("Какова сума накоплений?");
        let percent=prompt("Под какой процент?");
        appData.monthIncome=(save/100/12*percent).toFixed();
    }
    alert("Доход  с вашего депозита в месяц :"+appData.monthIncome);
    },
    chooseOptExpenses:function(){
      for(let i=0;i<3;i++){
      let question=prompt("Статья необязательных расходов?");
      while(question==''||question==null){
          let question=prompt("Статья необязательных расходов?");


      }
      appData.optionalExpences[i+1]=question;
  }
    },
    expences:function(){
      let count=0;
while(count<2){
  listCosts=prompt("Введите обязательную статью расходов в этом месяце");
costs=+prompt("Во сколько обойдется?");
if((typeof listCosts)==="string" && (typeof costs) !=null&&(typeof listCosts)!=null&&listCosts!=''
&&costs!=''&&listCosts.length<50){
    appData.expences[listCosts]=costs;

}else{
    let flag=true;
    while(flag){
   alert("Ви ввели неправильное значение,повторите ваше действие");
   listCosts=prompt("Введите обязательную статью расходов в этом месяце");
costs=+prompt("Во сколько обойдется?");
   if((typeof listCosts)==="string" && (typeof costs) !=null&&typeof listCosts!=null&&listCosts!=''
&&costs!=''&&listCosts.length<50){
    appData.expences[listCosts]=costs;
    flag=false;
}
   }

}
count++;
}

    },
    detectLevel:function(){
      if(appData.moneyPerDay<200){
    console.log("Бедний человек.");
}else if(appData.moneyPerDay>200&&appData.moneyPerDay<1000){
    console.log("Человек из средним уровнем достатка.");
}else if(appData.moneyPerDay>1000){
    console.log("хорошо обеспечений человек.");
}
    },
    chooseIncome:function(){
      let items=prompt("Што может принести дополнительний доход.(Перечислите через запитую)",'');
      while( (typeof items)!="string"||items==''||(typeof items)==null||isNaN(parseInt(items))==false){
        items=prompt("Што может принести дополнительний доход.(Перечислите через запитую)",'');
      }
      appData.income=items.split(',');
      appData.income.push(prompt("Может што нибудь еще?",''));
      appData.income.sort();
      appData.income.forEach(function(item,i){
          alert("income have property"+(i+1)+" "+item);
      });
    
    }






};

appData.chooseIncome();





appData.moneyPerDay=Math.floor(appData.money/30);
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


console.log(appData);