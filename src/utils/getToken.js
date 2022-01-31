import { useState } from 'react';

export default function getAuthToken() {
    const token = getCookie('token')
    if(token !== ""){
        return true
    }else {
        return false
    }
}
 function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
}


