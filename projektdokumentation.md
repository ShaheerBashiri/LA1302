# Projekt-Dokumentation

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

✍️ Ihr Gruppenname und Ihre Nachnamen

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | Projekt wählen, Informieren, Dokumentation gestartet |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

Wir haben uns überlegt, was wir für ein Projekt im LA machen könnten, was einem unserer aktuellen Modulen entspricht. Dann haben wir geschaut wie wir das ganze Aufbauen und überhaupt machen würden. 

### 1.1 Ihr Projekt

Eine Seite auf welchem man ein Städte-Quiz spielen kann. Es soll Lehrreich sein, somit gibt es keine "Strafen" bei falschen Eingaben aber die Punkte werden zurückgesetzt. Man wird gefragt was die Hauptstadt eines Landes ist, und kann die Antwort hineinschreiben oder clicken und so Punkte sammeln.

Wir möchten üben Websiten mit JavaScript zu Programmieren. Also das verarbeiten von Eingaben und daraufentsprechende Antworten geben. 

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |muss|funktional|Ich kann eine Eingabe tätigen |
| 2 |muss|funktional| Diese Eingabe soll mit der Lösung überprüft werden.|     
|3|muss|qualität|Es wird einem gesagt was die richtige Lösung ist, falls die Antwort falsch wäre.|
|4|kann|rand    |Es zählt wieviele Mal ich etwas richtig hatte mit einem Punktestand.|
|5|kann| qualität|Ich kann meine Antwort nach erstmaliger Eingabe und Einreichen, überarbeiten und erneut einsenden.|
|6|kann|  rand  |Ich kann weiter fahrenm wenn ich das falsche Antwort drücke.|
|7|kann|  rand   |Ich erhalte keine Konsequenz bei Fehlern.|
|8|kann|   qualität         |Ich kann den Modus ändern und zu Multiple-choice wechseln.|
|9|muss|qualität|Es wird mir rot angezeigt wenn ich die falsche Stadt ausgesucht habe.|
|10|kann|qualität|Ich kann in der gleichen Frage so viele Optionen drücken bis ich die richtige Antwort habe, dieses grün leuchtet, ich einen Punkt erhalte, und dann zur nächsten Frage gehen kann|
|11|muss|funktional|Alle Vorgehen, bis auf die Worteingabe, kann ich mit einem Klik betätigen|


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |  Ava         |    Eingabe          |    20 min   |
| 2.A  |       |   Ava        |  überprüfen            |    20 min           |
|3.A||Ava|Offenbarung der Lösung|20 min|
|4.A||Shaheer|Punktestand|40 min|
|5.A||Shaheer|erneut eingeben|40 min|
|6.A||Shaheer|trotz inkorrekter Eingabe Punkt|20 min|
|8.A||Ava/Shaheer|Modus|180 min|
|9.A||Ava|rote Anzeige bei falscher Stadt|40 min|
|10.A||Shaheer|erneut Antwort wählen|30 min|


Total: 
10 Arbeitspakete

## 3 Entscheiden

Wir mussten uns dann schliesslich entscheiden welche Städte abgefragt werden, und diese haben wir dann ins Jsonfile reingetan. 

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |    Ava       |      20 min         |    15 min               |
| 2.A |       |       Ava    |      20 min         |       35 min            |
|3.A||Ava|20 min|30 min|
|4.A||Shaheer|40 min|30 min|
|5.A||Shaheer|40 min|40 min|
|6.A||Shaheer|20 min| 25 min|
|8.A||Ava/Shaheer|180 min|200 min|
|9.A||Ava|40 min|35 min|
|10.A||Shaheer|30 min|45 min|



## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet

