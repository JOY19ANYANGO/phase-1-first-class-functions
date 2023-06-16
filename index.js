function receivesAFunction(callBack){
    callBack()
}

function returnsANamedFunction(){
    var fn;
    fn = function gret(){
        console.log("Named function")
    }
    return fn
}
function returnsAnAnonymousFunction(){
   return(function (){
    console.log('hi')})

  }

