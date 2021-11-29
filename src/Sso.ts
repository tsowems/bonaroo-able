export namespace Sso {
const SSO_URL = 'https://www.account.finsweet.com/';
 const API_URL = 'https://accounts.finsweet.com/api';
    export function getSignIn(redirectUrl:string) {
        const url = `${SSO_URL}redirect_url=${redirectUrl}`;
        return url;
}

export function codeAcess(code:string) {
    //const code = {val}
        return fetch(`${API_URL}/auth/authcode`, {
        method: 'POST',
        headers: {  
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export async function signin(email:string, password:string) {
   const user = {email, password}
    return fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export function newToken(refreshToken:string) {
    
}

}