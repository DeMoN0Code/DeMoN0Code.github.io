"use strict";

let calc = {
    design: 0,
    type: 0,
    adapt: 0,
    calculate: function(){
        return this.design + this.type + this.adapt;
    },
};

let siteTypes = [
    ["Лендинг", 1000],
    ["Магазин", 2000],
    ["Корпоративный", 3000],
];

let designs = [
    ["Свой", 0],
    ["Уникальный", 2000],
    ["Шаблонный", 1000],
];

let adapts = [
    ["Мобильные", 2000],
    ["Пк", 2000],
    ["Все", 3500],
];

function strGenerate(str, arr){
    let temp = str;
    for(let i = 0; i < arr.length; i++){
       temp += "\n" + (i + 1) + ". " + arr[i][0]; 
    }
    return temp;
}

function processingRequest(str, arr){
    let temp = prompt(strGenerate(str, arr));
    for(let i = 0; i < arr.length; i++){
        if(temp.toLowerCase() == arr[i][0].toLowerCase() || Number(temp) == i + 1){
            return arr[i][1];
        }
    }
    
    return -1;
}

function main(){
    let site = processingRequest("Какой тип сайта вам нужен?", siteTypes);
    console.log(site);
    if(site != -1){
        let design = processingRequest("Какой дизайн вам нужен?", designs);
        if(design != -1){
            let adapt = processingRequest("Какой адаптив вам нужен?", adapts);
            if(adapt != -1){
                calc.type = site;
                calc.design = design;
                calc.adapt = adapt;
                
                confirm(`Цена: ${calc.calculate()}, вас устроит?`);
                return 0;
            }
        }
    }
    
    alert("Посмотрите информацию о моём скилле и воспользуйтесь калькулятором:D");
    return 0;
}

main();
