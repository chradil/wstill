<template>
	<div>
		<h1>this is a map page</h1>
	</div>
  <div id="map">
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";

export default {
  name: "map",
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hyYWRpbCIsImEiOiJja28wdnN0ZWMwZ3V3Mndta2Q2bm81bGtjIn0.Rt-7EwN5ftoTjzPYGhJl4Q";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
      });
      map.on('load', () => {

      });
    });
    return {};
  },
};
</script>

<style>
#map {
  height: 80vh;
  width: 80em;
  margin:5em;
}
</style>