//console.log("Hello world!")
/*Solve all the typing issues in the code without changing the implementation
*/

const sendMessage = (message: { to: string; text?: string }) => {
    if(message.text!= null){
        return message.text.toUpperCase();
    }
    else{
        return "Text is empty!";
    }
};

console.log(sendMessage({ to: 'Alice' }));