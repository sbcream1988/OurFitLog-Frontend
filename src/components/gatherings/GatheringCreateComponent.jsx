import { useState } from "react";
import { createGathering } from "../../api/gatheringApi";

const GatheringCreateComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startsAt: "",
    maxCapacity: 2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCreateGathering = async () => {
    try {
      const result = await createGathering(formData);
      console.log(result);
      alert("모임이 생성되었습니다");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("생성 실패: ", error);
      alert("모임 생성에 실패했습니다");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative bg-primary border border-white p-6 rounded-xl shadow-2xl w-2xl max-w-lg z-10">
        <div className="flex flex-col gap-4 text-white m-2 p-2">
          <h2 className="text-xl font-semibold">새 모임 만들기</h2>
          <span className="text-sm">모임 이름</span>
          <input
            className="bg-secondary p-2 rounded-lg text-sm"
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></input>
          <span>상세정보</span>
          <input
            className="bg-secondary p-2 rounded-lg text-sm"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></input>
          <div className="p-2 flex items-center justify-between gap-2">
            <span>시작시간</span>
            <input
              type="datetime-local"
              className="bg-secondary p-2 rounded-lg text-sm w-4/12"
              name="startsAt"
              value={formData.startsAt}
              onChange={handleChange}
            ></input>
            <span>정원</span>
            <input
              type="number"
              className="bg-secondary p-2 rounded-lg text-sm w-2/12"
              name="maxCapacity"
              value={formData.maxCapacity}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="flex justify-end gap-4 p-2 mt-4">
          <button
            className="bg-primaryButton hover:opacity-80 p-2 rounded-xl"
            onClick={handleCreateGathering}
          >
            생성
          </button>
          <button
            className="bg-primaryButton hover:opacity-80 p-2 rounded-xl"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default GatheringCreateComponent;
