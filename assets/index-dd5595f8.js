var w=Object.defineProperty;var z=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(z(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(d){if(d.ep)return;d.ep=!0;const o=t(d);fetch(d.href,o)}})();const M=s=>s?`
			<div class="product__options">
				${Object.entries(s).reduce((e,[t,r])=>{const d=t==="Размер"?`<span class="product__size">${t}: ${r}</span>`:`<span>${t}: ${r}</span>`;return e+d},"")}
			</div>
		`:"",Q="/shopping-cart/assets/Information-041d4582.svg",Z=({id:s,name:e,img:t,price:r,currency:d,prevPrice:o,options:a,company:n,totalQuantity:i},u)=>`
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
								<span>${d}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${o} ${d}
							</div>
						</div>

						<div class="product__name">
							${e}
						</div>

						${M(a)}

						<div class="product__company">
							<div>${n[0]}</div>
							<div>
								${n[1]}
								<img src="${Q}" alt="information" />
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
						
						<span class="counter__data" contenteditable="true">${u}</span>
						
						<button class="counter__incr" ${u===i?"disabled":""}>
							<span>&plus;</span>
						</button>
					</div>
					
					${i<=10?`
								<div class="product__left">
									Осталось ${i} шт.
								</div>
							`:""}
					
					<div class="product__buttons">
						<button class="product__favorite"></button>
						<button class="product__delete"></button>
					</div>
				</div>

				<div class="price product__price">
					<div class="price__current ${(r*u).toString().length>4?"price__current_bigNum":""}">
						${(r*u).toLocaleString("ru")}&nbsp;
						<span>${d}</span>
					</div>
					
					<div class="price__previous ${(o*u).toString().length>4?"price__previous_bigNum":""}">
						${(o*u).toLocaleString("ru")} ${d}
					</div>
			</div>
		</div>
	</div>
	`,E="/shopping-cart/assets/product1-9ac968b0.png",D="/shopping-cart/assets/product2-b7b6c6ca.png",I="/shopping-cart/assets/product3-7eab844b.png",V=[{id:"product1",name:"Футболка UZcotton мужская",img:E,price:522,currency:"сом",prevPrice:1051,options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:D,price:10500,currency:"сом",prevPrice:11500,options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:I,price:247,currency:"сом",prevPrice:457,company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],X=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:E,options:{Цвет:"белый",Размер:"56"}},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:D,options:{Цвет:"прозрачный"}},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:I}],_=(s,e)=>Object.entries(s).map(([t,r])=>e.includes(t)?[t,r]:[t,0]).reduce((t,[r,d])=>({...t,[r]:d}),{}),v=[{id:"userAddress1",address:"Бишкек, улица Табышалиева, 57",type:"user",price:1e3,currency:"сом"},{id:"userAddress2",address:"Бишкек, улица Жукеева-Пудовкина, 77/1",type:"user",price:1e3,currency:"сом"},{id:"userAddress3",address:"Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",type:"user",price:1e3,currency:"сом"},{id:"pointAddress1",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",currency:"сом"},{id:"pointAddress2",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"},{id:"pointAddress3",address:"г. Бишкек, улица Табышалиева, д. 57",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"}],b=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}];var $=(s=>(s.EMPTY="Укажите имя",s.WRONG="Укажите имя",s))($||{}),P=(s=>(s.EMPTY="Введите фамилию",s.WRONG="Введите фамилию",s))(P||{}),O=(s=>(s.EMPTY="Укажите электронную почту",s.WRONG="Проверьте адрес электронной почты",s))(O||{}),A=(s=>(s.EMPTY="Укажите номер телефона",s.WRONG="Формат: +9 999 999 99 99",s))(A||{}),L=(s=>(s.EMPTY="Укажите ИНН",s.WRONG="Проверьте ИНН",s))(L||{});const J=(s,e=!0)=>s.trim()===""&&e?$.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:$.WRONG,K=(s,e=!0)=>s.trim()===""&&e?O.EMPTY:s.trim()===""&&!e||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?null:O.WRONG,ee=(s,e=!0)=>s.trim()===""&&e?A.EMPTY:s.trim()===""&&!e||/^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(s)?null:A.WRONG,te=(s,e=!0)=>s.trim()===""&&e?L.EMPTY:s.trim()===""&&!e||/^\d{14}$/.test(s)?null:L.WRONG,se=(s,e=!0)=>s.trim()===""&&e?P.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:P.WRONG,q=(s,e,t=!0)=>{switch(s){case"name":return J(e,t);case"surname":return se(e,t);case"email":return K(e,t);case"phone":return ee(e,t);case"INN":return te(e,t)}};class re{constructor(){l(this,"products");l(this,"ids");l(this,"productsOutOfStock");l(this,"productsNum");l(this,"addresses");l(this,"cards");l(this,"selectedProducts");l(this,"selectedCard");l(this,"selectedAddress");l(this,"productsFavorite");l(this,"currency");l(this,"payImmediately");l(this,"userData");l(this,"validationErrors");l(this,"selectedCardData");l(this,"selectedAddressData");this.products=V,this.ids=this.products.map(({id:e})=>e),this.productsOutOfStock=X,this.productsNum=this.ids.reduce((e,t)=>({...e,[t]:1}),{}),this.addresses=v,this.cards=b,this.selectedProducts=[],this.selectedCard="card1",this.selectedAddress="userAddress2",this.productsFavorite=[],this.currency=this.products[0].currency,this.payImmediately=!1,this.userData={name:"",surname:"",email:"",phone:"",INN:""},this.validationErrors={name:null,surname:null,email:null,phone:null,INN:null},this.selectedCardData=b.find(e=>e.id===this.selectedCard),this.selectedAddressData=v.find(e=>e.id===this.selectedAddress)}getValidationErrors(){return Object.entries(this.userData).forEach(([e,t])=>{this.validationErrors[e]=q(e,t)}),this.validationErrors}setUserData(e,t){this.userData[e]=t,this.validationErrors[e]=q(e,t,!1)}setPayImmediately(e){this.payImmediately=e}getTotalPrice(){const e=_(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,price:d})=>t+e[r]*d,0)}getTotalPrevPrice(){const e=_(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,prevPrice:d})=>t+e[r]*d,0)}getTotalNum(){const e=_(this.productsNum,this.selectedProducts);return Object.values(e).reduce((t,r)=>t+r,0)}removeProducts(e){this.products.some(t=>t.id===e)?(this.products=this.products.filter(t=>t.id!==e),this.ids=this.products.map(({id:t})=>t),this.selectedProducts=this.selectedProducts.filter(t=>t!==e)):this.productsOutOfStock=this.productsOutOfStock.filter(t=>t.id!==e)}getSelectedProductsWithNums(){return this.selectedProducts.reduce((e,t)=>({...e,[t]:this.productsNum[t]}),{})}setProductsFavorite(e){if(this.products.some(t=>t.id===e)){const t=this.products.findIndex(r=>r.id!==e);this.productsFavorite.push(this.products[t]),this.products=this.products.filter(r=>r.id!==e),this.ids=this.products.map(({id:r})=>r),this.selectedProducts=this.selectedProducts.filter(r=>r!==e)}else{const t=this.productsOutOfStock.findIndex(r=>r.id!==e);this.productsFavorite.push(this.productsOutOfStock[t]),this.productsOutOfStock=this.productsOutOfStock.filter(r=>r.id!==e)}}setSelectedProducts(e){if(!e){this.selectedProducts=[...this.ids];return}const t=new Set(this.selectedProducts);t.add(e),this.selectedProducts=Array.from(t)}removeSelectedProducts(e){if(!e){this.selectedProducts=[];return}this.selectedProducts=this.selectedProducts.filter(t=>t!==e)}setSelectedCard(e){this.selectedCard=e,this.selectedCardData=b.find(t=>t.id===this.selectedCard)}setSelectedAddress(e){this.selectedAddress=e,this.selectedAddressData=v.find(t=>t.id===this.selectedAddress)}setProductsNum(e,t){this.productsNum[e]=t}removeAddress(e){this.addresses=this.addresses.filter(t=>t.id!==e)}canIOrderProducts(){return Object.values(this.validationErrors).every(e=>!e)&&this.selectedProducts.length>0&&this.selectedCard&&this.selectedAddress}}const c=new re,F=()=>{const s=document.querySelector(".header__notification");s.textContent=`${c.products.length}`;const e=document.querySelector(".tabbar__notification");e.textContent=`${c.products.length}`},W=()=>{const s=c.getTotalNum(),e=c.getTotalPrice(),t=c.currency,r=document.querySelector(".goods__header_normal > span");r.textContent=`${s} товаров · ${e.toLocaleString("ru")} ${t}`},de=()=>{const s=document.querySelector(".goods__list_normal");s.innerHTML=c.products.reduce((e,t)=>e+Z(t,c.productsNum[t.id]),""),F(),W()},ce=({id:s,name:e,img:t,options:r})=>`
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

						${M(r)}
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
	`,R=()=>{const s=document.querySelector(".goods__header_outOfStock > span");s.textContent=`Отсутствуют · ${c.productsOutOfStock.length} товара`},oe=()=>{const s=document.querySelector(".goods__list_outOfStock");s.innerHTML=c.productsOutOfStock.reduce((e,t)=>e+ce(t),""),R()},ae=(s,{start:e,end:t,products:r})=>`
		<div class="card__line">
			<div class="card__title">${e}&#8212;${t}</div>
			<div class="card__imagesList">
				${r.reduce((d,{id:o,quantity:a})=>{var n;return d+`
						<div class="card__image">
							${a>1?`
									<span class="notification card__notification">${a}</span>
								`:""}
							<img src="${(n=s.find(i=>i.id===o))==null?void 0:n.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`,N={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},B=(s,e)=>{const t={};return e.reduce((r,{id:d,delivery:o})=>{const a=[...r];return o.forEach(n=>{const i=a.findIndex(p=>p.start===n.start&&p.end===n.end);let u;s[d]-(t[d]??0)>n.quantity?u=n.quantity:u=s[d]-(t[d]??0),t[d]=(t[d]??0)+u,i>=0?a[i]={...a[i],products:[...a[i].products,{id:d,quantity:u}]}:a.push({start:n.start,end:n.end,products:[{id:d,quantity:u}]})}),a.sort((n,i)=>{const u=n.start.split("."),p=i.start.split(".");return+new Date(+u[2],+u[1]-1,+u[0])-+new Date(+p[2],+p[1]-1,+p[0])})},[]).map(r=>({...r,products:r.products.filter(d=>d.quantity!==0)})).filter(r=>r.products.length!==0).map(({start:r,end:d,products:o})=>{let a=`${+r.split(".")[0]} ${N[r.split(".")[1]]}`,n=`${+d.split(".")[0]} ${N[d.split(".")[1]]}`;return a.split(" ")[1]===n.split(" ")[1]?a=a.split(" ")[0]:n=`<br/>${n}`,{start:a,end:n,products:o}})},m=()=>{const s=_(c.productsNum,c.selectedProducts),e=document.querySelector(".card__products");e.innerHTML=B(s,c.products).reduce((t,r)=>t+ae(c.products,r),"")},ne="/shopping-cart/assets/Mir-f3178dfd.svg",ie="/shopping-cart/assets/Visa-0911e67b.svg",ue="/shopping-cart/assets/Mastercard-8f4656d1.svg",le="/shopping-cart/assets/Maestro-55eee7e2.svg",pe={mir:ne,visa:ie,mastercard:ue,maestro:le},T=({type:s,date:e,number:t},r,d)=>`
		<div class="paymentCard ${d}">
			<img class="paymentCard__paymentSystem" src="${pe[s]}" alt="Payment system" />
			<span class="paymentCard__number">
				${r?`
						<span>${t}</span>
						<span>${e}</span>
					`:t}
			</span>
		</div>
	`,me=()=>{const s=document.querySelector(".paymentForm__body");s.innerHTML=c.cards.reduce((e,t)=>e+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${t.id}" name="card" ${c.selectedCard===t.id?"checked":""}>
			${T(t,!1,"modal__paymentCard")}
		</label>
	`,"")},H=()=>{const s=document.querySelector(".orderDetails__cardWrapper");s.innerHTML=T(c.cards.find(e=>e.id===c.selectedCard),!0,"orderDetails__card")},Y=()=>{const s=document.querySelector(".payment__cardWrapper");s.innerHTML=T(c.cards.find(e=>e.id===c.selectedCard),!1,"payment__card")},_e="/shopping-cart/assets/Star-be4dc973.svg",k=({address:s,rating:e,information:t,type:r},d="",o="",a)=>`
		<span class="address ${d}">
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
	`,ve=()=>{const s=document.querySelectorAll("[data-modal-tab]"),e=document.querySelector(".addressForm__addressesWrapper"),t=c.addresses.find(r=>r.id===c.selectedAddress).type;s.forEach(r=>{const d=r.dataset.modalTab??"";t===d?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),e.innerHTML=c.addresses.reduce((r,d)=>r+`
			<div data-delete-address="${d.id}" data-address-type="${d.type}" class="modal__line ${t!==d.type?"hide":""}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${d.id}" name="address" ${d.id===c.selectedAddress?"checked":""}>
					${k(d,"","addressForm__rating","Пункт выдачи")}
				</label>
				
				<button data-delete-address="${d.id}" type="button"></button>
			</div>
		`,"")},f=()=>{const s=document.querySelector(".totalPrice__price");s.innerHTML=`
		${c.getTotalPrice().toLocaleString("ru")}
		<span>${c.currency}</span>
	`},h=()=>{const s=document.querySelector("[data-total-prev]");s.innerHTML=`
		${c.getTotalNum()} товара
		<div class="totalPrice__price_small">
			${c.getTotalPrevPrice().toLocaleString("ru")}
			<span>${c.currency}</span>
		</div>
	`},y=()=>{const s=document.querySelector("[data-total-sale]");s.innerHTML=`
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(c.getTotalPrevPrice()-c.getTotalPrice()).toLocaleString("ru")}
			<span>${c.currency}</span>
		</div>
	`},fe=(s,e)=>{const t=document.querySelector("[data-total-delivery-price]");t.innerHTML=`
		Доставка
		<div class="totalPrice__price_small">
			${s?`${s.toLocaleString("ru")} ${e}`:"Бесплатно"}
		</div>
	`},G=()=>{const s=c.addresses.find(d=>d.id===c.selectedAddress),e=document.querySelector(".card__addressWrapper");e.innerHTML=k(c.addresses.find(d=>d.id===c.selectedAddress),"card__data");const t=document.querySelector(".card__title");t.textContent=s.type==="point"?"Пункт выдачи":"Курьер";const r=document.querySelector("[data-delivery-price]");r.textContent=s.price?`${s.price} ${s.currency}`:"Бесплатно",fe(s.price,s.currency)},U=()=>{const s=document.querySelector(".delivery__address");s.innerHTML=k(v.find(t=>t.id===c.selectedAddress));const e=document.querySelector(".delivery__name");e.textContent=v.find(t=>t.id===c.selectedAddress).type==="point"?"Доставка в пункт выдачи":"Доставка курьером"},he=()=>{const s=document.querySelectorAll(".goods__toggle"),e=document.querySelectorAll(".accordion");s.forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.accordion;W(),t.classList.toggle("goods__toggle_rotate"),r==="normal"&&t.parentElement.classList.toggle("goods__header_close"),e.forEach(d=>{if(d.dataset.accordion===r)return d.classList.toggle("accordion__close")})})})},ye=s=>{const e=document.querySelector("[data-product-list-checkbox]"),t=document.querySelectorAll("[data-product]:has(.checkbox)");e.checked=!0,t.forEach(r=>{const d=r.dataset.product??"",o=r.querySelector(".checkbox input");o.checked=s.includes(d),o.checked||(e.checked=!1)})},g=()=>{const s=document.querySelector(".delivery__date"),e=_(c.productsNum,c.selectedProducts),t=B(e,c.products),r=t[t.length-1];s.textContent=r?`${r.start}–${r.end.replace(/<br\/>/gi,"")}`:"Выберете товары"},ge=()=>{const s=document.querySelector("[data-product-list-checkbox]"),e=document.querySelectorAll("[data-product]:has(.checkbox)");ye(c.selectedProducts),m(),e.forEach(t=>{const r=t.dataset.product??"",d=t.querySelector(".checkbox input");d.addEventListener("click",()=>{d.checked?c.setSelectedProducts(r):c.removeSelectedProducts(r),s.checked=c.selectedProducts.length===c.ids.length,m(),g(),f(),h(),y()})}),s.addEventListener("click",()=>{s.checked?c.setSelectedProducts():c.removeSelectedProducts(),e.forEach(t=>{const r=t.querySelector(".checkbox input");r.checked=s.checked}),m(),g(),f(),h(),y()})},be=(s,e,{price:t,prevPrice:r,currency:d})=>{const o=document.querySelector(`[data-product=${e}] .product__price`),a=document.querySelector(`[data-product=${e}] .product__mobilePrice`),n=s*t,i=s*r;o.innerHTML=`
		<div class="price__current ${n.toString().length>4?"price__current_bigNum":""}">
			${n.toLocaleString("ru")}&nbsp;
			<span>${d}</span>
		</div>
		
		<div class="price__previous ${i.toString().length>4?"price__previous_bigNum":""}">
			${i.toLocaleString("ru")} ${d}
		</div>
	`,a.innerHTML=`
		<div class="price__current price__current_bigNum">
			${n.toLocaleString("ru")}&nbsp;
			<span>${d}</span>
		</div>
		
		<div class="price__previous price__previous_bigNum">
			${i.toLocaleString("ru")} ${d}
		</div>
	`},S=(s,e,t,r,d)=>{c.setProductsNum(s,+r.innerText),e.disabled=c.productsNum[s]===d.totalQuantity,t.disabled=c.productsNum[s]===1,be(c.productsNum[s],s,d),m(),g(),f(),h(),y()},Se=()=>{document.querySelectorAll("[data-product]:has(.checkbox)").forEach(e=>{const t=e.dataset.product??"",r=c.products.find(n=>n.id===t),d=e.querySelector(".counter__decr"),o=e.querySelector(".counter__data"),a=e.querySelector(".counter__incr");a.disabled=c.productsNum[t]===r.totalQuantity,d.disabled=c.productsNum[t]===1,d.addEventListener("click",()=>{o.innerText=`${+o.innerText-1}`,S(t,a,d,o,r)}),a.addEventListener("click",()=>{o.innerText=`${+o.innerText+1}`,S(t,a,d,o,r)}),o.addEventListener("blur",()=>{let n=+o.innerText.replace(/\D/g,"");n<1&&(n=1),n>r.totalQuantity&&(n=r.totalQuantity),o.innerText=`${n}`,S(t,a,d,o,r)}),o.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),o.blur())})})},x=s=>{s.remove(),F(),R(),m()},$e=()=>{document.querySelectorAll("[data-product]").forEach(e=>{const t=e.dataset.product??"",r=e.querySelector(".product__favorite"),d=e.querySelector(".product__delete");r.addEventListener("click",()=>{c.setProductsFavorite(t),x(e)}),d.addEventListener("click",()=>{c.removeProducts(t),x(e)})})},Pe=()=>{const s=document.createElement("div");s.style.visibility="hidden",s.style.overflow="scroll",document.body.appendChild(s);const e=document.createElement("div");s.appendChild(e);const t=s.offsetWidth-e.offsetWidth;return s.parentNode.removeChild(s),t},Oe=s=>{s.classList.remove("modal_hide"),document.body.style.overflowY="hidden",document.body.style.marginRight=`${Pe()}px`},C=s=>{const e=s.closest(".modal"),t=e.dataset.modal??"";e.classList.add("modal_hide"),document.body.style.overflowY="auto",document.body.style.marginRight="0",t==="payment"?(H(),Y()):(G(),U())},Ae=()=>{const s=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(r=>{const d=r.dataset.modal;r.addEventListener("click",()=>{s.forEach(o=>{o.dataset.modal===d&&Oe(o)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),C(r)})})},Le=()=>{const s=document.querySelector('[data-modal="payment"] .paymentForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);c.setSelectedCard(r.card),C(s)})},Te=()=>{const s=document.querySelector(".payment__immediately input"),e=document.querySelectorAll(".payment__immediately span, .card__additional");s.addEventListener("click",()=>{const t=document.querySelector(".total__button");s.checked?(e.forEach(r=>{r.classList.add("hide"),t.textContent=`Оплатить ${c.getTotalPrice().toLocaleString("ru")} ${c.currency}`}),c.setPayImmediately(!0)):(e.forEach(r=>{r.classList.remove("hide"),t.textContent="Заказать"}),c.setPayImmediately(!1))})},ke=s=>{document.querySelectorAll("[data-address-type]").forEach(t=>{const r=t.dataset.addressType??"";s===r?t.classList.remove("hide"):t.classList.add("hide")})},Ce=()=>{const s=document.querySelectorAll("[data-modal-tab]");s.forEach(e=>{const t=e.dataset.modalTab??"user";e.addEventListener("click",()=>{s.forEach(r=>{r===e?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),ke(t)})})},qe=()=>{const s=document.querySelector('[data-modal="address"] .addressForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);c.setSelectedAddress(r.address),C(s)}),Ce()},Ne=()=>{const s=document.querySelectorAll(".modal__line[data-delete-address]");s.forEach(e=>{const t=e.querySelector("button[data-delete-address]"),r=t.dataset.deleteAddress??"";t.addEventListener("click",()=>{e.remove(),c.removeAddress(r);const d=e.dataset.addressType??"",o=c.addresses.filter(a=>a.type===d);s.forEach(a=>{const n=a.dataset.deleteAddress??"",i=a.querySelector("input");i.checked=n===o[0].id})})})},j=(s,e)=>{const t=s.dataset.formBlock,r=s.querySelector(".form__error");if(e[t]){s.classList.add("form__block_error"),r.textContent=e[t];return}t==="INN"?r.textContent="Для таможенного оформления":r.textContent="",s.classList.remove("form__block_error")},xe=s=>{const e=s.value.trim();if(e==="")return;const t=e.replace(/\D/g,""),r=`+${t.substring(0,1)} ${t.substring(1,4)} ${t.substring(4,7)} ${t.substring(7,9)} ${t.substring(9,11)}`;s.value=r.trim()},Me=()=>{document.querySelectorAll("[data-form-block]").forEach(e=>{const t=e.querySelector("input");t.addEventListener("input",()=>{e.dataset.formBlock==="phone"&&xe(t),c.setUserData(t.name,t.value)}),t.addEventListener("blur",()=>{const r=c.validationErrors;j(e,r)})})},Ee=()=>{const s=document.querySelector(".total__button"),e=document.querySelectorAll("[data-form-block]");s.addEventListener("click",()=>{const t=c.getValidationErrors();e.forEach(r=>{j(r,t)}),c.canIOrderProducts()&&alert(`Ordered products ids: ${JSON.stringify(c.getSelectedProductsWithNums())}
Total price: ${c.getTotalPrice()}
Payment card: ${c.selectedCardData}
Address: ${c.selectedAddress}
Pay immediately: ${c.payImmediately}`)})};document.addEventListener("DOMContentLoaded",()=>{de(),oe(),m(),g(),f(),h(),y(),me(),H(),Y(),ve(),G(),U(),he(),ge(),Se(),$e(),Ae(),Le(),Te(),qe(),Ne(),Me(),Ee()});
