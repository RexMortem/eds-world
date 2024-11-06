$(document).ready(function(){
    var titleText = $(".CycleText");
    var titles = ["Programmer", "Academic Officer", "2nd Year CS Student"];
    var cyclesBeforeReset = 10;
    
    var titleI = 0;
    var letterI = 1;
    var cooldownI = cyclesBeforeReset;

    setInterval(function(){
        if(cooldownI < cyclesBeforeReset){ // cooldownI is reset when a title is finished
            cooldownI += 1;
            return;
        }
        
        // display string
        titleText.html(titles[titleI].substring(0, letterI));

        // prepare letterI for the next iteration
        letterI += 1;

        // if space then just skip
        if(titles[titleI][letterI] == " "){
            letterI += 1;
        }

        // if next letter is invalid
        if(letterI > titles[titleI].length){ // title is finished
            titleI = (titleI + 1) % titles.length;
            letterI = 1;
            cooldownI = 0;
        }
        
    }, 100);
})