get:
	rsync -avz pi@raspberrypi:/home/pi/MagicMirror/config/config.js* .

put:
	#rsync -avz ./config.js* pi@raspberrypi:/home/pi/MagicMirror/config/

test:
	npx standard config.js*

fix:
	npx standard --fix config.js*

