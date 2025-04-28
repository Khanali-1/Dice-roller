// dice roller programs 

function rollDice(){

    const diceNum=document.getElementById("diceNum").value;
    const result=document.getElementById("result");
    const diceImages=document.getElementById("diceImages");
    const value=[];
    const images=[];

    for(let i=0; i < diceNum; i ++){
        const values=Math.floor(Math.random()*6)+1;
        value.push(values);
        images.push(`<img src="images/${values}.png">`)
    }

    result.textContent=`dice: ${value.join(',')}`;
    diceImages.innerHTML=images.join('');


}