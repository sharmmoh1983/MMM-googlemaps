Module.register("MMM-googlemaps",{
    // Default module config.
    defaults: {
	apikey: 'your_api_key',
	origin: 'your_origin_here',
	destination: 'your_origin_here',
	baseurl: 'https://www.google.com/maps/embed/v1/directions?key=',
	style: 'border:0',
	},

    getDom: function() {
        Log.log("getDom" ,this.hidden);
        if (!this.hidden) {
	var fullyBuiltURL = this.config.baseurl + this.config.apikey + '&origin=' + this.config.origin + '&destination=' + this.config.destination;
  		var iframe = document.createElement("IFRAME");
		iframe.style = this.config.style;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  fullyBuiltURL;
              Log.log("iframe" ,iframe);
		return iframe;
       }
	},
start: function() {
		Log.info('Starting module: ' + this.name);

             Log.log("In map module",this.hidden);
                this.hide(0);
                Log.log("In map module",this.hidden);
	},
notificationReceived: function(notification, payload, sender) {
 Log.log("In map module notificationReceived",notification); 
//Log.log("In map module notificationReceived"); 
		if (notification === "SHOW_MAP") {
Log.log("In map module",this.hidden);
                        this.show(0);
                        Log.log("In map module",this.hidden);
                       this.updateDom();
			
		} 
if (notification === "HIDE_MAP") {
Log.log("In map module",this.hidden);
                      this.hide(0, function() {
              Log.log(this.name + ' is hidden.');
            });
                        Log.log("In map module",this.hidden);
                       //this.updateDom();
			
		} 
	}
});