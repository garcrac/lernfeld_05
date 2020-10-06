# lernfeld_05
Lernfeld 05 - Biokiste entwikeln mit eine Datenbanken. 

## Die Aufgabenstellung

Neben der bereits im Produktportfolio befindlichen Bio-Box soll ein Rezept-Service mit darauf angepasster Rezept-Box eingeführt werden. Darüber hinaus soll die Option bestehen, Rezepte anhand bestimmter Ernährungskategorien sowie Beschränkungen aufgrund von Allergenen zu filtern. Die Boxen sollen dann später entsprechend der in den Rezepten verwendeten Zutaten und Mengen bestückt werden.

Ihre Aufgabe ist es, die bestehende Datenbank so zu erweitern, dass die gewünschten Funktionen unterstützt werden. Hinweis: Die Entwicklung und Anbindung einer grafischen Benutzeroberfläche ist explizit nicht Teil dieser Aufgabe, kann - bei entsprechenden Vorkenntnissen - jedoch optional erfolgen. 

Der Kunde stellt dabei folgende Anforderungen:

    Speicherung von Rezepten bestehend aus mehreren Zutaten
    Speicherung von Ernährungskategorien
    Speicherung von Beschränkungen/ Allergenen
    Zusammenstellung von Zutaten entsprechend eines Rezepts
    Auswahl von Rezepten entsprechend vorgegebener Ernährungskategorien
    Auswahl bzw. Ausschluss von Rezepten auf Basis von Beschränkungen
    Zugriffskontrolle personenbezogener Daten

Der Datenschutzbeauftrage von Kraut und Rüben bittet Sie zusätzlich um Folgendes:

    Erläutern Sie in Bezug auf die angepasste Datenbank die geltenden rechtlichen Vorgaben des Datenschutzes und machen Sie einen Vorschlag für ein rechtskonformes Datenschutzkonzept.
    Machen Sie sich mit den rechtlichen Vorgaben des Datenschutzes vertraut und definieren Sie, welche personenbezogenen Daten wie verwendet werden.
    Erstellen Sie anschließend eine Datenschutzerklärung für Ihren Kunden.
    Entwickeln Sie erste Ideen, wie die geltenden Datenschutzbestimmungen im Sinne der Datensicherheit umgesetzt werden könnten und unterbreiten Sie diese dem Datenschutzbeauftragten.

## Anforderungen an die von Ihnen zu entwickelnden Abfragen:

    Setzen Sie die folgenden Anforderungen durch Ihre SQL-Abfragen um
                * Auswahl eines Rezeptes nach Rezeptname
                * Auswahl aller Rezepte einer bestimmten Ernährungskategorie
                * Auswahl aller Rezepte, die eine gewisse Zutat enthalten
                * Berechnung der durchschnittlichen Nährwerte aller Bestellungen eines Kunden
                * Auswahl aller Zutaten, die bisher keinem Rezept zugeordnet sind
        __optional für FiSi und ITSE bzw. verpflichtend für FIAE und FIDP:__
                Auswahl aller Rezepte, die eine bestimmte Kalorienmenge nicht überschreiten 
                Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten
                Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten und eine bestimmte Ernährungskategorie erfüllen
    Erstellen Sie mindestens drei weitere Abfragen
    Stellen Sie sicher, dass Sie insgesamt mindestens je eine Abfrage mit inner join, left join/ right join sowie Subselects und Aggregatfunktionen erstellen
