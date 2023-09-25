var H=Object.defineProperty;var D=(s,t,e)=>t in s?H(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>(D(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(c){if(c.ep)return;c.ep=!0;const d=e(c);fetch(c.href,d)}})();const C=s=>s?`
			<div class="product__options">
				${Object.entries(s).reduce((t,[e,r])=>{const c=e==="Размер"?`<span class="product__size">${e}: ${r}</span>`:`<span>${e}: ${r}</span>`;return t+c},"")}
			</div>
		`:"",w="/shopping-cart/assets/Information-041d4582.svg",W=({id:s,name:t,img:e,price:r,currency:c,prevPrice:d,options:a,company:n,totalQuantity:u},i)=>`
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

					<img class="product__image" src="${e}" alt="Product image">

					<div class="product__details">
						<div class="price product__mobilePrice">
							<div class="price__current price__current_bigNum">
								${r}&nbsp;
								<span>${c}</span>
							</div>
							<div class="price__previous price__previous_bigNum">
								${d} ${c}
							</div>
						</div>

						<div class="product__name">
							${t}
						</div>

						${C(a)}

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
						
						<button class="counter__incr" ${i===u?"disabled":""}>
							<span>&plus;</span>
						</button>
					</div>
					
					${u<=10?`
								<div class="product__left">
									Осталось ${u} шт.
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
					
					<div class="price__previous ${(d*i).toString().length>4?"price__previous_bigNum":""}">
						${(d*i).toLocaleString("ru")} ${c}
					</div>
			</div>
		</div>
	</div>
	`,L="/shopping-cart/assets/product1-9ac968b0.png",q="/shopping-cart/assets/product2-b7b6c6ca.png",x="/shopping-cart/assets/product3-7eab844b.png",U=[{id:"product1",name:"Футболка UZcotton мужская",img:L,price:522,currency:"сом",prevPrice:1051,options:{Цвет:"белый",Размер:"56"},company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:1},{start:"27.02.2023",end:"01.03.2023",quantity:1}]},{id:"product2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:q,price:10500,currency:"сом",prevPrice:11500,options:{Цвет:"прозрачный"},company:["Коледино WB","OOO Мегапрофстиль"],totalQuantity:300,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:184},{start:"07.02.2023",end:"08.02.2023",quantity:116}]},{id:"product3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,<br/>Faber-Castell',img:x,price:247,currency:"сом",prevPrice:457,company:["Коледино WB","OOO Вайлдберриз"],totalQuantity:2,delivery:[{start:"05.02.2023",end:"06.02.2023",quantity:2}]}],j=[{id:"productOutOfStock1",name:"Футболка UZcotton мужская",img:L,options:{Цвет:"белый",Размер:"56"}},{id:"productOutOfStock2",name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",img:q,options:{Цвет:"прозрачный"}},{id:"productOutOfStock3",name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',img:x}],v=(s,t)=>Object.entries(s).map(([e,r])=>t.includes(e)?[e,r]:[e,0]).reduce((e,[r,c])=>({...e,[r]:c}),{});class R{constructor(){l(this,"products");l(this,"ids");l(this,"productsOutOfStock");l(this,"productsNum");l(this,"selectedProducts");l(this,"selectedCard");l(this,"selectedAddress");l(this,"productsFavorite");l(this,"currency");this.products=U,this.ids=this.products.map(({id:t})=>t),this.productsOutOfStock=j,this.productsNum={product1:1,product2:1,product3:1},this.selectedProducts=[],this.selectedCard="card1",this.selectedAddress="userAddress2",this.productsFavorite=[],this.currency=this.products[0].currency}getTotalPrice(){const t=v(this.productsNum,this.selectedProducts);return this.products.reduce((e,{id:r,price:c})=>e+t[r]*c,0)}getTotalPrevPrice(){const t=v(this.productsNum,this.selectedProducts);return this.products.reduce((e,{id:r,prevPrice:c})=>e+t[r]*c,0)}getTotalNum(){const t=v(this.productsNum,this.selectedProducts);return Object.values(t).reduce((e,r)=>e+r,0)}removeProducts(t){this.products.some(e=>e.id===t)?(this.products=this.products.filter(e=>e.id!==t),this.ids=this.products.map(({id:e})=>e),this.selectedProducts=this.selectedProducts.filter(e=>e!==t)):this.productsOutOfStock=this.productsOutOfStock.filter(e=>e.id!==t)}setProductsFavorite(t){if(this.products.some(e=>e.id===t)){const e=this.products.findIndex(r=>r.id!==t);this.productsFavorite.push(this.products[e]),this.products=this.products.filter(r=>r.id!==t),this.ids=this.products.map(({id:r})=>r),this.selectedProducts=this.selectedProducts.filter(r=>r!==t)}else{const e=this.productsOutOfStock.findIndex(r=>r.id!==t);this.productsFavorite.push(this.productsOutOfStock[e]),this.productsOutOfStock=this.productsOutOfStock.filter(r=>r.id!==t)}}setSelectedProducts(t){if(!t){this.selectedProducts=[...this.ids];return}const e=new Set(this.selectedProducts);e.add(t),this.selectedProducts=Array.from(e)}removeSelectedProducts(t){if(!t){this.selectedProducts=[];return}this.selectedProducts=this.selectedProducts.filter(e=>e!==t)}setSelectedCard(t){this.selectedCard=t}setSelectedAddress(t){this.selectedAddress=t}setProductsNum(t,e){this.productsNum[t]=e}}const o=new R,f=()=>{const s=document.querySelector(".header__notification");s.textContent=`${o.products.length}`;const t=document.querySelector(".tabbar__notification");t.textContent=`${o.products.length}`},Q=()=>{const s=document.querySelector(".goods__list_normal");return s.innerHTML=o.products.reduce((t,e)=>t+W(e,o.productsNum[e.id]),""),f(),s.getElementsByClassName("product")},z=({id:s,name:t,img:e,options:r})=>`
		<div data-product-out-of-stock="${s}" class="product goods__product">
			<div>
				<div class="product__information">
					${r!=null&&r.Размер?`
							<div class="product__mobileSize">
								<span>${r.Размер}</span>
							</div>
						`:""}

					<img class="product__image product__image_outOfStock" src="${e}" alt="Product image">

					<div class="product__details product__details_outOfStock">
						<div class="product__name">
							${t}
						</div>

						${C(r)}
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
	`,V=()=>{const s=document.querySelector(".goods__list_outOfStock");return s.innerHTML=o.productsOutOfStock.reduce((t,e)=>t+z(e),""),s.getElementsByClassName("product")},X=(s,{start:t,end:e,products:r})=>`
		<div class="card__line">
			<div class="card__title">${t}&#8212;${e}</div>
			<div class="card__imagesList">
				${r.reduce((c,{id:d,quantity:a})=>{var n;return c+`
						<div class="card__image">
							${a>1?`
									<span class="notification card__notification">${a}</span>
								`:""}
							<img src="${(n=s.find(u=>u.id===d))==null?void 0:n.img}" alt="Product image" />
						</div>
					`},"")}
			</div>
		</div>
	`,A={"01":"января","02":"февраля","03":"марта","04":"апреля","05":"мая","06":"июня","07":"июля","08":"августа","09":"сентября",10:"октября",11:"ноября",12:"декабря"},N=(s,t)=>{const e={};return t.reduce((r,{id:c,delivery:d})=>{const a=[...r];return d.forEach(n=>{const u=a.findIndex(m=>m.start===n.start&&m.end===n.end);let i;s[c]-(e[c]??0)>n.quantity?i=n.quantity:i=s[c]-(e[c]??0),e[c]=(e[c]??0)+i,u>=0?a[u]={...a[u],products:[...a[u].products,{id:c,quantity:i}]}:a.push({start:n.start,end:n.end,products:[{id:c,quantity:i}]})}),a.sort((n,u)=>{const i=n.start.split("."),m=u.start.split(".");return+new Date(+i[2],+i[1]-1,+i[0])-+new Date(+m[2],+m[1]-1,+m[0])})},[]).map(r=>({...r,products:r.products.filter(c=>c.quantity!==0)})).filter(r=>r.products.length!==0).map(({start:r,end:c,products:d})=>{let a=`${+r.split(".")[0]} ${A[r.split(".")[1]]}`,n=`${+c.split(".")[0]} ${A[c.split(".")[1]]}`;return a.split(" ")[1]===n.split(" ")[1]?a=a.split(" ")[0]:n=`<br/>${n}`,{start:a,end:n,products:d}})},p=()=>{const s=v(o.productsNum,o.selectedProducts),t=document.querySelector(".card__products");t.innerHTML=N(s,o.products).reduce((e,r)=>e+X(o.products,r),"")},b=()=>{const s=document.querySelector(".goods__header_outOfStock > span");s.textContent=`Отсутствуют · ${o.productsOutOfStock.length} товара`},M=()=>{const s=o.getTotalNum(),t=o.getTotalPrice(),e=o.currency,r=document.querySelector(".goods__header_normal > span");r.textContent=`${s} товаров · ${t.toLocaleString("ru")} ${e}`},P=[{id:"card1",number:"1234 56•• •••• 1234",type:"mir",date:"01/30"},{id:"card2",number:"1234 56•• •••• 1234",type:"visa",date:"01/30"},{id:"card3",number:"1234 56•• •••• 1234",type:"mastercard",date:"01/30"},{id:"card4",number:"1234 56•• •••• 1234",type:"maestro",date:"01/30"}],Y="/shopping-cart/assets/Mir-f3178dfd.svg",Z="/shopping-cart/assets/Visa-0911e67b.svg",G="/shopping-cart/assets/Mastercard-8f4656d1.svg",K="/shopping-cart/assets/Maestro-55eee7e2.svg",J={mir:Y,visa:Z,mastercard:G,maestro:K},$=({type:s,date:t,number:e},r,c)=>`
		<div class="paymentCard ${c}">
			<img class="paymentCard__paymentSystem" src="${J[s]}" alt="Payment system" />
			<span class="paymentCard__number">
				${r?`
						<span>${e}</span>
						<span>${t}</span>
					`:e}
			</span>
		</div>
	`,ee=()=>{const s=document.querySelector(".paymentForm__body");s.innerHTML=P.reduce((t,e)=>t+`
		<label class="radio paymentForm__radio">
			<input type="radio" value="${e.id}" name="card" ${o.selectedCard===e.id?"checked":""}>
			${$(e,!1,"modal__paymentCard")}
		</label>
	`,"")},E=()=>{const s=document.querySelector(".orderDetails__cardWrapper");s.innerHTML=$(P.find(t=>t.id===o.selectedCard),!0,"orderDetails__card")},F=()=>{const s=document.querySelector(".payment__cardWrapper");s.innerHTML=$(P.find(t=>t.id===o.selectedCard),!1,"payment__card")},_=[{id:"userAddress1",address:"Бишкек, улица Табышалиева, 57",type:"user",price:1e3,currency:"сом"},{id:"userAddress2",address:"Бишкек, улица Жукеева-Пудовкина, 77/1",type:"user",price:1e3,currency:"сом"},{id:"userAddress3",address:"Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",type:"user",price:1e3,currency:"сом"},{id:"pointAddress1",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",currency:"сом"},{id:"pointAddress2",address:"г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"},{id:"pointAddress3",address:"г. Бишкек, улица Табышалиева, д. 57",type:"point",information:"Ежедневно с 10 до 21",rating:"4.99",currency:"сом"}],te="/shopping-cart/assets/Star-be4dc973.svg",O=({address:s,rating:t,information:e,type:r},c="",d="",a)=>`
		<span class="address ${c}">
			<span class="address__data">${s}</span>
			${r==="point"?`
					<span class="address__details ${d}">
						<span class="address__rating">
							<img class="address__star" src="${te}" alt="Rating" />
							${t??""}
						</span>
						${a??e}
					</span>
				`:""}
		</span>
	`,re=()=>{const s=document.querySelectorAll("[data-modal-tab]"),t=document.querySelector(".addressForm__addressesWrapper"),e=_.find(r=>r.id===o.selectedAddress).type;s.forEach(r=>{const c=r.dataset.modalTab??"";e===c?r.classList.add("tabs__tab_active"):r.classList.remove("tabs__tab_active")}),t.innerHTML=_.reduce((r,c)=>r+`
			<div data-delete-address="${c.id}" data-address-type="${c.type}" class="modal__line ${e!==c.type?"hide":""}">
				<label class="radio addressForm__radio">
					<input type="radio" value="${c.id}" name="address" ${c.id===o.selectedAddress?"checked":""}>
					${O(c,"","addressForm__rating","Пункт выдачи")}
				</label>
				
				<button data-delete-address="${c.id}" type="button"></button>
			</div>
		`,"")},y=(s,t)=>{const e=document.querySelector(".totalPrice__price");e.innerHTML=`
		${s.toLocaleString("ru")}
		<span>${t}</span>
	`},h=(s,t,e)=>{const r=document.querySelector("[data-total-prev]");r.innerHTML=`
		${s} товара
		<div class="totalPrice__price_small">
			${t.toLocaleString("ru")}
			<span>${e}</span>
		</div>
	`},g=(s,t,e)=>{const r=document.querySelector("[data-total-sale]");r.innerHTML=`
		Скидка
		<div class="totalPrice__price_small">
			&minus;${(t-s).toLocaleString("ru")}
			<span>${e}</span>
		</div>
	`},se=(s,t)=>{const e=document.querySelector("[data-total-delivery-price]");e.innerHTML=`
		Доставка
		<div class="totalPrice__price_small">
			${s?`${s.toLocaleString("ru")} ${t}`:"Бесплатно"}
		</div>
	`},I=()=>{const s=_.find(c=>c.id===o.selectedAddress),t=document.querySelector(".card__addressWrapper");t.innerHTML=O(_.find(c=>c.id===o.selectedAddress),"card__data");const e=document.querySelector(".card__title");e.textContent=s.type==="point"?"Пункт выдачи":"Курьер";const r=document.querySelector("[data-delivery-price]");r.textContent=`${s.price} ${s.currency}`??"Бесплатно",se(s.price,s.currency)},B=()=>{const s=document.querySelector(".delivery__address");s.innerHTML=O(_.find(e=>e.id===o.selectedAddress));const t=document.querySelector(".delivery__name");t.textContent=_.find(e=>e.id===o.selectedAddress).type==="point"?"Доставка в пункт выдачи":"Доставка курьером"},ce=()=>{const s=document.querySelectorAll(".goods__toggle"),t=document.querySelectorAll(".accordion");s.forEach(e=>{e.addEventListener("click",()=>{const r=e.dataset.accordion;M(),e.classList.toggle("goods__toggle_rotate"),r==="normal"&&e.parentElement.classList.toggle("goods__header_close"),t.forEach(c=>{if(c.dataset.accordion===r)return c.classList.toggle("accordion__close")})})})},oe=s=>{const t=document.querySelector("[data-product-list-checkbox]"),e=document.querySelectorAll("[data-product]");t.checked=!0,e.forEach(r=>{const c=r.dataset.product??"",d=r.querySelector(".checkbox input");d.checked=s.includes(c),d.checked||(t.checked=!1)})},S=()=>{const s=document.querySelector(".delivery__date"),t=v(o.productsNum,o.selectedProducts),e=N(t,o.products),r=e[e.length-1];s.textContent=r?`${r.start}–${r.end.replace(/<br\/>/gi,"")}`:"Выберете товары"},de=()=>{const s=document.querySelector("[data-product-list-checkbox]"),t=document.querySelectorAll("[data-product]");oe(o.selectedProducts),p(),t.forEach(e=>{const r=e.dataset.product??"",c=e.querySelector(".checkbox input");c.addEventListener("click",()=>{c.checked?o.setSelectedProducts(r):o.removeSelectedProducts(r),s.checked=o.selectedProducts.length>=o.ids.length,p(),S(),y(o.getTotalPrice(),o.currency),h(o.getTotalNum(),o.getTotalPrevPrice(),o.currency),g(o.getTotalPrice(),o.getTotalPrevPrice(),o.currency)})}),s.addEventListener("click",()=>{s.checked?o.setSelectedProducts():o.removeSelectedProducts(),t.forEach(e=>{const r=e.querySelector(".checkbox input");r.checked=s.checked}),p(),S(),y(o.getTotalPrice(),o.currency),h(o.getTotalNum(),o.getTotalPrevPrice(),o.currency),g(o.getTotalPrice(),o.getTotalPrevPrice(),o.currency)})},ae=(s,t,{price:e,prevPrice:r,currency:c})=>{const d=document.querySelector(`[data-product=${t}] .product__price`),a=s*e,n=s*r;d.innerHTML=`
		<div class="price__current ${a.toString().length>4?"price__current_bigNum":""}">
			${a.toLocaleString("ru")}&nbsp;
			<span>${c}</span>
		</div>
		
		<div class="price__previous ${n.toString().length>4?"price__previous_bigNum":""}">
			${n.toLocaleString("ru")} ${c}
		</div>
	`},T=(s,t,e,r,c,d)=>{r.innerText=`${+r.innerText+d}`,o.setProductsNum(s,+r.innerText),t.disabled=o.productsNum[s]===c.totalQuantity,e.disabled=o.productsNum[s]===1,ae(o.productsNum[s],s,c),p(),S(),y(o.getTotalPrice(),o.currency),h(o.getTotalNum(),o.getTotalPrevPrice(),o.currency),g(o.getTotalPrice(),o.getTotalPrevPrice(),o.currency)},ne=()=>{document.querySelectorAll("[data-product]").forEach(t=>{const e=t.dataset.product??"",r=o.products.find(n=>n.id===e),c=t.querySelector(".counter__decr"),d=t.querySelector(".counter__data"),a=t.querySelector(".counter__incr");a.disabled=o.productsNum[e]===r.totalQuantity,c.disabled=o.productsNum[e]===1,c.addEventListener("click",()=>{T(e,a,c,d,r,-1)}),a.addEventListener("click",()=>{T(e,a,c,d,r,1)})})},ie=s=>{document.querySelectorAll("[data-product]").forEach(e=>{const r=e.dataset.product??"",c=e.querySelector(".product__favorite"),d=e.querySelector(".product__delete");c.addEventListener("click",()=>{o.setProductsFavorite(r),Array.from(s).forEach(a=>{a.dataset.product===r&&a.remove()}),f(),p(),console.log("Favorites: ",o.productsFavorite)}),d.addEventListener("click",()=>{o.removeProducts(r),Array.from(s).forEach(a=>{a.dataset.product===r&&a.remove()}),f(),p()})})},ue=s=>{document.querySelectorAll("[data-product-out-of-stock]").forEach(e=>{const r=e.dataset.productOutOfStock??"",c=e.querySelector(".product__favorite"),d=e.querySelector(".product__delete");c.addEventListener("click",()=>{o.setProductsFavorite(r),Array.from(s).forEach(a=>{a.dataset.productOutOfStock===r&&a.remove()}),b(),console.log("Favorites: ",o.productsFavorite)}),d.addEventListener("click",()=>{o.removeProducts(r),Array.from(s).forEach(a=>{a.dataset.productOutOfStock===r&&a.remove()}),b()})})},le=()=>{const s=document.createElement("div");s.style.visibility="hidden",s.style.overflow="scroll",document.body.appendChild(s);const t=document.createElement("div");s.appendChild(t);const e=s.offsetWidth-t.offsetWidth;return s.parentNode.removeChild(s),e},pe=s=>{s.classList.remove("modal_hide"),document.body.style.overflowY="hidden",document.body.style.marginRight=`${le()}px`},k=(s,{selectedCard:t,selectedAddress:e})=>{s.closest(".modal").classList.add("modal_hide"),document.body.style.overflowY="auto",document.body.style.marginRight="0",t&&(E(),F()),e&&(I(),B())},me=()=>{const s=document.querySelectorAll(".modal");document.querySelectorAll("button[data-modal]").forEach(r=>{const c=r.dataset.modal;r.addEventListener("click",()=>{s.forEach(d=>{d.dataset.modal===c&&pe(d)})})}),document.querySelectorAll(".modal__overlay, .modal__close").forEach(r=>{r.addEventListener("click",c=>{c.stopPropagation(),k(r,{selectedCard:o.selectedCard,selectedAddress:o.selectedAddress})})})},_e=()=>{const s=document.querySelector('[data-modal="payment"] .paymentForm');s.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(s),r=Object.fromEntries(e);o.setSelectedCard(r.card),k(s,{selectedCard:o.selectedCard})})},ve=()=>{const s=document.querySelector(".payment__immediately input"),t=document.querySelectorAll(".payment__immediately span, .card__additional");s.addEventListener("click",()=>{const e=document.querySelector(".total__button");s.checked?t.forEach(r=>{r.classList.add("hide"),e.textContent="Оплатить 1 016 сом"}):t.forEach(r=>{r.classList.remove("hide"),e.textContent="Заказать"})})},fe=()=>{const s=document.querySelectorAll("[data-modal-tab]");s.forEach(e=>{const r=e.dataset.modalTab??"user";e.addEventListener("click",()=>{const c=document.querySelectorAll("[data-address-type]");s.forEach(d=>{d===e?d.classList.add("tabs__tab_active"):d.classList.remove("tabs__tab_active")}),c.forEach(d=>{const a=d.dataset.addressType??"";r===a?d.classList.remove("hide"):d.classList.add("hide")})})});const t=document.querySelector('[data-modal="address"] .addressForm');t.addEventListener("submit",e=>{e.preventDefault();const r=new FormData(t),c=Object.fromEntries(r);o.setSelectedAddress(c.address),k(t,{selectedAddress:o.selectedAddress})})},ye=()=>{document.querySelectorAll(".modal__line[data-delete-address]").forEach(t=>{t.querySelector("button[data-delete-address]").addEventListener("click",()=>{t.remove()})})};document.addEventListener("DOMContentLoaded",()=>{const s=Q(),t=V();p(),f(),b(),M(),S(),y(o.getTotalPrice(),o.currency),h(o.getTotalNum(),o.getTotalPrevPrice(),o.currency),g(o.getTotalPrice(),o.getTotalPrevPrice(),o.currency),ee(),E(),F(),re(),I(),B(),ce(),de(),ne(),ie(s),ue(t),me(),_e(),ve(),fe(),ye()});
