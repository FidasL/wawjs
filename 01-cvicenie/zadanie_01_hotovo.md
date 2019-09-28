# Zaujímavé JavaScript aplikácie 

- normit
- torrent - Download torrents from the command line
- MySportsFeeds

## normit
[https://www.npmjs.com/package/normit](https://www.npmjs.com/package/normit)
Nástroj na prekladanie viet priamo v termináli
### Ukáka aplikácie
Inštalácia:

    npm install normit -g
Pouitie:

	normit 'source_language'  'target_language'  'text'

Príklady:

	normit en es "hey cowboy where is your horse?"
	=>  "Hey vaquero dónde está tu caballo?"

	normit fr en "qui est votre papa?"
	=>  "Who's Your Daddy?"

### Charakteristika
//TODO: Doplni technológie


## torrent

[https://github.com/maxogden/torrent](https://github.com/maxogden/torrent)
Umoòuje sahova torrenty cez príkazovı riadok. Staèí prida cestu k .torrent súboru, alebo cestu na magnet link.
Tie vie vytvára a seedova torrenty.

### Ukáka aplikácie
![Ukáka aplikácie](obr1.png)

	 torrent subor.torrent

 Poèas sahovania vypisuje progress:

	1 file(s) in torrent
	ubuntu-14.04.iso
	Connected to 35/37 peers
	Downloaded 5.47 MB (1.09 MB/s) with 0 hotswaps
	Uploaded 0 B (0 B/s)

### Charakteristika
//TODO: Doplni technológie

## MySportsFeeds
[https://www.npmjs.com/package/mysportsfeeds-node](https://www.npmjs.com/package/mysportsfeeds-node)
Api na získavanie športovıch dát. Má k dispozícii real-time, ale aj historické data napr. z NHL alebo NBA
### Ukáka aplikácie
Najprv je potrebná autentifikácia

	msf.authenticate("<YOUR_API_KEY>", "MYSPORTSFEEDS");
Následne môeme posiela requesty napr. (Všetky NBA 2016-2017 zápasy, v ktorıch hral Stephen Curry, v JSON formáte):

	var data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'stephen-curry'});

	
### Charakteristika
//TODO: Doplni technológie

