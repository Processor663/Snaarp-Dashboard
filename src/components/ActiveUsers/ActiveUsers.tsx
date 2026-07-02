// ActiveUsersMap.tsx
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@chakra-ui/react";

// Sample data for active users
import { activeUsers } from "@/data/data";

//Type for active user
import type { ActiveUser } from "@/data/data";


const createUserIcon = (user: ActiveUser) => {
  return L.divIcon({
    className: "",
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="${user.color}">
          <path d="M12 0C7.6 0 4 3.6 4 8c0 5.4 7 15.5 7.3 15.9.2.3.5.4.7.4s.5-.1.7-.4C12.9 23.5 20 13.4 20 8c0-4.4-3.6-8-8-8zm0 11.5A3.5 3.5 0 1 1 12 4.5a3.5 3.5 0 0 1 0 7z"/>
        </svg>
        <div style="
          background:${user.color};
          color:white;
          padding:4px 12px;
          border-radius:6px;
          font-size:13px;
          font-weight:600;
          white-space:nowrap;
          margin-top:2px;
          box-shadow:0 1px 3px rgba(0,0,0,0.2);
        ">
          ${user.name}
        </div>
      </div>
    `,
    iconSize: [26, 48],
    iconAnchor: [13, 26],
  });
};

const ActiveUsersMap = () => {
  const center: [number, number] = [13.0355, 80.2105];

  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      // maxW="440px"
      h="100%"
    >
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {activeUsers.map((user) => (
          <Marker
            key={user.id}
            position={[user.lat, user.lng]}
            icon={createUserIcon(user)}
          />
        ))}
      </MapContainer>
    </Box>
  );
};

export default ActiveUsersMap;
