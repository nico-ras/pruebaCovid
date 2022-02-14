export let idFormat = (name) => {
   let newName = name.replace(/[^0-9a-zA-Z]/g, '').split(" ").join("");
   return newName;
}
