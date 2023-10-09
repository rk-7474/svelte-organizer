<script>
    export let done;
    export let text;
</script>

<main>
    <div>
        <div class="checkbox-wrapper-29 active:translate-y-0.5 transition-all">
            <label class="checkbox">
                <input type="checkbox" bind:checked={done} class="checkbox__input" />  
                <span class="flex items-center translate-y-1 checkbox__label"></span>
                <p class="{done ? "line-through text-gray-800" : "drop-shadow-lg"}">{text}</p>
            </label>
        </div>
    </div>
</main>

<style>
    
.checkbox-wrapper-29 {
--size: 1.3rem;
--background: #ffffff00;
font-size: var(--size);
}

.checkbox-wrapper-29 *,
.checkbox-wrapper-29 *::after,
.checkbox-wrapper-29 *::before {
box-sizing: border-box;
}

.checkbox-wrapper-29 input[type="checkbox"] {
visibility: hidden;
display: none;
}

.checkbox-wrapper-29 .checkbox__label {
width: var(--size);
}

.checkbox-wrapper-29 .checkbox__label:before {
content: ' ';
display: block;
height: var(--size);
width: var(--size);
position: absolute;
top: calc(var(--size) * 0.125);
left: 0;
background: var(--background);  
}

.checkbox-wrapper-29 .checkbox__label:after {
content: ' ';
display: block;
height: var(--size);
width: var(--size);
border: calc(var(--size) * .14) solid #d4d4d4;
border-radius: 2px;
transition: 200ms;
position: absolute;
top: calc(var(--size) * 0.125);
left: 0;
background: var(--background);  
}

.checkbox-wrapper-29 .checkbox__label:after {
transition: 100ms ease-in-out;
}

.checkbox-wrapper-29 .checkbox__input:checked ~ .checkbox__label:after {
border-top-style: none; 
border-right-style: none;
-ms-transform: rotate(-45deg); /* IE9 */
transform: rotate(-45deg);
height: calc(var(--size) * .5);
border-color: rgb(255, 255, 255);
}

.checkbox-wrapper-29 .checkbox {
position: relative;
display: flex;
cursor: pointer;
/* Mobile Safari: */
-webkit-tap-highlight-color: rgba(0,0,0,0);   
}

.checkbox-wrapper-29 .checkbox__label:after:hover,
.checkbox-wrapper-29 .checkbox__label:after:active {
    border-color: rgb(255, 255, 255); 
}

.checkbox-wrapper-29 .checkbox__label {
margin-right: calc(var(--size) * 0.45);
}


</style>