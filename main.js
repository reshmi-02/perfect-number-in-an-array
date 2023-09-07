let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");


//function
function perfect(){
var newarr=[];

for(let i=0;i<arr.length;i++){

    var sum=0;

for(let j=1; j<arr[i]; j++){
    if(arr[i]%j==0){
       sum=sum+j;
    }
}

if(sum==arr[i]){
   newarr.push(arr[i]);
}

}

return newarr;

}


//function calling

var a=perfect();
document.write("perfect numbers are = [ "+a+" ]");