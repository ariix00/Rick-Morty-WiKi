import { Character } from "./cards";
import { clx } from "../../utils/clx";

interface selectedCardProps {
  openModal: boolean;
  characterData: Character;
  setOpenModal: (x: boolean) => void;
}

export const cardometroxd = ({
  openModal,
  setOpenModal,
  characterData,
}: selectedCardProps) => {
  return (
    <div>
      {openModal ? (
        <div className="w-1/2 h-1/2 fixed top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-50 flex bg-black/80 backdrop-blur-2xl shadow-lg shadow-lime-500/20 rounded-3xl p-2 text-slate-50 hover:shadow-lime-500/80 hover:bg-black/60 duration-300">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="text-3xl absolute -top-10 -right-10 bg-lime-300 p-2 px-3 rounded-xl text-black"
          >
            X
          </button>
          <div className="mb-2">
            <img
              src={characterData?.image}
              alt=""
              className="h-full rounded-3xl"
            />
          </div>
          <div className="flex-grow">
            <div
              className={clx(
                "rounded-md p-1 text-4xl text-white border-4 w-fit",
                characterData?.status == "Alive" ? "border-green-500" : "",
                characterData?.status == "Dead" ? "border-red-500" : "",
                characterData?.status == "unknown" ? "border-gray-400" : ""
              )}
            >
              {characterData?.status}
            </div>
            <div className="p-3 flex flex-col justify-between text-center w-full">
              <div className="text-6xl mb-4 font-bold text-wrap break-words text-center w-full">
                {characterData?.name}
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-bold">Location:</div>
                <div className="text-4xl text-wrap text-lime-300">
                  {characterData?.location.name}
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-bold">Gender:</div>
                <div className="text-4xl text-wrap text-lime-300">
                  {characterData?.gender == "Male" ? <i></i> : <i></i>}
                </div>
              </div>

              <div>
                <div className="text-4xl">
                  Type:{" "}
                  {characterData?.type == "" ? "Normal" : characterData?.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
