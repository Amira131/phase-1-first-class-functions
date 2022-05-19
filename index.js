

const receivesAFunction = (cb) => {
    cb()
}

// function returnsANamedFunction(){
//     return function aNewFunction() {
//     console.log("Hi")
//     }
    
// }
    

function returnsANamedFunction(){
    const aNewFunction = () =>{
    console.log("Hi")
    }
    return aNewFunction
}

// function returnsAnAnonymousFunction(){
//     return function () {}
// }

const returnsAnAnonymousFunction = () =>{return function(){}}