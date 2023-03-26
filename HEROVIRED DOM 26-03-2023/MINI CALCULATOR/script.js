let buttons =document.getElementsByTagName('button');

let output = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = output.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            output.innerText=""
            output.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            output.innerText = currentDisplay.substring(0,currentDisplay.length-1)
                   }
        if(input=="C"){
            output.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            output.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = output.innerText
            output.innerText= eval(display)
        }
    }

}






