import { show, hide } from './showHide.js'
export const logData = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', 
        {
            method: 'POST',
            body: JSON.stringify({email:email,password:password})
        })

        const {token} = await response.json();
        localStorage.setItem('jwt-token',token.toString());

        if (token) {
            hide(document.getElementById('logSessionButton'))
            show(document.getElementById('clDataButton'))
            show(document.getElementById('logOutButton'))
            
        } else {
            show(document.getElementById('logSessionButton'))
            hide(document.getElementById('clDataButton'))
            hide(document.getElementById('logOutButton'))
        }
        
        return token;
    } catch (err) {
        console.error(`Error: ${err}`);
        alert('Error en la autentificacion');
    }
}