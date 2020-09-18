// import { useState, useCallback } from "react";

// function useGeocoder() {
//   const [viewport, setViewport] = useState({
//     height: "100%",
//     width: "100%",
//     latitude: 51.9565,
//     longitude: 10.2755,
//     zoom: 4.5,
//   });
//   const handleViewportChange = useCallback(
//     (newViewport) => setViewport(newViewport),
//     []
//   );
//   const handleGeocoderViewportChange = useCallback((newViewport) => {
//     const geocoderDefaultOverrides = { transitionDuration: 1000 };

//     return handleViewportChange({
//       ...newViewport,
//       ...geocoderDefaultOverrides,
//     });
//   }, []);
// }

// export default useGeocoder;
