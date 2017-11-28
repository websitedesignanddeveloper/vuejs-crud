// var Vue = require('vue');

new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: [{
			id: 1,
			title: 'Event 1',
			detail: 'Event 1 Details',
			date: '2015-12-12'
		  },
		  {
			id: 2,
			title: 'Event 2',
			detail: 'Event 2 Details',
			date: '2015-11-12'
		  }],
	index: null
  },

  ready: function () {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function () {
         // this.$set('events', this.events);
          console.log(events);
       
    },

    addEvent: function () {
		
      if (this.event.title.trim()) {
        if(this.index == null)
		{
			this.events.push(this.event);
			console.log('Event added!');
			this.event = { title: '', detail: '', date: '' };
		}
		else
		{
			
			this.events.$set(this.index, this.event);
			this.event = { title: '', detail: '', date: '' };
		}
      }
    },
	cancelEvent:function(){
		this.event = { title: '', detail: '', date: '' };
		this.index= null;
	},
	EventToForm:function(event, index){
		this.event.title =  event.title;
		this.event.detail =  event.detail;
		this.event.date =  event.date;
		this.index= index;
		//this.event = event;
	},
    deleteEvent: function (index) {
      if (confirm('are you sure to delete？')) {
        // this.events.splice(index, 1);
          this.events.splice(index, 1);
      }
    }
  }
});