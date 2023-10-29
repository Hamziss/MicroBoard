import MainLeft from "./ui/mainLeft"
import MainRigth from "./ui/mainRight"
import MainCenter from "./ui/mainCenter"
export function MainNavBar() {
    return (
        <div className="bg-gray-400 px-8 py-5 flex justify-between align-center h-20">
            <MainLeft />
            <MainCenter />
            <MainRigth />
        </div>
    )
}
