import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { getNearbyGyms } from "./api/mapApi";

function MapContainer() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [position, setPosition] = useState(null);

  const searchPlaces = async (currentMap) => {
    if (!currentMap) return;

    const center = currentMap.getCenter();
    const lat = center.getLat();
    const lng = center.getLng();

    try {
      const response = await getNearbyGyms(lat, lng);
      const newMarkers = response.data.documents.map((place) => ({
        position: { lat: Number(place.y), lng: Number(place.x) },
        content: place.place_name,
      }));
      setMarkers(newMarkers);
    } catch (error) {
      console.error("헬스장 데이터를 가져오는 중 에러 발생", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCenter(newPos);
        setPosition(newPos);
      });
    }
  }, []);

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => searchPlaces(map)}
          className="bg-green-600 text-white px-4 py-2 rouunded shadow"
        >
          헬스장 찾기
        </button>
      </div>
      <Map
        center={center}
        style={{ width: "100%", height: "500px" }}
        level={4}
        onCreate={setMap}
      >
        {position && <MapMarker position={position}></MapMarker>}
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000", padding: "5px" }}>
                {marker.content}
              </div>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default MapContainer;
