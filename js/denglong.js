!function(){const n="#dc8f03",i="#ffa500",e="rgba(250, 108, 0, 1)",t="rgba(216, 0, 15, 0.8)",r="rgba(216, 0, 15, 0.1)";var a=document.createElement("style"),a=(a.innerHTML=`
  .spring_lantern__deng-box {
  position: fixed;
  top: -20px;
  right: -20px;
  z-index: 99999;
  }
  .spring_lantern__deng-box1 {
   position: fixed;
   top: -10px;
   left: 10px;
   z-index: 99999;
  }

  .spring_lantern__deng-box1 .spring_lantern__deng {
   position: relative;
   width: 120px;
   height: 90px;
   margin: 50px;
   background: ${t};
   border-radius: 50% 50%;
   -webkit-transform-origin: 50% -100px;
   -webkit-animation: swing 5s infinite ease-in-out;
   box-shadow: -5px 5px 30px 4px ${e};
  }
  .spring_lantern__deng {
   position: relative;
   width: 120px;
   height: 90px;
   margin: 50px;
   background: ${t};
   border-radius: 50% 50%;
   -webkit-transform-origin: 50% -100px;
   -webkit-animation: swing 3s infinite ease-in-out;
   box-shadow: -5px 5px 50px 4px ${e};
  }

  .spring_lantern__deng-a {
   width: 100px;
   height: 90px;
   background: ${r};
   margin: 12px 8px 8px 8px;
   border-radius: 50% 50%;
   border: 2px solid ${n};
  }
  .spring_lantern__deng-b {
   width: 45px;
   height: 90px;
   background: ${r};
   margin: -4px 8px 8px 26px;
   border-radius: 50% 50%;
   border: 2px solid ${n};
  }

  .spring_lantern__xian {
   position: absolute;
   top: -40px;
   left: 60px;
   width: 2px;
   height: 40px;
   background: ${n};
  }

  .spring_lantern__shui-a {
   position: relative;
   width: 5px;
   height: 20px;
   margin: -5px 0 0 59px;
   -webkit-animation: swing 4s infinite ease-in-out;
   -webkit-transform-origin: 50% -45px;
   background: ${i};
   border-radius: 0 0 5px 5px;
  }

  .spring_lantern__shui-b {
   position: absolute;
   top: 14px;
   left: -2px;
   width: 10px;
   height: 10px;
   background: ${n};
   border-radius: 50%;
  }

  .spring_lantern__shui-c {
   position: absolute;
   top: 18px;
   left: -2px;
   width: 10px;
   height: 35px;
   background: ${i};
   border-radius: 0 0 0 5px;
  }

  .spring_lantern__deng:before {
   position: absolute;
   top: -7px;
   left: 29px;
   height: 12px;
   width: 60px;
   content: " ";
   display: block;
   z-index: 999;
   border-radius: 5px 5px 0 0;
   border: solid 1px ${n};
   background: ${i};
   background: linear-gradient(to right, ${n}, ${i}, ${n}, ${i}, ${n});
  }

  .spring_lantern__deng:after {
   position: absolute;
   bottom: -7px;
   left: 10px;
   height: 12px;
   width: 60px;
   content: " ";
   display: block;
   margin-left: 20px;
   border-radius: 0 0 5px 5px;
   border: solid 1px ${n};
   background: ${i};
   background: linear-gradient(to right, ${n}, ${i}, ${n}, ${i}, ${n});
  }

  .spring_lantern__deng-t {
   font-family: 华文行楷,华文楷体,Arial,Lucida Grande,Tahoma,sans-serif;
   font-size: 53px !important;
   color: ${n};
   font-weight: bold;
   line-height: 85px;
   text-align: center;
   user-select:none;
  }

  .night .spring_lantern__deng-t,
  .night .spring_lantern__deng-box,
  .night .spring_lantern__deng-box1 {
   background: transparent !important;
  }

  @-moz-keyframes swing {
   0% {
    -moz-transform: rotate(-10deg)
   }

   50% {
    -moz-transform: rotate(10deg)
   }
   100% {
    -moz-transform: rotate(-10deg)
   }
  }

  @-webkit-keyframes swing {
   0% {
    -webkit-transform: rotate(-10deg)
   }

   50% {
    -webkit-transform: rotate(10deg)
   }

   100% {
    -webkit-transform: rotate(-10deg)
   }
  }
  `,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a),document.createElement("div")),a=(a.innerHTML=`
  <div class="spring_lantern__deng-box1" id="spring_lantern__box1">
   <div class="spring_lantern__deng">
    <div class="spring_lantern__xian"></div>
    <div class="spring_lantern__deng-a">
     <div class="spring_lantern__deng-b"><div class="spring_lantern__deng-t" id="spring_lantern__chun">${"福福".split("")[0]}</div></div>
    </div>
    <div class="spring_lantern__shui spring_lantern__shui-a"><div class="spring_lantern__shui-c"></div><div class="spring_lantern__shui-b"></div></div>
   </div>
  </div>
  `,(document.getElementsByTagName("body")[0]||document.getElementsByTagName("div")[0]).appendChild(a),document.createElement("div"));a.innerHTML=`
  <div class="spring_lantern__deng-box" id="spring_lantern__box">
   <div class="spring_lantern__deng">
    <div class="spring_lantern__xian"></div>
    <div class="spring_lantern__deng-a">
     <div class="spring_lantern__deng-b"><div class="spring_lantern__deng-t" id="spring_lantern__jie">${"福福".split("")[1]}</div></div>
    </div>
    <div class="spring_lantern__shui spring_lantern__shui-a"><div class="spring_lantern__shui-c"></div><div class="spring_lantern__shui-b"></div></div>
   </div>
  </div>
  `,(document.getElementsByTagName("body")[0]||document.getElementsByTagName("div")[0]).appendChild(a),document.addEventListener("mousemove",function(n){var i=220<n.clientY,n=n.clientY<225;var e,t;i&&!s||n&&s||(s=!s,e=document.getElementById("spring_lantern__box1"),t=document.getElementById("spring_lantern__box"),i&&(s=!1,t.style.display="block",e.style.display="block"),n&&(s=!1,t.style.display="block",e.style.display="block"))},!1);let s=!1}();