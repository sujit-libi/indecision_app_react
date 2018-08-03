//simple JS function

const square = function(x){
    return x*x;
}

console.log(square(8));

//Arrow function

const squareArrow = (a) => {
    return a*a;
}

console.log(squareArrow(9));

//assignment

//Simple Vanilla JS (ES5)

const getFirstName = function(fullName){
    return fullName.split(' ')[0];
}

console.log(getFirstName('Sujit Kumar Libi'));

//Arrow function ES6

const getAgadiKoNaam = (AgadiKoNaam) => {
    return AgadiKoNaam.split(' ')[0];
}

console.log(getAgadiKoNaam('Sujit2 Kumar Libi'));

//shortHanded 

const setAgadiKoNaam = (AgadiKoNaam) =>  AgadiKoNaam.split(' ')[0];
console.log(setAgadiKoNaam('Sujit3 Kumar Libi'));

//argument object - no longer bound with arrow function

//es5

const add = function(a,b){
    console.log(arguments);
    return a+b;
}
console.log(add(8,9,5));

//arrow function

const sum = (a,b) =>{
    //console.log(arguments); ----> yo kura arrow function ma garna mileyna
    return a+b;
}
console.log(sum(8,5));


//this keyword - no longer bound

const user = {
    name: 'Sujit',
    cities: ['Bhaktapur','Kathmandu','Chitwan'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);
        const that = this;
        this.cities.forEach(function(city){
            console.log(that.name + ' has Lived in ' + city);
        });

        this.cities.forEach((city)=>{
            console.log(this.name + ' has lived in ' + city);
        });

        //Using map

        const me = this.cities.map((city)=>{
            return city + " I hate all Places";
        });
        return me;
    }
};
console.log(user.printPlacesLived());


//Its Challenge time ^_^

const multipler = {
    multipleNum : [2,8,9,15,5],
    multipleBy : 2,
    multiply(){
        return this.multipleNum.map((num)=> num * this.multipleBy);
    }
};

console.log(multipler.multiply());