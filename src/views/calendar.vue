<template>
  <div id="cal">
  <div>
  <h2> this is a calendar page</h2>
  </div>
  <FullCalendar :options="calendarOptions"/>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default {
  name: "Calendar",
  components: {
    FullCalendar 
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, googleCalendarPlugin ],
        initialView: 'dayGridMonth',
        googleCalendarApiKey: 'AIzaSyATa6jtDDyPV20MPoYi6uckNBx41kB-buQ',
        events: {
          googleCalendarId: 'c_t0eruqtfu1a958ih7elgd2f1a0@group.calendar.google.com'
        }
      }
    };
  },
}
</script>

<style>
  #cal{
    padding:1em;
    padding-top:2em;
    }
  .fc-event, .fc-h-event{
    display:block;
    background-color:#78a6a1;
    color: white;
    padding:2px;
    border:none;
  }
  .fc-event:hover{
    background-color: #42b983;
  }
  .fc-daygrid-event-dot{
    display:none;

  }
</style>