let lastName=prompt('Фамилия'), name=prompt('Имя'), fatherName=prompt('Отчество'), age=prompt('Возраст'), gender;
let isMan=confirm('Men?');
var pens;
/*if(isMan){
    gender='мужской';
    if(age>=58){pens='да'}
    else {pens='нет';};
}
else{gender='женский';
    if(age>=а55){pens='да'}
    else {pens='нет';};
};*/

isMan
?(gender='мужской', 
    age>=58
        ?pens='да'
        :pens='нет'
        )
:(gender='женский', 
    age>=55
        ?pens='да'
        :pens='нет'
        );


let dayAge=age*365;

alert(`ФИО: ${lastName} ${name} ${fatherName}
возраст, лет: ${age}
возраст, дней: ${dayAge}
пол: ${gender}
пенсионный возраст: ${pens}
`)