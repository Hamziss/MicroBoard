import ResizeBar from "./resizeBar"
import RedoButton from "./redoButton"
import UndoButton from "./undoButton"
import styles from "@/styles/MainComponent.module.css"
const BottomRight = () => {
    return (
        <div className={styles.brContainer}>
            <ResizeBar />
            <div className={styles.unredo}>
                <UndoButton />
                <RedoButton />
            </div>
        </div>
    )
}

export default BottomRight