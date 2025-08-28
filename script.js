let likeButton=document.getElementsByClassName("like-button");
let loveCount=parseInt(document.getElementById("love-count").innerText);
for(let i of likeButton)
{
    i.addEventListener('click',function()
{
    loveCount++;
    document.getElementById("love-count").innerText=loveCount;
})

}

function integerConvert(id)
{
    let x=document.getElementById(id).innerText
    x=parseInt(x);
    return x;
}

let emergencyCall = document.getElementById("emergencyCall")
emergencyCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    console.log(coin);
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("emergencyhead").innerText;
let hotline=document.getElementById("emergencyhotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});


let policeCall = document.getElementById("policeCall")
policeCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    console.log(coin);
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("policehead").innerText;
let hotline=document.getElementById("policehotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});




let fireCall = document.getElementById("fireCall")
fireCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    console.log(coin);
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("firehead").innerText;
let hotline=document.getElementById("firehotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});



let ambulanceCall = document.getElementById("ambulanceCall")
ambulanceCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("ambulancehead").innerText;
let hotline=document.getElementById("ambulancehotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});

let womenCall = document.getElementById("womenCall")
womenCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("womenhead").innerText;
let hotline=document.getElementById("womenhotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});



let corruptionCall = document.getElementById("corruptionCall")
corruptionCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("corruptionhead").innerText;
let hotline=document.getElementById("corruptionhotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});


let electricityCall = document.getElementById("electricityCall")
electricityCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("electricityhead").innerText;
let hotline=document.getElementById("electricityhotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});


let bracCall = document.getElementById("bracCall")
bracCall.addEventListener('click',function()
{
    let coin=integerConvert("coin-count")
    if(coin<20)
    {
        alert("❌ You don't have enough coin. At least 20 Coin required.");
        return;
    }
else
{
    coin=coin-20;
document.getElementById("coin-count").innerText=coin;
let heading=document.getElementById("brachead").innerText;
let hotline=document.getElementById("brachotline").innerText;
alert(`📞 Calling ${heading} ${hotline}...`);
let history=document.createElement("div");
history.innerHTML=`<div class="flex justify-between gap-4 bg-gray-100 p-4 w-[320px]">
<div class="flex flex-col gap-1">
<span class="font-bold text-lg">${heading}</span>
<span class="font-bold">${hotline}</span>
</div>
<div>
<span class="font-md">${new Date().toLocaleTimeString()}</span>
</div>
</div>
`;
document.getElementById("historyContainer").append(history);
}

});




    
    



    
    