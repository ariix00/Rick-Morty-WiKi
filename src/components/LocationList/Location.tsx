interface LocationProps {
  locationName: string;
  locationNumber: number;
  setID: (x: number) => void;
}
const Location = ({ setID, locationName, locationNumber }: LocationProps) => {
  return (
    <>
      <div className="w-full py-2 m-2 border-y-2 hover:border-y-4 border-lime-300/50 text-2xl shadow-inner hover:shadow-lime-300 hover:bg-black hover:text-lime-300 hover:border-lime-300 duration-300 cursor-pointer rounded-y-3xl active:brightness-50">
        <button
          onClick={() => {
            setID(locationNumber);
          }}
          className="mx-2 w-full text-start"
        >
          {locationNumber}: {locationName}
        </button>
      </div>
    </>
  );
};

export default Location;
