 document.addEventListener('click', function(e) {
     let id = e.target.id;
     let ele;
     if (id != "dd") {
         ele = document.getElementById(id);

         ele.style.setProperty("background-image", "url(/Graphics/fire.png)");
         ele.style.setProperty("animation-name", "blast");
         ele.style.setProperty("animation-duration", "1s");
         ele.style.setProperty(" animation-delay", "0.5s");
         ele.style.setProperty("width", "12%");
         ele.style.setProperty("height", "12%");
         ele.style.setProperty("z-index", "50");
         let topp = e.clientY - ele.clientHeight;
         let leftt = e.clientX - ele.clientWidth;
         ele.style.setProperty("top", topp + 'px');
         ele.style.setProperty("left", leftt + 'px');
         ele.removeChild(ele.firstElementChild);
         console.log(id);

         setTimeout(function() {

             ele.style.setProperty("display", "none");

         }, 1500);
     }
 });
 let bln = 1;
 let prv_id = "#";
 let prv_prv_id = "#";
 let prv_prv_cl = "#";
 let prv_cl = "#";

 function ta(cc, pvcl) {
     let num = Math.floor(Math.random() * (16 - 10) + 10);
     let tr = num * 1000;
     setTimeout(function() {
         cc.classList.remove(pvcl);
         cc.classList.add("dn");
     }, tr);
 }

 function getRdmB() {
     return Math.floor(Math.random() * (10 - 1) + 1);
 }

 function getRdmL() {
     return Math.floor(Math.random() * (26 - 1) + 1);
 }
 setInterval(function() {
     let last;
     let strr;

     if (prv_id != "#") {
         last = document.getElementById(prv_id);
         let rd = Math.floor(Math.random() * (8 - 1) + 1);
         strr = "fna" + rd;
         last.classList.add(strr);
     }
     if (prv_prv_id != "#") {
         let cc = document.getElementById(prv_prv_id);
         ta(cc, prv_prv_cl);
     }
     if (bln == 20000) bln = 1;
     let nele = document.createElement("div");
     nele.id = "ub" + bln;
     nele.className = "bubble";
     let inele = document.createElement("span");
     inele.className = "cb";
     document.getElementById("dd").appendChild(nele);
     let dele = document.getElementById(nele.id);
     dele.appendChild(inele);
     let blnclr = "blnclr" + getRdmB();
     let letter = "letter" + getRdmL();

     dele.style.setProperty("background-image", "url(/Graphics/" + blnclr + ".png)");
     dele.firstElementChild.style.setProperty("background-image", "url(/Graphics/" + letter + ".png)");
     prv_prv_id = prv_id;
     prv_id = nele.id;
     bln++;
 }, 3000);