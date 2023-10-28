import React, { useRef } from 'react'
import eclipse from 'assets/userpicture.jpg'
import { useState } from 'react';
import { ChangeEvent } from 'react';


type SettingsProps = {
        isVisible: boolean;
        onClose: () => void;
};

const Settings = ({ isVisible, onClose }: SettingsProps) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [clickImg, setClickImg] = useState<File | null>(null);

        const clickHandler = () => {
            if (inputRef.current) {
                inputRef.current.click();
            }
        };
        const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const selectedFile = event.target.files ? event.target.files[0] : null;
            setClickImg(selectedFile);
        };

        if (!isVisible) return null;
    return (
    <div className='fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center'>
            <div className=" w-[600px] ">
             <div className='bg-white rounded p-2 flex flex-col text-xl  '>
                 <button className='text-black text-xl font-semibold
                    place-self-end' onClick={onClose}>x</button>
                  <div className=' text-2xl font-semibold'>settings</div>
                  

                  
                  <div>
                   <div onClick={clickHandler}>
                    {clickImg ? (
                                            <img className='h-28 w-28 rounded-full'  src={URL.createObjectURL(clickImg)} alt=''/>
                    ):(
                        <img className='h-28 w-28 rounded-full' src={eclipse.src} alt=''/>
                    )}

                    <input type='file'
                     ref={inputRef} 
                     onChange={changeHandler} 
                     style={{display:'none'}}/>
                   </div>

                   <button onClick={clickHandler} >Edit</button>

                 </div>


             </div>
            </div>
        
    </div>
  )
}

export default Settings;