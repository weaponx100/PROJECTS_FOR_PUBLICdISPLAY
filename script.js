let star1=document.querySelector("#starglow1");
let star2=document.querySelector("#starglow2");
let star3=document.querySelector("#starglow3");
let star4=document.querySelector("#starglow4");
let star5=document.querySelector("#starglow5");

    star1.addEventListener("click",()=>{


    star1.style.borderColor="#008248";
    star2.style.borderColor="rgb(241, 247, 245)";
    star3.style.borderColor="rgb(241, 247, 245)";
    star4.style.borderColor="rgb(241, 247, 245)";
    star5.style.borderColor="rgb(241, 247, 245)";

    document.querySelector("#imgdiv").innerHTML="<img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png'width='375px' >" ;
    document.querySelector("#textdiv").innerHTML=" <div id='textdiv1'>Customize your drink</div><div id='textdiv2'>"+
    "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</div>";
});
    star2.addEventListener("click",()=>{

        document.querySelector("#imgdiv").innerHTML="<img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png'width='375px' >" ;
        document.querySelector("#textdiv").innerHTML=" <div id='textdiv1'>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</div><div id='textdiv2'>"+
        "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</div>";
        star1.style.borderColor="rgb(241, 247, 245)";
        star2.style.borderColor="#008248";
        star3.style.borderColor="rgb(241, 247, 245)";
        star4.style.borderColor="rgb(241, 247, 245)";
        star5.style.borderColor="rgb(241, 247, 245)";
        });
        star3.addEventListener("click",()=>{
            document.querySelector("#imgdiv").innerHTML="<img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png'width='375px' >" ;
            document.querySelector("#textdiv").innerHTML=" <div id='textdiv1'>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</div><div id='textdiv2'>"+
        "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</div>";
            star1.style.borderColor="rgb(241, 247, 245)";
            star2.style.borderColor="rgb(241, 247, 245)";
            star3.style.borderColor="#008248";
            star4.style.borderColor="rgb(241, 247, 245)";
            star5.style.borderColor="rgb(241, 247, 245)";
            });
            star4.addEventListener("click",()=>{
        
                document.querySelector("#imgdiv").innerHTML="<img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png'width='375px' >" ;
                document.querySelector("#textdiv").innerHTML=" <div id='textdiv1'>Sandwich, protein box or at-home coffee</div><div id='textdiv2'>"+
                "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</div>";
                star1.style.borderColor="rgb(241, 247, 245)";
                star2.style.borderColor="rgb(241, 247, 245)";
                star3.style.borderColor="rgb(241, 247, 245)";
                star4.style.borderColor="#008248";
                star5.style.borderColor="rgb(241, 247, 245)";
                });
                star5.addEventListener("click",()=>{
                    document.querySelector("#imgdiv").innerHTML="<img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png'width='375px' >" ;
                    document.querySelector("#textdiv").innerHTML=" <div id='textdiv1'>Select Starbucks® merchandise</div><div id='textdiv2'>"+
                    "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</div>";
                    star1.style.borderColor="rgb(241, 247, 245)";
                    star2.style.borderColor="rgb(241, 247, 245)";
                    star3.style.borderColor="rgb(241, 247, 245)";
                    star4.style.borderColor="rgb(241, 247, 245)";
                    star5.style.borderColor="#008248";
                    });

