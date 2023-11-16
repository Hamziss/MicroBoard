import Image from "next/image";
import eclipse from "public/userpicture.jpg";
import { ChangeEvent, useRef, useState } from "react";

interface SettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className=" w-[600px]">
        <div className="flex  rounded bg-white p-2 text-xl  ">
          <div className="w-1/4 pl-3">
          
          <div className=" text-2xl font-semibold p-4">settings</div>

          <div>
            <div onClick={clickHandler}>
              {clickImg ? (
                <Image
                  className="h-28 w-28 rounded-full"
                  src={URL.createObjectURL(clickImg)}
                  alt=""
                  width={112}
                  height={112}
                />
              ) : (
                <Image
                  className="h-28 w-28 rounded-full"
                  src={eclipse.src}
                  alt=""
                  width={112}
                  height={112}
                />
              )}

              <input
                type="file"
                ref={inputRef}
                onChange={changeHandler}
                style={{ display: "none" }}
              />
            </div>

            <button onClick={clickHandler} className="font-semibold text-lg pl-10">Edit</button>
          </div>
        </div>
         <div className="3/4 ">
         <button
            className=" pl-96 text-xl font-semibold
                    text-black"
            onClick={onClose}
          >
            x
          </button>
          <div className="font-semibold text-lg mb-3">Name</div>
          <div className="">
          <input  className="border-2 rounded-md p-1.5 w-96" type="text" id="name" name="name" placeholder="name" />
          </div>

          <div className="font-semibold text-lg my-3">Username</div> 
          <div>
          <input type="text" id="usrname" name="name" placeholder="@username" className="border-2 rounded-md p-1.5 w-96"/>
          </div>

          <div className="font-semibold text-lg my-3">Email</div> 
          <div>
          <input type="text" id="email" name="name" placeholder="email" className="border-2 rounded-md p-1.5 w-96"/>
          
          <div className="font-semibold text-lg py-5">Theme</div>

          <div className="py-6 w-1/2">
            <h1 className="font-semibold text-lg ">Payement methods</h1>
            <button className="w-40 text-white bg-black rounded-sm text-lg p-2 my-3">Add new card</button>
          </div>

          <div className="pb-5">
            <h1 className="font-semibold text-lg ">Delete accout</h1>
            <button className="text-white bg-rose-600 rounded-sm text-lg p-2 my-3">Delete</button>
          </div>
          </div>
         </div>
      </div>
     </div>
    </div>
  );
};

export default Settings;
