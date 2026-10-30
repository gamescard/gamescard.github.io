


var quadratic = document.getElementById("quadratic");
quadratic.onclick = function(){
  document.getElementById("display").innerHTML = `
    <html>
    <body>
    <div id="display">
    <button id="st.bt">
        Start value
    </button>
    <button id="end.bt">
        End value
    </button>
    <button id="alg.eq">algerbraic expresion</button>
   
        <br>
   
    <button id="calc">
        calculate
    </button>
    
    <p id="ans">answer=<br>
    <button id="c">
        C
    </button>
    <span id="span">0</span></p>
    <div class = quadratic>
    <label>y:</label>
    <input id = "y" width=10px height=10px>
    <br>
    <p>y=</p>
    <input id="a" width=10px height=10px>
    <p>x+</p>
    <input id="b" width=10px height=10px>
    <p>x+</p>
    <input id="c" width=10px height=10px>
    </div>
    </div>
    </body>
    </html>
`;
var calc = document.getElementById("calc");
var ans;
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var y = document.getElementById("y").value;
var x1, x2;

calc.onclick = function(){
  x1 = (-b+Math.sqrt(b**2-4*a*c))/(2*a);
  x2 = (-b-Math.sqrt(b**2-4*a*c))/(2*a);
  if(Number.isNaN(x1)){
    x1 = "No Root";
  }
  if(Number.isNaN(x2)){
    x2 = "No Root";
  }
  document.getElementById("ans").textContent = "x1 = "+x1+"x2 = "+x2;
  
  
}
}

