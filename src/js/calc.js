"use strict";

let calc = {
    design: 0,
    type: 0,
    adapt: 0,
    timeT: 0,
    timeD: 0,
    timeA: 0,
    calculateCost: function(){
        return this.design + this.type + this.adapt;
    },
    calculateTime: function(){
        return this.timeA + this.timeD + this.timeT;  
    },
};

let siteTypes = [
    ["Лендинг", 1000, 1],
    ["Магазин", 2000, 3],
    ["Корпоративный", 3000, 3],
];

let designs = [
    ["Свой", 0, 0],
    ["Уникальный", 2000, 5],
    ["Шаблонный", 1000, 3],
];

let adapts = [
    ["Мобильные", 2000, 0],
    ["Пк", 2000, 0],
    ["Все", 3500, 1],
];

function dataUpdate(){
    $("#cost").text(calc.calculateCost());
    $("#time").text(calc.calculateTime());
}

$(document).ready(function(){
    $("#siteType").change(function(){
        let num = Number($(this).val()) - 1;
        calc.type = siteTypes[num][1];
        calc.timeT = siteTypes[num][2];
        dataUpdate();
    });
    
    $("#siteDesign").change(function(){
        let num = Number($(this).val()) - 1;
        calc.design = designs[num][1];
        calc.timeD = designs[num][2];
        dataUpdate();
    });
    
    $("#adapt").change(function(){
        let num = Number($(this).val()) - 1;
        calc.adapt = adapts[num][1];
        calc.timeA = adapts[num][2];
        dataUpdate();
    });
});