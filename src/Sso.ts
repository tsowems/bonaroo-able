export namespace Sso {
const SSO_URL = 'https://www.account.finsweet.com';

    export async function getSignIn(redirectUrl:string) {
        const url = `${SSO_URL}/${redirectUrl}`;
        return url
}
}