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
            <div className="mb-4 flex">
                <img src={user.photoURL} alt="perfil" className="rounded-full w-1/5"/>
                <div className="pl-4">
                    <h1 className="text-x1 block">Welcome</h1>
                    <p className="font-bold">{user.displayName || user.email}</p>
                </div>
                
            </div>
            

            <button onClick={handleLogOut} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4">LogOut</button>
            {/* {console.log(user.photoURL)} */}
        </div>
        </div>
    )
}