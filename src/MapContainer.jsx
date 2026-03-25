import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
/* global kakao */

function MapContainer() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [position, setPosition] = useState(null);

  const searchPlaces = (currentMap) => {
    if (!currentMap) return;

    const ps = new kakao.maps.services.Places();
    const options = {
      location: currentMap.getCenter(),
      radius: 2000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };

    ps.keywordSearch(
      "헬스장",
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const newMarkers = data.map((place) => ({
            position: { lat: Number(place.y), lng: Number(place.x) },
            content: place.place_name,
          }));
          setMarkers(newMarkers);
        }
      },
      options,
    );
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
