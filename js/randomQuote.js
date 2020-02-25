var quote = [
["It is during our darkest moments that we must focus to see the light.", "Aristotle"],
["In a gentle way, you can shake the world.", "Mahatma Gandhi"], 
["Nothing is impossible, the word itself says 'I'm possible'!", "Audrey Hepburn"],
["Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend. Non-being is the greatest joy.", "Lao Tzu"],
["What we think, we become.", "Buddha"],
["I believe in pink. I believe that laughing is the best calorie burner. I believe in kissing, kissing a lot. I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles.", "Audrey Hepburn"],
["Happiness is not something you postpone for the future; it is something you design for the present.", "Jim Rohn"],
["There is nothing impossible to him who will try.", "Alexander the Great"],
["If you accept the expectations of others, especially negative ones, then you never will change the outcome.", "Michael Jordan"],
["Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.", "Napoleon Hill"]
];

var numOfQuote = quote.length;
// alert(numOfQuote);
randomQuote();
function randomQuote(){
    var index = Math.floor(Math.random()*numOfQuote);
    document.getElementById("randomquote").innerText = quote[index][0];
    document.getElementById("speaker").innerText ="-- "+ quote[index][1];
    
    var stringLength = quote[index][0].length;
    var unitTime = 4000;
    if(stringLength<60){
        setTimeout(randomQuote, unitTime);
    }
    else if(stringLength>=60 && stringLength<120){
        setTimeout(randomQuote, unitTime*2);
    }
    else if(stringLength>=120 && stringLength<180){
        setTimeout(randomQuote, unitTime*3);
    }
    else if(stringLength>=180 && stringLength<240){
        setTimeout(randomQuote, unitTime*4);
    }
    else if(stringLength>=240 && stringLength<300){
        setTimeout(randomQuote, unitTime*5);
    }
    else if(stringLength>=300 && stringLength<360){
        setTimeout(randomQuote, unitTime*6);
    }
    else if(stringLength>=360 && stringLength<420){
        setTimeout(randomQuote, unitTime*7);
    }
}
