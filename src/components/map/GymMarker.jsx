import React from "react";
import { MapMarker } from "react-kakao-maps-sdk";

const GymMarker = React.memo(({ marker, isSelected, onClick }) => {
  console.log(`마커 렌더링 : ${marker.content}`);
  return (
    <MapMarker position={marker.position} onClick={() => onClick(marker)}>
      {isSelected && (
        <div style={{ color: "#000", padding: "5px", minWidth: "150px" }}>
          {marker.content}
        </div>
      )}
    </MapMarker>
  );
});

GymMarker.displayName = "GymMarker";

export default GymMarker;
