import { attendGathering, cancelGathering } from "../../api/participationApi";

const GatheringDetailComponent = ({ gathering, onClose }) => {
  const isFull = gathering.currentParticipationsCount >= gathering.maxCapacity;

  const handleAttend = async () => {
    try {
      const data = await attendGathering(gathering.id);
      console.log(data);
      alert("참가 신청 완료");
      if (onClose) onClose;
    } catch (error) {
      console.error("참가 신청 실패: ", error);
      alert("신청 중 오류가 발생했습니다.");
    }
  };

  const handleCancel = async () => {
    try {
      const data = await cancelGathering(gathering.id);
      console.log(data);
      alert("참가 취소 완료");
      if (onClose) onClose;
    } catch (error) {
      console.error("참가 취소 실패: ", error);
      alert("취소 중 오류가 발생했습니다");
    }
  };
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="w-full h-40 border border-dashed border-gray-200  rounded-lg flex justify-center items-center">
        <span className="text-gray-500">[지도 마커 예정]</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{gathering.title}</h2>
        <p className="">{gathering.description}</p>
      </div>

      <div className="flex flex-row gap-4 border-t pt-3 justify-center">
        <span>정원 : {gathering.maxCapacity} 명</span>
        <span>시작일: {new Date(gathering.startsAt).toLocaleDateString()}</span>
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          className={`mt-4 py-2 w-2/12  rounded-xl transition-all ${isFull ? "bg-gray-400 cursor-not-allowed" : "bg-primaryButton hover:bg-secondary"}`}
          disabled={isFull}
          onClick={() => {
            handleAttend;
          }}
        >
          {isFull ? "정원 초과" : "참가 신청"}
        </button>
        <button
          className="mt-4 py-2 w-2/12 bg-primaryButton hover:bg-secondary rounded-xl"
          onClick={() => {
            handleCancel;
          }}
        >
          참가 취소
        </button>
      </div>
    </div>
  );
};

export default GatheringDetailComponent;
