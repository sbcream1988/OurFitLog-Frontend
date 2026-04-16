import { useState } from "react";
import GatheringListComponent from "../../components/gatherings/GatheringListComponent";
import GatheringCreateComponent from "../../components/gatherings/GatheringCreateComponent";

const GatheringPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <GatheringListComponent></GatheringListComponent>
      {isModalOpen && (
        <GatheringCreateComponent
          onClose={closeModal}
        ></GatheringCreateComponent>
      )}
      <button
        className="flex justify-end bg-secondary hover:bg-primaryButton m-2 p-2 rounded-xl cursor-pointer"
        onClick={() => {
          openModal();
        }}
      >
        모임 만들기
      </button>
    </div>
  );
};

export default GatheringPage;
