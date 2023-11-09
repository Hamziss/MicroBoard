import MainLeft from "./ui/mainLeft"
import MainRigth from "./ui/mainRight"
import MainCenter from "./ui/mainCenter"

export function MainNavBar() {
    return (
        <div className="flex justify-between items-center h-12 px-8 py-0 mt-2">
            <MainLeft />
            <MainCenter />
            <MainRigth />
        </div>
    )
}
