import { show, hide } from './showHide.js'
export let logout = () => {
    let close = (document.getElementById('logOutButton')) as HTMLElement;
    close.addEventListener("click", () => {
        window.localStorage.clear();
        location.reload();
        
        
    })
}