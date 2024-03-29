$(function($) {
	$('#dtpicker').datepicker();
	$('#input_dt').datetimepicker({
			timeFormat: 'HH:mm z',
			showTimezone: true,
			useLocalTimezone: true,
			timezoneList: [ 
					{ value: '+0000', label: 'Africa/Abidjan'},
{ value: '+0000', label: 'Africa/Accra'},
{ value: '+0300', label: 'Africa/Addis_Ababa'},
{ value: '+0100', label: 'Africa/Algiers'},
{ value: '+0300', label: 'Africa/Asmara'},
{ value: '+0000', label: 'Africa/Bamako'},
{ value: '+0100', label: 'Africa/Bangui'},
{ value: '+0000', label: 'Africa/Banjul'},
{ value: '+0000', label: 'Africa/Bissau'},
{ value: '+0200', label: 'Africa/Blantyre'},
{ value: '+0100', label: 'Africa/Brazzaville'},
{ value: '+0200', label: 'Africa/Bujumbura'},
{ value: '+0200', label: 'Africa/Cairo'},
{ value: '+0000', label: 'Africa/Casablanca'},
{ value: '+0100', label: 'Africa/Ceuta'},
{ value: '+0000', label: 'Africa/Conakry'},
{ value: '+0000', label: 'Africa/Dakar'},
{ value: '+0300', label: 'Africa/Dar_es_Salaam'},
{ value: '+0300', label: 'Africa/Djibouti'},
{ value: '+0100', label: 'Africa/Douala'},
{ value: '+0000', label: 'Africa/El_Aaiun'},
{ value: '+0000', label: 'Africa/Freetown'},
{ value: '+0200', label: 'Africa/Gaborone'},
{ value: '+0200', label: 'Africa/Harare'},
{ value: '+0200', label: 'Africa/Johannesburg'},
{ value: '+0300', label: 'Africa/Juba'},
{ value: '+0300', label: 'Africa/Kampala'},
{ value: '+0300', label: 'Africa/Khartoum'},
{ value: '+0200', label: 'Africa/Kigali'},
{ value: '+0100', label: 'Africa/Kinshasa'},
{ value: '+0100', label: 'Africa/Lagos'},
{ value: '+0100', label: 'Africa/Libreville'},
{ value: '+0000', label: 'Africa/Lome'},
{ value: '+0100', label: 'Africa/Luanda'},
{ value: '+0200', label: 'Africa/Lubumbashi'},
{ value: '+0200', label: 'Africa/Lusaka'},
{ value: '+0100', label: 'Africa/Malabo'},
{ value: '+0200', label: 'Africa/Maputo'},
{ value: '+0200', label: 'Africa/Maseru'},
{ value: '+0200', label: 'Africa/Mbabane'},
{ value: '+0300', label: 'Africa/Mogadishu'},
{ value: '+0000', label: 'Africa/Monrovia'},
{ value: '+0300', label: 'Africa/Nairobi'},
{ value: '+0100', label: 'Africa/Ndjamena'},
{ value: '+0100', label: 'Africa/Niamey'},
{ value: '+0000', label: 'Africa/Nouakchott'},
{ value: '+0000', label: 'Africa/Ouagadougou'},
{ value: '+0100', label: 'Africa/Porto-Novo'},
{ value: '+0000', label: 'Africa/Sao_Tome'},
{ value: '+0200', label: 'Africa/Tripoli'},
{ value: '+0100', label: 'Africa/Tunis'},
{ value: '+0200', label: 'Africa/Windhoek'},
{ value: '-1000', label: 'America/Adak'},
{ value: '-0900', label: 'America/Anchorage'},
{ value: '-0400', label: 'America/Anguilla'},
{ value: '-0400', label: 'America/Antigua'},
{ value: '-0300', label: 'America/Araguaina'},
{ value: '-0300', label: 'America/Argentina/Buenos_Aires'},
{ value: '-0300', label: 'America/Argentina/Catamarca'},
{ value: '-0300', label: 'America/Argentina/Cordoba'},
{ value: '-0300', label: 'America/Argentina/Jujuy'},
{ value: '-0300', label: 'America/Argentina/La_Rioja'},
{ value: '-0300', label: 'America/Argentina/Mendoza'},
{ value: '-0300', label: 'America/Argentina/Rio_Gallegos'},
{ value: '-0300', label: 'America/Argentina/Salta'},
{ value: '-0300', label: 'America/Argentina/San_Juan'},
{ value: '-0400', label: 'America/Argentina/San_Luis'},
{ value: '-0300', label: 'America/Argentina/Tucuman'},
{ value: '-0300', label: 'America/Argentina/Ushuaia'},
{ value: '-0400', label: 'America/Aruba'},
{ value: '-0300', label: 'America/Asuncion'},
{ value: '-0500', label: 'America/Atikokan'},
{ value: '-0200', label: 'America/Bahia'},
{ value: '-0600', label: 'America/Bahia_Banderas'},
{ value: '-0400', label: 'America/Barbados'},
{ value: '-0300', label: 'America/Belem'},
{ value: '-0600', label: 'America/Belize'},
{ value: '-0400', label: 'America/Blanc-Sablon'},
{ value: '-0400', label: 'America/Boa_Vista'},
{ value: '-0500', label: 'America/Bogota'},
{ value: '-0700', label: 'America/Boise'},
{ value: '-0700', label: 'America/Cambridge_Bay'},
{ value: '-0300', label: 'America/Campo_Grande'},
{ value: '-0600', label: 'America/Cancun'},
{ value: '-0430', label: 'America/Caracas'},
{ value: '-0300', label: 'America/Cayenne'},
{ value: '-0500', label: 'America/Cayman'},
{ value: '-0600', label: 'America/Chicago'},
{ value: '-0700', label: 'America/Chihuahua'},
{ value: '-0600', label: 'America/Costa_Rica'},
{ value: '-0700', label: 'America/Creston'},
{ value: '-0300', label: 'America/Cuiaba'},
{ value: '-0400', label: 'America/Curacao'},
{ value: '+0000', label: 'America/Danmarkshavn'},
{ value: '-0800', label: 'America/Dawson'},
{ value: '-0700', label: 'America/Dawson_Creek'},
{ value: '-0700', label: 'America/Denver'},
{ value: '-0500', label: 'America/Detroit'},
{ value: '-0400', label: 'America/Dominica'},
{ value: '-0700', label: 'America/Edmonton'},
{ value: '-0400', label: 'America/Eirunepe'},
{ value: '-0600', label: 'America/El_Salvador'},
{ value: '-0300', label: 'America/Fortaleza'},
{ value: '-0400', label: 'America/Glace_Bay'},
{ value: '-0300', label: 'America/Godthab'},
{ value: '-0400', label: 'America/Goose_Bay'},
{ value: '-0500', label: 'America/Grand_Turk'},
{ value: '-0400', label: 'America/Grenada'},
{ value: '-0400', label: 'America/Guadeloupe'},
{ value: '-0600', label: 'America/Guatemala'},
{ value: '-0500', label: 'America/Guayaquil'},
{ value: '-0400', label: 'America/Guyana'},
{ value: '-0400', label: 'America/Halifax'},
{ value: '-0500', label: 'America/Havana'},
{ value: '-0700', label: 'America/Hermosillo'},
{ value: '-0500', label: 'America/Indiana/Indianapolis'},
{ value: '-0600', label: 'America/Indiana/Knox'},
{ value: '-0500', label: 'America/Indiana/Marengo'},
{ value: '-0500', label: 'America/Indiana/Petersburg'},
{ value: '-0600', label: 'America/Indiana/Tell_City'},
{ value: '-0500', label: 'America/Indiana/Vevay'},
{ value: '-0500', label: 'America/Indiana/Vincennes'},
{ value: '-0500', label: 'America/Indiana/Winamac'},
{ value: '-0700', label: 'America/Inuvik'},
{ value: '-0500', label: 'America/Iqaluit'},
{ value: '-0500', label: 'America/Jamaica'},
{ value: '-0900', label: 'America/Juneau'},
{ value: '-0500', label: 'America/Kentucky/Louisville'},
{ value: '-0500', label: 'America/Kentucky/Monticello'},
{ value: '-0400', label: 'America/Kralendijk'},
{ value: '-0400', label: 'America/La_Paz'},
{ value: '-0500', label: 'America/Lima'},
{ value: '-0800', label: 'America/Los_Angeles'},
{ value: '-0400', label: 'America/Lower_Princes'},
{ value: '-0300', label: 'America/Maceio'},
{ value: '-0600', label: 'America/Managua'},
{ value: '-0400', label: 'America/Manaus'},
{ value: '-0400', label: 'America/Marigot'},
{ value: '-0400', label: 'America/Martinique'},
{ value: '-0600', label: 'America/Matamoros'},
{ value: '-0700', label: 'America/Mazatlan'},
{ value: '-0600', label: 'America/Menominee'},
{ value: '-0600', label: 'America/Merida'},
{ value: '-0800', label: 'America/Metlakatla'},
{ value: '-0600', label: 'America/Mexico_City'},
{ value: '-0300', label: 'America/Miquelon'},
{ value: '-0400', label: 'America/Moncton'},
{ value: '-0600', label: 'America/Monterrey'},
{ value: '-0200', label: 'America/Montevideo'},
{ value: '-0500', label: 'America/Montreal'},
{ value: '-0400', label: 'America/Montserrat'},
{ value: '-0500', label: 'America/Nassau'},
{ value: '-0500', label: 'America/New_York'},
{ value: '-0500', label: 'America/Nipigon'},
{ value: '-0900', label: 'America/Nome'},
{ value: '-0200', label: 'America/Noronha'},
{ value: '-0600', label: 'America/North_Dakota/Beulah'},
{ value: '-0600', label: 'America/North_Dakota/Center'},
{ value: '-0600', label: 'America/North_Dakota/New_Salem'},
{ value: '-0700', label: 'America/Ojinaga'},
{ value: '-0500', label: 'America/Panama'},
{ value: '-0500', label: 'America/Pangnirtung'},
{ value: '-0300', label: 'America/Paramaribo'},
{ value: '-0700', label: 'America/Phoenix'},
{ value: '-0500', label: 'America/Port-au-Prince'},
{ value: '-0400', label: 'America/Port_of_Spain'},
{ value: '-0400', label: 'America/Porto_Velho'},
{ value: '-0400', label: 'America/Puerto_Rico'},
{ value: '-0600', label: 'America/Rainy_River'},
{ value: '-0600', label: 'America/Rankin_Inlet'},
{ value: '-0300', label: 'America/Recife'},
{ value: '-0600', label: 'America/Regina'},
{ value: '-0600', label: 'America/Resolute'},
{ value: '-0400', label: 'America/Rio_Branco'},
{ value: '-0800', label: 'America/Santa_Isabel'},
{ value: '-0300', label: 'America/Santarem'},
{ value: '-0300', label: 'America/Santiago'},
{ value: '-0400', label: 'America/Santo_Domingo'},
{ value: '-0200', label: 'America/Sao_Paulo'},
{ value: '-0100', label: 'America/Scoresbysund'},
{ value: '-0700', label: 'America/Shiprock'},
{ value: '-0900', label: 'America/Sitka'},
{ value: '-0400', label: 'America/St_Barthelemy'},
{ value: '-0330', label: 'America/St_Johns'},
{ value: '-0400', label: 'America/St_Kitts'},
{ value: '-0400', label: 'America/St_Lucia'},
{ value: '-0400', label: 'America/St_Thomas'},
{ value: '-0400', label: 'America/St_Vincent'},
{ value: '-0600', label: 'America/Swift_Current'},
{ value: '-0600', label: 'America/Tegucigalpa'},
{ value: '-0400', label: 'America/Thule'},
{ value: '-0500', label: 'America/Thunder_Bay'},
{ value: '-0800', label: 'America/Tijuana'},
{ value: '-0500', label: 'America/Toronto'},
{ value: '-0400', label: 'America/Tortola'},
{ value: '-0800', label: 'America/Vancouver'},
{ value: '-0800', label: 'America/Whitehorse'},
{ value: '-0600', label: 'America/Winnipeg'},
{ value: '-0900', label: 'America/Yakutat'},
{ value: '-0700', label: 'America/Yellowknife'},
{ value: '+0800', label: 'Antarctica/Casey'},
{ value: '+0700', label: 'Antarctica/Davis'},
{ value: '+1000', label: 'Antarctica/DumontDUrville'},
{ value: '+1100', label: 'Antarctica/Macquarie'},
{ value: '+0500', label: 'Antarctica/Mawson'},
{ value: '+1300', label: 'Antarctica/McMurdo'},
{ value: '-0300', label: 'Antarctica/Palmer'},
{ value: '-0300', label: 'Antarctica/Rothera'},
{ value: '+1300', label: 'Antarctica/South_Pole'},
{ value: '+0300', label: 'Antarctica/Syowa'},
{ value: '+0600', label: 'Antarctica/Vostok'},
{ value: '+0100', label: 'Arctic/Longyearbyen'},
{ value: '+0300', label: 'Asia/Aden'},
{ value: '+0600', label: 'Asia/Almaty'},
{ value: '+0200', label: 'Asia/Amman'},
{ value: '+1200', label: 'Asia/Anadyr'},
{ value: '+0500', label: 'Asia/Aqtau'},
{ value: '+0500', label: 'Asia/Aqtobe'},
{ value: '+0500', label: 'Asia/Ashgabat'},
{ value: '+0300', label: 'Asia/Baghdad'},
{ value: '+0300', label: 'Asia/Bahrain'},
{ value: '+0400', label: 'Asia/Baku'},
{ value: '+0700', label: 'Asia/Bangkok'},
{ value: '+0200', label: 'Asia/Beirut'},
{ value: '+0600', label: 'Asia/Bishkek'},
{ value: '+0800', label: 'Asia/Brunei'},
{ value: '+0800', label: 'Asia/Choibalsan'},
{ value: '+0800', label: 'Asia/Chongqing'},
{ value: '+0530', label: 'Asia/Colombo'},
{ value: '+0200', label: 'Asia/Damascus'},
{ value: '+0600', label: 'Asia/Dhaka'},
{ value: '+0900', label: 'Asia/Dili'},
{ value: '+0400', label: 'Asia/Dubai'},
{ value: '+0500', label: 'Asia/Dushanbe'},
{ value: '+0200', label: 'Asia/Gaza'},
{ value: '+0800', label: 'Asia/Harbin'},
{ value: '+0200', label: 'Asia/Hebron'},
{ value: '+0700', label: 'Asia/Ho_Chi_Minh'},
{ value: '+0800', label: 'Asia/Hong_Kong'},
{ value: '+0700', label: 'Asia/Hovd'},
{ value: '+0900', label: 'Asia/Irkutsk'},
{ value: '+0700', label: 'Asia/Jakarta'},
{ value: '+0900', label: 'Asia/Jayapura'},
{ value: '+0200', label: 'Asia/Jerusalem'},
{ value: '+0430', label: 'Asia/Kabul'},
{ value: '+1200', label: 'Asia/Kamchatka'},
{ value: '+0500', label: 'Asia/Karachi'},
{ value: '+0800', label: 'Asia/Kashgar'},
{ value: '+0545', label: 'Asia/Kathmandu'},
{ value: '+0530', label: 'Asia/Kolkata'},
{ value: '+0800', label: 'Asia/Krasnoyarsk'},
{ value: '+0800', label: 'Asia/Kuala_Lumpur'},
{ value: '+0800', label: 'Asia/Kuching'},
{ value: '+0300', label: 'Asia/Kuwait'},
{ value: '+0800', label: 'Asia/Macau'},
{ value: '+1200', label: 'Asia/Magadan'},
{ value: '+0800', label: 'Asia/Makassar'},
{ value: '+0800', label: 'Asia/Manila'},
{ value: '+0400', label: 'Asia/Muscat'},
{ value: '+0200', label: 'Asia/Nicosia'},
{ value: '+0700', label: 'Asia/Novokuznetsk'},
{ value: '+0700', label: 'Asia/Novosibirsk'},
{ value: '+0700', label: 'Asia/Omsk'},
{ value: '+0500', label: 'Asia/Oral'},
{ value: '+0700', label: 'Asia/Phnom_Penh'},
{ value: '+0700', label: 'Asia/Pontianak'},
{ value: '+0900', label: 'Asia/Pyongyang'},
{ value: '+0300', label: 'Asia/Qatar'},
{ value: '+0600', label: 'Asia/Qyzylorda'},
{ value: '+0630', label: 'Asia/Rangoon'},
{ value: '+0300', label: 'Asia/Riyadh'},
{ value: '+1100', label: 'Asia/Sakhalin'},
{ value: '+0500', label: 'Asia/Samarkand'},
{ value: '+0900', label: 'Asia/Seoul'},
{ value: '+0800', label: 'Asia/Shanghai'},
{ value: '+0800', label: 'Asia/Singapore'},
{ value: '+0800', label: 'Asia/Taipei'},
{ value: '+0500', label: 'Asia/Tashkent'},
{ value: '+0400', label: 'Asia/Tbilisi'},
{ value: '+0330', label: 'Asia/Tehran'},
{ value: '+0600', label: 'Asia/Thimphu'},
{ value: '+0900', label: 'Asia/Tokyo'},
{ value: '+0800', label: 'Asia/Ulaanbaatar'},
{ value: '+0800', label: 'Asia/Urumqi'},
{ value: '+0700', label: 'Asia/Vientiane'},
{ value: '+1100', label: 'Asia/Vladivostok'},
{ value: '+1000', label: 'Asia/Yakutsk'},
{ value: '+0600', label: 'Asia/Yekaterinburg'},
{ value: '+0400', label: 'Asia/Yerevan'},
{ value: '-0100', label: 'Atlantic/Azores'},
{ value: '-0400', label: 'Atlantic/Bermuda'},
{ value: '+0000', label: 'Atlantic/Canary'},
{ value: '-0100', label: 'Atlantic/Cape_Verde'},
{ value: '+0000', label: 'Atlantic/Faroe'},
{ value: '+0000', label: 'Atlantic/Madeira'},
{ value: '+0000', label: 'Atlantic/Reykjavik'},
{ value: '-0200', label: 'Atlantic/South_Georgia'},
{ value: '+0000', label: 'Atlantic/St_Helena'},
{ value: '-0300', label: 'Atlantic/Stanley'},
{ value: '+1030', label: 'Australia/Adelaide'},
{ value: '+1000', label: 'Australia/Brisbane'},
{ value: '+1030', label: 'Australia/Broken_Hill'},
{ value: '+1100', label: 'Australia/Currie'},
{ value: '+0930', label: 'Australia/Darwin'},
{ value: '+0845', label: 'Australia/Eucla'},
{ value: '+1100', label: 'Australia/Hobart'},
{ value: '+1000', label: 'Australia/Lindeman'},
{ value: '+1100', label: 'Australia/Lord_Howe'},
{ value: '+1100', label: 'Australia/Melbourne'},
{ value: '+0800', label: 'Australia/Perth'},
{ value: '+1100', label: 'Australia/Sydney'},
{ value: '-0400', label: 'Canada/Atlantic'},
{ value: '-0600', label: 'Canada/Central'},
{ value: '-0500', label: 'Canada/Eastern'},
{ value: '-0700', label: 'Canada/Mountain'},
{ value: '-0330', label: 'Canada/Newfoundland'},
{ value: '-0800', label: 'Canada/Pacific'},
{ value: '+0100', label: 'Europe/Amsterdam'},
{ value: '+0100', label: 'Europe/Andorra'},
{ value: '+0200', label: 'Europe/Athens'},
{ value: '+0100', label: 'Europe/Belgrade'},
{ value: '+0100', label: 'Europe/Berlin'},
{ value: '+0100', label: 'Europe/Bratislava'},
{ value: '+0100', label: 'Europe/Brussels'},
{ value: '+0200', label: 'Europe/Bucharest'},
{ value: '+0100', label: 'Europe/Budapest'},
{ value: '+0200', label: 'Europe/Chisinau'},
{ value: '+0100', label: 'Europe/Copenhagen'},
{ value: '+0000', label: 'Europe/Dublin'},
{ value: '+0100', label: 'Europe/Gibraltar'},
{ value: '+0000', label: 'Europe/Guernsey'},
{ value: '+0200', label: 'Europe/Helsinki'},
{ value: '+0000', label: 'Europe/Isle_of_Man'},
{ value: '+0200', label: 'Europe/Istanbul'},
{ value: '+0000', label: 'Europe/Jersey'},
{ value: '+0300', label: 'Europe/Kaliningrad'},
{ value: '+0200', label: 'Europe/Kiev'},
{ value: '+0000', label: 'Europe/Lisbon'},
{ value: '+0100', label: 'Europe/Ljubljana'},
{ value: '+0000', label: 'Europe/London'},
{ value: '+0100', label: 'Europe/Luxembourg'},
{ value: '+0100', label: 'Europe/Madrid'},
{ value: '+0100', label: 'Europe/Malta'},
{ value: '+0200', label: 'Europe/Mariehamn'},
{ value: '+0300', label: 'Europe/Minsk'},
{ value: '+0100', label: 'Europe/Monaco'},
{ value: '+0400', label: 'Europe/Moscow'},
{ value: '+0100', label: 'Europe/Oslo'},
{ value: '+0100', label: 'Europe/Paris'},
{ value: '+0100', label: 'Europe/Podgorica'},
{ value: '+0100', label: 'Europe/Prague'},
{ value: '+0200', label: 'Europe/Riga'},
{ value: '+0100', label: 'Europe/Rome'},
{ value: '+0400', label: 'Europe/Samara'},
{ value: '+0100', label: 'Europe/San_Marino'},
{ value: '+0100', label: 'Europe/Sarajevo'},
{ value: '+0200', label: 'Europe/Simferopol'},
{ value: '+0100', label: 'Europe/Skopje'},
{ value: '+0200', label: 'Europe/Sofia'},
{ value: '+0100', label: 'Europe/Stockholm'},
{ value: '+0200', label: 'Europe/Tallinn'},
{ value: '+0100', label: 'Europe/Tirane'},
{ value: '+0200', label: 'Europe/Uzhgorod'},
{ value: '+0100', label: 'Europe/Vaduz'},
{ value: '+0100', label: 'Europe/Vatican'},
{ value: '+0100', label: 'Europe/Vienna'},
{ value: '+0200', label: 'Europe/Vilnius'},
{ value: '+0400', label: 'Europe/Volgograd'},
{ value: '+0100', label: 'Europe/Warsaw'},
{ value: '+0100', label: 'Europe/Zagreb'},
{ value: '+0200', label: 'Europe/Zaporozhye'},
{ value: '+0100', label: 'Europe/Zurich'},
{ value: '+0000', label: 'GMT'},
{ value: '+0300', label: 'Indian/Antananarivo'},
{ value: '+0600', label: 'Indian/Chagos'},
{ value: '+0700', label: 'Indian/Christmas'},
{ value: '+0630', label: 'Indian/Cocos'},
{ value: '+0300', label: 'Indian/Comoro'},
{ value: '+0500', label: 'Indian/Kerguelen'},
{ value: '+0400', label: 'Indian/Mahe'},
{ value: '+0500', label: 'Indian/Maldives'},
{ value: '+0400', label: 'Indian/Mauritius'},
{ value: '+0300', label: 'Indian/Mayotte'},
{ value: '+0400', label: 'Indian/Reunion'},
{ value: '+1300', label: 'Pacific/Apia'},
{ value: '+1300', label: 'Pacific/Auckland'},
{ value: '+1345', label: 'Pacific/Chatham'},
{ value: '+1000', label: 'Pacific/Chuuk'},
{ value: '-0500', label: 'Pacific/Easter'},
{ value: '+1100', label: 'Pacific/Efate'},
{ value: '+1300', label: 'Pacific/Enderbury'},
{ value: '+1400', label: 'Pacific/Fakaofo'},
{ value: '+1200', label: 'Pacific/Fiji'},
{ value: '+1200', label: 'Pacific/Funafuti'},
{ value: '-0600', label: 'Pacific/Galapagos'},
{ value: '-0900', label: 'Pacific/Gambier'},
{ value: '+1100', label: 'Pacific/Guadalcanal'},
{ value: '+1000', label: 'Pacific/Guam'},
{ value: '-1000', label: 'Pacific/Honolulu'},
{ value: '-1000', label: 'Pacific/Johnston'},
{ value: '+1400', label: 'Pacific/Kiritimati'},
{ value: '+1100', label: 'Pacific/Kosrae'},
{ value: '+1200', label: 'Pacific/Kwajalein'},
{ value: '+1200', label: 'Pacific/Majuro'},
{ value: '-0930', label: 'Pacific/Marquesas'},
{ value: '-1100', label: 'Pacific/Midway'},
{ value: '+1200', label: 'Pacific/Nauru'},
{ value: '-1100', label: 'Pacific/Niue'},
{ value: '+1130', label: 'Pacific/Norfolk'},
{ value: '+1100', label: 'Pacific/Noumea'},
{ value: '-1100', label: 'Pacific/Pago_Pago'},
{ value: '+0900', label: 'Pacific/Palau'},
{ value: '-0800', label: 'Pacific/Pitcairn'},
{ value: '+1100', label: 'Pacific/Pohnpei'},
{ value: '+1000', label: 'Pacific/Port_Moresby'},
{ value: '-1000', label: 'Pacific/Rarotonga'},
{ value: '+1000', label: 'Pacific/Saipan'},
{ value: '-1000', label: 'Pacific/Tahiti'},
{ value: '+1200', label: 'Pacific/Tarawa'},
{ value: '+1300', label: 'Pacific/Tongatapu'},
{ value: '+1200', label: 'Pacific/Wake'},
{ value: '+1200', label: 'Pacific/Wallis'},
{ value: '-0900', label: 'US/Alaska'},
{ value: '-0700', label: 'US/Arizona'},
{ value: '-0600', label: 'US/Central'},
{ value: '-0500', label: 'US/Eastern'},
{ value: '-1000', label: 'US/Hawaii'},
{ value: '-0700', label: 'US/Mountain'},
{ value: '-0800', label: 'US/Pacific'},
{ value: '+0000', label: 'UTC'} 
					]
		});
	var tzlist= ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Asmera', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Timbuktu', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/ComodRivadavia', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Atka', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Buenos_Aires', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Catamarca', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Coral_Harbour', 'America/Cordoba', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Ensenada', 'America/Fort_Wayne', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Jujuy', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Knox_IN', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Louisville', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Mendoza', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montreal', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Acre', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Rosario', 'America/Santa_Isabel', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Shiprock', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Virgin', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/South_Pole', 'Antarctica/Syowa', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Ashkhabad', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Choibalsan', 'Asia/Chongqing', 'Asia/Chungking', 'Asia/Colombo', 'Asia/Dacca', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Gaza', 'Asia/Harbin', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kashgar', 'Asia/Kathmandu', 'Asia/Katmandu', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macao', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Saigon', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Ujung_Pandang', 'Asia/Ulaanbaatar', 'Asia/Ulan_Bator', 'Asia/Urumqi', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Jan_Mayen', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Canberra', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/LHI', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/NSW', 'Australia/North', 'Australia/Perth', 'Australia/Queensland', 'Australia/South', 'Australia/Sydney', 'Australia/Tasmania', 'Australia/Victoria', 'Australia/West', 'Australia/Yancowinna', 'Brazil/Acre', 'Brazil/DeNoronha', 'Brazil/East', 'Brazil/West', 'CET', 'CST6CDT', 'Canada/Atlantic', 'Canada/Central', 'Canada/East-Saskatchewan', 'Canada/Eastern', 'Canada/Mountain', 'Canada/Newfoundland', 'Canada/Pacific', 'Canada/Saskatchewan', 'Canada/Yukon', 'Chile/Continental', 'Chile/EasterIsland', 'Cuba', 'EET', 'EST', 'EST5EDT', 'Egypt', 'Eire', 'Etc/GMT', 'Etc/GMT+0', 'Etc/GMT+1', 'Etc/GMT+10', 'Etc/GMT+11', 'Etc/GMT+12', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5', 'Etc/GMT+6', 'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT-0', 'Etc/GMT-1', 'Etc/GMT-10', 'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14', 'Etc/GMT-2', 'Etc/GMT-3', 'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7', 'Etc/GMT-8', 'Etc/GMT-9', 'Etc/GMT0', 'Etc/Greenwich', 'Etc/UCT', 'Etc/UTC', 'Etc/Universal', 'Etc/Zulu', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Athens', 'Europe/Belfast', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Tiraspol', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'GB', 'GB-Eire', 'GMT', 'GMT+0', 'GMT-0', 'GMT0', 'Greenwich', 'HST', 'Hongkong', 'Iceland', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Iran', 'Israel', 'Jamaica', 'Japan', 'Kwajalein', 'Libya', 'MET', 'MST', 'MST7MDT', 'Mexico/BajaNorte', 'Mexico/BajaSur', 'Mexico/General', 'NZ', 'NZ-CHAT', 'Navajo', 'PRC', 'PST8PDT', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Ponape', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Samoa', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis', 'Pacific/Yap', 'Poland', 'Portugal', 'ROC', 'ROK', 'Singapore', 'Turkey', 'UCT', 'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Indiana-Starke', 'US/Michigan', 'US/Mountain', 'US/Pacific', 'US/Pacific-New', 'US/Samoa', 'UTC', 'Universal', 'W-SU', 'WET', 'Zulu'];
	$( "#to_tz").autocomplete({
		source: tzlist
	});

});
