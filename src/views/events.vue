<template>
  <div>
    <h1>this is an events page</h1>
  </div>
  <div class="calendar">
  <Calendar />
  </div>
</template>


<script>
import { Calendar } from 'v-calendar';


export default {
  name: "events",
  components: {
    Calendar,
  },
  data() {
    return {
      date: new Date(),
    };
  },
};

</script>