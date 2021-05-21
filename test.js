
function myFunction(numbers, target) {
    for(var i=0;i<numbers.length; i++)
    {
        for(var j=i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j]===target){
                return true;
            }
        }
    }
   }
   var numbers = [2,3];
 if(myFunction(numbers,5)===true){
     console.log("test case 1 is passed")
 }
 else 
 {
     console.log("test case 1 is failed")
 }
 var numbers = [2,3];
 if(myFunction(numbers,6)===true){
     console.log("test case 2 is passed")
 }
 else 
 {
     console.log("test case 2 is failed")
 }
 var numbers = [-1,-2];
 if(myFunction(numbers,-3)===true){
     console.log("test case 3 is passed")
 }
 else 
 {
     console.log("test case 3 is failed")
 }
 var numbers = [-1,6];
 if(myFunction(numbers,5)===true){
     console.log("test case 4 is passed")
 }
 else 
 {
     console.log("test case 4 is failed")
 }
 var numbers = [0,0,1];
 if(myFunction(numbers,0)===true){
     console.log("test case 5 is passed")
 }
 else 
 {
     console.log("test case 5 is failed")
 }
