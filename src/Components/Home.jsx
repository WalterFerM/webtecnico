import { useAuth } from "../context/authContext";

export function Home (){

    const {user, logout} = useAuth()

    

    const handleLogOut = async () => {
    try {
        await logout()
    } catch (error) {
        console.log(error)
    };
};


    return (
        <div className="w-full max-w-xs m-auto text-black">
        <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
            
            <h1 className="text-x1 mb-4">
            Welcome {user.displayName || user.email}
            </h1>
            <button onClick={handleLogOut} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4">LogOut</button>
        </div>
        </div>
    )
}