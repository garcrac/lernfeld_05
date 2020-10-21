use Krautundrueben;
-- Auswahl eines Rezeptes nach Rezeptname-----

select Bezeichnung from Rezept 
    where Bezeichnung = 'Grüner Smoothie'
;

-- Auswahl aller Rezepte einer bestimmten Ernährungskategorie-- -- 2 Mal Vorhanden --

select r.Bezeichnung  
            
    from                  Rezept as r
                        ,Kategorie as k
                        ,KategorieRezept as kr
    where 
            k.KategorieNr = kr.KategorieNr 
        and r.RezeptNr = kr.RezeptNr
        and k.Bezeichnung = 'Vegan'
;

-- Auswahl aller Rezepte, die eine gewisse Zutat enthalten-- -- 2 Mal Vorhanden --

select r.Bezeichnung as 'Rezept Name', z.Bezeichnung as 'Zutat Name'
    from    Rezept as r 
                        join RezeptZutat as rz on r.RezeptNr = rz.RezeptNr
                        join   Zutat as z on z.ZutatenNr = rz.ZutatenNr
     where 
            z.Bezeichnung = 'Ei'
            
;

-- Berechnung der durchschnittlichen Nährwerte aller Bestellungen eines Kundes--

select  k.Nachname
		,k.Vorname
        ,b.BestellNr
        ,avg(z.Kalorien*bz.MENGE)  
			as 'Kalorien in kcal'
        ,avg(z.Kohlenhydrate*bz.MENGE) 
			 as 'Kohlenhydrate in g'
        ,avg(z.Protein*bz.MENGE) 
			 as 'Protein in g'
   
        from  Kunde as k
                     join Bestellung as B      ON  k.KundenNr = b.KundenNr
                     join BestellZutat as bz     ON  b.BestellNr = bz.BestellNr
                     join Zutat as Z             On z.ZutatenNr = bz.ZutatenNr
    where 
            k.KundenNr = 2003
		Group by  k.Nachname
				 ,k.Vorname
			     ,b.BestellNr
; 

-- Auswahl aller Zutaten, die bisher keinem Rezept zugeordnet sind--

Select Z.Bezeichnung as 'Zutat Name'    
    from     Zutat as z
                   left outer join RezeptZutat as rz      On z.ZutatenNr = rz.ZutatenNr
                    
    where 
            rz.ZutatenNr is null
;

--  Auswahl aller Rezepte, die eine bestimmte Kalorienmenge nicht überschreiten --


select s.RezeptNr
	   ,s.n as 'Rezept Name'
	   ,s.m as 'Kalorien in kcal'
    
    from 
		
			(select   
					 rz.RezeptNr
					 ,r.Bezeichnung as 'n'
					 ,avg(kalorien) as 'm'
				from 
							
						Zutat as z                  
					join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
					join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
					
					
				   Group by rz.RezeptNr
			  ) as s
            
            
		where 
        
			s.m < 92
					
               
;
-- oder ohne Subselect  -- 2 Mal Vorhanden --

select   
					 rz.RezeptNr
					 ,r.Bezeichnung as 'Rezept'
					 ,avg(kalorien) as 'kalorien in kcal'
				from 
							
						Zutat as z                  
					join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
					join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
					
					
				   Group by rz.RezeptNr
							,'Name des Rezeptes'
                   having avg(kalorien) < 92
;


-- Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten--


select s.n as 'Rezept'
	  ,s.m as 'Zahl der Zutaten'
      
	from

			(select distinct r.Bezeichnung as 'n' 
					,count(rz.ZutatenNr) as 'm'
							
				   
				From    Zutat as z
									join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
									join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
					   
						group by r.Bezeichnung
			 ) as s
			
		where 
			s.m < 5
					
						
;

-- oder ohne Subselect
select distinct r.Bezeichnung as 'Rezept' 
	   ,count(rz.ZutatenNr) as 'Zahl der Zutaten'
							
				   
				From    Zutat as z
									join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
									join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
					   
		
        group by 
					r.Bezeichnung
                    
		Having
					count(rz.ZutatenNr) < 5
					
						
;

-- Auswahl aller Rezepte, die weniger als fünf Zutaten enthalten und eine bestimmte Ernährungskategorie erfüllen--

select s.n as 'Rezept Name'
	   ,s.m as 'Zahl der Zutaten'
       ,s.x as 'Ernährungskategorie'
       
	from

				(select r.Bezeichnung as n
						,k.Bezeichnung as x
					   ,count(rz.ZutatenNr) as m
					From    Zutat as z
									   inner join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
									   inner join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
									   join          KategorieRezept as kr       On kr.RezeptNr = r.RezeptNr
									   JOIN          Kategorie as k              On k.KategorieNr = kr.KategorieNr
												
												group by r.Bezeichnung
														,k.Bezeichnung
				) as s
                                                
		Where 	
				s.m < 5
			and s.x = 'Vegan'

           
;
-- oder ohne Subselect 

select r.Bezeichnung as 'Rezept'
						,k.Bezeichnung as 'Kategorie'
					   ,count(rz.ZutatenNr) as 'Zahl der Zutaten'
					From    Zutat as z
									   inner join    RezeptZutat as rz           on z.ZutatenNr = rz.ZutatenNr   
									   inner join    Rezept as R                 on r.RezeptNr = rz.RezeptNr 
									   join          KategorieRezept as kr       On kr.RezeptNr = r.RezeptNr
									   JOIN          Kategorie as k              On k.KategorieNr = kr.KategorieNr
											where 
												k.Bezeichnung like 've%'
												group by r.Bezeichnung
														,k.Bezeichnung
												having count(rz.ZutatenNr) < 5
                                                
;   

------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Auswahl aller Zutaten anhand eines Rezeptnames -- extra Abfrage Nummer 1 --
select ZUTAT.BEZEICHNUNG
    from    REZEPT 
                        join REZEPTZUTAT on REZEPTZUTAT.REZEPTNR = REZEPT.REZEPTNR
                        join   ZUTAT on ZUTAT.ZUTATENNR = REZEPTZUTAT.ZUTATENNR
     where 
            REZEPT.BEZEICHNUNG like 'Grüner Smoothie';
            
-- Auswahl aller Zuaten aller rezept bestellungen -- extra Abfrage Nummer 2 --

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
-- Auswahl aller Rezepte anhand des Kategorienamens -- 2 Mal Vorhanden --
select rezept.bezeichnung, kategorie.bezeichnung as Ernaehrungskategorie from rezept
join kategorierezept on kategorierezept.REZEPTNR = rezept.REZEPTNR
join kategorie on kategorierezept.KATEGORIENR = kategorie.KATEGORIENR
where kategorie.BEZEICHNUNG like 'Low-Carb';

-- Auswahl aller Rezepte mit zugehoerigen Kategorien  --  extra Abfrage Nummer 3 --
SELECT REZEPT.BEZEICHNUNG, KATEGORIE.BEZEICHNUNG 
FROM REZEPT 
JOIN KATEGORIEREZEPT ON REZEPT.REZEPTNR = KATEGORIEREZEPT.REZEPTNR
JOIN KATEGORIE ON KATEGORIE.KATEGORIENR = KATEGORIEREZEPT.KATEGORIENR
ORDER BY REZEPT.BEZEICHNUNG desc
;

-- Auswahl aller Rezepte, die eine gewisse Zutat enthalten -- extra Abfrage Nummer 4--
SELECT REZEPT.BEZEICHNUNG, ZUTAT.BEZEICHNUNG
FROM REZEPT 
JOIN REZEPTZUTAT ON REZEPT.REZEPTNR = REZEPTZUTAT.REZEPTNR
JOIN ZUTAT ON REZEPTZUTAT.ZUTATENNR = ZUTAT.ZUTATENNR
WHERE ZUTAT.BEZEICHNUNG = 'Ei'
ORDER BY REZEPT.BEZEICHNUNG
;

-- Auswertung der Kalorien fuer jedes rezept -- 2 Mal Vorhanden --

SELECT BESTELLUNG.BESTELLNR,AVG(KALORIEN*BESTELLZUTAT.MENGE) as 'Kalorienmenge einer Bestellung'
FROM krautundrueben.ZUTAT
JOIN BESTELLZUTAT ON BESTELLZUTAT.ZUTATENNR = ZUTAT.ZUTATENNR
JOIN BESTELLUNG ON BESTELLUNG.BESTELLNR = BESTELLZUTAT.BESTELLNR
GROUP BY BESTELLUNG.BESTELLNR
;

-- Auswahl aller Rezepte die eine gewisse Kalorienmenge nicht ueberschreiten -- 2 Mal Vorhanden --

SELECT REZEPT.REZEPTNR,AVG(KALORIEN) as 'Kalorienmenge eines Rezepts'
FROM krautundrueben.REZEPT
JOIN REZEPTZUTAT ON REZEPT.REZEPTNR = REZEPTZUTAT.REZEPTNR
JOIN ZUTAT ON REZEPTZUTAT.ZUTATENNR = ZUTAT.ZUTATENNR
GROUP BY REZEPT.REZEPTNR
HAVING AVG(KALORIEN)<300
;
