const $=id=>document.getElementById(id),rnd=(a,b)=>a+Math.random()*(b-a);
const R=new THREE.WebGLRenderer({antialias:true});R.setSize(innerWidth,innerHeight);R.setPixelRatio(Math.min(devicePixelRatio,2));document.body.prepend(R.domElement);
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,120);
sc.background=new THREE.Color(0x7a3a16);sc.fog=new THREE.Fog(0x7a3a16,28,60);
sc.add(new THREE.HemisphereLight(0xffe3b0,0x5a2a10,.95));const dl=new THREE.DirectionalLight(0xfff0d0,.8);dl.position.set(6,14,8);sc.add(dl);
addEventListener('resize',()=>{R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()});
const S_=new THREE.SphereGeometry(1,20,14),B_=new THREE.BoxGeometry(1,1,1),C_=new THREE.CylinderGeometry(1,1,1,18),K_=new THREE.ConeGeometry(1,1,18);
const OB=new THREE.MeshBasicMaterial({color:0,side:THREE.BackSide});
function mk(ge,c,par,p,s){const m=new THREE.Mesh(ge,new THREE.MeshToonMaterial({color:c}));m.position.set(...p);m.scale.set(...s);const o=new THREE.Mesh(ge,OB);o.scale.setScalar(1.07);m.add(o);par.add(m);return m}
function ctex(w,h,fn,rep){const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);const x=new THREE.CanvasTexture(c);if(rep){x.wrapS=x.wrapT=THREE.RepeatWrapping;x.repeat.set(rep,rep)}return x}
// environment
const fl=new THREE.Mesh(new THREE.CircleGeometry(17,48),new THREE.MeshToonMaterial({map:ctex(128,128,(x,w,h)=>{x.fillStyle='#d9b27a';x.fillRect(0,0,w,h);x.fillStyle='#7a3d1a';x.fillRect(0,0,64,64);x.fillRect(64,64,64,64)},8)}));fl.rotation.x=-Math.PI/2;sc.add(fl);
const gr=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshBasicMaterial({color:0x2a1408}));gr.rotation.x=-Math.PI/2;gr.position.y=-.05;sc.add(gr);
const wall=new THREE.Mesh(new THREE.PlaneGeometry(80,36),new THREE.MeshToonMaterial({map:ctex(256,256,(x,w,h)=>{x.fillStyle='#b4602a';x.fillRect(0,0,w,h);x.strokeStyle='#5a2a10';x.lineWidth=4;for(let y=0;y<h;y+=32){x.strokeRect(0,y,w,32);for(let i=(y/32%2)*32;i<w;i+=64){x.beginPath();x.moveTo(i,y);x.lineTo(i,y+32);x.stroke()}}},5)}));wall.position.set(0,14,-22);sc.add(wall);
const sign=new THREE.Mesh(new THREE.PlaneGeometry(15,3.6),new THREE.MeshBasicMaterial({map:ctex(512,128,(x,w,h)=>{x.fillStyle='#c9382a';x.fillRect(0,0,w,h);x.strokeStyle='#111';x.lineWidth=10;x.strokeRect(0,0,w,h);x.fillStyle='#ffd9a0';x.font='64px Bangers,Impact';x.textAlign='center';x.fillText('PIZZARIA DO SIDNEI',w/2,82)})}));sign.position.set(0,9,-21.8);sc.add(sign);
const slices=[];for(let i=0;i<5;i++){const s=new THREE.Group();mk(K_,0xf2b84b,s,[0,0,0],[1.2,2.4,.3]).rotation.x=Math.PI;mk(S_,0xc9302a,s,[0,.4,.3],[.3,.3,.1]);s.position.set(-16+i*8,5+i%2*2,-14+i%3*2);sc.add(s);slices.push(s)}
// characters
function gar(){const g=new THREE.Group();mk(S_,0x1c1c1c,g,[0,1.3,0],[.95,1,.85]);mk(S_,0xf0bd8a,g,[0,.95,.55],[.5,.22,.3]);
[-1,1].forEach(s=>{mk(S_,0xf6f0e0,g,[s*1,1.45,0],[.3,.65,.4]);mk(S_,0xfff3df,g,[s*1.1,.8,.25],[.3,.3,.3]);mk(C_,0x1c1c1c,g,[s*.4,.5,0],[.28,.5,.28]);mk(S_,0xf4f1e8,g,[s*.4,.15,.2],[.38,.2,.58]);mk(S_,0xffffff,g,[s*.3,2.7,.58],[.22,.26,.15]);mk(S_,0x111111,g,[s*.3,2.68,.7],[.1,.12,.08]);mk(B_,0x111111,g,[s*.32,3.0,.62],[.5,.1,.1]).rotation.z=s*.4});
mk(S_,0xf0bd8a,g,[0,2.55,0],[.85,.8,.8]);for(let i=0;i<9;i++){const a=i/8*Math.PI;mk(S_,i%3==1?0x8a5a2b:0x2a1a10,g,[Math.cos(a)*.75,3.05+Math.sin(a)*.3,Math.sin(a)*.2-.15],[.32,.3,.32])}
mk(S_,0x7a1010,g,[0,2.2,.7],[.32,.2,.15]);mk(B_,0x8fd3ff,g,[.1,1.9,.78],[.07,.35,.05]);return g}
function cox(crown){const g=new THREE.Group();mk(S_,0xe59a2e,g,[0,2,0],[1.5,1.7,1.3]);mk(K_,0xe59a2e,g,[0,3.9,0],[1.1,1.4,1]);
[-1,1].forEach(s=>{mk(S_,0xffffff,g,[s*.5,2.5,1.15],[.38,.42,.2]);mk(S_,0x111111,g,[s*.5,2.45,1.3],[.15,.2,.1]);mk(B_,0x111111,g,[s*.55,2.95,1.2],[.6,.12,.1]).rotation.z=-s*.4;mk(S_,0xffffff,g,[s*1.9,2.2,.5],[.4,.4,.4]);mk(C_,0x111111,g,[s*.5,.45,0],[.17,.5,.17]);mk(S_,0xffffff,g,[s*.5,.12,.3],[.42,.2,.6])});
mk(B_,0x111111,g,[0,1.9,1.25],[1.1,.2,.2]);mk(S_,0x6b0f0f,g,[0,1.45,1.15],[.45,.25,.2]);mk(C_,0x222222,g,[0,4.35,0],[1.1,.08,1.1]);mk(C_,0x222222,g,[0,4.65,0],[.6,.3,.6]);
const cr=mk(K_,0xffd23a,g,[0,5.4,0],[.7,.7,.7]);cr.visible=crown;g.userData.cr=cr;return g}
function ren(){const g=new THREE.Group();mk(C_,0x1f1f1f,g,[0,1,0],[.5,.8,.5]);mk(S_,0xf6cfa8,g,[0,2.1,0],[.5,.5,.5]);mk(S_,0xd3281e,g,[0,2.15,-.25],[.62,.7,.45]);mk(S_,0xd3281e,g,[0,2.5,.1],[.5,.2,.4]);[-1,1].forEach(s=>mk(S_,0x111111,g,[s*.2,2.15,.45],[.07,.1,.05]));mk(C_,0x333333,g,[.8,1.2,.5],[.5,.06,.5]).rotation.x=1.2;return g}
function sid(){const g=new THREE.Group();mk(S_,0xf6f0e0,g,[0,-2.6,0],[3,2.8,1.6]);mk(S_,0x8a1f1f,g,[0,-3,.9],[2,2.2,.9]);mk(S_,0xf0bd8a,g,[0,0,0],[2.2,2,1.9]);mk(S_,0x2a1a10,g,[0,2,0],[.9,.2,.7]);
[-1,1].forEach(s=>{mk(S_,0xffffff,g,[s*.8,.3,1.6],[.5,.5,.3]);mk(S_,0x111111,g,[s*.8,.3,1.85],[.2,.25,.1]);mk(B_,0x111111,g,[s*.9,1,1.8],[1.1,.2,.2]).rotation.z=s*.4});mk(S_,0xffffff,g,[0,-.9,1.7],[.9,.4,.3]);mk(S_,0xf0bd8a,g,[-3.8,-1,2.8],[.9,.8,.9]);g.position.set(11,6.5,-17);g.rotation.y=-.45;return g}
function caio(){const g=new THREE.Group();[-1,1].forEach(s=>{mk(C_,0x3a4a8a,g,[s*.45,.6,0],[.4,.6,.4]);mk(S_,0xf4f1e8,g,[s*.45,.15,.25],[.45,.2,.62]);mk(S_,0xc9302a,g,[s*1.25,2.3,0],[.55,.55,.55]);mk(S_,0xd9a070,g,[s*1.55,1.9,.1],[.5,.75,.5]);mk(S_,0xd9a070,g,[s*1.65,1.15,.35],[.45,.45,.45]);mk(S_,0xffffff,g,[s*.3,3.1,.62],[.2,.24,.14]);mk(S_,0x111111,g,[s*.3,3.08,.74],[.09,.12,.07]);mk(B_,0x111111,g,[s*.3,3.4,.66],[.5,.1,.1]).rotation.z=s*.45;mk(S_,0xd9a070,g,[s*.45,2.3,.65],[.5,.38,.2])});
mk(S_,0xd9a070,g,[0,1.9,0],[1.15,1.05,.8]);mk(S_,0xc9302a,g,[0,1.7,.05],[1.12,.85,.82]);mk(S_,0xd9a070,g,[0,3.05,0],[.8,.75,.75]);
for(let i=0;i<14;i++){const a=i/14*6.283;mk(S_,0x2a1a10,g,[Math.cos(a)*.72,3.55+(i%3)*.06,Math.sin(a)*.62],[.33,.33,.33])}[[0,3.9,0],[.35,3.85,.2],[-.35,3.85,.2],[0,3.8,-.4]].forEach(p=>mk(S_,0x3a2314,g,p,[.36,.36,.36]));
mk(S_,0x7a1010,g,[0,2.75,.66],[.3,.18,.12]);mk(B_,0xffffff,g,[0,2.83,.76],[.35,.06,.05]);g.userData.cr={visible:true};return g}
const TN=document.createElement('div');TN.style.cssText='position:fixed;left:50%;top:34%;transform:translateX(-50%);font-family:Bangers,Impact;font-size:min(7vw,36px);color:#ff4a2a;text-shadow:-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000;pointer-events:none;opacity:0;transition:opacity .2s;text-align:center;white-space:nowrap';document.body.appendChild(TN);
function taunt(){const L=['EU ODEIO O EMANUEL!','ODEIO O EMANUEL, ODEIO!','O EMANUEL NÃO PRESTA!','SÓ DE PENSAR NO EMANUEL JÁ FICO BRAVO!','EMANUEL? TÔ ODIANDO!','CADÊ O EMANUEL? EU ODEIO ELE!'];TN.textContent='CAIO: "'+L[Math.floor(Math.random()*L.length)]+'"';TN.style.opacity=1;clearTimeout(TN.h);TN.h=setTimeout(()=>TN.style.opacity=0,2400)}
const G=gar2(),CL=cox(false),RN=ren(),BOSSES=[cox(true),pizza(),burger(),coke(),caio()];let BG=BOSSES[0];sc.add(G,CL,RN,sid(),...BOSSES);RN.position.set(-10,0,4);
const keys={};let mouse=0,S='title',t=0,P,B,bl=[],ep=[],rp=[],meter,hits,shake,fla,msgT,real,lastPh;
function clear(a){a.forEach(o=>sc.remove(o.m));a.length=0}
function reset(){clear(bl);clear(ep);clear(rp);P={x:0,z:6,y:0,vy:0,hp:3,inv:0,dash:0,dx:0,dz:0,dcd:0,fire:0,lvl:0,buff:0,boost:0,fx:0,fz:-1};B={hp:150,max:150,ph:1,t:0,s:0,fl:0,x:0,z:-9,cx:0,cz:0,tx:0,tz:0};meter=0;hits=0;shake=0;fla=0;msgT=0;real=0;lastPh=1;t=0;say('PREPARE-SE!',100)}
function say(m,n){$('msg').textContent=m;msgT=n||120}
function hurt(){if(P.inv>0)return;P.hp--;P.inv=90;shake=.5;fla=.5;if(P.hp<=0)end('lose')}
function end(s){S=s;$('ov').style.display='flex';$('h1').textContent=s==='win'?'NOCAUTE!':'FIM DE JOGO';$('h2').textContent=s==='win'?'Garcia derrotou a Coxinha!':'A alma continua na caixa de pizza…';$('pp').textContent='';$('go').textContent='CLIQUE ou ENTER para jogar de novo'}
function start(){reset();S='play';$('ov').style.display='none'}
function fv(){let dx=B.x-P.x,dz=B.z-P.z;const l=Math.hypot(dx,dz)||1;return[dx/l,dz/l]}
function proj(x,y,z,tx,ty,tz,pink,rain){const m=new THREE.Mesh(S_,new THREE.MeshToonMaterial({color:pink?0xff7ab8:0xe8c27a}));m.scale.setScalar(.55);const o=new THREE.Mesh(S_,OB);o.scale.setScalar(1.12);m.add(o);m.position.set(x,y,z);sc.add(m);const T=rain?60:75;ep.push({m,vx:(tx-x)/T,vy:(ty-y)/T,vz:(tz-z)/T,pink,l:T*2,rain})}
function targets(){return B.ph===2?[{o:BG,i:0},{o:CL,i:1}]:[{o:BG}]}
addEventListener('keydown',e=>{const k=e.key.length>1?e.key:e.key.toLowerCase();if(k===' '||k.startsWith('Arrow'))e.preventDefault();if(keys[k])return;keys[k]=1;
if(S!=='play'){if(k==='Enter')start();return}
if(k===' '){if(P.y<=0){P.vy=.4}else{const q=ep.find(q=>q.pink&&q.m.position.distanceTo(new THREE.Vector3(P.x,P.y+1.3,P.z))<3);if(q){sc.remove(q.m);ep.splice(ep.indexOf(q),1);meter=Math.min(5,meter+1);say('PARRY! +1 AMIGO',50)}}}
if(k==='Shift'&&P.dcd<=0){P.dash=10;P.inv=Math.max(P.inv,14);P.dcd=50}
if(k==='r'&&meter>0){let n=meter,a=n>=5?5:0;if(n<5)for(let i=0;i<n;i++)if(Math.random()<.75)a++;meter=0;if(!a)say('"TÔ OCUPADO..." Ninguém aceitou!',150);else{P.lvl=a>=5?3:a>=3?2:1;P.buff=P.lvl===3?300:600;if(P.lvl===3){P.inv=300;say('GARCIA RADIANTE!!!',150)}else say(a+' AMIGO(S)! BUFADO LV.'+P.lvl,150)}}});
addEventListener('keyup',e=>{keys[e.key.length>1?e.key:e.key.toLowerCase()]=0});
R.domElement.addEventListener('mousedown',e=>{if(e.button===0)mouse=1;else if(e.button===2&&S==='play')dispatchEvent(new KeyboardEvent('keydown',{key:'r'}))});
$('ov').addEventListener('mousedown',()=>{if(S!=='play')start()});addEventListener('mouseup',()=>{mouse=0;keys.r=0});addEventListener('contextmenu',e=>e.preventDefault());
function update(){t++;const[fx,fz]=fv(),rx=-fz,rz=fx;P.fx=fx;P.fz=fz;
const ax=((keys.d||keys.ArrowRight)?1:0)-((keys.a||keys.ArrowLeft)?1:0),az=((keys.w||keys.ArrowUp)?1:0)-((keys.s||keys.ArrowDown)?1:0);
let mx=fx*az+rx*ax,mz=fz*az+rz*ax;const ml=Math.hypot(mx,mz);if(ml>0){mx/=ml;mz/=ml;P.dx=mx;P.dz=mz}
const sp=P.dash>0?.6:.17;if(P.dash>0){P.dash--;mx=P.dx||fx;mz=P.dz||fz}
P.x+=mx*sp*(ml>0||P.dash>0?1:0);P.z+=mz*sp*(ml>0||P.dash>0?1:0);const r=Math.hypot(P.x,P.z);if(r>14.5){P.x*=14.5/r;P.z*=14.5/r}
if(!(keys[' '])&&P.vy>.15)P.vy=.15;P.vy-=.022;P.y+=P.vy;if(P.y<0){P.y=0;P.vy=0}
P.dcd--;P.inv--;P.fire--;if(P.buff>0&&--P.buff===0)P.lvl=0;if(P.boost>0)P.boost--;
if(t%900===0){P.boost=300;say('RENATA: "VAI, GARCIA!"',100)}
if((keys.z||keys.j||mouse)&&P.fire<=0){const L=P.lvl,m=new THREE.Mesh(S_,new THREE.MeshToonMaterial({color:L===3?0xfff59a:0x9be26a}));m.scale.setScalar(L===3?1.1:L===2?.5:.35);sc.add(m);m.position.set(P.x+fx*1.3,P.y+1.4,P.z+fz*1.3);bl.push({m,vx:fx*.7,vz:fz*.7,d:L===3?4:L===2?1.6:L===1?1.2:1,r:L===3?1.4:.5,l:90});P.fire=P.boost?3:L===3?10:6}
// boss
B.t++;const tg=targets();
if(B.ph===1){B.x=Math.sin(t*.02)*6;B.z=-9;if(B.t%70===0){const pk=(B.t/70)%3===0;proj(B.x,3,B.z,P.x,P.y+1.4,P.z,pk)}if(B.t%200===100)[-5,5].forEach(o=>proj(B.x,3,B.z,P.x+o,1.4,P.z,false))}
else if(B.ph===2){if(B.t%260===1){real=1-real;BG.userData.px=rnd(-8,-3);CL.userData.px=rnd(3,8)}B.x=BG.userData.px||-5;
if(B.t%70===0){const o=Math.random()<.5?BG:CL;proj(o.position.x,3,o.position.z,P.x,P.y+1.4,P.z,Math.random()<.3)}}
else{if(B.s===0){B.x+=(P.x-B.x)*.02;B.z=-9;if(B.t>110){B.s=1;B.t=0;let dx=P.x-B.x,dz=P.z-B.z,l=Math.hypot(dx,dz);B.cx=dx/l;B.cz=dz/l}}
else if(B.s===1){if(B.t>60){B.s=2;B.t=0}}
else if(B.s===2){B.x+=B.cx*.55;B.z+=B.cz*.55;if(Math.hypot(B.x,B.z)>20){B.s=3;B.t=0}if(Math.hypot(B.x-P.x,B.z-P.z)<3.2&&P.y<1.8)hurt()}
else{B.x+=(0-B.x)*.05;B.z+=(-9-B.z)*.05;if(B.t>70){B.s=0;B.t=0}}
if(B.t%90===0&&B.s===0)proj(B.x,6,B.z,P.x+rnd(-2,2),.6,P.z+rnd(-2,2),false,true)}
// bullets
bl.forEach(b=>{b.m.position.x+=b.vx;b.m.position.z+=b.vz;b.l--;tg.forEach(q=>{if(b.dead)return;const o=q.o,rr=(B.ph===3?3.2:2.2)+b.r;if(Math.hypot(o.position.x-b.m.position.x,o.position.z-b.m.position.z)<rr){if(q.i===undefined||q.i===real){B.hp-=b.d;B.fl=5;hits++;if(hits%15===0&&meter<5){meter++;say('+1 AMIGO NA CALL',50)}}if(b.r<1)b.dead=1}})});
bl=bl.filter(b=>{if(b.dead||b.l<=0){sc.remove(b.m);return false}return true});
// renata pans
if(t%150===0){const m=new THREE.Mesh(C_,new THREE.MeshToonMaterial({color:0x444444}));m.scale.set(.6,.1,.6);m.position.set(-10,1.8,4);sc.add(m);const o=real===1?CL:BG,tx=B.ph===2?o.position.x:B.x,tz=B.ph===2?o.position.z:B.z,dx=tx-m.position.x,dz=tz-m.position.z,l=Math.hypot(dx,dz);rp.push({m,vx:dx/l*.5,vz:dz/l*.5,tx,tz,l:80})}
rp.forEach(q=>{q.m.position.x+=q.vx;q.m.position.z+=q.vz;q.m.rotation.y+=.5;q.l--;if(Math.hypot(q.m.position.x-q.tx,q.m.position.z-q.tz)<2.5){B.hp-=2;B.fl=5;q.l=0}});rp=rp.filter(q=>{if(q.l<=0){sc.remove(q.m);return false}return true});
// enemy projectiles
ep.forEach(q=>{q.m.position.x+=q.vx;q.m.position.y+=q.vy;q.m.position.z+=q.vz;q.l--;q.m.rotation.y+=.1;const d=q.m.position.distanceTo(new THREE.Vector3(P.x,P.y+1.3,P.z));if(!q.pink&&d<1.2)hurt();if(q.m.position.y<.4&&q.rain)q.l=0});
ep=ep.filter(q=>{if(q.l<=0){sc.remove(q.m);return false}return true});
// phases
const ph=B.hp>100?1:B.hp>50?2:3;if(ph!==B.ph){B.ph=ph;B.t=0;B.s=0;clear(ep);say('FASE '+ph+'!',100);shake=.6;if(ph===2){BG.userData.px=-5;CL.userData.px=5}}
if(B.hp<=0&&S==='play')end('win');
if(msgT>0&&--msgT===0)$('msg').textContent='';
if(shake>0)shake-=.03;if(fla>0)fla-=.03;
// visuals
G.position.set(P.x,P.y,P.z);G.rotation.y=Math.atan2(fx,fz);G.visible=!(P.inv>0&&t%6<3);G.rotation.x=(ml>0?.12:0);G.scale.y=1+Math.sin(t*.3)*(ml>0?.04:.015);
G.children.forEach(()=>{});
const bs=B.ph===3?1.6:1,sq=1+Math.sin(t*.1)*.03+(B.fl>0?.1:0);if(B.fl>0)B.fl--;
BG.scale.set(bs*sq,bs*(2-sq),bs*sq);BG.rotation.y=Math.atan2(P.x-BG.position.x,P.z-BG.position.z);if(B.ph===3&&B.s===2)BG.rotation.x-=.25;else BG.rotation.x=0;
BG.position.set(B.x,0,B.z);BG.userData.cr.visible=B.ph!==2||real===0;
CL.visible=B.ph===2;if(B.ph===2){CL.position.set(CL.userData.px||5,0,-9);BG.position.set(BG.userData.px||-5,0,-9);CL.userData.cr.visible=real===1;CL.rotation.y=Math.atan2(P.x-CL.position.x,P.z-CL.position.z);CL.scale.set(sq,2-sq,sq)}
RN.rotation.y=Math.atan2(B.x-RN.position.x,B.z-RN.position.z);RN.position.y=Math.abs(Math.sin(t*.1))*.15;
slices.forEach((s,i)=>{s.position.y=5+i%2*2+Math.sin(t*.03+i);s.rotation.y+=.01});
const dist=9.5-(S==='play'?0:0);cam.position.x+=(P.x-fx*dist-cam.position.x)*.1;cam.position.z+=(P.z-fz*dist-cam.position.z)*.1;cam.position.y+=(5.5+P.y*.4-cam.position.y)*.1;
cam.position.x+=rnd(-1,1)*Math.max(0,shake);cam.lookAt((P.x+B.x)/2,2,(P.z+B.z)/2);
$('hp').textContent='♥'.repeat(Math.max(0,P.hp));$('cards').textContent='●'.repeat(meter)+'○'.repeat(5-meter)+'  CALL (E)';$('bf').style.width=Math.max(0,B.hp/B.max*100)+'%';$('fl').style.opacity=Math.max(0,fla)}
const KIND=[{n:'Coxinha Don Corleone',hp:150},{n:'Dona Calabresa Furiosa',hp:170},{n:'Big Burger Sr. Camadas',hp:190},{n:'Coca-Cola Explosiva Sr. Gás',hp:200},{n:'Caio, o Pequeno Bombado (MAIS DIFÍCIL)',hp:260}];
const DIF=[{n:'Rodízio Fácil',hp:5,bm:.7,T:100,fi:1.5},{n:'Normal',hp:3,bm:1,T:75,fi:1},{n:'À La Carte',hp:2,bm:1.35,T:55,fi:.75}];
let kb=0,df=1,camA=Math.PI,camP=.35,walk=0;
const st=document.createElement('style');st.textContent='.row{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap}button{font-family:Bangers,Impact;font-size:28px;background:#c9382a;color:#f6e3b4;border:4px solid #000;border-radius:10px;padding:6px 18px;cursor:pointer}button.on{background:#ffd84a;color:#111}.card{font-size:32px;min-width:300px}.big{font-size:44px;background:#3fae4a}';document.head.appendChild(st);
function face(g,y,z,w){[-1,1].forEach(s=>{mk(S_,0xffffff,g,[s*w,y,z],[.38,.42,.2]);mk(S_,0x111111,g,[s*w,y-.05,z+.12],[.15,.2,.1]);mk(B_,0x111111,g,[s*w*1.1,y+.5,z],[.6,.12,.1]).rotation.z=-s*.4;mk(S_,0xffffff,g,[s*w*1.5,.15,.3],[.42,.2,.6])});mk(S_,0x6b0f0f,g,[0,y-.7,z],[.5,.25,.2]);g.userData.cr={visible:true};return g}
function pizza(){const g=new THREE.Group();mk(C_,0xc97a2b,g,[0,2.8,-.1],[2.7,.3,2.7]).rotation.x=Math.PI/2;mk(C_,0xf2b84b,g,[0,2.8,0],[2.4,.45,2.4]).rotation.x=Math.PI/2;[[-1,1],[1,.8],[0,-.5],[-1.2,-.9],[1.3,-.7]].forEach(p=>mk(S_,0xc9302a,g,[p[0],2.8+p[1],.3],[.4,.4,.1]));return face(g,3,.35,.6)}
function burger(){const g=new THREE.Group();mk(C_,0xd9902f,g,[0,.8,0],[2,.5,2]);mk(C_,0x5a2e14,g,[0,1.5,0],[2.1,.4,2.1]);mk(B_,0xf6d23a,g,[0,1.95,0],[2.3,.12,2.3]).rotation.y=.8;mk(S_,0x4fae3a,g,[0,2.2,0],[2.3,.25,2.3]);mk(C_,0xd4352a,g,[0,2.6,0],[2,.2,2]);mk(S_,0xe0a040,g,[0,3.2,0],[2.1,1.1,2.1]);return face(g,3.3,1.85,.8)}
function coke(){const g=new THREE.Group();mk(C_,0xc9302a,g,[0,2.2,0],[1.5,3,1.5]);mk(C_,0xbbbbbb,g,[0,3.75,0],[1.5,.15,1.5]);mk(B_,0xffffff,g,[0,1.9,1.5],[2.2,.5,.1]);return face(g,3,1.45,.55)}
function gar2(){const g=new THREE.Group(),bd=new THREE.Group();g.add(bd);const u=g.userData;u.bd=bd;
mk(S_,0x1c1c1c,bd,[0,1.3,0],[.95,1,.85]);mk(S_,0xf0bd8a,bd,[0,.95,.55],[.5,.22,.3]);
const leg=s=>{const l=new THREE.Group();l.position.set(s*.4,.95,0);mk(C_,0x1c1c1c,l,[0,-.45,0],[.28,.5,.28]);mk(S_,0xf4f1e8,l,[0,-.8,.2],[.38,.2,.58]);g.add(l);return l};
const arm=s=>{const a=new THREE.Group();a.position.set(s,1.9,0);mk(S_,0xf6f0e0,a,[0,-.45,0],[.3,.65,.4]);mk(S_,0xfff3df,a,[0,-1.05,.2],[.3,.3,.3]);bd.add(a);return a};
u.lL=leg(-1);u.lR=leg(1);u.aL=arm(-1);u.aR=arm(1);
[-1,1].forEach(s=>{mk(S_,0xffffff,bd,[s*.3,2.7,.58],[.22,.26,.15]);mk(S_,0x111111,bd,[s*.3,2.68,.7],[.1,.12,.08]);mk(B_,0x111111,bd,[s*.32,3.0,.62],[.5,.1,.1]).rotation.z=s*.4});
mk(S_,0xf0bd8a,bd,[0,2.55,0],[.85,.8,.8]);for(let i=0;i<9;i++){const a=i/8*Math.PI;mk(S_,i%3==1?0x8a5a2b:0x2a1a10,bd,[Math.cos(a)*.75,3.05+Math.sin(a)*.3,Math.sin(a)*.2-.15],[.32,.3,.32])}
mk(S_,0x7a1010,bd,[0,2.2,.7],[.32,.2,.15]);mk(B_,0x8fd3ff,bd,[.1,1.9,.78],[.07,.35,.05]);return g}
function lerpA(a,b,k){return a+(((b-a+Math.PI*3)%(Math.PI*2))-Math.PI)*k}
function clear(a){a.forEach(o=>{sc.remove(o.m);if(o.mk)sc.remove(o.mk)});a.length=0}
function pj(x,y,z,vx,vy,vz,pink,l,rain,bm){const m=new THREE.Mesh(S_,new THREE.MeshToonMaterial({color:pink?0xff7ab8:kb===3?0xd8c8a8:0xe8c27a}));m.scale.setScalar(.55);const o=new THREE.Mesh(S_,OB);o.scale.setScalar(1.12);m.add(o);m.position.set(x,y,z);sc.add(m);const q={m,vx,vy,vz,pink,l,rain,T:l/2,bm};if(rain){const k=new THREE.Mesh(new THREE.RingGeometry(.6,1,20),new THREE.MeshBasicMaterial({color:0xff3b2a,side:2}));k.rotation.x=-Math.PI/2;k.position.set(x+vx*q.T,.06,z+vz*q.T);sc.add(k);q.mk=k}ep.push(q)}
function proj(x,y,z,tx,ty,tz,pink,rain,bm){const T=rain?60:DIF[df].T*(kb===4?.8:1);pj(x,y,z,(tx-x)/T,(ty-y)/T,(tz-z)/T,pink,T*2,rain,bm)}
function ring(n,y,off,sp){for(let i=0;i<n;i++){const a=off+i/n*6.283;pj(B.x,y,B.z,Math.cos(a)*sp,0,Math.sin(a)*sp,false,160)}}
function targets(){return kb===0&&B.ph===2?[{o:BG,i:0},{o:CL,i:1}]:[{o:BG}]}
function setBoss(k){kb=k;BOSSES.forEach(b=>b.visible=false);BG=BOSSES[k];BG.visible=true;CL.visible=false;const e=$('bnm');if(e)e.textContent=(k+1)+'/5 · '+KIND[k].n}
function reset(){clear(bl);clear(ep);clear(rp);const D=DIF[df];P={x:0,z:7,y:0,vy:0,vx:0,vz:0,hp:D.hp,mhp:D.hp,inv:0,dash:0,dx:0,dz:-1,dcd:0,fire:0,lvl:0,buff:0,boost:0,fx:0,fz:-1,face:Math.PI};B={hp:KIND[kb].hp*D.bm,max:KIND[kb].hp*D.bm,ph:1,t:0,s:0,fl:0,x:0,z:-9,cx:0,cz:0};meter=0;hits=0;shake=0;fla=0;msgT=0;real=0;lastPh=1;t=0;camA=Math.PI;camP=.35;setBoss(kb);BG.rotation.set(0,0,0);say('PREPARE-SE!',100)}
function start(){if(S==='win'&&kb<4)setBoss(kb+1);reset();S='play';$('ov').style.display='none';$('bn').textContent=KIND[kb].n;try{const r=R.domElement.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch(e){}}
function bind(id,f){const e=$(id);if(e)e.onmousedown=ev=>{ev.stopPropagation();f()}}
function menu(){S='title';const o=$('ov');o.style.display='flex';o.innerHTML='<h1 class=t>GARCIA</h1><h2 class=t>vs. A PIZZARIA DO SIDNEI</h2><div class=row><button id=pv>◀</button><div class="t card" id=bnm></div><button id=nx>▶</button></div><div class=row id=dfs></div><button id=go class=big>▶ COMEÇAR</button><p class=t>WASD mover · Mouse (clique para travar) ou setas giram a câmera · Espaço pula (de novo no ar = parry nos rosas) · Q ou clique atira · Shift dash · R ou botão direito = chama os amigos</p>';bind('pv',()=>setBoss((kb+4)%5));bind('nx',()=>setBoss((kb+1)%5));bind('go',start);
DIF.forEach((d,i)=>{const b=document.createElement('button');b.textContent=d.n;b.className=i===df?'on':'';b.onmousedown=e=>{e.stopPropagation();df=i;[...$('dfs').children].forEach((c,j)=>c.className=j===i?'on':'')};$('dfs').appendChild(b)});setBoss(kb)}
function end(s){S=s;const o=$('ov');o.style.display='flex';o.innerHTML='<h1 class=t>'+(s==='win'?'NOCAUTE!':'FIM DE JOGO')+'</h1><h2 class=t>'+(s==='win'?KIND[kb].n+' derrotado!':'A alma continua na caixa de pizza…')+'</h2><div class=row>'+(s==='win'&&kb<4?'<button id=b1>PRÓXIMO CHEFE ▶</button>':'')+'<button id=b2>'+(s==='win'?'JOGAR DE NOVO':'TENTAR DE NOVO')+'</button><button id=b3>MENU</button></div>';bind('b1',()=>{setBoss(kb+1);start()});bind('b2',()=>{S='x';start()});bind('b3',menu);if(document.exitPointerLock)document.exitPointerLock()}
addEventListener('mousemove',e=>{if(document.pointerLockElement){camA-=e.movementX*.0035;camP=Math.max(-.1,Math.min(1.1,camP+e.movementY*.003))}});
R.domElement.addEventListener('click',()=>{if(S==='play'&&!document.pointerLockElement)try{const r=R.domElement.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch(e){}});
addEventListener('keydown',e=>{if(S==='play')return;if(e.key==='ArrowLeft')setBoss((kb+4)%5);if(e.key==='ArrowRight')setBoss((kb+1)%5);if('123'.includes(e.key)&&e.key){df=+e.key-1;menu()}});
let hz=[];
function mkr(x,z,l,r,mk){const m=new THREE.Mesh(new THREE.CircleGeometry(r,24),new THREE.MeshBasicMaterial({color:mk?0xff3b2a:0xe59a2e,transparent:true,opacity:.7}));m.rotation.x=-Math.PI/2;m.position.set(x,.07,z);sc.add(m);hz.push({x,z,l,m,r,mk})}
function hzTick(){hz.forEach(h=>{h.l--;if(!h.mk&&Math.hypot(h.x-P.x,h.z-P.z)<h.r&&P.y<.7)hurt()});hz=hz.filter(h=>{if(h.l<=0){sc.remove(h.m);return false}return true})}
const _rs3=reset;reset=function(){_rs3();hz.forEach(h=>sc.remove(h.m));hz=[]};
function lob(x,y,z,tx,tz,pink){const T=Math.round(60*Math.max(.8,DIF[df].T/75)),g=.02;pj(x,y,z,(tx-x)/T,(.3-y)/T+g*T/2,(tz-z)/T,pink,T*3);const q=ep[ep.length-1];q.g=g;q.lob=1}
function charge(I,v,rad,wait,tele,chain,aim){
if(B.s===0){B.x+=(P.x-B.x)*.03;B.z+=((aim?P.z-8:-9)-B.z)*.03;if(B.t>I(wait)){B.s=1;B.t=0}}
else if(B.s===1){if(B.t===1)say('CUIDADO!',30);if(B.t>I(tele)){const dx=P.x-B.x,dz=P.z-B.z,l=Math.hypot(dx,dz)||1;B.cx=dx/l;B.cz=dz/l;B.s=2;B.t=0}}
else if(B.s===2){B.x+=B.cx*v;B.z+=B.cz*v;if(Math.hypot(B.x-P.x,B.z-P.z)<rad&&P.y<1.8)hurt();if(Math.hypot(B.x,B.z)>21||B.t>45){B.n=(B.n||0)+1;if(B.n<chain){B.s=1;B.t=0}else{B.n=0;B.s=3;B.t=0}}}
else{B.x+=(0-B.x)*.05;B.z+=((aim?-6:-9)-B.z)*.05;if(B.t>70){B.s=0;B.t=0}}}
function ai(K,ph,I,px,py,pz){B.y=Math.abs(Math.sin(t*.1))*.25;B.chg=0;const dx=px-B.x,dz=pz-B.z,dl=Math.hypot(dx,dz)||1;
if(K===0){if(ph===1){B.x=Math.sin(t*.02)*6;B.z=-9;if(B.t%I(80)===0)lob(B.x,3,B.z,px,pz,(B.t/I(80)|0)%3===2)}
else if(ph===2){if(B.t%260===1){real=1-real;BG.userData.px=rnd(-8,-3);CL.userData.px=rnd(3,8)}B.x=BG.userData.px||-5;if(B.t%I(80)===0){const o=Math.random()<.5?BG:CL;lob(o.position.x,3,o.position.z,px,pz,Math.random()<.3)}}
else{B.chg=1;charge(I,.55,4,110,60,1,false)}}
else if(K===1){if(ph===1){B.x=Math.sin(t*.015)*7;B.z=-9}else{B.a=(B.a===undefined?-Math.PI/2:B.a)+(ph===2?.02:.035);B.x=Math.cos(B.a)*9;B.z=Math.sin(B.a)*9}
if(B.t%I(ph===3?90:75)===0){const n=ph===3?5:ph===2?2:1;for(let k=0;k<n;k++){const o=(k-(n-1)/2)*3.5;proj(B.x,2.8,B.z,px+dx*.6+dz/dl*o,1.4,pz+dz*.6-dx/dl*o,k===(n>>1)&&(B.t/I(75)|0)%4===0,false,true)}}}
else if(K===2){const sp=ph===3?.09:.05;B.h=B.h||0;
if(B.s===0){B.x+=dx/dl*sp;B.z+=dz/dl*sp;if(dl<2.6&&P.y<1.2)hurt();if(B.t>I(ph===3?70:110)){B.s=1;B.t=0;B.cx=px;B.cz=pz;mkr(px,pz,45,3,1)}}
else if(B.s===1){B.h=Math.min(7,B.h+.4);B.x+=(B.cx-B.x)*.1;B.z+=(B.cz-B.z)*.1;if(B.t>22){B.s=2;B.t=0}}
else{B.h-=.7;B.x=B.cx;B.z=B.cz;if(B.h<=0){B.h=0;ring(14,.5,0,.17);if(ph>=2)ring(14,.5,.22,.1);if(ph===3)ring(10,.5,.1,.24);shake=.5;if(Math.hypot(B.x-px,B.z-pz)<3&&P.y<1.5)hurt();lob(B.x,5,B.z,px,pz,true);B.s=0;B.t=0}}B.y=B.h}
else if(K===4){B.chg=1;if(B.s===0&&B.t>0&&B.t%I(21)===0){const n=ph===3?3:1;for(let k=0;k<n;k++){const a=Math.atan2(dx,dz)+(k-(n-1)/2)*.28;pj(B.x,1.6,B.z,Math.sin(a)*.5,0,Math.cos(a)*.5,n===1&&(B.t/I(21)|0)%4===0,90)}}charge(I,.85,2.8,60,28,ph+1,true)}
else{B.x=Math.sin(t*.012)*6;B.z=-9;const f=I(ph===3?11:16);if(B.t%f===0){const a=B.t*.3,s=.15;pj(B.x,2,B.z,Math.cos(a)*s,0,Math.sin(a)*s+.05,(B.t/f|0)%7===0,200);if(ph===3)pj(B.x,2,B.z,Math.cos(-a)*s,0,Math.sin(-a)*s+.05,false,200)}
if(ph>=2){if(B.t%I(220)===0){B.bomb=60;say('GÁS! CORRA!',60)}if(B.bomb>0){B.fl=2;if(--B.bomb===0){ring(16,1.4,B.t,.16);ring(16,1.4,B.t+.2,.09);shake=.5}}}}
return true}
function update(){t++;const K=kb,Df=DIF[df];
if(keys.ArrowLeft)camA+=.04;if(keys.ArrowRight)camA-=.04;if(keys.ArrowUp)camP=Math.min(1.1,camP+.02);if(keys.ArrowDown)camP=Math.max(-.1,camP-.02);
const fx=Math.sin(camA),fz=Math.cos(camA),rx=-fz,rz=fx,ax=(keys.d?1:0)-(keys.a?1:0),az=(keys.w?1:0)-(keys.s?1:0);let mx=fx*az+rx*ax,mz=fz*az+rz*ax;const ml=Math.hypot(mx,mz);if(ml>0){mx/=ml;mz/=ml;P.dx=mx;P.dz=mz}
if(P.dash>0){P.dash--;P.vx=P.dx*.6;P.vz=P.dz*.6}else{const k=P.y>0?.06:.2;P.vx+=(mx*.2-P.vx)*k;P.vz+=(mz*.2-P.vz)*k}
P.x+=P.vx;P.z+=P.vz;const rr=Math.hypot(P.x,P.z);if(rr>14.5){P.x*=14.5/rr;P.z*=14.5/rr}
if(!keys[' ']&&P.vy>.15)P.vy=.15;P.vy-=.022;P.y+=P.vy;if(P.y<0){P.y=0;P.vy=0}
P.dcd--;P.inv--;P.fire--;if(P.buff>0&&--P.buff===0)P.lvl=0;if(P.boost>0)P.boost--;if(t%900===0){P.boost=300;say('RENATA: "VAI, GARCIA!"',100)}
const bA=Math.atan2(B.x-P.x,B.z-P.z),dA=((bA-camA+Math.PI*3)%(Math.PI*2))-Math.PI,aim=Math.abs(dA)<.35?bA:camA,gx=Math.sin(aim),gz=Math.cos(aim),shoot=keys.q||keys.z||keys.j||mouse;
if(shoot&&P.fire<=0){const L=P.lvl,m=new THREE.Mesh(S_,new THREE.MeshToonMaterial({color:L===3?0xfff59a:0x9be26a}));m.scale.setScalar(L===3?1.1:L===2?.5:.35);sc.add(m);m.position.set(P.x+gx*1.3,P.y+1.4,P.z+gz*1.3);bl.push({m,vx:gx*.7,vz:gz*.7,d:L===3?4:L===2?1.6:L===1?1.2:1,r:L===3?1.4:.5,l:90});P.fire=P.boost?3:L===3?10:6}
// boss
if(K===4&&t%160===20)taunt();B.t++;const ph=B.ph,fi=Df.fi*(K===4?.7:1),tg=targets(),chg=!!B.chg,px=P.x,py=P.y+1.4,pz=P.z,I=n=>Math.round(n*fi);
hzTick();if(ai(K,ph,I,px,py,pz)){}else if(!chg){B.s=0;
if(K===0){if(ph===1){B.x=Math.sin(t*.02)*6;B.z=-9;if(B.t%I(70)===0)proj(B.x,3,B.z,px,py,pz,(B.t/I(70))%3===0);if(B.t%I(200)===I(100))[-5,5].forEach(o=>proj(B.x,3,B.z,px+o,1.4,pz,false))}else{if(B.t%260===1){real=1-real;BG.userData.px=rnd(-8,-3);CL.userData.px=rnd(3,8)}B.x=BG.userData.px||-5;if(B.t%I(70)===0){const o=Math.random()<.5?BG:CL;proj(o.position.x,3,o.position.z,px,py,pz,Math.random()<.3)}}}
else if(K===1){B.x=Math.sin(t*.015)*7;B.z=-9;if(B.t%I(85)===0)proj(B.x,2.8,B.z,px+(px-B.x)*.6,1.4,pz+(pz-B.z)*.6,false,false,true)}
else if(K===2){B.x=Math.sin(t*.01)*5;B.z=-9;if(B.t%I(90)===0)[-4,0,4].forEach(o=>proj(B.x,3,B.z,px+o,1.4,pz,false));if(B.t%I(130)===0)proj(px,12,pz,px,.6,pz,false,true);if(ph===3&&B.t%I(160)===0){ring(14,.5,0,.17);say('SALTE!',40)}}
else if(K===4){B.x=Math.sin(t*.035)*8;B.z=-9+Math.sin(t*.02)*2;if(B.t%I(38)===0)proj(B.x,2,B.z,px,py,pz,(B.t/I(38))%5===0);if(B.t%I(110)===0)[-4,0,4].forEach(o=>proj(B.x,2,B.z,px+o,1.4,pz,false));if(B.t%I(140)===0)proj(px,12,pz,px,.6,pz,false,true)}
else{B.x=Math.sin(t*.012)*6;B.z=-9;if(ph!==2&&B.t%I(18)===0){const a=B.t*.35;pj(B.x,2,B.z,Math.cos(a)*.14,0,Math.sin(a)*.14+.05,false,200)}if(ph>=2&&B.t%I(200)===0){say('BOOM!',40);ring(14,1.4,B.t,.16)}if(ph===3&&B.t%I(70)===0)proj(px+rnd(-3,3),12,pz+rnd(-3,3),px,.6,pz,false,true)}}
else{if(B.s===0){B.x+=(px-B.x)*.02;B.z=-9;if((K===1||K===4)&&B.t%I(70)===0)proj(B.x,2.8,B.z,px+(px-B.x)*.6,1.4,pz+(pz-B.z)*.6,false,false,true);if(B.t>I(110)){B.s=1;B.t=0;const dx=px-B.x,dz=pz-B.z,l=Math.hypot(dx,dz);B.cx=dx/l;B.cz=dz/l;say('CUIDADO!',40)}if((K===0||K===4)&&B.t%90===0)proj(B.x,6,B.z,px+rnd(-2,2),.6,pz+rnd(-2,2),false,true)}
else if(B.s===1){if(B.t>60){B.s=2;B.t=0}}
else if(B.s===2){const v=K===4?.8:K===1?.65:.55;B.x+=B.cx*v;B.z+=B.cz*v;if(Math.hypot(B.x,B.z)>20){B.s=3;B.t=0}if(Math.hypot(B.x-px,B.z-pz)<(K===0?4:K===4?2.8:3.4)&&P.y<1.8)hurt()}
else{B.x+=(0-B.x)*.05;B.z+=(-9-B.z)*.05;if(B.t>70){B.s=0;B.t=0}}}
// bullets
const bs=K===0?(ph===3?1.6:1):K===1?1.15:K===2?1.1:K===4?1:1.05;
bl.forEach(b=>{b.m.position.x+=b.vx;b.m.position.z+=b.vz;b.l--;tg.forEach(q=>{if(b.dead)return;const o=q.o;if(Math.hypot(o.position.x-b.m.position.x,o.position.z-b.m.position.z)<bs*(K===4?1.7:2.3)+b.r){if(q.i===undefined||q.i===real){B.hp-=b.d;B.fl=5;hits++;if(hits%15===0&&meter<5){meter++;say('+1 AMIGO NA CALL',50)}}if(b.r<1)b.dead=1}})});
bl=bl.filter(b=>{if(b.dead||b.l<=0){sc.remove(b.m);return false}return true});
if(t%150===0){const m=new THREE.Mesh(C_,new THREE.MeshToonMaterial({color:0x444444}));m.scale.set(.6,.1,.6);m.position.set(-10,1.8,4);sc.add(m);const o=real===1?CL:BG,two=K===0&&ph===2,tx=two?o.position.x:B.x,tz=two?o.position.z:B.z,dx=tx-m.position.x,dz=tz-m.position.z,l=Math.hypot(dx,dz);rp.push({m,vx:dx/l*.5,vz:dz/l*.5,tx,tz,l:80})}
rp.forEach(q=>{q.m.position.x+=q.vx;q.m.position.z+=q.vz;q.m.rotation.y+=.5;q.l--;if(Math.hypot(q.m.position.x-q.tx,q.m.position.z-q.tz)<2.5){B.hp-=2;B.fl=5;q.l=0}});rp=rp.filter(q=>{if(q.l<=0){sc.remove(q.m);return false}return true});
const pv=new THREE.Vector3(P.x,P.y+1.3,P.z);ep.forEach(q=>{q.m.position.x+=q.vx;q.m.position.y+=q.vy;if(q.g)q.vy-=q.g;q.m.position.z+=q.vz;q.l--;q.m.rotation.y+=.1;if(q.bm&&q.l===q.T){q.vx*=-1;q.vy*=-1;q.vz*=-1}if(!q.pink&&q.m.position.distanceTo(pv)<1.2)hurt();if(q.m.position.y<.4&&(q.rain||q.lob)){q.l=0;if(q.lob&&!q.pink)mkr(q.m.position.x,q.m.position.z,300,1.7)}});
ep=ep.filter(q=>{if(q.l<=0){sc.remove(q.m);if(q.mk)sc.remove(q.mk);return false}return true});
const np=B.hp/B.max>.66?1:B.hp/B.max>.33?2:3;if(np!==B.ph){B.ph=np;B.t=0;B.s=0;clear(ep);P.hp=Math.min(P.mhp+1,P.hp+1);say('FASE '+np+'! GUARANÁ DE VIDA +1 HP',120);shake=.6;if(K===0&&np===2){BG.userData.px=-5;CL.userData.px=5}}
if(B.hp<=0&&S==='play')end('win');if(msgT>0&&--msgT===0)$('msg').textContent='';if(shake>0)shake-=.03;if(fla>0)fla-=.03;
// animation
const u=G.userData,sp=Math.min(1,Math.hypot(P.vx,P.vz)/.2),air=P.y>.05;walk+=sp*.45;const sw=Math.sin(walk)*sp*.9;
u.lL.rotation.x=air?-.7:sw;u.lR.rotation.x=air?.5:-sw;u.aL.rotation.x=air?-2.4:-sw*.9;u.aR.rotation.x=shoot?-1.5:air?-2.4:sw*.9;
u.bd.position.y=(air?0:Math.abs(Math.sin(walk))*.14*sp)+Math.sin(t*.08)*.03;u.bd.rotation.x=P.dash>0?.6:sp*.12;u.bd.rotation.z=Math.sin(walk)*.05*sp;
const sy=1+Math.max(-.2,Math.min(.25,P.vy*.5));G.scale.set(1/Math.sqrt(sy),sy,1/Math.sqrt(sy));
P.face=lerpA(P.face,shoot?aim:sp>.1?Math.atan2(P.vx,P.vz):P.face,.2);G.position.set(P.x,P.y,P.z);G.rotation.y=P.face;G.visible=!(P.inv>0&&t%6<3);
const sq=1+Math.sin(t*.1)*.03+(B.fl>0?.1:0);if(B.fl>0)B.fl--;
BG.scale.set(bs*sq,bs*(2-sq),bs*sq);BG.position.set(B.x+(chg&&B.s===1?Math.sin(t*2)*.15:0),B.y,B.z);BG.rotation.y=Math.atan2(px-B.x,pz-B.z);
BG.rotation.x=chg&&B.s===2&&(K===0||K===4)?BG.rotation.x-.25:0;BG.rotation.z=chg&&B.s===2&&K===1?BG.rotation.z+.4:Math.sin(t*.12)*.05;BG.userData.cr.visible=K!==0||B.ph!==2||real===0;
CL.visible=K===0&&B.ph===2;if(CL.visible){CL.position.set(CL.userData.px||5,Math.abs(Math.sin(t*.1+1))*.25,-9);CL.userData.cr.visible=real===1;CL.rotation.y=Math.atan2(px-CL.position.x,pz-CL.position.z);CL.scale.set(sq,2-sq,sq);BG.position.x=BG.userData.px||-5;BG.position.z=-9}
RN.rotation.y=Math.atan2(B.x-RN.position.x,B.z-RN.position.z);RN.position.y=Math.abs(Math.sin(t*.1))*.15;slices.forEach((s,i)=>{s.position.y=5+i%2*2+Math.sin(t*.03+i);s.rotation.y+=.01});
const D=9.5,cp=Math.cos(camP);cam.position.x+=(P.x-fx*D*cp-cam.position.x)*.15;cam.position.z+=(P.z-fz*D*cp-cam.position.z)*.15;cam.position.y+=(P.y*.5+2.2+Math.sin(camP)*D-cam.position.y)*.15;cam.position.x+=rnd(-1,1)*Math.max(0,shake);cam.lookAt(P.x+fx*3,1.6,P.z+fz*3);
$('hp').textContent='♥'.repeat(Math.max(0,P.hp));$('cards').textContent='●'.repeat(meter)+'○'.repeat(5-meter)+'  CALL (R)';$('bf').style.width=Math.max(0,B.hp/B.max*100)+'%';$('fl').style.opacity=Math.max(0,fla)}
menu();
(function loop(){if(S==='play')update();else{t++;cam.position.set(Math.sin(t*.005)*14,6,Math.cos(t*.005)*14+4);cam.lookAt(0,2,-4);BG.position.set(0,0,-4);BG.scale.setScalar(1);slices.forEach((s,i)=>{s.rotation.y+=.01})}R.render(sc,cam);requestAnimationFrame(loop)})();
reset();S='title';BG.position.set(0,0,-4);G.position.set(P.x,0,P.z);
