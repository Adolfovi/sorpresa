var number = 0;








function start(){
    document.getElementById('counter').innerHTML = number;  
    number = number + 1;


    if(number==41){
            document.getElementById('enlace').style.visibility = "visible";

    }
    
    
    
    
    if(number>41){
        document.getElementById('enlace').style.visibility = "hidden";

}












}