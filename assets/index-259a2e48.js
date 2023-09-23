(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f=o=>o?`
			<div class="product__options">
				${Object.entries(o).reduce((e,[s,c])=>{const t=s==="Размер"?`<span class="product__size">${s}: ${c}</span>`:`<span>${s}: ${c}</span>`;return e+t},"")}
			</div>
		`:"",y="/shopping-cart/assets/Information-041d4582.svg",b="/shopping-cart/assets/Favorite-1f9f37f3.svg",g="/shopping-cart/assets/Basket-a89925db.svg",O=({id:o,name:e,img:s,price:c,currency:t,prevPrice:r,options:i,company:n,totalQuantity:d},a)=>`
		<div data-product="${o}" class="product goods__product">
			<div>
				<label class="checkbox product__checkbox">
					<input type="checkbox" checked />
				</label>

				<div class="product__information">
					${i!=null&&i.Размер?`
							<div class="product__mobileSize">
								<span>${i.Размер}</span>
							</div>
						`:""}

					<img class="product__image" src="${s}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${c}&nbsp;
								<span>${t}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${r} ${t}
							</div>
						</div>

						<div class="product__name">
							${e}
						</div>

						${f(i)}

						<div class="product__company">
							<div>${n[0]}</div>
							<div>
								${n[1]}
								<img src="${y}" alt="information" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${a===1?"disabled":""}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data">${a}</span>
						
						<button class="counter__incr" ${a===d?"disabled":""}>
							<span>&plus;</span>
						</button>
					</div>
					
					${d<=10?`
								<div class="product__left">
									Осталось ${d} шт.
								</div>
							`:""}
					
					<div class="product__buttons">
						<button class="product__favorite">
							<img class="product__favorite" src="${b}" alt="Add to favorites" />
						</button>
						
						<button class="product__delete">
							<img class="product__basket" src="${g}" alt="Delete" />
						</button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${c.length>4?"price__current_bigNum":""}">
						${c}&nbsp;
						<span>${t}</span>
					</div>
					
					<div class="price__previous ${c.length>4?"price__previous_bigNum":""}">
						${r} ${t}
					</div>
			</div>
		</div>
	</div>
	`,S=({id:o,name:e,img:s,options:c})=>`
		<div data-product-out-of-stock="${o}" class="product goods__product">
			<div>
				<div class="product__information">
					${c!=null&&c.Размер?`
							<div class="product__mobileSize">
								<span>${c.Размер}</span>
							</div>
						`:""}

					<img class="product__image product__image_outOfStock" src="${s}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<div class="product__name">
							${e}
						</div>

						${f(c)}
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="product__buttons product__buttons_outOfStock">
						<button class="product__favorite"><img src="${b}" alt="Add to favorites" /></button>
						<button class="product__delete"><img src="${g}" alt="Delete" /></button>
					</div>
				</div>

				<div class="price product__price">
			</div>
		</div>
	</div>
	`,_={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},k=(o,{start:e,end:s,products:c})=>{let t=`${+e.split(".")[0]} ${_[e.split(".")[1]]}`,r=`${+s.split(".")[0]} ${_[s.split(".")[1]]}`;return t.split(" ")[1]===r.split(" ")[1]?t=t.split(" ")[0]:r=`<br/>${r}`,`
		<div class="card__line">
			<div class="card__title">${t}&#8212;${r}</div>
			<div class="card__imagesList">
				${c.reduce((i,{id:n,quantity:d})=>{var a;return i+`
						<div class="card__image">
							${d>1?`
									<span class="notification card__notification">${d}</span>
								`:""}
							<img src="${(a=o.find(p=>p.id===n))==null?void 0:a.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`},m="/shopping-cart/assets/product1-9ac968b0.png",$="/shopping-cart/assets/product2-b7b6c6ca.png",h="/shopping-cart/assets/product3-7eab844b.png";let l=[{id:"product1",name:"Футболка UZcotton мужская",img:m,price:"522",currency:"сом",prevPrice:"1051",options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:$,price:"2 100 047",currency:"сом",prevPrice:"2 300 047",options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:h,price:"494",currency:"сом",prevPrice:"950",company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],v=l.map(({id:o})=>o),q=[{id:"product1",name:"Футболка UZcotton мужская",img:m,options:{Цвет:"белый",Размер:"56"}},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:$,options:{Цвет:"прозрачный"}},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:h}];const x=o=>{const e={};return l.reduce((s,{id:c,delivery:t})=>{const r=[...s];return t.forEach(i=>{const n=r.findIndex(a=>a.start===i.start&&a.end===i.end);let d;o[c]-(e[c]??0)>i.quantity?d=i.quantity:d=o[c]-(e[c]??0),e[c]=(e[c]??0)+d,n>=0?r[n]={...r[n],products:[...r[n].products,{id:c,quantity:d}]}:r.push({start:i.start,end:i.end,products:[{id:c,quantity:d}]})}),r.sort((i,n)=>{const d=i.start.split("."),a=n.start.split(".");return+new Date(+d[2],+d[1]-1,+d[0])-+new Date(+a[2],+a[1]-1,+a[0])})},[]).map(s=>({...s,products:s.products.filter(c=>c.quantity!==0)})).filter(s=>s.products.length!==0)},L=(o,e)=>{const s=document.querySelector(".goods__list_normal");s.innerHTML=l.reduce((c,t)=>c+O(t,o[t.id]),""),T(o,e),M(o,e)},A=()=>{const o=document.querySelector(".goods__list_outOfStock");o.innerHTML=q.reduce((e,s)=>e+S(s),"")},u=(o,e)=>{const s=Object.entries(o).map(([t,r])=>e.includes(t)?[t,r]:[t,0]).reduce((t,[r,i])=>({...t,[r]:i}),{}),c=document.querySelector(".card__products");c.innerHTML=x(s).reduce((t,r)=>t+k(l,r),"")},C=()=>{const o=document.querySelectorAll(".goods__toggle"),e=document.querySelectorAll(".accordion");o.forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.accordion;e.forEach(t=>{if(t.dataset.accordion===c)return t.classList.toggle("accordion__close")})})})},T=(o,e)=>{const s=document.querySelector("[data-product-list-checkbox]"),c=document.querySelectorAll("[data-product]");c.forEach(t=>{const r=t.dataset.product??"";t.querySelector(".checkbox input").checked&&e.push(r)}),u(o,e),c.forEach(t=>{const r=t.dataset.product??"",i=t.querySelector(".checkbox input");i.addEventListener("click",()=>{i.checked?e=[...e.filter(n=>n!==r),r]:e=e.filter(n=>n!==r),s.checked=e.length>=v.length,u(o,e)})}),s.addEventListener("click",()=>{s.checked?e=[...v]:e=[],c.forEach(t=>{const r=t.querySelector(".checkbox input");r.checked=s.checked}),u(o,e)})},M=(o,e)=>{document.querySelectorAll("[data-product]").forEach(c=>{var a;const t=c.dataset.product??"",r=((a=l.find(p=>p.id===t))==null?void 0:a.totalQuantity)??0,i=c.querySelector(".counter__decr"),n=c.querySelector(".counter__data"),d=c.querySelector(".counter__incr");d.disabled=o[t]===r,i.disabled=o[t]===1,i.addEventListener("click",()=>{n.innerText=`${+n.innerText-1}`,o[t]=+n.innerText,d.disabled=o[t]===r,i.disabled=o[t]===1,u(o,e)}),d.addEventListener("click",()=>{n.innerText=`${+n.innerText+1}`,o[t]=+n.innerText,d.disabled=o[t]===r,i.disabled=o[t]===1,u(o,e)})})};document.addEventListener("DOMContentLoaded",()=>{const o={product1:1,product2:200,product3:2};let e=[];L(o,e),A(),u(o,e),C()});
