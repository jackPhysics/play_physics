
    // --------- helpers ----------
    const rnd = (a, b) => a + Math.random() * (b - a);
    const rndi = (a, b) => Math.floor(rnd(a, b + 1));
    const pick = (arr) => arr[rndi(0, arr.length - 1)];
    const chance = (p) => Math.random() < p;
    var fillMouthFlag = true;

    function setInk(ctx, w=3) {
      ctx.lineWidth = w;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#000";
      ctx.fillStyle = "#000";
    }

    function clear(ctx, W, H) {
      ctx.save();
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle = "#ff69b4"; //"#fff";
      ctx.fillRect(0,0,W,H);
      ctx.restore();
    }

    function strokePath(ctx, fn) {
      ctx.beginPath();
      fn();
      ctx.stroke();
    }

    // --------- PATH BUILDERS (so we can fill white then stroke black) ----------
    function pathCircle(ctx, cx, cy, r) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
    }

    function pathOval(ctx, cx, cy, rx, ry) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    }

    function pathRect(ctx, cx, cy, w, h, rounded=false) {
      const x = cx - w/2, y = cy - h/2;
      if (!rounded) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        return;
      }
      const r = Math.min(24, w*0.15, h*0.15);
      ctx.beginPath();
      ctx.moveTo(x+r, y);
      ctx.lineTo(x+w-r, y);
      ctx.quadraticCurveTo(x+w, y, x+w, y+r);
      ctx.lineTo(x+w, y+h-r);
      ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
      ctx.lineTo(x+r, y+h);
      ctx.quadraticCurveTo(x, y+h, x, y+h-r);
      ctx.lineTo(x, y+r);
      ctx.quadraticCurveTo(x, y, x+r, y);
      ctx.closePath();
    }

    function pathPolygon(ctx, cx, cy, r, sides, rotation=0) {
      const step = (Math.PI * 2) / sides;
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const a = rotation + i * step;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    }

    function pathDiamond(ctx, cx, cy, w, h) {
      ctx.beginPath();
      ctx.moveTo(cx, cy - h/2);
      ctx.lineTo(cx + w/2, cy);
      ctx.lineTo(cx, cy + h/2);
      ctx.lineTo(cx - w/2, cy);
      ctx.closePath();
    }

    function pathKite(ctx, cx, cy, w, h) {
      const top = h * rnd(0.25, 0.45);
      const bot = h - top;
      ctx.beginPath();
      ctx.moveTo(cx, cy - top);
      ctx.lineTo(cx + w/2, cy);
      ctx.lineTo(cx, cy + bot);
      ctx.lineTo(cx - w*0.35, cy);
      ctx.closePath();
    }

    function buildHeadPath(ctx, type, cx, cy, w, h) {
      // chooses path only (no stroke/fill here)
      if (type === "circle") {
        pathCircle(ctx, cx, cy, Math.min(w, h) * 0.5);
      } else if (type === "oval") {
        pathOval(ctx, cx, cy, w * 0.5, h * 0.5);
      } else if (type === "square") {
        const s = Math.min(w, h);
        pathRect(ctx, cx, cy, s, s, chance(0.5));
      } else if (type === "rectangle") {
        pathRect(ctx, cx, cy, w, h, chance(0.35));
      } else if (type === "triangle") {
        pathPolygon(ctx, cx, cy + h*0.05, h*0.62, 3, -Math.PI/2);
      } else if (type === "pentagon") {
        pathPolygon(ctx, cx, cy, h*0.62, 5, -Math.PI/2);
      } else if (type === "hexagon") {
        pathPolygon(ctx, cx, cy, h*0.62, 6, -Math.PI/2);
      } else if (type === "diamond") {
        pathDiamond(ctx, cx, cy, w*0.95, h*0.95);
      } else if (type === "kite") {
        pathKite(ctx, cx, cy, w*0.95, h*0.95);
      }
    }

    // --------- feature drawing ----------
    function drawEye(ctx, x, y, size) {
      const style = pick(["line", "circle", "dot", "semi", "triangle", "squiggle", "zigzag"]);
      const fillIt = chance(0.35);

      if (style === "line") {
        strokePath(ctx, () => { ctx.moveTo(x - size, y); ctx.lineTo(x + size, y); });
      } else if (style === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, size * rnd(0.55, 0.9), 0, Math.PI * 2);
        fillIt ? ctx.fill() : ctx.stroke();
      } else if (style === "dot") {
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (style === "semi") {
        ctx.beginPath();
        ctx.arc(x, y, size * 0.9, Math.PI, 0);
        fillIt ? ctx.fill() : ctx.stroke();
      } else if (style === "triangle") {
        const h = size * rnd(1.0, 1.4);
        ctx.beginPath();
        ctx.moveTo(x, y - h/2);
        ctx.lineTo(x + size, y + h/2);
        ctx.lineTo(x - size, y + h/2);
        ctx.closePath();
        fillIt ? ctx.fill() : ctx.stroke();
      } else if (style === "squiggle") {
        strokePath(ctx, () => {
          const w = size * 2.2;
          const a = size * 0.6;
          ctx.moveTo(x - w/2, y);
          ctx.bezierCurveTo(x - w/4, y - a, x, y + a, x + w/4, y - a);
          ctx.bezierCurveTo(x + w/2, y + a, x + w/2, y, x + w/2, y);
        });
      } else if (style === "zigzag") {
        strokePath(ctx, () => {
          const w = size * 2.4;
          const z = size * 0.7;
          ctx.moveTo(x - w/2, y);
          ctx.lineTo(x - w/4, y - z);
          ctx.lineTo(x, y);
          ctx.lineTo(x + w/4, y - z);
          ctx.lineTo(x + w/2, y);
        });
      }
    }

    function drawMouth(ctx, cx, cy, w) {
      const style = pick(["line", "smile", "frown", "zigzag", "squiggle", "circle", "semi", "triangle"]);
      const fillIt = chance(0.25);

      if(Math.random()<0.1){
      ctx.strokeStyle = "#0000ff";}

      if(Math.random()<0.2){
      ctx.strokeStyle = "#ff0000";}

      if (style === "line") {
        fillMouthFlag = false;
        strokePath(ctx, () => { ctx.moveTo(cx - w/2, cy); ctx.lineTo(cx + w/2, cy); });
      } else if (style === "smile") {
        fillMouthFlag = true;
        strokePath(ctx, () => {
          ctx.moveTo(cx - w/2, cy);
          ctx.quadraticCurveTo(cx, cy + w*0.25, cx + w/2, cy);
        });
      } else if (style === "frown") {
        fillMouthFlag = true;
        strokePath(ctx, () => {
          ctx.moveTo(cx - w/2, cy);
          ctx.quadraticCurveTo(cx, cy - w*0.25, cx + w/2, cy);
        });
      } else if (style === "zigzag") {
          fillMouthFlag = false;
        strokePath(ctx, () => {
          const steps = 5;
          const dx = w / steps;
          const amp = w * 0.08;
          ctx.moveTo(cx - w/2, cy);
          for (let i = 1; i <= steps; i++) {
            const x = cx - w/2 + dx * i;
            const y = cy + (i % 2 === 0 ? -amp : amp);
            ctx.lineTo(x, y);
          }
        });
      } else if (style === "squiggle") {
          fillMouthFlag = false;
        strokePath(ctx, () => {
          const a = w * 0.12;
          ctx.moveTo(cx - w/2, cy);
          ctx.bezierCurveTo(cx - w/4, cy - a, cx, cy + a, cx + w/4, cy - a);
          ctx.bezierCurveTo(cx + w/2, cy + a, cx + w/2, cy, cx + w/2, cy);
        });
      } else if (style === "circle") {
        fillMouthFlag = true;
        ctx.beginPath();
        ctx.arc(cx, cy, w * 0.18, 0, Math.PI * 2);
        fillIt ? ctx.fill() : ctx.stroke();
      } else if (style === "semi") {
        ctx.beginPath();
        ctx.arc(cx, cy, w * 0.28, 0, Math.PI);
        fillIt ? ctx.fill() : ctx.stroke();
      } else if (style === "triangle") {
        fillMouthFlag = true;
        ctx.beginPath();
        ctx.moveTo(cx, cy + w*0.18);
        ctx.lineTo(cx + w*0.25, cy - w*0.12);
        ctx.lineTo(cx - w*0.25, cy - w*0.12);
        ctx.closePath();
        fillIt ? ctx.fill() : ctx.stroke();
      }
      ctx.strokeStyle = "#000";
    }

    function drawNose(ctx, cx, cy, size) {
      const style = pick(["vertical", "L", "revL", "J", "revJ", "circle", "doubleDots", "shortHoriz", "blank"]);
      if (style === "blank") return;

      if (style === "vertical") {
        strokePath(ctx, () => { ctx.moveTo(cx, cy - size); ctx.lineTo(cx, cy + size); });
      } else if (style === "L") {
        strokePath(ctx, () => {
          ctx.moveTo(cx, cy - size);
          ctx.lineTo(cx, cy + size*0.7);
          ctx.lineTo(cx + size*0.7, cy + size*0.7);
        });
      } else if (style === "revL") {
        strokePath(ctx, () => {
          ctx.moveTo(cx, cy - size);
          ctx.lineTo(cx, cy + size*0.7);
          ctx.lineTo(cx - size*0.7, cy + size*0.7);
        });
      } else if (style === "J") {
        strokePath(ctx, () => {
          ctx.moveTo(cx, cy - size);
          ctx.lineTo(cx, cy + size*0.2);
          ctx.quadraticCurveTo(cx, cy + size, cx + size*0.6, cy + size*0.85);
        });
      } else if (style === "revJ") {
        strokePath(ctx, () => {
          ctx.moveTo(cx, cy - size);
          ctx.lineTo(cx, cy + size*0.2);
          ctx.quadraticCurveTo(cx, cy + size, cx - size*0.6, cy + size*0.85);
        });
      } else if (style === "circle") {
        ctx.beginPath();
        ctx.arc(cx, cy + size*0.2, size*0.45, 0, Math.PI * 2);
        (chance(0.35) ? ctx.fill() : ctx.stroke());
      } else if (style === "doubleDots") {
        ctx.beginPath();
        ctx.arc(cx - size*0.35, cy + size*0.25, size*0.18, 0, Math.PI*2);
        ctx.arc(cx + size*0.35, cy + size*0.25, size*0.18, 0, Math.PI*2);
        ctx.fill();
      } else if (style === "shortHoriz") {
        strokePath(ctx, () => {
          ctx.moveTo(cx - size*0.6, cy + size*0.25);
          ctx.lineTo(cx + size*0.6, cy + size*0.25);
        });
      }
    }

    function drawEyebrows(ctx, leftEyeX, rightEyeX, eyeY, eyeSize) {
      if (!chance(0.55)) return;
      ctx.lineWidth = rnd(2, 4);
      const browY = eyeY - eyeSize * rnd(1.1, 1.7);
      const browW = eyeSize * rnd(1.6, 2.6);
      const slant = rnd(-0.25, 0.25);
      strokePath(ctx, () => {
        ctx.moveTo(leftEyeX - browW, browY - slant*8);
        ctx.lineTo(leftEyeX + browW, browY + slant*8);
      });
      strokePath(ctx, () => {
        ctx.moveTo(rightEyeX - browW, browY + slant*8);
        ctx.lineTo(rightEyeX + browW, browY - slant*8);
      });
    }

    // --------- NEW: hair as a separate face-like shape ----------
    function drawHairShape(ctx, cx, cy, w, h) {
      // 70% of the time only
      if (!chance(1)) return;

      const hairType = pick([
        "circle", "oval",
        "square", "rectangle",
        "triangle", "pentagon", "hexagon",
        "diamond", "kite"
      ]);

      // position hair first: 5..50px higher than face
      const lift = rndi(5, 50);
      const hy = cy - lift;

      // give hair a slightly different scale so it reads as "hair"
      const hw = w * rnd(0.85, 1.10);
      const hh = h * rnd(0.55, 0.85);

      ctx.save();
      ctx.lineWidth = rnd(2.5, 4.8);
      buildHeadPath(ctx, hairType, cx, hy, hw, hh);
      ctx.stroke();
      ctx.restore();
    }

    // --------- main face generator ----------
    function drawFace(ctx, W, H) {
      clear(ctx, W, H);
      setInk(ctx, 3);

      // head size: height about 200px, width 100..300
      const headH = rnd(180, 230);
      const headW = rnd(100, 300);
      const cx = W / 2;
      const cy = H / 2 + rnd(-10, 15);

      // Slight random tilt
      ctx.save();
      const tilt = rnd(-0.12, 0.12);
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      ctx.translate(-cx, -cy);

      const headType = pick([
        "circle", "oval",
        "square", "rectangle",
        "triangle", "pentagon", "hexagon",
        "diamond", "kite"
      ]);

      // 1) draw hair SHAPE first
      var hairShift = Math.round(Math.random()*80)+20;
      var hairSize = Math.random()*1+1;
      var hairSizeW = Math.random()*3+1;
      drawHairShape(ctx, cx, cy-hairShift, headW*hairSizeW, headH*hairSize);

                  // fill hair mask
                  var hairCol1 = Math.floor(Math.random()*colorHairLen);
                  ctx.save();
                  ctx.fillStyle = colorHair[hairCol1];//"#800000";
                  ctx.fill();
                  ctx.restore();

      // 2) draw head next: FILL WHITE to hide hair it covers, then stroke outline
      ctx.save();
      ctx.lineWidth = rnd(2.8, 4.8);

      buildHeadPath(ctx, headType, cx, cy, headW, headH);

            // fill face colour
            var faceCol1 = Math.floor(Math.random()*colorFaceLen);
            ctx.save();
            ctx.fillStyle = colorFace[faceCol1];//"#deb887";
            ctx.fill();
            ctx.restore();

      // outline
      ctx.stroke();
      ctx.restore();

      // feature positions
      const eyeY = cy - headH * rnd(0.12, 0.18);
      const eyeSep = headW * rnd(0.20, 0.30);
      const eyeSize = Math.max(4, headW * rnd(0.035, 0.06));

      const leftEyeX = cx - eyeSep;
      const rightEyeX = cx + eyeSep;

      // eyes
      ctx.lineWidth = rnd(2.5, 4.5);
      drawEye(ctx, leftEyeX, eyeY, eyeSize);
      drawEye(ctx, rightEyeX, eyeY, eyeSize);

      // eyebrows (kept!)
      drawEyebrows(ctx, leftEyeX, rightEyeX, eyeY, eyeSize);

      // nose
      const noseY = cy - headH * rnd(0.01, 0.02);
      const noseSize = Math.max(6, headH * rnd(0.06, 0.10));
      ctx.lineWidth = rnd(2.5, 4.5);
      drawNose(ctx, cx + rnd(-6, 6), noseY, noseSize);

      // mouth
      const mouthY = cy + headH * rnd(0.18, 0.26);
      const mouthW = headW * rnd(0.30, 0.55);
      ctx.lineWidth = rnd(2.8, 5.2);
      drawMouth(ctx, cx + rnd(-8, 8), mouthY, mouthW);

        if(fillMouthFlag){
                        // fill white mouth - not for zigzag, line
                        ctx.save();
                        ctx.fillStyle = "#fff";
                        if(Math.random()<0.1){
                        ctx.fillStyle = "#ff0000";
                          if(Math.random()<0.3){
                            ctx.fillStyle = "#ffff00";
                            if(Math.random()<0.2){
                              ctx.fillStyle = "#0000ff";
                            }
                          }
                        }
                        ctx.fill();
                        ctx.restore();}

      ctx.restore(); // end tilt
    }

    // --------- boot ----------
    var canvas = document.getElementById("a");
    var ctx = canvas.getContext("2d");
    var choose3chars0 = choose3chars();
    init();

function init(){
    canvas = document.getElementById("a");
    ctx = canvas.getContext("2d");
    choose3chars0 = choose3chars();
    regen(0);
    canvas = document.getElementById("b");
    ctx = canvas.getContext("2d");
    regen(1);
    canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");
    regen(2);}


function regen(n) {
      var numberOfFace = n;
      var name0 = findBName();
      var introText = ""+(1*turnsDone+1)+": Help "+name0+" choose the best life-mate out of these 3 possible matches"+
      "\n(ignore the faces or names, choose according to the characteristic):"
     document.getElementById('instructions').innerText=""+introText;
      drawFace(ctx, canvas.width, canvas.height);



    //choose namea
    var name1 = findGName();
    let dumFont=36;
    ctx.font = "bold "+dumFont+"px Arial";
    //ctx.font = ""+dumFont+"px Arial";
    //ctx.font = "italic "+dumFont+"px Arial";
	  //ctx.font = "30px Arial";
	  ctx.fillStyle = "Blue";
	  ctx.textAlign = "center";
	  ctx.textBaseline = "top";
	  ctx.fillText(""+name1, 200,20);


  chr0 = choose3chars0[numberOfFace];
  dumFont=36;
  ctx.font = "bold "+dumFont+"px Arial";
  //ctx.font = ""+dumFont+"px Arial";
  //ctx.font = "italic "+dumFont+"px Arial";
  //ctx.font = "30px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(""+chr0, 200,440, 400);

    }

function tallyResult(m){
  var yesDate = m;
  var yesDate2 = returnAr[yesDate];
    if(yesDate2=="H"){
        countResults[0]++;
    }
    else if(yesDate2=="F"){
        countResults[1]++;
    }
    else if(yesDate2=="B"){
        countResults[2]++;
    }
    else if(yesDate2=="N"){
        countResults[3]++;
    }
    else{}
  console.log(countResults);
  turnsDone++;
  scoreHealth = Math.round((countResults[0]+countResults[2])/turnsDone*100);
  scoreFinance = Math.round((countResults[1]+countResults[2])/turnsDone*100);
  scoreHealth = Math.round((countResults[0]+countResults[2])/(turnsDone+countResults[2])*100);
  scoreFinance = Math.round((countResults[1]+countResults[2])/(turnsDone+countResults[2])*100);
  console.log("H="+scoreHealth+"%"+" F="+scoreFinance+"%")
 //document.getElementById('answer').innerText=""+yesDate2;
 if(turnsDone<10){
   init();}
 else{
   document.getElementById('answer').innerText="offers attractiveness="+scoreHealth+"%"+"\noffers resources="+scoreFinance+"%";
 }
}

      //document.getElementById("chooseA").addEventListener("click", tallyResult(0));
      //document.getElementById("chooseB").addEventListener("click", tallyResult(1));
      //document.getElementById("chooseC").addEventListener("click", tallyResult(2));
