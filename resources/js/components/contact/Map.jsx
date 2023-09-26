import React from "react";
import { ComposableMap ,Geographies,Geography,Annotation } from "react-simple-maps";

import { useTranslation } from "react-i18next";

const Map = () => {
  const [t, il8n] = useTranslation()
  return (
    <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{
      rotate: [-2.9452, -35.1844, 0],
      center: [-5, -3],
      scale: 4500
    }}
    style={{width:"100%", height:"100%"}}>
    <Geographies  geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}>
         {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
        </Geographies>
        <Annotation
        subject={[-2.9452, 35.1844]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {t('map_name')}
        </text>
        </Annotation>

    </ComposableMap>
  );
};

export default Map;
