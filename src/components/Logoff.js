const Logoff = () => {

    localStorage.clear();
    console.log("Clearing Local");

    return (
        <div>
            <h1>Hello! Please Login to use CRUD!</h1>
        </div>
    );
};

export default Logoff;