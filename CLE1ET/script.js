<script>
    var txt = document.getElementById('txt');
    
    setInterval(changeColor, 1000);
    
    function changeColor(){
    
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    
    txt.style.color = "RGB("+r+","+g+","+b+",;
    }
    
    changeColor;
    
    </script>