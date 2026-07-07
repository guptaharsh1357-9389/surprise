/* ==========================================================
                    ELEMENTS
========================================================== */

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");
const scene7 = document.getElementById("scene7");
const bgMusic = document.getElementById("bgMusic");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const beginBtn = document.getElementById("beginBtn");
const continueBtn = document.getElementById("continueBtn");
const nextBtn = document.getElementById("nextBtn");
const scene5Next = document.getElementById("scene5Next");
const blowBtn = document.getElementById("blowBtn");

const gift = document.getElementById("gift");
const giftTitle = document.querySelector(".giftTitle");

const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const cinemaText = document.getElementById("cinemaText");

const particles = document.getElementById("particles");


/* ==========================================================
                    DATA
========================================================== */

const story = [

"You know...",

"Birthdays are special.",

"Not just because another year has passed...",

"But because they celebrate\nsomeone truly special.",

"And today...",

"that someone is you. 💜"

];


/* ==========================================================
                    HELPERS
========================================================== */

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

function showScene(scene){

    document.querySelectorAll(".scene").forEach(s=>{

        s.classList.remove("active");

    });

    scene.classList.add("active");

}

async function typeText(element,text,speed=50){

    element.innerHTML="";

    for(let i=0;i<text.length;i++){

        element.innerHTML += text.charAt(i);

        await wait(speed);

    }

}


/* ==========================================================
                    FLOATING STARS
========================================================== */

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
    (8+Math.random()*8)+"s";

    star.style.animationDelay=
    Math.random()*5+"s";

    particles.appendChild(star);

}


/* ==========================================================
                    SCENE 1
========================================================== */

async function startScene1(){

    beginBtn.style.display="none";

    title.innerHTML="";

    subtitle.innerHTML="";

    subtitle.style.opacity="0";

    await typeText(title,"Excuse me...");

    await wait(900);

    title.innerHTML="";

    await typeText(title,"Doctor Sahiba...");

    await wait(900);

    subtitle.innerHTML=
    "Can I borrow just two minutes of your birthday?";

    subtitle.style.opacity="1";

    await wait(1200);

    beginBtn.style.display="inline-block";

    beginBtn.classList.add("fadeIn");

}


/* ==========================================================
                    START WEBSITE
========================================================== */

window.onload=()=>{

    startScene1();

};


/* ==========================================================
                    GO TO SCENE 2
========================================================== */

beginBtn.addEventListener("click",async()=>{
    bgMusic.play();

    beginBtn.style.display="none";

    await wait(500);

    showScene(scene2);

    startScene2();

});
/* ==========================================================
                    SCENE 2
========================================================== */

const storyLines = document.querySelectorAll(".storyLine");

async function startScene2(){

    continueBtn.style.display = "none";

    storyLines.forEach(line=>{

        line.innerHTML="";

        line.classList.remove("show");

    });

    for(let i=0;i<story.length;i++){

        storyLines[i].innerHTML =
        story[i].replace(/\n/g,"<br>");

        await wait(350);

        storyLines[i].classList.add("show");

        await wait(1700);

    }

    continueBtn.style.display="inline-block";

    continueBtn.classList.add("fadeIn");

}

/* ==========================================================
                GO TO SCENE 3
========================================================== */

continueBtn.addEventListener("click",async()=>{

    continueBtn.style.display="none";

    await wait(500);

    showScene(scene3);

    startScene3();

});/* ==========================================================
                    SCENE 3
========================================================== */

async function startScene3(){

    gift.classList.remove("open");

    giftTitle.classList.remove("fadeIn");

    await wait(300);

    giftTitle.classList.add("fadeIn");

}

/* ==========================================================
                GIFT CLICK
========================================================== */

gift.addEventListener("click", async()=>{

    // Prevent multiple clicks
    if(gift.classList.contains("open")) return;

    gift.classList.add("open");

    await wait(1800);

    showScene(scene4);

    startScene4();

});/* ==========================================================
                    LETTER DATA
========================================================== */

const letterMessage = `Dear Kashish,

I kept thinking...

What could I possibly gift someone
who already brings smiles to others?

Then I realised...

A normal birthday wish
just wasn't enough.

So...

I made this little surprise.

I hope it makes you smile.

Happy Birthday! 💜

— Harsh`;


/* ==========================================================
                    SCENE 4
========================================================== */

async function startScene4(){

    letter.classList.remove("show");

    letterText.innerHTML = "";

    nextBtn.style.display = "none";

    await wait(400);

    letter.classList.add("show");

    // Type the letter
    for(let i = 0; i < letterMessage.length; i++){

        letterText.innerHTML += letterMessage.charAt(i);

        await wait(35);

    }

    await wait(600);

nextBtn.style.display = "inline-block";
nextBtn.style.visibility = "visible";
nextBtn.style.opacity = "1";
nextBtn.classList.add("fadeIn");

console.log("Scene 4 Finished");

}


/* ==========================================================
                GO TO SCENE 5
========================================================== */

nextBtn.addEventListener("click", async()=>{

    nextBtn.style.display = "none";

    await wait(500);

    showScene(scene5);

    startScene5();

});/* ==========================================================
                    SCENE 5
========================================================== */

const scene5Messages = [

`Can I tell you something?`,

`Your smile...

has a way of making
people feel lighter.`,

`Your kindness...

is something
the world needs more of.`,

`Doctor Sahiba...

One day...

you're going to make
a difference in
so many lives.`,

`Never stop believing
in yourself.

You're stronger than
you think.`,

`And most importantly...

Thank you...

for simply being you. 💜`

];

async function startScene5(){

    cinemaText.style.opacity = "0";

    scene5Next.style.display = "none";

    await wait(500);

    for(let msg of scene5Messages){

        cinemaText.style.opacity = "0";

        await wait(500);

        cinemaText.innerHTML = msg.replace(/\n/g,"<br>");

        cinemaText.style.opacity = "1";

        await wait(3200);

    }

    scene5Next.style.display = "inline-block";

    scene5Next.classList.add("fadeIn");

}

/* ==========================================================
                GO TO SCENE 6
========================================================== */

scene5Next.addEventListener("click", async()=>{

    scene5Next.style.display = "none";

    await wait(500);

    showScene(scene6);

    startScene6();

});/* ==========================================================
                    SCENE 6
========================================================== */

function startScene6(){

    blowBtn.style.display = "inline-block";

    blowBtn.classList.add("fadeIn");

}

blowBtn.addEventListener("click", async()=>{

    // Hide flame
    const flame = document.querySelector(".flame");

    flame.style.display = "none";

    blowBtn.style.display = "none";

    await wait(1200);

    showScene(scene7);

    startScene7();

});


/* ==========================================================
                    SCENE 7
========================================================== */

async function startScene7(){

    const finalTitle = document.getElementById("finalTitle");
    const finalName = document.getElementById("finalName");
    const finalMessage = document.getElementById("finalMessage");

    finalTitle.style.opacity = "0";
    finalName.style.opacity = "0";
    finalMessage.style.opacity = "0";

    await wait(300);

    finalTitle.classList.add("fadeIn");

    await wait(1200);

    finalName.classList.add("fadeIn");

    await wait(1200);

    finalMessage.classList.add("fadeIn");

}


/* ==========================================================
                    END
========================================================== */

console.log("🎉 Birthday Website Loaded Successfully 💜");