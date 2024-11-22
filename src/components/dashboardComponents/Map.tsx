import { Box, Button, Typography } from "@mui/material";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import markerIcon from "../../../public/map/marker.svg";
import React from "react";

type MarkerProps = {
  name: string;
  customers: number;
  location: {
    lat: number;
    lng: number;
  };
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.43034,
  lng: 3.41696,
};

const markers: MarkerProps[] = [
  {
    name: "Civic towers",
    customers: 201,
    location: {
      lat: 6.5008209,
      lng: 3.3655432,
    },
  },
  {
    name: "FF towers",
    customers: 100,
    location: {
      lat: 6.42298,
      lng: 3.44253,
    },
  },
  {
    name: "Ministry of interior",
    customers: 51,
    location: {
      lat: 6.4437012,
      lng: 3.515993,
    },
  },
  {
    name: "New Horizon",
    customers: 33,
    location: {
      lat: 6.59577,
      lng: 3.33708,
    },
  },
];

type ENVPROPS = string;

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY as ENVPROPS,
  });

  const [selectedMarker, setSelectedMarker] =
    React.useState<MarkerProps | null>(null);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((marker) => (
        <Box key={marker.name}>
          <Marker
            position={marker.location}
            options={{
              icon: markerIcon,
            }}
            onMouseOver={() => setSelectedMarker(marker)}
          />
        </Box>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.location}
          options={{
            headerDisabled: true,
          }}
        >
          <Box sx={{ width: "auto" }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#344054",
              }}
            >
              {selectedMarker.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#667085",
              }}
            >
              {selectedMarker.customers} customers
            </Typography>
            <Button
              sx={{
                textAlign: "center",
                mt: 2,
              }}
              size="small"
              variant="contained"
              onClick={() => setSelectedMarker(null)}
            >
              Close
            </Button>
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
