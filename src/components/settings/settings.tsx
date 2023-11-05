import eclipse from "./assets/userpicture.jpg";
import Image from "next/image";
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
      <div className=" w-[600px]">
        <div className="flex flex-col rounded bg-white p-2 text-xl  ">
          <button
            className="place-self-end text-xl font-semibold
                    text-black"
            onClick={onClose}
          >
            x
          </button>
          <div className=" text-2xl font-semibold">settings</div>

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

            <button onClick={clickHandler}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
