# Zauj�mav� JavaScript aplik�cie 

- normit
- torrent - Download torrents from the command line
- MySportsFeeds

## normit
[https://www.npmjs.com/package/normit](https://www.npmjs.com/package/normit)
N�stroj na prekladanie viet priamo v termin�li
### Uk�ka aplik�cie
In�tal�cia:

    npm install normit -g
Pou�itie:

	normit 'source_language'  'target_language'  'text'

Pr�klady:

	normit en es "hey cowboy where is your horse?"
	=>  "Hey vaquero d�nde est� tu caballo?"

	normit fr en "qui est votre papa?"
	=>  "Who's Your Daddy?"

### Charakteristika
//TODO: Doplni� technol�gie


## torrent

[https://github.com/maxogden/torrent](https://github.com/maxogden/torrent)
Umo��uje s�ahova� torrenty cez pr�kazov� riadok. Sta�� prida� cestu k .torrent s�boru, alebo cestu na magnet link.
Tie� vie vytv�ra� a seedova� torrenty.

### Uk�ka aplik�cie
![Uk�ka aplik�cie](obr1.png)

	 torrent subor.torrent

 Po�as s�ahovania vypisuje progress:

	1 file(s) in torrent
	ubuntu-14.04.iso
	Connected to 35/37 peers
	Downloaded 5.47 MB (1.09 MB/s) with 0 hotswaps
	Uploaded 0 B (0 B/s)

### Charakteristika
//TODO: Doplni� technol�gie

## MySportsFeeds
[https://www.npmjs.com/package/mysportsfeeds-node](https://www.npmjs.com/package/mysportsfeeds-node)
Api na z�skavanie �portov�ch d�t. M� k dispoz�cii real-time, ale aj historick� data napr. z NHL alebo NBA
### Uk�ka aplik�cie
Najprv je potrebn� autentifik�cia

	msf.authenticate("<YOUR_API_KEY>", "MYSPORTSFEEDS");
N�sledne m��eme posiela� requesty napr. (V�etky NBA 2016-2017 z�pasy, v ktor�ch hral Stephen Curry, v JSON form�te):

	var data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'stephen-curry'});

	
### Charakteristika
//TODO: Doplni� technol�gie

