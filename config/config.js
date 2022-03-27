/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","192.168.0.24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},{
			module: "MMM-MonthlyCalendar",
			position: "bottom_bar",
			position: "top_left",
			config: { // See "Configuration options" for more information.
			  mode: "fourWeeks",
			}
		},{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Windsor",
				locationID: "5946226", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "fbe8d4060af19a776d894f400f410082"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Windsor",
				locationID: "5946226", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "fbe8d4060af19a776d894f400f410082"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}, {
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				apiKey: '1db1e3d6f8f747b48b886ef45f09ac52'
			}
		},{
			module: "MMM-MyScoreboard",
			position: "top_right",
			classes: "default everyone",
			header: "My Scoreboard",
			config: {
			  showLeagueSeparators: true,
			  colored: true,
			  viewStyle: "mediumLogos",
			  sports: [
				{
				  league: "FIFA_WORLD_CUP",
				  label: "FIFA"
				},
				{
				  league: "NCAAM_MM",
				  label: "March Madness"
				}
			  ]
		  
			}
		  },{
			module: "MMM-OClock",
			position: "top_center",
			config: {
			  locale: "", //default is system locale, or use like this. "de-DE"
			  canvasWidth:1000,
			  canvasHeight:1000,
			  centerColor: "#FFFFFF",
			  centerR: 50,
			  centerTextFormat: "YYYY",
			  centerFont: "bold 20px Roboto",
			  centerTextColor:"#000000",
			  hands: ["month", "date", "day", "hour", "minute", "second"],
			  //available values; "year", "month", "date", "week", "day", "hour", "minute", "second"
			  handType: "round", //"default", "round"
			  handWidth: [40, 40, 40, 40, 40, 40],
			  handTextFormat: ["MMM", "Do", "ddd", "h", "m", "s"],
			  handFont: "bold 16px Roboto",
			  useNail: true,
			  nailSize: 40,
			  nailBgColor: "#000000",
			  nailTextColor: "#FFFFFF", //CSS color or "inherit"
			  space: 3,
			  colorType: "hsv", //availables: "static", "radiation", "transform", "hsv"
			  colorTypeStatic: ["red", "orange", "yellow", "green", "blue", "purple"],
			  colorTypeRadiation: ["#333333", "red"],
			  colorTypeTransform: ["blue", "red"],
			  colorTypeHSV: 0.25, //hsv circle start color : 0~1
		  
			  handConversionMap: { // I think you don't need to modify this.
				"year": "YYYY",
				"month": "M",
				"date": "D",
				"week": "w", // Local week of year. If you want to use ISO week of year, use "W" instead "w"
				"day": "e", // Local day of week. If you want to use ISO day of week, use "E" instead "e"
				"hour": "h", // 12H system. If you want to 24H system, use "H" instead "h"
				"minute": "m",
				"second": "s"
			  },
		  
			  ////// Available as of v2.x:
			  secondsUpdateInterval: 1,  // how often to redraw the seconds hand (integer >= 1 sec)
		  
			  // To show an age bar enter your birthYear AND enter "age" in the hands array.
			  birthYear: false,  // e.g. 1901
			  birthMonth: 0,    // e.g. 1-12 (optional, recommended)
			  lifeExpectancy: 85, // default: 85
			  linearLife: false,  // set to true to plot life linearly not logarithmically
								  // Inspiration: http://www.bertrandplanes.com/pages/LifeClock3.php
			  ageBarColor: [],  // false for no gradient, empty array for default, or
								// [start, stop] colors, e.g. ['#000', 'white']
		  
			  scale: 1, // convenience to scale bar dimensions (font size & nailSize should be
						// adjusted manually).  E.g. 0.5 is half-size, 2 is double sized.
		  
			  canvasStyle: "", // Any CSS styles, e.g. "opacity: .7; ..."
		  
			}
		   }, {
			module: 'MMM-Screencast',
			position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
			config: {
				position: 'bottomRight',
				height: 300,
				width: 500,
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
