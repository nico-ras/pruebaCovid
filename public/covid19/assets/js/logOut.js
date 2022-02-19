export let logout = () => {
    let close = (document.getElementById('logOutButton'));
    close.addEventListener("click", () => {
        window.localStorage.clear();
        location.reload();
    });
};
