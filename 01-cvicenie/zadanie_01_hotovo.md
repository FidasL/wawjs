# Zaujímavé JavaScript aplikácie 

- normit
- torrent
- MySportsFeeds

## normit
### Zdroj
<https://www.npmjs.com/package/normit>

### Ukážka aplikácie
Inštalácia:

    npm install normit -g
Použitie:

	normit 'source_language'  'target_language'  'text'

Príklady:

	normit en es "hey cowboy where is your horse?"
	=>  "Hey vaquero dónde está tu caballo?"

	normit fr en "qui est votre papa?"
	=>  "Who's Your Daddy?"

### Charakteristika
Nástroj na prekladanie viet priamo v termináli, je napísaný v Node.js. 

## torrent

### Zdroj
<https://github.com/maxogden/torrent>

### Ukážka aplikácie
![Ukážka aplikácie](obr1.png)

	 torrent subor.torrent

 Počas sťahovania vypisuje progress:

	1 file(s) in torrent
	ubuntu-14.04.iso
	Connected to 35/37 peers
	Downloaded 5.47 MB (1.09 MB/s) with 0 hotswaps
	Uploaded 0 B (0 B/s)

### Charakteristika
CLI nástroj na sťahovanie torrentov. Napísaný v Node.js. Stačí pridať cestu k .torrent súboru, alebo cestu na magnet link a môžte sťahovať. Tiež vie vytvárať a seedovať torrenty

## MySportsFeeds

### Zdroj
<https://www.npmjs.com/package/mysportsfeeds-node>

### Ukážka aplikácie
Najprv je potrebná autentifikácia

	msf.authenticate("<YOUR_API_KEY>", "MYSPORTSFEEDS");
Následne môžeme posielať requesty napr. (Všetky NBA 2016-2017 zápasy, v ktorých hral Stephen Curry, v JSON formáte):

	var data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'stephen-curry'});

	
### Charakteristika
Api na získavanie športových dát. Má k dispozícii real-time, ale aj historické data napríklad z NHL alebo NBA. Môže to byť užitočné pri práci so športovými dátami. Dostupný pre viacero jazykov, okrem iného aj pre Node.js
