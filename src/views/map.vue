<template>
<div id="container">
	<div>
		<h1>this is a map page</h1>
	</div>
  <div id="mappy">
  </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";

export default {
  name: "mappy",
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hyYWRpbCIsImEiOiJja28wdnN0ZWMwZ3V3Mndta2Q2bm81bGtjIn0.Rt-7EwN5ftoTjzPYGhJl4Q";
      const mappy = new mapboxgl.Map({
        container: "mappy",
        style: "mapbox://styles/mapbox/light-v9",
      });
      mappy.on('load', () => {

      });
    });
    return {};
  },
};
</script>

<style>
#mappy {
  height: 80vh;
  width: 80em;
  margin:5em;
}
</style>