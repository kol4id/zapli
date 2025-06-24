"use client";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import { type FC } from "react";

interface IProps{
    center: number[];
    zoom: number;
}

const YaMap: FC<IProps> = ({center, zoom}) =>{
    const mapCenter = center; 
    const currentZoom = zoom; 
    const placemarkCoords = mapCenter; 

    const mapState = {
        center: mapCenter,
        zoom: currentZoom,
        behaviors: ['scrollZoom', 'drag', 'dblClickZoom', 'multiTouch'] 
    };

    return (
        <YMaps >
            <Map defaultState={mapState} style={{width: '568px', minHeight: '500px', overflow: "hidden", zIndex: 1, borderRadius: '12px'}}
                modules={['control.ZoomControl', 'control.FullscreenControl', 'Placemark', 'behavior.ScrollZoom']}  
            >
                <Placemark geometry={placemarkCoords}/>
            </Map>
        </YMaps>  
    );
}
export default YaMap