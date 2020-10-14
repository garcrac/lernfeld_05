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
