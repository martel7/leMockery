const isPressed = document.getElementById("mockButton");
if (isPressed) {
    isPressed.onclick = function() {

        document.getElementById("copyConfirm").style.display = "none";

        const inputTextElement = document.getElementById("inputText");
        let inputText = inputTextElement.value;
        if(inputText.length === 0)
            return;

        const outputTextElement = document.getElementById("outputText");

        let outputText = "";
        //mock the text:

        for (let i = 0; i < inputText.length; i++){
            //rand = Math.round(Math.random());
            if(i % 2 === 0)
                outputText = outputText + inputText.charAt(i).toUpperCase();
            else
                outputText = outputText + inputText.charAt(i).toLowerCase();   
        }

        let finalMock = "";
        let rand;
        for(let i = 0; i < outputText.length; i++){
            rand = Math.random();
            if(rand > 0.8){
                if(outputText.charAt(i) == outputText.charAt(i).toLowerCase())
                    finalMock = finalMock + outputText.charAt(i).toUpperCase();
                else
                    finalMock = finalMock + outputText.charAt(i).toLowerCase();
            }
            else
             finalMock = finalMock + outputText.charAt(i);
        }


        outputTextElement.value = finalMock;
  };
}

document.getElementById("outputText").onclick = function(){

    //copying the text:
    let text = document.getElementById("outputText").value;
    navigator.clipboard.writeText(text);

    //giving user the confrimation that he copied the text:
    document.getElementById("copyConfirm").style.display = "inline";
}