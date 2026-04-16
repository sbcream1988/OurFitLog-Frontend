import { useEffect, useState } from "react";
import GatheringCardComponent from "./GatheringCardComponent";
import { gatheringList } from "../../api/gatheringApi";

const GatheringListComponent = () => {
  const [gatherings, setGatherings] = useState([]);

  useEffect(() => {
    gatheringList()
      .then((data) => {
        setGatherings(data.data);
      })
      .catch((error) => {
        console.error("데이터 로딩 실패: ", error);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center border border-white rounded-xl w-3xl p-4 m-4">
      {gatherings.length > 0 ? (
        gatherings.map((gathering) => (
          <GatheringCardComponent
            key={gathering.id}
            gathering={gathering}
          ></GatheringCardComponent>
        ))
      ) : (
        <div className="font-semibold text-white">
          현재 활성화된 모임이 없습니다
        </div>
      )}
    </div>
  );
};

export default GatheringListComponent;
