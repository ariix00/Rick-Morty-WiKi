interface EpisodeProps {
  numEp: string;
  setID: (x: number) => void;
  nameEp: string;
  idEp: number;
}

const Episode = ({ numEp, setID, idEp, nameEp }: EpisodeProps) => {
  return (
    <>
      <div className="w-full py-2 m-2 border-y-2 hover:border-y-4 border-lime-300/50 text-2xl shadow-inner hover:shadow-lime-300 hover:bg-black hover:text-lime-300 hover:border-lime-300 duration-300 cursor-pointer rounded-y-3xl active:brightness-50">
        <button
          className="mx-2 w-full text-start"
          onClick={() => {
            setID(idEp);
          }}
        >
          <span className="text-lime-400">{numEp}</span>
          {":"} {nameEp}
        </button>
      </div>
    </>
  );
};

export default Episode;
