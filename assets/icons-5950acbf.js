import{a as m}from"./vendor-27c5a77b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let a=document.querySelector(".js-header-cart-items");y();function y(){try{const o=localStorage.getItem("cart");if(!o){a.innerHTML="0";return}const n=JSON.parse(o);if(!Array.isArray(n)){a.innerHTML="0";return}const i=n.flatMap(e=>e._id).filter((e,t,c)=>c.indexOf(e)===t);a.innerHTML=`${i.length}`}catch(o){console.error("Error:",o.message)}}const r={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};r.formSubscription.addEventListener("submit",p);function p(o){o.preventDefault();const n=o.currentTarget.elements.email.value;L(n),o.currentTarget.reset()}async function L(o){m.defaults.baseURL="https://food-boutique.b.goit.study/api/";const n={method:"post",url:"subscription",headers:{"Content-Type":"application/json"},data:{email:o}};try{const s=await m.request(n);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}r.openModalPolicy.addEventListener("click",()=>{f(r.policyLink),v(),window.addEventListener("keydown",l)});r.openModalTerms.addEventListener("click",()=>{f(r.termsLink),h(),window.addEventListener("keydown",l)});function f(o){o.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function v(){r.closeModalPolicyBtn.addEventListener("click",d)}function d(){r.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),g()}function g(){r.closeModalPolicyBtn.removeEventListener("click",d),window.removeEventListener("keydown",l)}function h(){r.closeModalTermsBtn.addEventListener("click",u)}function u(){r.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),b()}function b(){r.closeModalTermsBtn.removeEventListener("click",u),window.removeEventListener("keydown",l)}function l({code:o}){o==="Escape"&&(d(),u())}const S="/93_js_Zen6ka/assets/icons-617986b7.svg";export{S as i,y as l};
//# sourceMappingURL=icons-5950acbf.js.map
