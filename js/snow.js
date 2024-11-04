function snowFall(t){this.maxFlake=(t=t||{}).maxFlake||200,this.flakeSize=t.flakeSize||10,this.fallSpeed=t.fallSpeed||1}function snowCanvas(){var t=document.createElement("canvas");t.id="snowfall",t.width=window.innerWidth,t.height=document.body.scrollHeight,t.setAttribute("style","position:absolute; top: 0; left: 0; z-index: 100; pointer-events: none;"),document.getElementsByTagName("body")[0].appendChild(t),this.canvas=t,this.ctx=t.getContext("2d"),window.onresize=function(){t.width=window.innerWidth}}function flakeMove(t,e,i,a){this.x=Math.floor(Math.random()*t),this.y=Math.floor(Math.random()*e),this.size=Math.random()*i+2,this.maxSize=i,this.speed=+Math.random()+a,this.fallSpeed=a,this.velY=this.speed,this.velX=0,this.stepSize=Math.random()/30,this.step=0}function createFlakes(){for(var t=this.maxFlake,e=this.flakes=[],i=this.canvas,a=0;a<t;a++)e.push(new flakeMove(i.width,i.height,this.flakeSize,this.fallSpeed))}function drawSnow(){var t=this.maxFlake,e=this.flakes;ctx=this.ctx,canvas=this.canvas,that=this,ctx.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<t;i++)e[i].update(),e[i].render(ctx);this.loop=requestAnimationFrame(function(){drawSnow.apply(that)})}requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame,snowFall.prototype.start=function(){snowCanvas.apply(this),createFlakes.apply(this),drawSnow.apply(this)},flakeMove.prototype.update=function(){this.x,this.y;this.velX*=.98,this.velY<=this.speed&&(this.velY=this.speed),this.velX+=Math.cos(this.step+=.05)*this.stepSize,this.y+=this.velY,this.x+=this.velX,(this.x>=canvas.width||this.x<=0||this.y>=canvas.height||this.y<=0)&&this.reset(canvas.width,canvas.height)},flakeMove.prototype.reset=function(t,e){this.x=Math.floor(Math.random()*t),this.y=0,this.size=Math.random()*this.maxSize+2,this.speed=+Math.random()+this.fallSpeed,this.velY=this.speed,this.velX=0},flakeMove.prototype.render=function(t){var e=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size);e.addColorStop(0,"rgba(238, 216, 174, 0.9)"),e.addColorStop(.5,"rgba(238, 216, 174, 0.5)"),e.addColorStop(1,"rgba(238, 216, 174, 0)"),t.save(),t.fillStyle=e,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill(),t.restore()};var snow=new snowFall({maxFlake:100});snow.start();