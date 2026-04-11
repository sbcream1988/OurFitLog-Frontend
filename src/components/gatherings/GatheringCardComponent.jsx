import { LuChevronRight } from "react-icons/lu";

const GatheringCardComponent = () => {
  return (
    <div
      className="group flex flex-col gap-2 m-4 py-4 w-2xl h-auto min-h-60px sm:flex-row items-center justify-center border border-white rounded-xl cursor-pointer"
      onClick={() => {
        console.log("DetailPage");
      }}
    >
      <div className=" font-bold w-8/12 justify-center items-center truncate group-hover:font-extrabold">
        헬스 모여라
      </div>
      <div className="flex flex-row gap-2 w-2/12 justify-center items-center  ">
        <span>인원</span>
        <span>{}명</span>
      </div>
      <div className="w-1/12 flex justify-end">
        <LuChevronRight
          className="text-xl group-hover:text-primaryButton group-hover:translate-x-1 transition-all"
          onClick={() => {
            console.log("Join");
          }}
        ></LuChevronRight>
      </div>
    </div>
  );
};

export default GatheringCardComponent;
