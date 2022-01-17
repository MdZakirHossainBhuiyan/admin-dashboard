import Link from "next/link";


const registration = () => {
    return (
        <div>
            <h1>Registration Page</h1>

            <Link href="/userPages/login"><a><button>Login</button></a></Link>
            <Link href="/"><a><button>Back to Dashboard</button></a></Link>
        </div>
    );
};

export default registration;