import { clx } from "../../utils/clx";
export interface Character {
  id: number;
  name: string;
  image: string;
  location: Record<string, string>;
  status: string;
  gender: string;
  species: string;
  origin: Record<string, string>;
  type: string;
}

interface CardProps {
  results: Character[];
  setCharacterData: (character: Character) => void;
  setOpenModal: (x: boolean) => void;
}

export const Cards = ({
  results,
  setCharacterData,
  setOpenModal,
}: CardProps) => {
  console.log(results);

  const handleModal = (character: Character) => {
    setOpenModal(true);
    setCharacterData(character);
  };

  return (
    <>
      {results.map((x) => {
        const { id, name, image, status, location } = x;
        return (
          <>
            <div
              onClick={() => {
                handleModal(x);
              }}
              key={id}
              className="max-md:flex-grow hover:scale-105 transition-all duration-300 border-2 border-slate-950 rounded-3xlcursor-pointer max-lg::w-1/3 min-[768px]::max-w-72"
            >
              <div className="max-md:flex bg-lime-300/5 backdrop-blur-2xl shadow-lg shadow-lime-500/20 rounded-3xl p-2 text-slate-50 hover:shadow-lime-500/80 hover:bg-lime-300/10 duration-300 h-full ">
                <div className="mb-2">
                  <img src={image} alt="" className="w-full rounded-3xl" />
                </div>
                <div>
                  <div
                    className={clx(
                      "rounded-md p-1 text-xl text-white border-4 w-fit",
                      status == "Alive" ? "border-green-500" : "",
                      status == "Dead" ? "border-red-500" : "",
                      status == "unknown" ? "border-gray-400" : ""
                    )}
                  >
                    {status}
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div className="text-3xl mb-4 font-bold text-wrap break-words max-w-72">
                      {name}
                    </div>

                    <div>
                      <div className="text-xl font-light">Location:</div>
                      <div className="text-xl text-wrap">{location.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
