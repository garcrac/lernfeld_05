--Auswahl eines Rezeptes nach Rezeptname-----

select Bezeichnung from Rezept 
    where Bezeichnung like 'X'
;

--Auswahl aller Rezepte einer bestimmten Ernährungskategorie--

select Bezeichung  
            
    from                  Rezept as r
                        , Kategorie as k
                        , KategorieRezept as kr
    where 
            k.KategorieNr = kr.KategorieNr 
        and r.RezeptNr = kr.RezeptNr
        and Kategorie like 'X'
;

--Auswahl aller Rezepte, die eine gewisse Zutat enthalten--

select Rezept 
    from    Rezept as r 
                        join RezeptZutat as rz on r.RezeptNr = rz.RezeptNr
                        join   Zutat as z on z.ZutatNr = rz.ZutatNr
     where 
            Zutat like 'X'
            Or Zutat like 'X'
;

-- Berechnung der durchschnittlichen Nährwerte aller Bestellungen eines Kunden--

select  Kunde
        ,BestellungNr
        ,avg(Naehrwerte) as 'Durchscnittliche Angaben von Naehrwerte'
    from 
        Kunde as k
                    join Beschtellung as B      ON  k.KundenNr = b.KundenNr
                    join BestellZutat as bz     ON  z.BestellungNr = bz.BestellungNr
                    join Zutat as Z             On z.ZutatNr = bz.ZutatNr 
                    join BestellRezept as BR    On r.BestellungNr = br.BestellungNr
                    join Rezept as r            On r.RezeptNr = rz.RezeptNr
                    join RezeptZutat as rz      On z.ZutatNr = rz.ZutatNr
                    join Naehrwerte as nw       On nw.NaehrwerteID = nwz.NaehrwerteID
                    join NaehrwerteZutat as nwz On z.ZutatNr = nwz.ZutatNr
    where 
            KundenNr = x
;

-- Auswahl aller Zutaten, die bisher keinem Rezept zugeordnet sind--

Select Zutat    
    from     Zutat as z
                   left outer join RezeptZutat as rz      On z.ZutatNr = rz.ZutatNr
                    
    where 
            rz.ZutatNr is null
;

--* Auswahl aller Rezepte, die eine bestimmte Kalorienmenge nicht überschreiten --

select  Rezept
        ,(select avg(Naehrwerte) 
            where   Naehrwerte like 'Kalor%'
                and Menge !> x) as 'avg Kalorien Menge'
    from 
                NaehrWerte nw 
        join    NaehrwerteZutat as nwz      on nw.NaehrwerteID = nwz.NaehrwerteId
        join    Zutat as z                  on z.ZutatNr = nwz.ZutatNr
        join    RezeptZutat as rz           on z.ZutatNr = rz.ZutatNr   
        join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
            where   Naehrwerte like 'Kalor%'
                and Menge !> x 
;


--Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten--

select Rezept 
    From    Zutat as z
                       inner join    RezeptZutat as rz           on z.ZutatNr = rz.ZutatNr   
                       inner join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
            where 
                    (select count (ZutatNr) from RezeptZutat
                                    /*where RezeptNr = x*/) < 5
                    --and Rezept = X
;

-- Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten und eine bestimmte Ernährungskategorie erfüllen--
select Rezept 
    From    Zutat as z
                       inner join    RezeptZutat as rz           on z.ZutatNr = rz.ZutatNr   
                       inner join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
                       join          KategorieRezept as kr       On kr.RezeptNr = r.RezeptNr
                       JOIN          Kategorie as k              On k.KategorieNr = kr.KategorieNr

            where 
                    (select count (ZutatNr) from RezeptZutat rz, KategoriRezept as kr
                                    where /*rz.RezeptNr = x
                                        and*/ Kategorie like 'x') < 5
                    /*and Rezept = X*/
                    and Kategorie like 'x'
;
-- Auswahl aller Zutaten anhand eines Rezeptnames
select ZUTAT.BEZEICHNUNG
    from    REZEPT 
                        join REZEPTZUTAT on REZEPTZUTAT.REZEPTNR = REZEPT.REZEPTNR
                        join   ZUTAT on ZUTAT.ZUTATENNR = REZEPTZUTAT.ZUTATENNR
     where 
            REZEPT.BEZEICHNUNG like 'Grüner Smoothie';
            
-- Auswahl aller Zuaten aller rezept bestellungen

select kunde.nachname, kunde.vorname, bestellung.bestelldatum,
rezept.bezeichnung as Rezept, zutat.bezeichnung as zutat
from kunde
inner join bestellung on kunde.kundennr = bestellung.kundennr
inner join rezeptbestell on bestellung.bestellnr =
rezeptbestell.bestellnr
inner join rezept on rezeptbestell.rezeptnr = rezept.rezeptnr
inner join rezeptzutat on rezept.REZEPTNR = rezeptzutat.REZEPTNR
inner join zutat on rezeptzutat.ZUTATENNR = zutat.ZUTATENNR
order by bestelldatum desc
;
-- Auswahl aller Rezepte anhand des Kategorienamens
select rezept.bezeichnung, kategorie.bezeichnung as Ernaehrungskategorie from rezept
join kategorierezept on kategorierezept.REZEPTNR = rezept.REZEPTNR
join kategorie on kategorierezept.KATEGORIENR = kategorie.KATEGORIENR
where kategorie.BEZEICHNUNG like 'Low-Carb';

-- Auswahl aller Rezepte mit zugehoerigen Kategorien 
SELECT REZEPT.BEZEICHNUNG, KATEGORIE.BEZEICHNUNG 
FROM REZEPT 
JOIN KATEGORIEREZEPT ON REZEPT.REZEPTNR = KATEGORIEREZEPT.REZEPTNR
JOIN KATEGORIE ON KATEGORIE.KATEGORIENR = KATEGORIEREZEPT.KATEGORIENR
ORDER BY REZEPT.BEZEICHNUNG desc
;

-- Auswahl aller Rezepte, die eine gewisse Zutat enthalten
SELECT REZEPT.BEZEICHNUNG, ZUTAT.BEZEICHNUNG
FROM REZEPT 
JOIN REZEPTZUTAT ON REZEPT.REZEPTNR = REZEPTZUTAT.REZEPTNR
JOIN ZUTAT ON REZEPTZUTAT.ZUTATENNR = ZUTAT.ZUTATENNR
WHERE ZUTAT.BEZEICHNUNG = 'Ei'
ORDER BY REZEPT.BEZEICHNUNG
;

-- Auswertung der Kalorien fuer jedes rezept

SELECT BESTELLUNG.BESTELLNR,AVG(KALORIEN*BESTELLZUTAT.MENGE) as 'Kalorienmenge einer Bestellung'
FROM krautundrueben.ZUTAT
JOIN BESTELLZUTAT ON BESTELLZUTAT.ZUTATENNR = ZUTAT.ZUTATENNR
JOIN BESTELLUNG ON BESTELLUNG.BESTELLNR = BESTELLZUTAT.BESTELLNR
GROUP BY BESTELLUNG.BESTELLNR
;
