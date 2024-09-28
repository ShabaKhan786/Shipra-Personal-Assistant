
let btn=document.querySelector("#btn")
let btn1=document.querySelector("#btn1")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")





function speak(text){
let text_speak=new SpeechSynthesisUtterance(text)
text_speak.rate=1;
text_speak.pitch=1;
text_speak.volume=1;
text_speak.lang="en-GB"
window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("good morning maim")
    }
    else if(hours>=12 && hours<16){
        speak("good after noon maim")
    }
    else{
        speak("good evening maim")
    }
}
window.addEventListener('load',()=>{
    // wishme()
})

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition

recognition.onresult=(e)=>{
    let currentIndex=e.resultIndex
   let transcript= e.results[currentIndex][0].transcript
content.innerHTML=transcript
// console.log(content.innerHTML);

 takeCommand(transcript.toLowerCase())
}

recognition.onstart=function(){
    console.log("active");
    
}

recognition.onend=function(){
    console.log("Unactive");
    
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
    recognition.continuous = true;

})

function takeCommand(msg){

      btn.style.display="flex"
    voice.style.display="none"

    if(msg.includes("hello") || msg.includes("hey")){
        speak("hello sir what can i help you")
    }
    else if(msg.includes("who are you")){
        speak("I am virtual asistent, created by shaba maim")
    }

    else if(msg.includes("How are you")){

        speak("I am fine what about you sir")
        
    }

    else if(msg.includes("Time")){

        let time=new Date.toString(undefined,{hours:"numeric",minute:"numeric"})
        speak(time)
           
        
    }

    else if(msg.includes("Thank You shipra")){

        speak("You welcome sir")
        
    }

    else if(msg.includes("open youtube")){

        speak("opening Youtube")
        window.open("https://youtube.com/","_blank")
    }

    else if(msg.includes("open facebook")){

        speak("opening facebook")
        window.open("https://facebook.com/","_blank")
    }

    else if(msg.includes("open google")){

        speak("opening google")
        window.open("https://google.com/","_blank")
    }

    else if(msg.includes("open calculator")){

        speak("opening calculator")
        window.open("calculator://")
    }


    else{
        let finalText="this is what i found on internet regarding"+ msg.replace("shipra"," ")||msg.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${msg.replace("shipra"," ")}`,"_blank")
    }
    
}