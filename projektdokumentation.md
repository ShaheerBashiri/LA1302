# Projekt-Dokumentation

Hassani, Bashiri

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 8.11      | 0.0.1   | Projekt wählen, Informieren, Dokumentation gestartet         |                                                          
| 15.11      | 1.0.0   | Ideen sammlen, User Stories|
| 22.11      | 1.0.1   | Planen, Mit Programmieren angefangen |
| 29.11      | 1.0.2   | Weiterprogrammiert                  |
| 6.12      | 1.0.3   | Weiterprogrammiert                        |
| 13.12      | 1.0.4   | Weiterprogrammiert                                |
| 20.12      | 1.0.5   | Programm abgeschlossen                                    |
| 9.1      | 1.0.6   | Dokumentation abgeschlossen, Portfolio fertig     |


## 1 Informieren

Wir haben uns überlegt, was wir für ein Projekt im LA machen könnten, was einem unserer aktuellen Modulen entspricht. Dann haben wir geschaut wie wir das ganze Aufbauen und überhaupt machen würden. 

### 1.1 Ihr Projekt

Eine Seite auf welchem man ein Städte-Quiz spielen kann. Es soll Lehrreich sein, deswegen werden die Punkte zurückgesetzt um den Benutzer zu motivieren. Man wird gefragt was die Hauptstadt eines Landes ist, und kann die Antwort hineinschreiben oder clicken und so Punkte sammeln.

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

| TC-№ | Ausgangslage                                  | Eingabe                     | Erwartete Ausgabe                                             |
|-------|-----------------------------------------------|-----------------------------|---------------------------------------------------------------|
| 1.1   | Quiz-Seite geöffnet                           | Text in Eingabefeld         | Text erscheint im Eingabefeld                                 |
| 2.1   | Antwort eingegeben                            | "Überprüfen" klicken        | Eingabe wird mit der richtigen Antwort verglichen             |
| 3.1   | Falsche Antwort eingegeben                    | "Überprüfen" klicken        | Korrekte Antwort wird angezeigt                               |
| 4.1   | Mehrere richtige Antworten eingegeben         | -                           | Punktestand zeigt Anzahl der richtigen Antworten              |
| 5.1   | Richtige Antwort eingegeben und eingereicht   | "Überprüfen" klicken        |Punkt bekommen.|
| 6.1   | Falsche Antwort eingegeben                    | "Weiter" klicken            | Neue Frage wird generiert                        |
| 7.1   | Falsche Antwort eingegeben                    | -                           | Punkte ---> 0                 |
| 8.1   | Auf der Quiz-Seite                            | Modus zu Multiple-Choice wechseln | Multiple-Choice-Optionen werden angezeigt                 |
| 9.1   | Falsche Stadt ausgewählt                      | Antwort einreichen          | Falsche Antwort wird rot markiert                             |
| 10.1  | Richtige Antwort ausgewählt                   | Option auswählen  | Richtige Antwort wird Grün markiert |
| 11.1  | Auf der Quiz-Seite                            | Buttons klicken             | Alle Funktionen ausser Texteingabe sind klickbar               |


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 15.11      |  Ava         |    Eingabe          |    20 min   |
| 2.A  | 15.11      |   Ava        |  überprüfen            |    20 min           |
|3.A|22.11|Ava|Offenbarung der Lösung|20 min|
|4.A|22.11|Shaheer|Punktestand|40 min|
|5.A|29.11|Shaheer|erneut eingeben|40 min|
|6.A|6.12|Shaheer|trotz inkorrekter Eingabe Punkt|20 min|
|8.A|13.12|Ava/Shaheer|Modus|180 min|
|9.A|20.12|Ava|rote Anzeige bei falscher Stadt|40 min|
|10.A|20.12|Shaheer|erneut Antwort wählen|30 min|


Total: 
10 Arbeitspakete

## 3 Entscheiden

Wir mussten uns dann schliesslich entscheiden welche wie das Spiel funktionieren wird. 

![image](https://github.com/ShaheerBashiri/LA1302/assets/111045708/518e37c7-bc0a-4af2-8cae-5f1cfe58d3b6)




## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |15.11        |    Ava       |      20 min         |    15 min               |
| 2.A |15.11        |       Ava    |      20 min         |       35 min            |
|3.A|22.11 |Ava|20 min|30 min|
|4.A|22.11 |Shaheer|40 min|30 min|
|5.A|29.11 |Shaheer|40 min|40 min|
|6.A|6.12 |Shaheer|20 min| 25 min|
|8.A|13.12 |Ava/Shaheer|180 min|200 min|
|9.A|20.12 |Ava|40 min|35 min|
|10.A|20.12 |Shaheer|30 min|45 min|



## 5 Kontrollieren

| TC-№ | Datum       | Resultat            | Tester   |
|-------|-------------|---------------------|----------|
| 1.1   | 9.1  | Erfolgreich         | Shaheer  |
| 2.1   | 9.1 | Erfolgreich         | Shaheer  |
| 3.1   | 9.1  | Korrektur benötigt  | Shaheer  |
| 4.1   | 9.1  | Erfolgreich         | Shaheer  |
| 5.1   | 9.1  | Erfolgreich         | Shaheer  |
| 6.1   | 9.1 | Fehlschlag          | Shaheer  |
| 7.1   | 9.1  | Korrektur benötigt  | Shaheer  |
| 8.1   | 9.1 | Erfolgreich         | Shaheer  |
| 9.1   | 9.1 | Erfolgreich         | Shaheer  |
| 10.1  | 9.1  | Erfolgreich         | Shaheer  |
| 11.1  | 9.1  | Fehlschlag          | Shaheer  |


