(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}})();const x="/shopping-cart/assets/product1-9ac968b0.png",E="/shopping-cart/assets/product2-b7b6c6ca.png",M="/shopping-cart/assets/product3-7eab844b.png",H=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:x,options:{Цвет:"белый",Размер:"56"}},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:E,options:{Цвет:"прозрачный"}},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:M}],w=[{id:"product1",name:"Футболка UZcotton мужская",img:x,price:522,currency:"сом",prevPrice:1051,options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:E,price:10500,currency:"сом",prevPrice:11500,options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:M,price:247,currency:"сом",prevPrice:457,company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],P=r=>r?`
			<div class="product__options">
				${Object.entries(r).reduce((s,[t,e])=>{const o=t==="Размер"?`<span class="product__size">${t}: ${e}</span>`:`<span>${t}: ${e}</span>`;return s+o},"")}
			</div>
		`:"",D="/shopping-cart/assets/Information-041d4582.svg",U=({id:r,name:s,img:t,price:e,currency:o,prevPrice:d,options:c,company:l,totalQuantity:p},u)=>`
		<div data-product="${r}" class="product goods__product">
			<div>
				<label class="checkbox product__checkbox">
					<input type="checkbox" checked />
				</label>

				<div class="product__information">
					${c!=null&&c.Размер?`
							<div class="product__mobileSize">
								<span>${c.Размер}</span>
							</div>
						`:""}

					<img class="product__image" src="${t}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${e}&nbsp;
								<span>${o}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${d} ${o}
							</div>
						</div>

						<div class="product__name">
							${s}
						</div>

						${P(c)}

						<div class="product__company">
							<div>${l[0]}</div>
							<div>
								${l[1]}
								<img src="${D}" alt="information" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${u===1?"disabled":""}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data">${u}</span>
						
						<button class="counter__incr" ${u===p?"disabled":""}>
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
					<div class="price__current ${(e*u).toString().length>4?"price__current_bigNum":""}">
						${(e*u).toLocaleString("ru")}&nbsp;
						<span>${o}</span>
					</div>
					
					<div class="price__previous ${(d*u).toString().length>4?"price__previous_bigNum":""}">
						${(d*u).toLocaleString("ru")} ${o}
					</div>
			</div>
		</div>
	</div>
	`,j=(r,s)=>{const t=document.querySelector(".header__notification");t.textContent=`${s.length}`;const e=document.querySelector(".goods__list_normal");return e.innerHTML=s.reduce((o,d)=>o+U(d,r[d.id]),""),e.getElementsByClassName("product")},Q=({id:r,name:s,img:t,options:e})=>`
		<div data-product-out-of-stock="${r}" class="product goods__product">
			<div>
				<div class="product__information">
					${e!=null&&e.Размер?`
							<div class="product__mobileSize">
								<span>${e.Размер}</span>
							</div>
						`:""}

					<img class="product__image product__image_outOfStock" src="${t}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<div class="product__name">
							${s}
						</div>

						${P(e)}
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
	`,R=r=>{const s=document.querySelector(".goods__list_outOfStock");return s.innerHTML=r.reduce((t,e)=>t+Q(e),""),s.getElementsByClassName("product")},C={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},z=(r,{start:s,end:t,products:e})=>{let o=`${+s.split(".")[0]} ${C[s.split(".")[1]]}`,d=`${+t.split(".")[0]} ${C[t.split(".")[1]]}`;return o.split(" ")[1]===d.split(" ")[1]?o=o.split(" ")[0]:d=`<br/>${d}`,`
		<div class="card__line">
			<div class="card__title">${o}&#8212;${d}</div>
			<div class="card__imagesList">
				${e.reduce((c,{id:l,quantity:p})=>{var u;return c+`
						<div class="card__image">
							${p>1?`
									<span class="notification card__notification">${p}</span>
								`:""}
							<img src="${(u=r.find(_=>_.id===l))==null?void 0:u.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`},T=(r,s)=>Object.entries(r).map(([t,e])=>s.includes(t)?[t,e]:[t,0]).reduce((t,[e,o])=>({...t,[e]:o}),{}),V=(r,s)=>{const t={};return s.reduce((e,{id:o,delivery:d})=>{const c=[...e];return d.forEach(l=>{const p=c.findIndex(_=>_.start===l.start&&_.end===l.end);let u;r[o]-(t[o]??0)>l.quantity?u=l.quantity:u=r[o]-(t[o]??0),t[o]=(t[o]??0)+u,p>=0?c[p]={...c[p],products:[...c[p].products,{id:o,quantity:u}]}:c.push({start:l.start,end:l.end,products:[{id:o,quantity:u}]})}),c.sort((l,p)=>{const u=l.start.split("."),_=p.start.split(".");return+new Date(+u[2],+u[1]-1,+u[0])-+new Date(+_[2],+_[1]-1,+_[0])})},[]).map(e=>({...e,products:e.products.filter(o=>o.quantity!==0)})).filter(e=>e.products.length!==0)},f=(r,s,t)=>{const e=T(r,s),o=document.querySelector(".card__products");o.innerHTML=V(e,t).reduce((d,c)=>d+z(t,c),"")},S=r=>{const s=document.querySelector(".header__notification");s.textContent=`${r}`;const t=document.querySelector(".tabbar__notification");t.textContent=`${r}`},A=(r,s,{price:t,prevPrice:e,currency:o})=>{const d=document.querySelector(`[data-product=${s}] .product__price`),c=r*t,l=r*e;d.innerHTML=`
		<div class="price__current ${c.toString().length>4?"price__current_bigNum":""}">
			${c.toLocaleString("ru")}&nbsp;
			<span>${o}</span>
		</div>
		
		<div class="price__previous ${l.toString().length>4?"price__previous_bigNum":""}">
			${l.toLocaleString("ru")} ${o}
		</div>
	`},$=r=>{const s=document.querySelector(".goods__header_outOfStock > span");s.textContent=`Отсутствуют · ${r} товара`},F=(r,s,t)=>{const e=document.querySelector(".goods__header_normal > span");e.textContent=`${r} товаров · ${s.toLocaleString("ru")} ${t}`},O=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}],X="/shopping-cart/assets/Mir-f3178dfd.svg",Y="/shopping-cart/assets/Visa-0911e67b.svg",Z="/shopping-cart/assets/Mastercard-8f4656d1.svg",G="/shopping-cart/assets/Maestro-55eee7e2.svg",K={mir:X,visa:Y,mastercard:Z,maestro:G},L=({type:r,date:s,number:t},e,o)=>`
		<div class="paymentCard ${o}">
			<img class="paymentCard__paymentSystem" src="${K[r]}" alt="Payment system" />
			<span class="paymentCard__number">
				${e?`
						<span>${t}</span>
						<span>${s}</span>
					`:t}
			</span>
		</div>
	`,J=r=>{const s=document.querySelector(".paymentForm__body");s.innerHTML=O.reduce((t,e)=>t+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${e.id}" name="card" ${r===e.id?"checked":""}>
			${L(e,!1,"modal__paymentCard")}
		</label>
	`,"")},N=r=>{const s=document.querySelector(".orderDetails__cardWrapper");s.innerHTML=L(O.find(t=>t.id===r),!0,"orderDetails__card")},B=r=>{const s=document.querySelector(".payment__cardWrapper");s.innerHTML=L(O.find(t=>t.id===r),!1,"payment__card")},tt=()=>{const r=document.createElement("div");r.style.visibility="hidden",r.style.overflow="scroll",document.body.appendChild(r);const s=document.createElement("div");r.appendChild(s);const t=r.offsetWidth-s.offsetWidth;return r.parentNode.removeChild(r),t},v=[{id:"userAddress1",address:"Бишкек, улица Табышалиева, 57",type:"user",price:"1000 сом"},{id:"userAddress2",address:"Бишкек, улица Жукеева-Пудовкина, 77/1",type:"user",price:"1000 сом"},{id:"userAddress3",address:"Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",type:"user",price:"1000 сом"},{id:"pointAddress1",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21"},{id:"pointAddress2",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99"},{id:"pointAddress3",address:"г. Бишкек, улица Табышалиева, д. 57",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99"}],et="/shopping-cart/assets/Star-be4dc973.svg",q=({address:r,rating:s,information:t,type:e},o="",d="",c)=>`
		<span class="address ${o}">
			<span class="address__data">${r}</span>
			${e==="point"?`
					<span class="address__details ${d}">
						<span class="address__rating">
							<img class="address__star" src="${et}" alt="Rating" />
							${s??""}
						</span>
						${c??t}
					</span>
				`:""}
		</span>
	`,rt=r=>{const s=document.querySelectorAll("[data-modal-tab]"),t=document.querySelector(".addressForm__addressesWrapper"),e=v.find(o=>o.id===r).type;s.forEach(o=>{const d=o.dataset.modalTab??"";e===d?o.classList.add("tabs__tab_active"):o.classList.remove("tabs__tab_active")}),t.innerHTML=v.reduce((o,d)=>o+`
			<div data-delete-address="${d.id}" data-address-type="${d.type}" class="modal__line ${e!==d.type?"hide":""}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${d.id}" name="address" ${d.id===r?"checked":""}>
					${q(d,"","addressForm__rating","Пункт выдачи")}
				</label>
				
				<button data-delete-address="${d.id}" type="button"></button>
			</div>
		`,"")},I=r=>{const s=v.find(d=>d.id===r).type,t=document.querySelector(".card__addressWrapper");t.innerHTML=q(v.find(d=>d.id===r),"card__data");const e=document.querySelector(".card__title");e.textContent=s==="point"?"Пункт выдачи":"Курьер";const o=document.querySelector("[data-delivery-price]");o.textContent=v.find(d=>d.id===r).price??"Бесплатно"},W=r=>{const s=document.querySelector(".delivery__address");s.innerHTML=q(v.find(e=>e.id===r));const t=document.querySelector(".delivery__name");t.textContent=v.find(e=>e.id===r).type==="point"?"Доставка в пункт выдачи":"Доставка курьером"};let a=w,y=a.map(({id:r})=>r),m=H;const n={product1:1,product2:200,product3:2};let i=[],g="card1",b="userAddress2",h=[];const ot=()=>{const r=document.querySelectorAll(".goods__toggle"),s=document.querySelectorAll(".accordion");r.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.accordion,o=T(n,i);F(Object.values(o).reduce((d,c)=>d+c,0),a.reduce((d,{id:c,price:l})=>d+o[c]*l,0),a[0].currency),t.classList.toggle("goods__toggle_rotate"),e==="normal"&&t.parentElement.classList.toggle("goods__header_close"),s.forEach(d=>{if(d.dataset.accordion===e)return d.classList.toggle("accordion__close")})})})},st=()=>{const r=document.querySelector("[data-product-list-checkbox]"),s=document.querySelectorAll("[data-product]");s.forEach(t=>{const e=t.dataset.product??"";t.querySelector(".checkbox input").checked&&i.push(e)}),f(n,i,a),s.forEach(t=>{const e=t.dataset.product??"",o=t.querySelector(".checkbox input");o.addEventListener("click",()=>{o.checked?i=[...i.filter(d=>d!==e),e]:i=i.filter(d=>d!==e),r.checked=i.length>=y.length,f(n,i,a)})}),r.addEventListener("click",()=>{r.checked?i=[...y]:i=[],s.forEach(t=>{const e=t.querySelector(".checkbox input");e.checked=r.checked}),f(n,i,a)})},dt=()=>{document.querySelectorAll("[data-product]").forEach(s=>{const t=s.dataset.product??"",e=a.find(l=>l.id===t),o=s.querySelector(".counter__decr"),d=s.querySelector(".counter__data"),c=s.querySelector(".counter__incr");c.disabled=n[t]===e.totalQuantity,o.disabled=n[t]===1,o.addEventListener("click",()=>{d.innerText=`${+d.innerText-1}`,n[t]=+d.innerText,c.disabled=n[t]===e.totalQuantity,o.disabled=n[t]===1,A(n[t],t,e),f(n,i,a)}),c.addEventListener("click",()=>{d.innerText=`${+d.innerText+1}`,n[t]=+d.innerText,c.disabled=n[t]===e.totalQuantity,o.disabled=n[t]===1,A(n[t],t,e),f(n,i,a)})})},ct=r=>{document.querySelectorAll("[data-product]").forEach(t=>{const e=t.dataset.product??"",o=t.querySelector(".product__favorite"),d=t.querySelector(".product__delete");o.addEventListener("click",()=>{h=[...h,...a.filter(c=>c.id===e)],a=a.filter(c=>c.id!==e),i=i.filter(c=>c!==e),y=y.filter(c=>c!==e),Array.from(r).forEach(c=>{c.dataset.product===e&&c.remove()}),S(a.length),f(n,i,a),console.log("Favorites: ",h)}),d.addEventListener("click",()=>{a=a.filter(c=>c.id!==e),i=i.filter(c=>c!==e),y=y.filter(c=>c!==e),Array.from(r).forEach(c=>{c.dataset.product===e&&c.remove()}),S(a.length),f(n,i,a)})})},at=r=>{document.querySelectorAll("[data-product-out-of-stock]").forEach(t=>{const e=t.dataset.productOutOfStock,o=t.querySelector(".product__favorite"),d=t.querySelector(".product__delete");o.addEventListener("click",()=>{h=[...h,...m.filter(c=>c.id===e)],m=m.filter(c=>c.id!==e),Array.from(r).forEach(c=>{c.dataset.productOutOfStock===e&&c.remove()}),$(m.length),console.log("Favorites: ",h)}),d.addEventListener("click",()=>{m=m.filter(c=>c.id!==e),Array.from(r).forEach(c=>{c.dataset.productOutOfStock===e&&c.remove()}),$(m.length)})})},nt=r=>{r.classList.remove("modal_hide"),document.body.style.overflowY="hidden",document.body.style.marginRight=`${tt()}px`},k=(r,{selectedCard:s,selectedAddress:t})=>{r.closest(".modal").classList.add("modal_hide"),document.body.style.overflowY="auto",document.body.style.marginRight="0",s&&(N(s),B(s)),t&&(I(t),W(t))},it=()=>{const r=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(e=>{const o=e.dataset.modal;e.addEventListener("click",()=>{r.forEach(d=>{d.dataset.modal===o&&nt(d)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),k(e,{selectedCard:g,selectedAddress:b})})})},lt=()=>{const r=document.querySelector('[data-modal="payment"] .paymentForm');r.addEventListener("submit",s=>{s.preventDefault();const t=new FormData(r);g=Object.fromEntries(t).card,k(r,{selectedCard:g})})},ut=()=>{const r=document.querySelector(".payment__immediately input"),s=document.querySelectorAll(".payment__immediately span, .card__additional");r.addEventListener("click",()=>{const t=document.querySelector(".total__button");r.checked?s.forEach(e=>{e.classList.add("hide"),t.textContent="Оплатить 1 016 сом"}):s.forEach(e=>{e.classList.remove("hide"),t.textContent="Заказать"})})},pt=()=>{const r=document.querySelectorAll("[data-modal-tab]");r.forEach(t=>{const e=t.dataset.modalTab??"user";t.addEventListener("click",()=>{const o=document.querySelectorAll("[data-address-type]");r.forEach(d=>{d===t?d.classList.add("tabs__tab_active"):d.classList.remove("tabs__tab_active")}),o.forEach(d=>{const c=d.dataset.addressType??"";e===c?d.classList.remove("hide"):d.classList.add("hide")})})});const s=document.querySelector('[data-modal="address"] .addressForm');s.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(s);b=Object.fromEntries(e).address,k(s,{selectedAddress:b})})},mt=()=>{document.querySelectorAll(".modal__line[data-delete-address]").forEach(s=>{s.querySelector("button[data-delete-address]").addEventListener("click",()=>{s.remove()})})};document.addEventListener("DOMContentLoaded",()=>{const r=j(n,a),s=R(m);f(n,i,a),S(a.length),$(m.length),F(Object.values(n).reduce((t,e)=>t+e,0),a.reduce((t,{id:e,price:o})=>t+n[e]*o,0),a[0].currency),J(g),N(g),B(g),rt(b),I(b),W(b),ot(),st(),dt(),ct(r),at(s),it(),lt(),ut(),pt(),mt()});
