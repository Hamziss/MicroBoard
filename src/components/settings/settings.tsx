import React, { useRef } from 'react'
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
         <div className=' bg-white rounded p-2 flex  text-xl  '>
             <div className='w-2/6 ' >

              <div className=' text-2xl font-semibold m-5'>settings</div>
              
              <div className='m-5 '>
               <div onClick={clickHandler}>
                {clickImg ? (
                                        <img className='h-28 w-28 rounded-full'  src={URL.createObjectURL(clickImg)} alt=''/>
                ):(
                    <img className='h-28 w-28 rounded-full' src="/userpicture.jpg" alt=''/>
                )}

                <input type='file'
                 ref={inputRef} 
                 onChange={changeHandler} 
                 style={{display:'none'}}/>
               </div>

               <button className='px-9 py-3' onClick={clickHandler} >Edit</button>

              </div>
             </div>

             <div className='w-4/6'>
                <div className='px-[360px]'>
                <button className='text-black text-xl font-semibold' 
                onClick={onClose}>x</button>
                </div>
             
                <div>
                    <h1>Name</h1>
                    <input type='text'placeholder='@Name' className='border-2 rounded  border-slate-400 placeholder-slate-400'/>
                </div>

             </div>


         </div>
        </div>
    
</div>
)
}

export default Settings;