import '../styles/index.scss';

//console.log('webpack starterkit');
//console.log('Hello World');


// ****TUTORIAl 1 let and var def ****

/*console.log(carID);  //undefined error
var carID=100; 
console.log(bikeID);  // Uncaught reference Error
let bikeID=200;*/

// scope of let and var keywords

//var flag = true;

/*if(true){
     var oddno=9;
}
console.log('Odd no is:'+oddno);  // It prints the value


var demo= true;
if(true){
let evenno=8;
}
console.log(evenno); //Uncaught Reference error */






// **** Tutorial 2 Rest Parameters****

/*function sendCars(...CarIds){
    CarIds.forEach(id =>console.log(id));  //id=> Arrow function , it is discuss in further tutorial

}

sendCars(1,2,3);*/


// **** TUTORIAL 3 Destructuring Arrays ****

// Feature of JavaScript that allow us to easily assign the values within an array
 // to variable . This is called destructuring arrays . We could also destructure objects



 // Sample example of destructuring arrays
 /*let carIDs  = [1,2,5];

 let [car1 , car2 ,car3]=carIDs;

 console.log(car1 ,car2, car3);*/

// destructuring arrays using rest parameter

/*let carIDs  = [1,2,5];

 let [car1 ,...remainingCars]=carIDs;
 console.log(car1 ,remainingCars);*/

 // In Below Example we lost one Id  as we are initializing only 2 variables 
 // so we can use rest parameter

/* let carIDs=[100,200,300];
 let [car1, car2]=carIDs;
 console.log(car1,car2);*/


 // **** TUTORIAL 4 Destructuring objects****


 //Example 1 for destructuring objects

/*let car = {id:500,style:'delay'};

let {id,style}=car;

 //let {studentId,studentStyle}=car; // uncaught reference error
console.log(id,style);*/

//Example 2 for destructuring objects

/*let car ={id:500, style:'delay'};
let id,style;
//{id,style}=car; // will throw compile time error , compiler is confused b/w curly braces
                // is function or destructuring objects .
({id,style}=car); // correct way to destructure objects
console.log(id,style);*/


// **** TUTORIAL 5 Spread Syntax ****

// It is opposite of rest parameter
//In spread syntax, we are taking array and we are breaking it out in car1,car2,car3


// rest parameter collects up elements and store them in array
// for example below code

 /*function sendCars(...CarIds){
    CarIds.forEach(id =>console.log(id)); 

}
    sendCars(1,2,3);
*/
// spread Example

/*function startCars(car1,car2,car3){

    console.log(car1,car2,car3);
}

let carIDs=[100,200,300];
startCars(...carIDs);*/

//**** TUTORIAL 6 Type Of   *****/

/*console.log(typeof(1));
typeof(true);
console.log(typeof('abc'));
typeof(function(){});
typeof(null);
typeof(undefined);
typeof(NaN);*/

//console.log(Number.parseInt('55'));
//console.log(Number.parseFloat('123ABC'))    ;


// Equality operator == , here type doesnt matter only content equality check
// Equality operator === , here type of operand need to be same as well as content

//Unary operator  ++var, It will increment before operartion 
                    //var++ , It will increment after performing operation or In Expression

// Unary plus operator will convert a string to number but number will remain number

//let year =1967;
//console.log(typeof(+year)); // number

// conditional operator

//console.log(5>4?'Yes':'No');

//**** TUTORIAL 7 IIFE (Immediately Invoked  Function Expression)**** */


/*Example IIFE
let app=(function(){
    let carID=123;
    console.log("In function");
    return {};
})();

console.log(app);*/

// Example 2 closure
// It is used to persit the data 

/*let app=(function(){
    let carID=123;
    let getID=function(){
        return carID;
    };
    return {
        getID :getID
    };
})();

console.log(app.getID());*/

// **** TUTORIAL 8 This keyword **** 

// This refer to an object, but it doesn't  refer to the function as an object
// It is special object called a context for the function 


// Example 1
/*
let fn = function(){
    console.log(this===window);
};
fn();*/

// Example 2
/*
let o={
    carID:123,
    getID:function(){
        console.log(this);
        return this.carID;
    }
};
console.log(o.getID());*/

// call and apply are two ways through which we can change the context of an object

// Example for call
/*let o={
    carID:123,
    getID:function(){
        return this.carID;
    }
};

let newCar={carID:456};
console.log(o.getID.call(newCar));*/

// Example for apply

/*let o={
    carID:123,
    getID:function(prefix){
        return prefix+this.carID;
    }
};

let newCar={carID:456};
console.log(o.getID.apply(newCar,['ID:']));
*/

// "Call" and "apply" use to make changes in function via this keyword , Also in bind you can pass arguments
// OnOther hand "bind" keyword make a copy of a function and create another fucntion to operate

//  Example for bind keyword

/*let o={
    carID:123,
    getID:function(){
        return this.carID;
    }
};

let newCar={carID:456};
let newfun=o.getID.bind(newCar);
console.log(newfun());*/


// ****TUTORIAL arrow function & Default parameters ****
// Instead of parathensis we can use underscore also

// when we are using arrow function in function there should be return statement else it will throw undefined

//let getID=()=> 123;
/*let getID=_=> {

     return 123;
};
console.log(getID());*/

// NOTE : Arrow function do not have their own "this"  value
// "this" refer to the enclosing context


//  Default parameters

/*let trackCar = function(carID,city='NewYork'){
    console.log(`Tracking ${carID} in ${city} . `);
};
console.log(trackCar(452));
console.log(trackCar(789,'Mumbbai'));
*/

/*function Car(id){

    this.Carid=id;
    this.start=function(){
        console.log('Start :' + this.Carid);
    };
}
let car = new Car(123);
car.start();*/