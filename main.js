(()=>{"use strict";class t{constructor(t){this.parentEl=t,this.onButton=this.onButton.bind(this)}static get markup(){return'\n        <button class="button">\n            <h2>Click to toggle popover</h2>                           \n            <div class="popover">\n                <div class="popover_title">Popover title</div>\n                <div class="popover_text">And here\'s some amazing content. It\'s very engaging. Right?</div>\n            </div>\n        </button>      \n        '}static get popoverSelector(){return".popover"}static get buttonSelector(){return".button"}bindToDOM(){this.parentEl.innerHTML=t.markup,this.popover=this.parentEl.querySelector(t.popoverSelector),this.button=this.parentEl.querySelector(t.buttonSelector),this.button.addEventListener("click",this.onButton)}onButton(t){t.preventDefault(),this.popover.classList.contains("active")?this.popover.classList.remove("active"):this.popover.classList.add("active")}}const e=document.querySelector(".container");new t(e).bindToDOM()})();