import { MousePointer2, Hand, Square, Circle, Pen, Image, Eraser, MoveRight, Minus } from 'lucide-react'
import styles from "@/styles/MainComponent.module.css"

const MainCenter = () => {
    return (
        <div className="flex h-10 w-[33rem] items-center justify-between rounded-md border border-solid border-slate-200 px-4 cursor-pointer hover:shadow-lg bg-white">
            <div className='flex justify-between items-center w-full'>
                <div className={styles.centerIcon}><MousePointer2 /></div>
                <div className={styles.centerIcon}><Hand /></div>
                <div className={styles.centerIcon}><Square /></div>
                <div className={styles.centerIcon}><Circle /></div>
                <div className={styles.centerIcon}><Pen /></div>
                <div className={styles.centerIcon}><Image /></div>
                <div className={styles.centerIcon}><Eraser /></div>
                <div className={styles.centerIcon}><MoveRight /></div>
                <div className={styles.centerIcon}><Minus /></div>
            </div>
        </div>
    )
}

export default MainCenter