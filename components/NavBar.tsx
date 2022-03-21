import { useRouter } from 'next/router'


const NavBar = () => {
    const router = useRouter();
    const routerPush = (path: string) => router.push(path);
    return (
        <div
            className="
                flex justify-around items-center
                top-0 w-full h-20 shadow-xl
            "
        >
            <button
                onClick={() => routerPush("/")}
                className="font-semibold"
            >
                Profile
            </button>
            <button
                onClick={() => routerPush("/project")}
                className="font-semibold"
            >
                Project
            </button>
        </div>
    )
}

export default NavBar