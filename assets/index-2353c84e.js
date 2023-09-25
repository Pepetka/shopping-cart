var j=Object.defineProperty;var z=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>(z(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=t(c);fetch(c.href,o)}})();const N=s=>s?`
			<div class="product__options">
				${Object.entries(s).reduce((e,[t,r])=>{const c=t==="Размер"?`<span class="product__size">${t}: ${r}</span>`:`<span>${t}: ${r}</span>`;return e+c},"")}
			</div>
		`:"",w="/shopping-cart/assets/Information-041d4582.svg",Z=({id:s,name:e,img:t,price:r,currency:c,prevPrice:o,options:a,company:n,totalQuantity:l},i)=>`
		<div data-product="${s}" class="product goods__product">
			<div>
				<label class="checkbox product__checkbox">
					<input type="checkbox" checked />
				</label>

				<div class="product__information">
					${a!=null&&a.Размер?`
							<div class="product__mobileSize">
								<span>${a.Размер}</span>
							</div>
						`:""}

					<img class="product__image" src="${t}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${r}&nbsp;
								<span>${c}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${o} ${c}
							</div>
						</div>

						<div class="product__name">
							${e}
						</div>

						${N(a)}

						<div class="product__company">
							<div>${n[0]}</div>
							<div>
								${n[1]}
								<img src="${w}" alt="information" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${i===1?"disabled":""}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data">${i}</span>
						
						<button class="counter__incr" ${i===l?"disabled":""}>
							<span>&plus;</span>
						</button>
					</div>
					
					${l<=10?`
								<div class="product__left">
									Осталось ${l} шт.
								</div>
							`:""}
					
					<div class="product__buttons">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${(r*i).toString().length>4?"price__current_bigNum":""}">
						${(r*i).toLocaleString("ru")}&nbsp;
						<span>${c}</span>
					</div>
					
					<div class="price__previous ${(o*i).toString().length>4?"price__previous_bigNum":""}">
						${(o*i).toLocaleString("ru")} ${c}
					</div>
			</div>
		</div>
	</div>
	`,M="/shopping-cart/assets/product1-9ac968b0.png",E="/shopping-cart/assets/product2-b7b6c6ca.png",I="/shopping-cart/assets/product3-7eab844b.png",Q=[{id:"product1",name:"Футболка UZcotton мужская",img:M,price:522,currency:"сом",prevPrice:1051,options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:E,price:10500,currency:"сом",prevPrice:11500,options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:I,price:247,currency:"сом",prevPrice:457,company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],V=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:M,options:{Цвет:"белый",Размер:"56"}},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:E,options:{Цвет:"прозрачный"}},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:I}],_=(s,e)=>Object.entries(s).map(([t,r])=>e.includes(t)?[t,r]:[t,0]).reduce((t,[r,c])=>({...t,[r]:c}),{}),g=[{id:"userAddress1",address:"Бишкек, улица Табышалиева, 57",type:"user",price:1e3,currency:"сом"},{id:"userAddress2",address:"Бишкек, улица Жукеева-Пудовкина, 77/1",type:"user",price:1e3,currency:"сом"},{id:"userAddress3",address:"Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",type:"user",price:1e3,currency:"сом"},{id:"pointAddress1",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",currency:"сом"},{id:"pointAddress2",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"},{id:"pointAddress3",address:"г. Бишкек, улица Табышалиева, д. 57",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"}],X=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}];var b=(s=>(s.EMPTY="Укажите имя",s.WRONG="Только кириллица",s))(b||{}),S=(s=>(s.EMPTY="Введите фамилию",s.WRONG="Только кириллица",s))(S||{}),$=(s=>(s.EMPTY="Укажите электронную почту",s.WRONG="Проверьте адрес электронной почты",s))($||{}),P=(s=>(s.EMPTY="Укажите номер телефона",s.WRONG="Формат: +9 999 999 99 99",s))(P||{}),O=(s=>(s.EMPTY="Укажите ИНН",s.WRONG="Проверьте ИНН",s))(O||{});const K=(s,e=!0)=>s.trim()===""&&e?b.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:b.WRONG,J=(s,e=!0)=>s.trim()===""&&e?$.EMPTY:s.trim()===""&&!e||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?null:$.WRONG,ee=(s,e=!0)=>s.trim()===""&&e?P.EMPTY:s.trim()===""&&!e||/^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(s)?null:P.WRONG,te=(s,e=!0)=>s.trim()===""&&e?O.EMPTY:s.trim()===""&&!e||/^\d{14}$/.test(s)?null:O.WRONG,se=(s,e=!0)=>s.trim()===""&&e?S.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:S.WRONG,q=(s,e,t=!0)=>{switch(s){case"name":return K(e,t);case"surname":return se(e,t);case"email":return J(e,t);case"phone":return ee(e,t);case"INN":return te(e,t)}};class re{constructor(){u(this,"products");u(this,"ids");u(this,"productsOutOfStock");u(this,"productsNum");u(this,"addresses");u(this,"cards");u(this,"selectedProducts");u(this,"selectedCard");u(this,"selectedAddress");u(this,"productsFavorite");u(this,"currency");u(this,"payImmediately");u(this,"userData");u(this,"validationErrors");this.products=Q,this.ids=this.products.map(({id:e})=>e),this.productsOutOfStock=V,this.productsNum=this.ids.reduce((e,t)=>({...e,[t]:1}),{}),this.addresses=g,this.cards=X,this.selectedProducts=[],this.selectedCard="card1",this.selectedAddress="userAddress2",this.productsFavorite=[],this.currency=this.products[0].currency,this.payImmediately=!1,this.userData={name:"",surname:"",email:"",phone:"",INN:""},this.validationErrors={name:null,surname:null,email:null,phone:null,INN:null}}getValidationErrors(){return Object.entries(this.userData).forEach(([e,t])=>{this.validationErrors[e]=q(e,t)}),this.validationErrors}setUserData(e,t){this.userData[e]=t,this.validationErrors[e]=q(e,t,!1)}setPayImmediately(e){this.payImmediately=e}getTotalPrice(){const e=_(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,price:c})=>t+e[r]*c,0)}getTotalPrevPrice(){const e=_(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,prevPrice:c})=>t+e[r]*c,0)}getTotalNum(){const e=_(this.productsNum,this.selectedProducts);return Object.values(e).reduce((t,r)=>t+r,0)}removeProducts(e){this.products.some(t=>t.id===e)?(this.products=this.products.filter(t=>t.id!==e),this.ids=this.products.map(({id:t})=>t),this.selectedProducts=this.selectedProducts.filter(t=>t!==e)):this.productsOutOfStock=this.productsOutOfStock.filter(t=>t.id!==e)}setProductsFavorite(e){if(this.products.some(t=>t.id===e)){const t=this.products.findIndex(r=>r.id!==e);this.productsFavorite.push(this.products[t]),this.products=this.products.filter(r=>r.id!==e),this.ids=this.products.map(({id:r})=>r),this.selectedProducts=this.selectedProducts.filter(r=>r!==e)}else{const t=this.productsOutOfStock.findIndex(r=>r.id!==e);this.productsFavorite.push(this.productsOutOfStock[t]),this.productsOutOfStock=this.productsOutOfStock.filter(r=>r.id!==e)}}setSelectedProducts(e){if(!e){this.selectedProducts=[...this.ids];return}const t=new Set(this.selectedProducts);t.add(e),this.selectedProducts=Array.from(t)}removeSelectedProducts(e){if(!e){this.selectedProducts=[];return}this.selectedProducts=this.selectedProducts.filter(t=>t!==e)}setSelectedCard(e){this.selectedCard=e}setSelectedAddress(e){this.selectedAddress=e}setProductsNum(e,t){this.productsNum[e]=t}removeAddress(e){this.addresses=this.addresses.filter(t=>t.id!==e)}}const d=new re,F=()=>{const s=document.querySelector(".header__notification");s.textContent=`${d.products.length}`;const e=document.querySelector(".tabbar__notification");e.textContent=`${d.products.length}`},D=()=>{const s=d.getTotalNum(),e=d.getTotalPrice(),t=d.currency,r=document.querySelector(".goods__header_normal > span");r.textContent=`${s} товаров · ${e.toLocaleString("ru")} ${t}`},ce=()=>{const s=document.querySelector(".goods__list_normal");s.innerHTML=d.products.reduce((e,t)=>e+Z(t,d.productsNum[t.id]),""),F(),D()},de=({id:s,name:e,img:t,options:r})=>`
		<div data-product="${s}" class="product goods__product">
			<div>
				<div class="product__information">
					${r!=null&&r.Размер?`
							<div class="product__mobileSize">
								<span>${r.Размер}</span>
							</div>
						`:""}

					<img class="product__image product__image_outOfStock" src="${t}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<div class="product__name">
							${e}
						</div>

						${N(r)}
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
	`,W=()=>{const s=document.querySelector(".goods__header_outOfStock > span");s.textContent=`Отсутствуют · ${d.productsOutOfStock.length} товара`},oe=()=>{const s=document.querySelector(".goods__list_outOfStock");s.innerHTML=d.productsOutOfStock.reduce((e,t)=>e+de(t),""),W()},ae=(s,{start:e,end:t,products:r})=>`
		<div class="card__line">
			<div class="card__title">${e}&#8212;${t}</div>
			<div class="card__imagesList">
				${r.reduce((c,{id:o,quantity:a})=>{var n;return c+`
						<div class="card__image">
							${a>1?`
									<span class="notification card__notification">${a}</span>
								`:""}
							<img src="${(n=s.find(l=>l.id===o))==null?void 0:n.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`,T={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},R=(s,e)=>{const t={};return e.reduce((r,{id:c,delivery:o})=>{const a=[...r];return o.forEach(n=>{const l=a.findIndex(p=>p.start===n.start&&p.end===n.end);let i;s[c]-(t[c]??0)>n.quantity?i=n.quantity:i=s[c]-(t[c]??0),t[c]=(t[c]??0)+i,l>=0?a[l]={...a[l],products:[...a[l].products,{id:c,quantity:i}]}:a.push({start:n.start,end:n.end,products:[{id:c,quantity:i}]})}),a.sort((n,l)=>{const i=n.start.split("."),p=l.start.split(".");return+new Date(+i[2],+i[1]-1,+i[0])-+new Date(+p[2],+p[1]-1,+p[0])})},[]).map(r=>({...r,products:r.products.filter(c=>c.quantity!==0)})).filter(r=>r.products.length!==0).map(({start:r,end:c,products:o})=>{let a=`${+r.split(".")[0]} ${T[r.split(".")[1]]}`,n=`${+c.split(".")[0]} ${T[c.split(".")[1]]}`;return a.split(" ")[1]===n.split(" ")[1]?a=a.split(" ")[0]:n=`<br/>${n}`,{start:a,end:n,products:o}})},m=()=>{const s=_(d.productsNum,d.selectedProducts),e=document.querySelector(".card__products");e.innerHTML=R(s,d.products).reduce((t,r)=>t+ae(d.products,r),"")},ne="/shopping-cart/assets/Mir-f3178dfd.svg",ie="/shopping-cart/assets/Visa-0911e67b.svg",ue="/shopping-cart/assets/Mastercard-8f4656d1.svg",le="/shopping-cart/assets/Maestro-55eee7e2.svg",pe={mir:ne,visa:ie,mastercard:ue,maestro:le},A=({type:s,date:e,number:t},r,c)=>`
		<div class="paymentCard ${c}">
			<img class="paymentCard__paymentSystem" src="${pe[s]}" alt="Payment system" />
			<span class="paymentCard__number">
				${r?`
						<span>${t}</span>
						<span>${e}</span>
					`:t}
			</span>
		</div>
	`,me=()=>{const s=document.querySelector(".paymentForm__body");s.innerHTML=d.cards.reduce((e,t)=>e+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${t.id}" name="card" ${d.selectedCard===t.id?"checked":""}>
			${A(t,!1,"modal__paymentCard")}
		</label>
	`,"")},B=()=>{const s=document.querySelector(".orderDetails__cardWrapper");s.innerHTML=A(d.cards.find(e=>e.id===d.selectedCard),!0,"orderDetails__card")},H=()=>{const s=document.querySelector(".payment__cardWrapper");s.innerHTML=A(d.cards.find(e=>e.id===d.selectedCard),!1,"payment__card")},_e="/shopping-cart/assets/Star-be4dc973.svg",L=({address:s,rating:e,information:t,type:r},c="",o="",a)=>`
		<span class="address ${c}">
			<span class="address__data">${s}</span>
			${r==="point"?`
					<span class="address__details ${o}">
						<span class="address__rating">
							<img class="address__star" src="${_e}" alt="Rating" />
							${e??""}
						</span>
						${a??t}
					</span>
				`:""}
		</span>
	`,ve=()=>{const s=document.querySelectorAll("[data-modal-tab]"),e=document.querySelector(".addressForm__addressesWrapper"),t=d.addresses.find(r=>r.id===d.selectedAddress).type;s.forEach(r=>{const c=r.dataset.modalTab??"";t===c?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),e.innerHTML=d.addresses.reduce((r,c)=>r+`
			<div data-delete-address="${c.id}" data-address-type="${c.type}" class="modal__line ${t!==c.type?"hide":""}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${c.id}" name="address" ${c.id===d.selectedAddress?"checked":""}>
					${L(c,"","addressForm__rating","Пункт выдачи")}
				</label>
				
				<button data-delete-address="${c.id}" type="button"></button>
			</div>
		`,"")},v=()=>{const s=document.querySelector(".totalPrice__price");s.innerHTML=`
		${d.getTotalPrice().toLocaleString("ru")}
		<span>${d.currency}</span>
	`},f=()=>{const s=document.querySelector("[data-total-prev]");s.innerHTML=`
		${d.getTotalNum()} товара
		<div class="totalPrice__price_small">
			${d.getTotalPrevPrice().toLocaleString("ru")}
			<span>${d.currency}</span>
		</div>
	`},h=()=>{const s=document.querySelector("[data-total-sale]");s.innerHTML=`
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(d.getTotalPrevPrice()-d.getTotalPrice()).toLocaleString("ru")}
			<span>${d.currency}</span>
		</div>
	`},fe=(s,e)=>{const t=document.querySelector("[data-total-delivery-price]");t.innerHTML=`
		Доставка
		<div class="totalPrice__price_small">
			${s?`${s.toLocaleString("ru")} ${e}`:"Бесплатно"}
		</div>
	`},Y=()=>{const s=d.addresses.find(c=>c.id===d.selectedAddress),e=document.querySelector(".card__addressWrapper");e.innerHTML=L(d.addresses.find(c=>c.id===d.selectedAddress),"card__data");const t=document.querySelector(".card__title");t.textContent=s.type==="point"?"Пункт выдачи":"Курьер";const r=document.querySelector("[data-delivery-price]");r.textContent=s.price?`${s.price} ${s.currency}`:"Бесплатно",fe(s.price,s.currency)},G=()=>{const s=document.querySelector(".delivery__address");s.innerHTML=L(g.find(t=>t.id===d.selectedAddress));const e=document.querySelector(".delivery__name");e.textContent=g.find(t=>t.id===d.selectedAddress).type==="point"?"Доставка в пункт выдачи":"Доставка курьером"},he=()=>{const s=document.querySelectorAll(".goods__toggle"),e=document.querySelectorAll(".accordion");s.forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.accordion;D(),t.classList.toggle("goods__toggle_rotate"),r==="normal"&&t.parentElement.classList.toggle("goods__header_close"),e.forEach(c=>{if(c.dataset.accordion===r)return c.classList.toggle("accordion__close")})})})},ye=s=>{const e=document.querySelector("[data-product-list-checkbox]"),t=document.querySelectorAll("[data-product]:has(.checkbox)");e.checked=!0,t.forEach(r=>{const c=r.dataset.product??"",o=r.querySelector(".checkbox input");o.checked=s.includes(c),o.checked||(e.checked=!1)})},y=()=>{const s=document.querySelector(".delivery__date"),e=_(d.productsNum,d.selectedProducts),t=R(e,d.products),r=t[t.length-1];s.textContent=r?`${r.start}–${r.end.replace(/<br\/>/gi,"")}`:"Выберете товары"},ge=()=>{const s=document.querySelector("[data-product-list-checkbox]"),e=document.querySelectorAll("[data-product]:has(.checkbox)");ye(d.selectedProducts),m(),e.forEach(t=>{const r=t.dataset.product??"",c=t.querySelector(".checkbox input");c.addEventListener("click",()=>{c.checked?d.setSelectedProducts(r):d.removeSelectedProducts(r),s.checked=d.selectedProducts.length===d.ids.length,m(),y(),v(),f(),h()})}),s.addEventListener("click",()=>{s.checked?d.setSelectedProducts():d.removeSelectedProducts(),e.forEach(t=>{const r=t.querySelector(".checkbox input");r.checked=s.checked}),m(),y(),v(),f(),h()})},be=(s,e,{price:t,prevPrice:r,currency:c})=>{const o=document.querySelector(`[data-product=${e}] .product__price`),a=s*t,n=s*r;o.innerHTML=`
		<div class="price__current ${a.toString().length>4?"price__current_bigNum":""}">
			${a.toLocaleString("ru")}&nbsp;
			<span>${c}</span>
		</div>
		
		<div class="price__previous ${n.toString().length>4?"price__previous_bigNum":""}">
			${n.toLocaleString("ru")} ${c}
		</div>
	`},x=(s,e,t,r,c,o)=>{r.innerText=`${+r.innerText+o}`,d.setProductsNum(s,+r.innerText),e.disabled=d.productsNum[s]===c.totalQuantity,t.disabled=d.productsNum[s]===1,be(d.productsNum[s],s,c),m(),y(),v(),f(),h()},Se=()=>{document.querySelectorAll("[data-product]:has(.checkbox)").forEach(e=>{const t=e.dataset.product??"",r=d.products.find(n=>n.id===t),c=e.querySelector(".counter__decr"),o=e.querySelector(".counter__data"),a=e.querySelector(".counter__incr");a.disabled=d.productsNum[t]===r.totalQuantity,c.disabled=d.productsNum[t]===1,c.addEventListener("click",()=>{x(t,a,c,o,r,-1)}),a.addEventListener("click",()=>{x(t,a,c,o,r,1)})})},C=s=>{s.remove(),F(),W(),m()},$e=()=>{document.querySelectorAll("[data-product]").forEach(e=>{const t=e.dataset.product??"",r=e.querySelector(".product__favorite"),c=e.querySelector(".product__delete");r.addEventListener("click",()=>{d.setProductsFavorite(t),C(e)}),c.addEventListener("click",()=>{d.removeProducts(t),C(e)})})},Pe=()=>{const s=document.createElement("div");s.style.visibility="hidden",s.style.overflow="scroll",document.body.appendChild(s);const e=document.createElement("div");s.appendChild(e);const t=s.offsetWidth-e.offsetWidth;return s.parentNode.removeChild(s),t},Oe=s=>{s.classList.remove("modal_hide"),document.body.style.overflowY="hidden",document.body.style.marginRight=`${Pe()}px`},k=s=>{const e=s.closest(".modal"),t=e.dataset.modal??"";e.classList.add("modal_hide"),document.body.style.overflowY="auto",document.body.style.marginRight="0",t==="payment"?(B(),H()):(Y(),G())},Ae=()=>{const s=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(r=>{const c=r.dataset.modal;r.addEventListener("click",()=>{s.forEach(o=>{o.dataset.modal===c&&Oe(o)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(r=>{r.addEventListener("click",c=>{c.stopPropagation(),k(r)})})},Le=()=>{const s=document.querySelector('[data-modal="payment"] .paymentForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);d.setSelectedCard(r.card),k(s)})},ke=()=>{const s=document.querySelector(".payment__immediately input"),e=document.querySelectorAll(".payment__immediately span, .card__additional");s.addEventListener("click",()=>{const t=document.querySelector(".total__button");s.checked?(e.forEach(r=>{r.classList.add("hide"),t.textContent="Оплатить 1 016 сом"}),d.setPayImmediately(!0)):(e.forEach(r=>{r.classList.remove("hide"),t.textContent="Заказать"}),d.setPayImmediately(!1))})},qe=s=>{document.querySelectorAll("[data-address-type]").forEach(t=>{const r=t.dataset.addressType??"";s===r?t.classList.remove("hide"):t.classList.add("hide")})},Te=()=>{const s=document.querySelectorAll("[data-modal-tab]");s.forEach(e=>{const t=e.dataset.modalTab??"user";e.addEventListener("click",()=>{s.forEach(r=>{r===e?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),qe(t)})})},xe=()=>{const s=document.querySelector('[data-modal="address"] .addressForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);d.setSelectedAddress(r.address),k(s)}),Te()},Ce=()=>{document.querySelectorAll(".modal__line[data-delete-address]").forEach(e=>{const t=e.querySelector("button[data-delete-address]"),r=t.dataset.deleteAddress??"";t.addEventListener("click",()=>{e.remove(),d.removeAddress(r)})})},U=(s,e)=>{const t=s.dataset.formBlock,r=s.querySelector(".form__error");if(e[t]){s.classList.add("form__block_error"),r.textContent=e[t];return}t==="INN"?r.textContent="Для таможенного оформления":r.textContent="",s.classList.remove("form__block_error")},Ne=s=>{const e=s.value.trim();if(e==="")return;const t=e.replace(/\D/g,""),r=`+${t.substring(0,1)} ${t.substring(1,4)} ${t.substring(4,7)} ${t.substring(7,9)} ${t.substring(9,11)}`;s.value=r.trim()},Me=()=>{document.querySelectorAll("[data-form-block]").forEach(e=>{const t=e.querySelector("input");t.addEventListener("input",()=>{e.dataset.formBlock==="phone"&&Ne(t),d.setUserData(t.name,t.value)}),t.addEventListener("blur",()=>{const r=d.validationErrors;U(e,r)})})},Ee=()=>{const s=document.querySelector(".total__button"),e=document.querySelectorAll("[data-form-block]");s.addEventListener("click",()=>{const t=d.getValidationErrors();e.forEach(r=>{U(r,t)})})};document.addEventListener("DOMContentLoaded",()=>{ce(),oe(),m(),y(),v(),f(),h(),me(),B(),H(),ve(),Y(),G(),he(),ge(),Se(),$e(),Ae(),Le(),ke(),xe(),Ce(),Me(),Ee()});
