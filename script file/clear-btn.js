document.getElementById('clear-history').addEventListener('click', function(){
    document.getElementById('activity-container').style.display = 'none'
})

// theme button working here 
document.getElementById('theme-btn').addEventListener('click',function () {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink' ,'brown' ,'aquamarine' ,'darkkhaki'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('random-color1').style.backgroundColor = randomColor;
    document.getElementById('random-color2').style.backgroundColor = randomColor;
    document.getElementById('random-color3').style.backgroundColor = randomColor;
    document.getElementById('random-color4').style.backgroundColor = randomColor;
    document.getElementById('random-color5').style.backgroundColor = randomColor;
    document.getElementById('random-color6').style.backgroundColor = randomColor;
    document.getElementById('random-color7').style.backgroundColor = randomColor;
    document.getElementById('random-color8').style.backgroundColor = randomColor;
    document.getElementById('random-color9').style.backgroundColor = randomColor;
    document.getElementById('random-color10').style.backgroundColor = randomColor;
    
}
);