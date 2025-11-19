      var ans=0;
        var diff=0;
        var stn=0;
        var st=0;
        var gap=0;
        var n=0;
        
        var stvl=true;
        var algeq=false;
        
        document.getElementById("c").onclick=function(){
            document.getElementById("start-value").value="";
            document.getElementById("gap").value="";
            document.getElementById("n").value="";
            document.getElementById("span").textContent="0";
        }
        
        document.getElementById("st.bt").onclick=function(){
            stvl=true;
            algeq=false;
            document.getElementById("st.val").textContent="start value"
        }
        document.getElementById("end.bt").onclick=function(){
            stvl=false;
            algeq=false;
            document.getElementById("st.val").textContent="End value"
        }
         document.getElementById("alg.eq").onclick=function(){
            algeq=true; 
            stvl=false;
            document.getElementById("st.val").textContent="Slope"
            document.getElementById("diffrence").textContent="x"
            document.getElementById("term").textContent="b"
        }   
        
        document.getElementById("calc").onclick=function(){
         st=Number(document.getElementById("start-value").value);
         stn=document.getElementById("start-value").value;
         gap=Number(document.getElementById("gap").value);
         n=Number(document.getElementById("n").value);
        
     if (algeq) {
          var expr = stn.replace(/x/g, gap);
                // y = kx + b
                // k = st, x = gap, b = n
                ans = eval(expr);
                if (isNaN(ans)) {
                    document.getElementById("span").textContent = "Error";
                } else {
                    document.getElementById("span").textContent = "y = " + ans;
                }
            } else {
                // Arithmetic sequence mode
                if (stvl) {
                    ans = st + gap * n;
                } else {
                    ans = st - gap * n;
                }
                if (isNaN(ans)) {
                    document.getElementById("span").textContent = "Error";
                } else {
                    document.getElementById("span").textContent = ans;

                      let canvas=document.getElementById("graph");
                      let ctx = canvas.getContext("2d");
                          ctx.moveTo(0, 0);
                          ctx.lineTo(gap, ans);
            }
        }
        
       
        
