get:
	rsync -avz pi@raspberrypi:/home/pi/MagicMirror/config/config.js* .

put:
	rsync -avz ./config.js* pi@raspberrypi:/home/pi/MagicMirror/config/

test:
	npm test
