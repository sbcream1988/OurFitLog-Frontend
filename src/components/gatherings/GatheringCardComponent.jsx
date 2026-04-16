import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import GatheringDetailComponent from "./GatheringDetailComponent";

const GatheringCardComponent = ({ gathering }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="group flex flex-col gap-2 m-4 py-4 w-2xl h-auto min-h-60px sm:flex-row items-center justify-center border border-white rounded-xl cursor-pointer"
        onClick={() => {
          openModal();
          console.log("DetailPage");
        }}
      >
        <div className=" font-bold w-8/12 justify-center items-center truncate group-hover:font-extrabold">
          {gathering.title}
        </div>
        <div className="flex flex-row gap-2 w-2/12 justify-center items-center  ">
          <span>인원 </span>
          <span
            className={
              gathering.currentParticipartionsCount >= gathering.maxCapacity
                ? "text-red-500 font-bold"
                : ""
            }
          >
            {gathering.currentParticipartionsCount} / {gathering.maxCapacity}명
          </span>
        </div>
        <div className="w-1/12 flex justify-end">
          <LuChevronRight
            className="text-xl group-hover:text-primaryButton group-hover:translate-x-1 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              console.log("DetailPage");
            }}
          ></LuChevronRight>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4 "
          onClick={() => {
            closeModal;
          }}
        >
          <div
            className="bg-primary p-6 rounded-xl border border-white w-full max-w-lg shadow-2xl relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="w-4 h-4 absolute top-4 right-4 hover:cursor-pointer"
              onClick={closeModal}
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-5 border-b pb-3">
              모임 상세 정보
            </h3>
            <GatheringDetailComponent
              gathering={gathering}
            ></GatheringDetailComponent>
          </div>
        </div>
      )}
    </>
  );
};

export default GatheringCardComponent;
