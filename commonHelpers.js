import{S as d,i}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="42482643-27153583581e8cdd5359a7a52",y="https://pixabay.com/api/",g={image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:10};function h(a){return fetch(`${y}?key=${f}&q=${a}&${g}`).then(s=>s.json()).catch(s=>console.log(s))}const b=document.querySelector(".gallery");function L(a){const s=a.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:u,comments:p,downloads:m})=>`
        <li class="gallery-item">
          <a class="img-link" href="${e}">
            <img src="${n}" alt="${t}" class="img"/>
          </a>  
          <ul class="stat">
            <li class="stat-item">
                <span class="stat-title">Likes</span>
              <span class="stat-number">${o}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Views</span>
              <span class="stat-number">${u}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Comments</span>
              <span class="stat-number">${p}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Downloads</span>
              <span class="stat-number">${m}</span>
            </li>
          </ul>
        </li>`).join("");b.insertAdjacentHTML("beforeend",s);const r=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionType:"alt"});r.on("show.simplelightbox"),r.refresh()}const c=document.querySelector(".form"),S=document.querySelector(".input"),l=document.querySelector(".loader"),$=document.querySelector(".gallery");c.addEventListener("submit",q);function q(a){a.preventDefault();const s=S.value;h(s).then(r=>{l.style.display="flex",c.reset(),$.innerHTML="";const{totalHits:n,hits:e}=r;if(n===0)return i.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});l.style.display="none",L(e)}).catch(r=>(console.log(r),i.error({title:"",message:"Something went wrong. Please try again!",position:"topCenter"})))}
//# sourceMappingURL=commonHelpers.js.map
