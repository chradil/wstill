<template>
  <div>
    <h1>this is an events page</h1>
  </div>
  <div class="calendar">
  <Calendar />
  </div>
  <div class="cal">
  <FullCalendar :options="calendarOptions" />
  </div>
</template>


<script>
import { Calendar } from 'v-calendar';
import { FullCalendar } from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'



export default {
  name: "events",
  components: {
    Calendar,
    FullCalendar
  },
  data() {
    return {
      date: new Date(),
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      },
    };
  },
};

</script>