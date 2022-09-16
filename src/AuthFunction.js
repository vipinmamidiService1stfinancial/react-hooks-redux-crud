import { useAuth0 } from "@auth0/auth0-react";

export function LoginWithRedirect() {
    const { loginWithRedirect } = useAuth0();
    return loginWithRedirect;
}

export function Logout() {
    const { logout } = useAuth0();
    return logout;
}

export function User() {
    const { user } = useAuth0();
    return user;
}

export function IsAuthenticated() {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated;
}

export async function AuthToken(getAccessTokenSilently) {
    var token = await getAccessTokenSilently();
    console.log("inside AuthFunction Token: " + token);
    return token;
}
