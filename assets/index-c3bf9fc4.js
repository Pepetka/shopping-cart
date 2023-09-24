(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(c){if(c.ep)return;c.ep=!0;const r=e(c);fetch(c.href,r)}})();const L="/shopping-cart/assets/product1-9ac968b0.png",q="/shopping-cart/assets/product2-b7b6c6ca.png",C="/shopping-cart/assets/product3-7eab844b.png",N=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:L,options:{Цвет:"белый",Размер:"56"}},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:q,options:{Цвет:"прозрачный"}},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:C}],F=[{id:"product1",name:"Футболка UZcotton мужская",img:L,price:522,currency:"сом",prevPrice:1051,options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:q,price:10500,currency:"сом",prevPrice:11500,options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:C,price:247,currency:"сом",prevPrice:457,company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],x=s=>s?`
			<div class="product__options">
				${Object.entries(s).reduce((d,[e,t])=>{const c=e==="Размер"?`<span class="product__size">${e}: ${t}</span>`:`<span>${e}: ${t}</span>`;return d+c},"")}
			</div>
		`:"",B="/shopping-cart/assets/Information-041d4582.svg",I=({id:s,name:d,img:e,price:t,currency:c,prevPrice:r,options:o,company:a,totalQuantity:p},l)=>`
		<div data-product="${s}" class="product goods__product">
			<div>
				<label class="checkbox product__checkbox">
					<input type="checkbox" checked />
				</label>

				<div class="product__information">
					${o!=null&&o.Размер?`
							<div class="product__mobileSize">
								<span>${o.Размер}</span>
							</div>
						`:""}

					<img class="product__image" src="${e}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${t}&nbsp;
								<span>${c}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${r} ${c}
							</div>
						</div>

						<div class="product__name">
							${d}
						</div>

						${x(o)}

						<div class="product__company">
							<div>${a[0]}</div>
							<div>
								${a[1]}
								<img src="${B}" alt="information" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${l===1?"disabled":""}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data">${l}</span>
						
						<button class="counter__incr" ${l===p?"disabled":""}>
							<span>&plus;</span>
						</button>
					</div>
					
					${p<=10?`
								<div class="product__left">
									Осталось ${p} шт.
								</div>
							`:""}
					
					<div class="product__buttons">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${(t*l).toString().length>4?"price__current_bigNum":""}">
						${(t*l).toLocaleString("ru")}&nbsp;
						<span>${c}</span>
					</div>
					
					<div class="price__previous ${(r*l).toString().length>4?"price__previous_bigNum":""}">
						${(r*l).toLocaleString("ru")} ${c}
					</div>
			</div>
		</div>
	</div>
	`,w=(s,d)=>{const e=document.querySelector(".header__notification");e.textContent=`${d.length}`;const t=document.querySelector(".goods__list_normal");return t.innerHTML=d.reduce((c,r)=>c+I(r,s[r.id]),""),t.getElementsByClassName("product")},H=({id:s,name:d,img:e,options:t})=>`
		<div data-product-out-of-stock="${s}" class="product goods__product">
			<div>
				<div class="product__information">
					${t!=null&&t.Размер?`
							<div class="product__mobileSize">
								<span>${t.Размер}</span>
							</div>
						`:""}

					<img class="product__image product__image_outOfStock" src="${e}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<div class="product__name">
							${d}
						</div>

						${x(t)}
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="product__buttons product__buttons_outOfStock">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
			</div>
		</div>
	</div>
	`,D=s=>{const d=document.querySelector(".goods__list_outOfStock");return d.innerHTML=s.reduce((e,t)=>e+H(t),""),d.getElementsByClassName("product")},O={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},W=(s,{start:d,end:e,products:t})=>{let c=`${+d.split(".")[0]} ${O[d.split(".")[1]]}`,r=`${+e.split(".")[0]} ${O[e.split(".")[1]]}`;return c.split(" ")[1]===r.split(" ")[1]?c=c.split(" ")[0]:r=`<br/>${r}`,`
		<div class="card__line">
			<div class="card__title">${c}&#8212;${r}</div>
			<div class="card__imagesList">
				${t.reduce((o,{id:a,quantity:p})=>{var l;return o+`
						<div class="card__image">
							${p>1?`
									<span class="notification card__notification">${p}</span>
								`:""}
							<img src="${(l=s.find(m=>m.id===a))==null?void 0:l.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`},P=(s,d)=>Object.entries(s).map(([e,t])=>d.includes(e)?[e,t]:[e,0]).reduce((e,[t,c])=>({...e,[t]:c}),{}),j=(s,d)=>{const e={};return d.reduce((t,{id:c,delivery:r})=>{const o=[...t];return r.forEach(a=>{const p=o.findIndex(m=>m.start===a.start&&m.end===a.end);let l;s[c]-(e[c]??0)>a.quantity?l=a.quantity:l=s[c]-(e[c]??0),e[c]=(e[c]??0)+l,p>=0?o[p]={...o[p],products:[...o[p].products,{id:c,quantity:l}]}:o.push({start:a.start,end:a.end,products:[{id:c,quantity:l}]})}),o.sort((a,p)=>{const l=a.start.split("."),m=p.start.split(".");return+new Date(+l[2],+l[1]-1,+l[0])-+new Date(+m[2],+m[1]-1,+m[0])})},[]).map(t=>({...t,products:t.products.filter(c=>c.quantity!==0)})).filter(t=>t.products.length!==0)},f=(s,d,e)=>{const t=P(s,d),c=document.querySelector(".card__products");c.innerHTML=j(t,e).reduce((r,o)=>r+W(e,o),"")},b=s=>{const d=document.querySelector(".header__notification");d.textContent=`${s}`;const e=document.querySelector(".tabbar__notification");e.textContent=`${s}`},k=(s,d,{price:e,prevPrice:t,currency:c})=>{const r=document.querySelector(`[data-product=${d}] .product__price`),o=s*e,a=s*t;r.innerHTML=`
		<div class="price__current ${o.toString().length>4?"price__current_bigNum":""}">
			${o.toLocaleString("ru")}&nbsp;
			<span>${c}</span>
		</div>
		
		<div class="price__previous ${a.toString().length>4?"price__previous_bigNum":""}">
			${a.toLocaleString("ru")} ${c}
		</div>
	`},h=s=>{const d=document.querySelector(".goods__header_outOfStock > span");d.textContent=`Отсутствуют · ${s} товара`},M=(s,d,e)=>{const t=document.querySelector(".goods__header_normal > span");t.textContent=`${s} товаров · ${d.toLocaleString("ru")} ${e}`},S=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}],Q="/shopping-cart/assets/Mir-f3178dfd.svg",z="/shopping-cart/assets/Visa-0911e67b.svg",R="/shopping-cart/assets/Mastercard-8f4656d1.svg",U="/shopping-cart/assets/Maestro-55eee7e2.svg",V={mir:Q,visa:z,mastercard:R,maestro:U},$=({type:s,date:d,number:e},t,c)=>`
		<div class="paymentCard ${c}">
			<img class="paymentCard__paymentSystem" src="${V[s]}" alt="Payment system" />
			<span class="paymentCard__number">
				${t?`
						<span>${e}</span>
						<span>${d}</span>
					`:e}
			</span>
		</div>
	`,X=s=>{const d=document.querySelector(".paymentForm__body");d.innerHTML=S.reduce((e,t)=>e+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${t.id}" name="card" ${s===t.id?"checked":""}>
			${$(t,!1,"modal__paymentCard")}
		</label>
	`,"")},E=s=>{const d=document.querySelector(".orderDetails__cardWrapper");d.innerHTML=$(S.find(e=>e.id===s),!0,"orderDetails__card")},A=s=>{const d=document.querySelector(".payment__cardWrapper");d.innerHTML=$(S.find(e=>e.id===s),!1,"payment__card")};let n=F,g=n.map(({id:s})=>s),_=N;const i={product1:1,product2:200,product3:2};let u=[],v="card1",y=[];const Y=()=>{const s=document.querySelectorAll(".goods__toggle"),d=document.querySelectorAll(".accordion");s.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.accordion,c=P(i,u);M(Object.values(c).reduce((r,o)=>r+o,0),n.reduce((r,{id:o,price:a})=>r+c[o]*a,0),n[0].currency),e.classList.toggle("goods__toggle_rotate"),t==="normal"&&e.parentElement.classList.toggle("goods__header_close"),d.forEach(r=>{if(r.dataset.accordion===t)return r.classList.toggle("accordion__close")})})})},Z=()=>{const s=document.querySelector("[data-product-list-checkbox]"),d=document.querySelectorAll("[data-product]");d.forEach(e=>{const t=e.dataset.product??"";e.querySelector(".checkbox input").checked&&u.push(t)}),f(i,u,n),d.forEach(e=>{const t=e.dataset.product??"",c=e.querySelector(".checkbox input");c.addEventListener("click",()=>{c.checked?u=[...u.filter(r=>r!==t),t]:u=u.filter(r=>r!==t),s.checked=u.length>=g.length,f(i,u,n)})}),s.addEventListener("click",()=>{s.checked?u=[...g]:u=[],d.forEach(e=>{const t=e.querySelector(".checkbox input");t.checked=s.checked}),f(i,u,n)})},G=()=>{document.querySelectorAll("[data-product]").forEach(d=>{const e=d.dataset.product??"",t=n.find(a=>a.id===e),c=d.querySelector(".counter__decr"),r=d.querySelector(".counter__data"),o=d.querySelector(".counter__incr");o.disabled=i[e]===t.totalQuantity,c.disabled=i[e]===1,c.addEventListener("click",()=>{r.innerText=`${+r.innerText-1}`,i[e]=+r.innerText,o.disabled=i[e]===t.totalQuantity,c.disabled=i[e]===1,k(i[e],e,t),f(i,u,n)}),o.addEventListener("click",()=>{r.innerText=`${+r.innerText+1}`,i[e]=+r.innerText,o.disabled=i[e]===t.totalQuantity,c.disabled=i[e]===1,k(i[e],e,t),f(i,u,n)})})},K=s=>{document.querySelectorAll("[data-product]").forEach(e=>{const t=e.dataset.product??"",c=e.querySelector(".product__favorite"),r=e.querySelector(".product__delete");c.addEventListener("click",()=>{y=[...y,...n.filter(o=>o.id===t)],n=n.filter(o=>o.id!==t),u=u.filter(o=>o!==t),g=g.filter(o=>o!==t),Array.from(s).forEach(o=>{o.dataset.product===t&&o.remove()}),b(n.length),f(i,u,n),console.log("Favorites: ",y)}),r.addEventListener("click",()=>{n=n.filter(o=>o.id!==t),u=u.filter(o=>o!==t),g=g.filter(o=>o!==t),Array.from(s).forEach(o=>{o.dataset.product===t&&o.remove()}),b(n.length),f(i,u,n)})})},J=s=>{document.querySelectorAll("[data-product-out-of-stock]").forEach(e=>{const t=e.dataset.productOutOfStock,c=e.querySelector(".product__favorite"),r=e.querySelector(".product__delete");c.addEventListener("click",()=>{y=[...y,..._.filter(o=>o.id===t)],_=_.filter(o=>o.id!==t),Array.from(s).forEach(o=>{o.dataset.productOutOfStock===t&&o.remove()}),h(_.length),console.log("Favorites: ",y)}),r.addEventListener("click",()=>{_=_.filter(o=>o.id!==t),Array.from(s).forEach(o=>{o.dataset.productOutOfStock===t&&o.remove()}),h(_.length)})})},tt=s=>{s.classList.remove("modal_hide"),document.body.style.overflowY="hidden"},T=(s,d)=>{s.closest(".modal").classList.add("modal_hide"),document.body.style.overflowY="auto",E(d),A(d)},et=()=>{const s=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(t=>{const c=t.dataset.modal;t.addEventListener("click",()=>{s.forEach(r=>{r.dataset.modal===c&&tt(r)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(t=>{t.addEventListener("click",c=>{c.stopPropagation(),T(t,v)})})};document.addEventListener("DOMContentLoaded",()=>{const s=w(i,n),d=D(_);f(i,u,n),b(n.length),h(_.length),M(Object.values(i).reduce((r,o)=>r+o,0),n.reduce((r,{id:o,price:a})=>r+i[o]*a,0),n[0].currency),X(v),E(v),A(v),Y(),Z(),G(),K(s),J(d),et();const e=document.querySelector('[data-modal="payment"] .paymentForm');e.addEventListener("submit",r=>{r.preventDefault();const o=new FormData(r.target);v=Object.fromEntries(o).card,T(e,v)});const t=document.querySelector(".payment__immediately input"),c=document.querySelectorAll(".payment__immediately span, .card__additional");t.addEventListener("click",()=>{const r=document.querySelector(".total__button");t.checked?c.forEach(o=>{o.classList.add("hide"),r.textContent="Оплатить 1 016 сом"}):c.forEach(o=>{o.classList.remove("hide"),r.textContent="Заказать"})})});
