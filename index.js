// {
//     var x = 9; //var is always Function Scoped -> BLOCK SE FARK NHI PADTA 
//     let y = 9; //let is always Block Scoped -> Block se bahut Fark padta hai
// }

// let vs var
// BLOCK SCOPE vs FUNCTION SCOPE
// let is not Hoisted vs var is hoisted

// try {
    // YAHA PAR JO CODE LIKHA HAI USE RUN KARO
    //PAR AGAR KOI ERROR AATI HAI
//     var x = 'API WALI VALUE'
// }
// catch(error){
    // TAB YAHA PAR JO CODE LIKHA HAI RUN KARO
//     var x = 'SOME DEFAULT VALUE'
// }

// console.log(x);

// const x = {name:'Arvind'} // you cannot reassign x

// x.name = 'Anixxica Babes'

// console.log(x);

// function incrementScore(){
//     var increment = () => {
//         this.score++;
//         console.log(this.score);
//     }
//     increment()
//     console.log(this.score);
// }

// var x = {name:'Saxxy Anxxica', score:0}

// incrementScore.bind(x)()


// function sum(x = 4,y = 9){
//     console.log(x+y);
// }
// sum(y=12)

// function withREST(...someValues){
//     console.log(someValues);
// }

// var x = [1, 'Needless']
// console.log(x) 

// function sum(x,y,z){
//     console.log(x+y+z);
// }

// var x = [1,2,3,5,6,7,7]
// sum(...x)

// var detailsOfOurBabe = {
//     name: 'Anshika',
//     education: 'LoverGirl',
//     Experience: 2,
//     breakup: function(){ console.log('I am in talk with my EX');},
//     hookup: function(){ console.log('If my answer is yes, what is your question?');}
// }

// var {name, Experience, ...rest} = detailsOfOurBabe

// console.log(name+' '+Experience);

// var arr  = [1,2,3,4,5,6,7]

// var [a,b, ...rest] = arr

// console.log(a);
// console.log(b);
// console.log(rest);


// Backward Compatibility 2003 -> 2020 It will work
// JS --------> Machine Language (Performance)
// c -> Python --> compile ----> C --------> Machile Language

// let a = 7
// let b = 8
// console.log(a,b);
// [a,b] = [b,a]
// console.log(a,b);

// In 80% Cases You will always know your types ?
// Always use == (Whenever you know the types)

// TeamMember  === (Yaha par muje types nahi pata tha)
