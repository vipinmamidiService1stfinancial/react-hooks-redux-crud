import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    const { getAccessTokenSilently } = useAuth0();

    let token;
    setTokenSilentlyInLogin();
    async function setTokenSilentlyInLogin() {
        try {
            token = token ? token : await getAccessTokenSilently();
            localStorage.setItem("token", token);
            console.log("setting local: " + token);
            return token;

        }
        catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div>
            <h1>Hello! Welcome!!</h1>
        </div>
    );
};

export default Home;