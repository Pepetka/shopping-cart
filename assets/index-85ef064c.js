var ee=Object.defineProperty;var te=(s,e,t)=>e in s?ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(te(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(d){if(d.ep)return;d.ep=!0;const o=t(d);fetch(d.href,o)}})();const W=s=>s?`
			<div class="product__options">
				${Object.entries(s).reduce((e,[t,r])=>{const d=t==="Размер"?`<span class="product__size">${t}: ${r}</span>`:`<span>${t}: ${r}</span>`;return e+d},"")}
			</div>
		`:"",se="/shopping-cart/assets/Information-041d4582.svg",re=({id:s,name:e,img:t,price:r,currency:d,prevPrice:o,options:a,company:n,totalQuantity:i,link:u,priceDetails:p,companyDetails:v},m)=>`
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
								${r.toLocaleString("ru")}&nbsp;
								<span>${d}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${o.toLocaleString("ru")} ${d}
							</div>
						</div>

						<a href="${u}" class="product__name">
							${e}
						</a>

						${W(a)}

						<div class="product__company">
							<div>${n[0]}</div>
							<div>
								${n[1]}
								<span>
									<img src="${se}" alt="information" />
									
									<div class="popover product__companyDetails">
										<h3>${v.name}</h3>
										<div>${v.ogrn}</div>
										<div>${v.address}</div>
									</div>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="product__controls">
					<div class="counter product__counter">
						<button class="counter__decr" ${m===1?"disabled":""}>
							<span>&minus;</span>
						</button>
						
						<span class="counter__data" contenteditable="true">${m}</span>
						
						<button class="counter__incr" ${m===i?"disabled":""}>
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
					<div class="price__current ${(r*m).toString().length>4?"price__current_bigNum":""}">
						${(r*m).toLocaleString("ru")}&nbsp;
						<span>${d}</span>
					</div>
					
					<div class="price__previous ${(o*m).toString().length>4?"price__previous_bigNum":""}">
						${(o*m).toLocaleString("ru")} ${d}
						
						<div data-price-popover="${s}" class="popover price__popover">
							${p.reduce((J,{name:X,sale:K})=>J+`
								<div>
									${X}
									<span>−${m*K} ${d}</span>
								</div>
							`,"")}
						</div>
					</div>
			</div>
		</div>
	</div>
	`,R="/shopping-cart/assets/product1-9ac968b0.png",B="/shopping-cart/assets/product2-b7b6c6ca.png",H="/shopping-cart/assets/product3-7eab844b.png",de=[{id:"product1",name:"Футболка UZcotton мужская",img:R,price:522,currency:"сом",prevPrice:1051,priceDetails:[{name:"Скидка 48%",sale:505},{name:"Скидка покупателя 2%",sale:24}],options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],companyDetails:{name:"OOO «ВАЙЛДБЕРРИЗ»",ogrn:"ОГРН: 5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}],link:"#"},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:B,price:10500,currency:"сом",prevPrice:11500,priceDetails:[{name:"Скидка 7%",sale:770},{name:"Скидка покупателя 2%",sale:230}],options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],companyDetails:{name:"OOO «МЕГАПРОФСТИЛЬ»",ogrn:"ОГРН: 5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}],link:"#"},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:H,price:247,currency:"сом",prevPrice:457,priceDetails:[{name:"Скидка 44%",sale:201},{name:"Скидка покупателя 2%",sale:9}],company:["Коледино WB","OOO Вайлдберриз"],companyDetails:{name:"OOO «ВАЙЛДБЕРРИЗ»",ogrn:"ОГРН: 5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}],link:"#"}],ce=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:R,options:{Цвет:"белый",Размер:"56"},link:"#"},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:B,options:{Цвет:"прозрачный"},link:"#"},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:H,link:"#"}],h=(s,e)=>Object.entries(s).map(([t,r])=>e.includes(t)?[t,r]:[t,0]).reduce((t,[r,d])=>({...t,[r]:d}),{}),f=[{id:"userAddress1",address:"Бишкек, улица Табышалиева, 57",type:"user",price:1e3,currency:"сом"},{id:"userAddress2",address:"Бишкек, улица Жукеева-Пудовкина, 77/1",type:"user",price:1e3,currency:"сом"},{id:"userAddress3",address:"Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",type:"user",price:1e3,currency:"сом"},{id:"pointAddress1",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",currency:"сом"},{id:"pointAddress2",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"},{id:"pointAddress3",address:"г. Бишкек, улица Табышалиева, д. 57",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"}],S=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}];var O=(s=>(s.EMPTY="Укажите имя",s.WRONG="Укажите имя",s))(O||{}),L=(s=>(s.EMPTY="Введите фамилию",s.WRONG="Введите фамилию",s))(L||{}),A=(s=>(s.EMPTY="Укажите электронную почту",s.WRONG="Проверьте адрес электронной почты",s))(A||{}),T=(s=>(s.EMPTY="Укажите номер телефона",s.WRONG="Формат: +9 999 999 99 99",s))(T||{}),k=(s=>(s.EMPTY="Укажите ИНН",s.WRONG="Проверьте ИНН",s))(k||{});const oe=(s,e=!0)=>s.trim()===""&&e?O.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:O.WRONG,ae=(s,e=!0)=>s.trim()===""&&e?A.EMPTY:s.trim()===""&&!e||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?null:A.WRONG,ne=(s,e=!0)=>s.trim()===""&&e?T.EMPTY:s.trim()===""&&!e||/^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(s)?null:T.WRONG,ie=(s,e=!0)=>s.trim()===""&&e?k.EMPTY:s.trim()===""&&!e||/^\d{14}$/.test(s)?null:k.WRONG,le=(s,e=!0)=>s.trim()===""&&e?L.EMPTY:s.trim()===""&&!e||/^[а-яА-ЯёЁ]+$/.test(s)?null:L.WRONG,E=(s,e,t=!0)=>{switch(s){case"name":return oe(e,t);case"surname":return le(e,t);case"email":return ae(e,t);case"phone":return ne(e,t);case"INN":return ie(e,t)}};class ue{constructor(){l(this,"products");l(this,"ids");l(this,"productsOutOfStock");l(this,"productsNum");l(this,"addresses");l(this,"cards");l(this,"selectedProducts");l(this,"selectedCard");l(this,"selectedAddress");l(this,"productsFavorite");l(this,"currency");l(this,"payImmediately");l(this,"userData");l(this,"validationErrors");l(this,"selectedCardData");l(this,"selectedAddressData");this.products=de,this.ids=this.products.map(({id:e})=>e),this.productsOutOfStock=ce,this.productsNum=this.ids.reduce((e,t)=>({...e,[t]:1}),{}),this.addresses=f,this.cards=S,this.selectedProducts=this.products.reduce((e,{id:t})=>[...e,t],[]),this.selectedCard="card1",this.selectedAddress="userAddress1",this.productsFavorite=[],this.currency=this.products[0].currency,this.payImmediately=!1,this.userData={name:"",surname:"",email:"",phone:"",INN:""},this.validationErrors={name:null,surname:null,email:null,phone:null,INN:null},this.selectedCardData=S.find(e=>e.id===this.selectedCard),this.selectedAddressData=f.find(e=>e.id===this.selectedAddress)}getValidationErrors(){return Object.entries(this.userData).forEach(([e,t])=>{this.validationErrors[e]=E(e,t)}),this.validationErrors}setUserData(e,t){this.userData[e]=t,this.validationErrors[e]=E(e,t,!1)}setPayImmediately(e){this.payImmediately=e}getTotalPrice(){const e=h(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,price:d})=>t+e[r]*d,0)}getTotalPrevPrice(){const e=h(this.productsNum,this.selectedProducts);return this.products.reduce((t,{id:r,prevPrice:d})=>t+e[r]*d,0)}getTotalNum(){const e=h(this.productsNum,this.selectedProducts);return Object.values(e).reduce((t,r)=>t+r,0)}removeProducts(e){this.products.some(t=>t.id===e)?(this.products=this.products.filter(t=>t.id!==e),this.ids=this.products.map(({id:t})=>t),this.selectedProducts=this.selectedProducts.filter(t=>t!==e)):this.productsOutOfStock=this.productsOutOfStock.filter(t=>t.id!==e)}getSelectedProductsWithNums(){return this.selectedProducts.reduce((e,t)=>({...e,[t]:this.productsNum[t]}),{})}setProductsFavorite(e){if(this.products.some(t=>t.id===e)){const t=this.products.findIndex(r=>r.id!==e);this.productsFavorite.push(this.products[t]),this.products=this.products.filter(r=>r.id!==e),this.ids=this.products.map(({id:r})=>r),this.selectedProducts=this.selectedProducts.filter(r=>r!==e)}else{const t=this.productsOutOfStock.findIndex(r=>r.id!==e);this.productsFavorite.push(this.productsOutOfStock[t]),this.productsOutOfStock=this.productsOutOfStock.filter(r=>r.id!==e)}}setSelectedProducts(e){if(!e){this.selectedProducts=[...this.ids];return}const t=new Set(this.selectedProducts);t.add(e),this.selectedProducts=Array.from(t)}removeSelectedProducts(e){if(!e){this.selectedProducts=[];return}this.selectedProducts=this.selectedProducts.filter(t=>t!==e)}setSelectedCard(e){this.selectedCard=e,this.selectedCardData=S.find(t=>t.id===this.selectedCard)}setSelectedAddress(e){this.selectedAddress=e,this.selectedAddressData=f.find(t=>t.id===this.selectedAddress)}setProductsNum(e,t){this.productsNum[e]=t}removeAddress(e){this.addresses=this.addresses.filter(t=>t.id!==e)}canIOrderProducts(){return!this.hasValidationErrors()&&this.selectedProducts.length>0&&this.selectedCard&&this.selectedAddress}hasValidationErrors(){return!Object.values(this.validationErrors).every(e=>!e)}}const c=new ue,w=()=>{const s=document.querySelector(".header__notification");s.textContent=`${c.products.length}`;const e=document.querySelector(".tabbar__notification");e.textContent=`${c.products.length}`},q=s=>{let e=s%10,t=s%100;return e===1&&t!==11?s+" товар":e>=2&&e<=4&&(t<10||t>=20)?s+" товара":s+" товаров"},Y=()=>{const s=c.getTotalNum(),e=c.getTotalPrice(),t=c.currency,r=document.querySelector(".goods__header_normal > span");r.textContent=`${q(s)} · ${e.toLocaleString("ru")} ${t}`},pe=()=>{const s=document.querySelector(".goods__list_normal");s.innerHTML=c.products.reduce((e,t)=>e+re(t,c.productsNum[t.id]),""),w(),Y()},me=({id:s,name:e,img:t,options:r,link:d})=>`
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
						<a href="${d}" class="product__name">
							${e}
						</a>

						${W(r)}
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
	`,G=()=>{const s=document.querySelector(".goods__header_outOfStock > span");s.textContent=`Отсутствуют · ${q(c.productsOutOfStock.length)}`},_e=()=>{const s=document.querySelector(".goods__list_outOfStock");s.innerHTML=c.productsOutOfStock.reduce((e,t)=>e+me(t),""),G()},ve=(s,{start:e,end:t,products:r})=>`
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
	`,D={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},he={января:"янв",февраля:"фев",марта:"марта",апреля:"апр",мая:"мая",июня:"июня",июля:"июля",августа:"авг",сентября:"сент",октября:"окт",ноября:"нояб",декабря:"дек","":""},U=(s,e)=>{const t={};return e.reduce((r,{id:d,delivery:o})=>{const a=[...r];return o.forEach(n=>{const i=a.findIndex(p=>p.start===n.start&&p.end===n.end);let u;s[d]-(t[d]??0)>n.quantity?u=n.quantity:u=s[d]-(t[d]??0),t[d]=(t[d]??0)+u,i>=0?a[i]={...a[i],products:[...a[i].products,{id:d,quantity:u}]}:a.push({start:n.start,end:n.end,products:[{id:d,quantity:u}]})}),a.sort((n,i)=>{const u=n.start.split("."),p=i.start.split(".");return+new Date(+u[2],+u[1]-1,+u[0])-+new Date(+p[2],+p[1]-1,+p[0])})},[]).map(r=>({...r,products:r.products.filter(d=>d.quantity!==0)})).filter(r=>r.products.length!==0).map(({start:r,end:d,products:o})=>{let a=`${+r.split(".")[0]} ${D[r.split(".")[1]]}`,n=`${+d.split(".")[0]} ${D[d.split(".")[1]]}`;return a.split(" ")[1]===n.split(" ")[1]?a=a.split(" ")[0]:n=`<br/>${n}`,{start:a,end:n,products:o}})},_=()=>{const s=h(c.productsNum,c.selectedProducts),e=document.querySelector(".card__products");e.innerHTML=U(s,c.products).reduce((t,r)=>t+ve(c.products,r),"")},fe="/shopping-cart/assets/Mir-f3178dfd.svg",ye="/shopping-cart/assets/Visa-0911e67b.svg",ge="/shopping-cart/assets/Mastercard-8f4656d1.svg",$e="/shopping-cart/assets/Maestro-55eee7e2.svg",be={mir:fe,visa:ye,mastercard:ge,maestro:$e},x=({type:s,date:e,number:t},r,d)=>`
		<div class="paymentCard ${d}">
			<img class="paymentCard__paymentSystem" src="${be[s]}" alt="Payment system" />
			<span class="paymentCard__number">
				${r?`
						<span>${t}</span>
						<span>${e}</span>
					`:t}
			</span>
		</div>
	`,Se=()=>{const s=document.querySelector(".paymentForm__body");s.innerHTML=c.cards.reduce((e,t)=>e+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${t.id}" name="card" ${c.selectedCard===t.id?"checked":""}>
			${x(t,!1,"modal__paymentCard")}
		</label>
	`,"")},j=()=>{const s=document.querySelector(".orderDetails__cardWrapper");s.innerHTML=x(c.cards.find(e=>e.id===c.selectedCard),!0,"orderDetails__card")},Q=()=>{const s=document.querySelector(".payment__cardWrapper");s.innerHTML=x(c.cards.find(e=>e.id===c.selectedCard),!1,"payment__card")},Pe="/shopping-cart/assets/Star-be4dc973.svg",C=({address:s,rating:e,information:t,type:r},d="",o="",a)=>`
		<span class="address ${d}">
			<span class="address__data">${s}</span>
			${r==="point"?`
					<span class="address__details ${o}">
						<span class="address__rating">
							<img class="address__star" src="${Pe}" alt="Rating" />
							${e??""}
						</span>
						${a??t}
					</span>
				`:""}
		</span>
	`,Oe=()=>{const s=document.querySelectorAll("[data-modal-tab]"),e=document.querySelector(".addressForm__addressesWrapper"),t=c.addresses.find(r=>r.id===c.selectedAddress).type;s.forEach(r=>{const d=r.dataset.modalTab??"";t===d?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),e.innerHTML=c.addresses.reduce((r,d)=>r+`
			<div data-delete-address="${d.id}" data-address-type="${d.type}" class="modal__line ${t!==d.type?"hide":""}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${d.id}" name="address" ${d.id===c.selectedAddress?"checked":""}>
					${C(d,"","addressForm__rating","Пункт выдачи")}
				</label>
				
				<button data-delete-address="${d.id}" type="button"></button>
			</div>
		`,"")},y=()=>{const s=document.querySelector(".totalPrice__price");s.innerHTML=`
		${c.getTotalPrice().toLocaleString("ru")}
		<span>${c.currency}</span>
	`},g=()=>{const s=document.querySelector("[data-total-prev]");s.innerHTML=`
		${q(c.getTotalNum())}
		<div class="totalPrice__price_small">
			${c.getTotalPrevPrice().toLocaleString("ru")}
			<span>${c.currency}</span>
		</div>
	`},$=()=>{const s=document.querySelector("[data-total-sale]");s.innerHTML=`
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(c.getTotalPrevPrice()-c.getTotalPrice()).toLocaleString("ru")}
			<span>${c.currency}</span>
		</div>
	`},Le=(s,e)=>{const t=document.querySelector("[data-total-delivery-price]");t.innerHTML=`
		Доставка
		<div class="totalPrice__price_small">
			${s?`${s.toLocaleString("ru")} ${e}`:"Бесплатно"}
		</div>
	`},V=()=>{const s=c.addresses.find(d=>d.id===c.selectedAddress),e=document.querySelector(".card__addressWrapper");e.innerHTML=C(c.addresses.find(d=>d.id===c.selectedAddress),"card__data");const t=document.querySelector(".card__title");t.textContent=s.type==="point"?"Пункт выдачи":"Курьер";const r=document.querySelector("[data-delivery-price]");r.textContent=s.price?`${s.price} ${s.currency}`:"Бесплатно",Le(s.price,s.currency)},z=()=>{const s=document.querySelector(".delivery__address");s.innerHTML=C(f.find(t=>t.id===c.selectedAddress));const e=document.querySelector(".delivery__name");e.textContent=f.find(t=>t.id===c.selectedAddress).type==="point"?"Доставка в пункт выдачи":"Доставка курьером"},Ae=()=>{const s=document.querySelectorAll(".goods__toggle"),e=document.querySelectorAll(".accordion");s.forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.accordion;Y(),t.classList.toggle("goods__toggle_rotate"),r==="normal"&&t.parentElement.classList.toggle("goods__header_close"),e.forEach(d=>{if(d.dataset.accordion!==r)return;const o=d.querySelector(".goods__list");d.classList.toggle("accordion__close"),d.classList.contains("accordion__close")?o.classList.add("goods__list_hidden"):setTimeout(()=>{o.classList.remove("goods__list_hidden")},200)})})})},Te=s=>{const e=document.querySelector("[data-product-list-checkbox]"),t=document.querySelectorAll("[data-product]:has(.checkbox)");e.checked=!0,t.forEach(r=>{const d=r.dataset.product??"",o=r.querySelector(".checkbox input");o.checked=s.includes(d),o.checked||(e.checked=!1)})},I=s=>{const[e,t]=s.split(" ");return t?`${e} ${he[t]}`:e},b=()=>{const s=document.querySelector(".delivery__date"),e=h(c.productsNum,c.selectedProducts),t=U(e,c.products),r=t[t.length-1];s.textContent=r?`${I(r.start)}–${I(r.end.replace(/<br\/>/gi,""))}`:"Выберете товары"},ke=()=>{const s=document.querySelector("[data-product-list-checkbox]"),e=document.querySelectorAll("[data-product]:has(.checkbox)");Te(c.selectedProducts),_(),e.forEach(t=>{const r=t.dataset.product??"",d=t.querySelector(".checkbox input");d.addEventListener("click",()=>{d.checked?c.setSelectedProducts(r):c.removeSelectedProducts(r),s.checked=c.selectedProducts.length===c.ids.length,_(),b(),y(),g(),$()})}),s.addEventListener("click",()=>{s.checked?c.setSelectedProducts():c.removeSelectedProducts(),e.forEach(t=>{const r=t.querySelector(".checkbox input");r.checked=s.checked}),_(),b(),y(),g(),$()})},qe=(s,e,{price:t,prevPrice:r,currency:d,priceDetails:o})=>{const a=document.querySelector(`[data-product=${e}] .product__price`),n=document.querySelector(`[data-product=${e}] .product__mobilePrice`),i=s*t,u=s*r;a.innerHTML=`
		<div class="price__current ${i.toString().length>4?"price__current_bigNum":""}">
			${i.toLocaleString("ru")}&nbsp;
			<span>${d}</span>
		</div>
		
		<div class="price__previous ${u.toString().length>4?"price__previous_bigNum":""}">
			${u.toLocaleString("ru")} ${d}
			
			<div data-price-popover="${e}" class="popover price__popover">
				${o.reduce((p,{name:v,sale:m})=>p+`
					<div>
						${v}
						<span>−${c.productsNum[e]*m} ${d}</span>
					</div>
				`,"")}
			</div>
		</div>
	`,n.innerHTML=`
		<div class="price__current price__current_bigNum">
			${i.toLocaleString("ru")}&nbsp;
			<span>${d}</span>
		</div>
		
		<div class="price__previous price__previous_bigNum">
			${u.toLocaleString("ru")} ${d}
		</div>
	`},N=()=>{const s=document.querySelector(".payment__immediately input"),e=document.querySelector(".total__button"),t=document.querySelectorAll(".payment__immediately span, .card__additional");s.checked?(t.forEach(r=>{r.classList.add("hide"),e.textContent=`Оплатить ${c.getTotalPrice().toLocaleString("ru")} ${c.currency}`}),c.setPayImmediately(!0)):(t.forEach(r=>{r.classList.remove("hide"),e.textContent="Заказать"}),c.setPayImmediately(!1))},P=(s,e,t,r,d)=>{c.setProductsNum(s,+r.innerText),e.disabled=c.productsNum[s]===d.totalQuantity,t.disabled=c.productsNum[s]===1,qe(c.productsNum[s],s,d),_(),b(),y(),g(),$(),N()},xe=()=>{document.querySelectorAll("[data-product]:has(.checkbox)").forEach(e=>{const t=e.dataset.product??"",r=c.products.find(n=>n.id===t),d=e.querySelector(".counter__decr"),o=e.querySelector(".counter__data"),a=e.querySelector(".counter__incr");a.disabled=c.productsNum[t]===r.totalQuantity,d.disabled=c.productsNum[t]===1,d.addEventListener("click",()=>{o.innerText=`${+o.innerText-1}`,P(t,a,d,o,r)}),a.addEventListener("click",()=>{o.innerText=`${+o.innerText+1}`,P(t,a,d,o,r)}),o.addEventListener("blur",()=>{let n=+o.innerText.replace(/\D/g,"");n<1&&(n=1),n>r.totalQuantity&&(n=r.totalQuantity),o.innerText=`${n}`,P(t,a,d,o,r)}),o.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),o.blur())})})},F=s=>{s.remove(),w(),G(),_(),N(),y(),g(),$()},Ce=()=>{document.querySelectorAll("[data-product]").forEach(e=>{const t=e.dataset.product??"",r=e.querySelector(".product__favorite"),d=e.querySelector(".product__delete");r.addEventListener("click",()=>{c.setProductsFavorite(t),F(e)}),d.addEventListener("click",()=>{c.removeProducts(t),F(e)})})},Ne=()=>{const s=document.createElement("div");s.style.visibility="hidden",s.style.overflow="scroll",document.body.appendChild(s);const e=document.createElement("div");s.appendChild(e);const t=s.offsetWidth-e.offsetWidth;return s.parentNode.removeChild(s),t},Me=s=>{s.classList.remove("modal_hide"),document.body.style.overflowY="hidden",document.body.style.marginRight=`${Ne()}px`},M=s=>{const e=s.closest(".modal"),t=e.dataset.modal??"";e.classList.add("modal_hide"),document.body.style.overflowY="auto",document.body.style.marginRight="0",t==="payment"?(j(),Q()):(V(),z())},Ee=()=>{const s=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(r=>{const d=r.dataset.modal;r.addEventListener("click",()=>{s.forEach(o=>{o.dataset.modal===d&&Me(o)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),M(r)})})},De=()=>{const s=document.querySelector('[data-modal="payment"] .paymentForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);c.setSelectedCard(r.card),M(s)})},Ie=()=>{document.querySelector(".payment__immediately input").addEventListener("click",()=>{N()})},Fe=s=>{document.querySelectorAll("[data-address-type]").forEach(t=>{const r=t.dataset.addressType??"";s===r?t.classList.remove("hide"):t.classList.add("hide")})},We=()=>{const s=document.querySelectorAll("[data-modal-tab]");s.forEach(e=>{const t=e.dataset.modalTab??"user";e.addEventListener("click",()=>{s.forEach(r=>{r===e?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),Fe(t)})})},Re=()=>{const s=document.querySelector('[data-modal="address"] .addressForm');s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),r=Object.fromEntries(t);c.setSelectedAddress(r.address),M(s)}),We()},Be=()=>{const s=document.querySelectorAll(".modal__line[data-delete-address]");s.forEach(e=>{const t=e.querySelector("button[data-delete-address]"),r=t.dataset.deleteAddress??"";t.addEventListener("click",()=>{e.remove(),c.removeAddress(r);const d=e.dataset.addressType??"",o=c.addresses.filter(a=>a.type===d);s.forEach(a=>{const n=a.dataset.deleteAddress??"",i=a.querySelector("input");i.checked=n===o[0].id})})})},Z=(s,e)=>{const t=s.dataset.formBlock,r=s.querySelector(".form__error");if(e[t]){s.classList.add("form__block_error"),r.textContent=e[t];return}t==="INN"?r.textContent="Для таможенного оформления":r.textContent="",s.classList.remove("form__block_error")},He=s=>{const e=s.value.trim();if(e==="")return"";const t=e.replace(/\D/g,""),r=`+${t.substring(0,1)} ${t.substring(1,4)} ${t.substring(4,7)} ${t.substring(7,9)} ${t.substring(9,11)}`;return s.value=r.trim(),s.value},we=()=>{document.querySelectorAll("[data-form-block]").forEach(e=>{const t=e.querySelector("input");t.addEventListener("input",()=>{let r=t.value;e.dataset.formBlock==="phone"&&(r=He(t)),r.trim()!==""?e.querySelector(".form__input").classList.add("form__hasText"):e.querySelector(".form__input").classList.remove("form__hasText"),c.setUserData(t.name,t.value)}),t.addEventListener("blur",()=>{const r=c.validationErrors;Z(e,r)})})},Ye=()=>{const s=window.matchMedia("(max-width: 768px)"),e=document.querySelector(".total__button"),t=document.querySelectorAll("[data-form-block]");e.addEventListener("click",()=>{const r=c.getValidationErrors();t.forEach(d=>{Z(d,r)}),c.canIOrderProducts()?alert(`Ordered products ids: ${JSON.stringify(c.getSelectedProductsWithNums())}
Total price: ${c.getTotalPrice()}
Payment card: ${c.selectedCard}
Address: ${c.selectedAddress}
Pay immediately: ${c.payImmediately}
User data: ${JSON.stringify(c.userData)}`):s.matches&&c.hasValidationErrors()?document.querySelector(".orderDetails__customer").scrollIntoView({behavior:"smooth"}):s.matches&&c.selectedProducts.length<=0&&document.querySelector(".orderDetails").scrollIntoView({behavior:"smooth"})})};document.addEventListener("DOMContentLoaded",()=>{pe(),_e(),_(),b(),y(),g(),$(),Se(),j(),Q(),Oe(),V(),z(),Ae(),ke(),xe(),Ce(),Ee(),De(),Ie(),Re(),Be(),we(),Ye()});
