function button1(){
    alert(`Kalorien = 19
Kohlenhydrate = 2
Protein = 1.6`);
};
function button2(){
    alert(`Kalorien = 28
Kohlenhydrate = 4.9
Protein = 1.20`);
};
function button3(){
    alert(`Kalorien = 18
Kohlenhydrate = 2.6
Protein = 1`);
};
function button4(){
    alert(`Kalorien = 25
Kohlenhydrate = 3.3
Protein = 1.5`);
};
function button5(){
    alert(`Kalorien = 41
Kohlenhydrate = 10
Protein = 0.9`);
};
function button6(){
    alert(`Kalorien = 71
Kohlenhydrate = 14.1
Protein = 2`);
};
function button7(){
    alert(`Kalorien = 27
Kohlenhydrate = 2.1
Protein = 2.6`);
};
function button8(){
    alert(`Kalorien = 29
Kohlenhydrate = 3.3
Protein = 2.1`);
};
function button9(){
    alert(`Kalorien = 141
Kohlenhydrate = 28.4
Protein = 6.1`);
};
function button10(){
    alert(`Kalorien = 41
Kohlenhydrate = 5.1
Protein = 3.1`);
};
function button11(){
    alert(`Kalorien = 86
Kohlenhydrate = 20
Protein = 1.6`);
};
function button12(){
    alert(`Kalorien = 28
Kohlenhydrate = 1
Protein = 3`);
};
function button13(){
    alert(`Kalorien = 54
Kohlenhydrate = 14.4
Protein = 0.3`);
};
function button14(){
    alert(`Kalorien = 65
Kohlenhydrate = 4.7
Protein = 3.4`);
};
function button15(){
    alert(`Kalorien = 241
Kohlenhydrate = 1
Protein = 18.1`);
};
function button16(){
    alert(`Kalorien = 741
Kohlenhydrate = 0.6
Protein = 0.7`);
};
function button17(){
    alert(`Kalorien = 137
Kohlenhydrate = 1.5
Protein = 11.9`);
};
function button18(){
    alert(`Kalorien = 331
Kohlenhydrate = 1.2
Protein = 9.9`);
};
function button19(){
    alert(`Kalorien = 252
Kohlenhydrate = 7
Protein = 17`);
};
function button20(){
    alert(`Kalorien = 351
Kohlenhydrate = 67
Protein = 12`);
};
function button21(){
    alert(`Kalorien = 1
Kohlenhydrate = 0.5
Protein = 0.5`);
};
function button22(){
    alert(`Kalorien = 150
Kohlenhydrate = 21.2
Protein = 9`);
};
function button23(){
    alert(`Kalorien = 103
Kohlenhydrate = 850
Protein = 25`);
};
function button24(){
    alert(`Kalorien = 300
Kohlenhydrate = 280
Protein = 40`);
};










// ----------------------------------------------------------------------------------------------------------------------------------

var produkte = {
    amount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mark: ["Zucchini", "Zwiebel", "Tomate","Schalotte","Karotte","Kartoffel","Rucola","Lauch","Knoblauch","Basilikum","Süßkartoffel","Schnittlauch","Apfel","Vollmilch","Mozzarella","Butter","Ei","Wiener Würstchen","Tofu-Würstchen","Couscous","Gemüsebrühe","Kichererbsen","Rindfleisch","Hähnchenbrustfilets"],
    price: [0.89, 0.15,0.45,0.20,0.30,0.90,0.45,1.20,0.25,1.30,2.00,0.90,1.20,1.50,3.50,3.00,0.40,1.80,1.80,1.90,0.20,1.00,1.00,2.60],
};


function Add1(){
    if (produkte["amount"][0] < 100){
        produkte["amount"][0]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][0] + " " + produkte["mark"][0] + " " + produkte["price"][0] * produkte["amount"][0] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add2(){
    if (produkte["amount"][1] < 101){
        produkte["amount"][1]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][1] + " " + produkte["mark"][1] + " " + produkte["price"][1] * produkte["amount"][1] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add3(){
    if (produkte["amount"][2] < 101){
        produkte["amount"][2]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][2] + " " + produkte["mark"][2] + " " + produkte["price"][2] * produkte["amount"][2] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add4(){
    if (produkte["amount"][3] < 101){
        produkte["amount"][3]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][3] + " " + produkte["mark"][3] + " " + produkte["price"][3] * produkte["amount"][3] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add5(){
    if (produkte["amount"][4] < 101){
        produkte["amount"][4]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][4] + " " + produkte["mark"][4] + " " + produkte["price"][4] * produkte["amount"][4] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add6(){
    if (produkte["amount"][5] < 101){
        produkte["amount"][5]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][5] + " " + produkte["mark"][5] + " " + produkte["price"][5] * produkte["amount"][5] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add7(){
    if (produkte["amount"][6] < 101){
        produkte["amount"][6]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][6] + " " + produkte["mark"][6] + " " + produkte["price"][6] * produkte["amount"][6] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add8(){
    if (produkte["amount"][7] < 101){
        produkte["amount"][7]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][7] + " " + produkte["mark"][7] + " " + produkte["price"][7] * produkte["amount"][7] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add9(){
    if (produkte["amount"][8] < 101){
        produkte["amount"][8]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][8] + " " + produkte["mark"][8] + " " + produkte["price"][8] * produkte["amount"][8] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add10(){
    if (produkte["amount"][9] < 101){
        produkte["amount"][9]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][9] + " " + produkte["mark"][9] + " " + produkte["price"][9] * produkte["amount"][9] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add11(){
    if (produkte["amount"][10] < 101){
        produkte["amount"][10]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][10] + " " + produkte["mark"][10] + " " + produkte["price"][10] * produkte["amount"][10] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add12(){
    if (produkte["amount"][11] < 101){
        produkte["amount"][11]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][11] + " " + produkte["mark"][11] + " " + produkte["price"][11] * produkte["amount"][11] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add13(){
    if (produkte["amount"][12] < 101){
        produkte["amount"][12]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][12] + " " + produkte["mark"][12] + " " + produkte["price"][12] * produkte["amount"][12] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add14(){
    if (produkte["amount"][13] < 101){
        produkte["amount"][13]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][13] + " " + produkte["mark"][13] + " " + produkte["price"][13] * produkte["amount"][13] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add15(){
    if (produkte["amount"][14] < 101){
        produkte["amount"][14]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][14] + " " + produkte["mark"][14] + " " + produkte["price"][14] * produkte["amount"][14] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add17(){
    if (produkte["amount"][16] < 101){
        produkte["amount"][16]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][16] + " " + produkte["mark"][16] + " " + produkte["price"][16] * produkte["amount"][16] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add18(){
    if (produkte["amount"][17] < 101){
        produkte["amount"][17]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][17] + " " + produkte["mark"][17] + " " + produkte["price"][17] * produkte["amount"][17] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add19(){
    if (produkte["amount"][18] < 101){
        produkte["amount"][18]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][18] + " " + produkte["mark"][18] + " " + produkte["price"][18] * produkte["amount"][18] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add20(){
    if (produkte["amount"][19] < 101){
        produkte["amount"][19]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][19] + " " + produkte["mark"][19] + " " + produkte["price"][19] * produkte["amount"][19] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add21(){
    if (produkte["amount"][20] < 101){
        produkte["amount"][20]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][20] + " " + produkte["mark"][20] + " " + produkte["price"][20] * produkte["amount"][20] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add22(){
    if (produkte["amount"][21] < 101){
        produkte["amount"][21]++
    };
    document.getElementById("Products1").innerHTML = produkte["amount"][21] + " " + produkte["mark"][21] + " " + produkte["price"][21] * produkte["amount"][21] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add23(){
    if (produkte["amount"][22] < 101){
        produkte["amount"][22]++
    };
    document.getElementById("Products2").innerHTML = produkte["amount"][22] + " " + produkte["mark"][22] + " " + produkte["price"][22] * produkte["amount"][22] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add24(){
    if (produkte["amount"][23] < 101){
        produkte["amount"][23]++
    };
    document.getElementById("Products3").innerHTML = produkte["amount"][23] + " " + produkte["mark"][23] + " " + produkte["price"][23] * produkte["amount"][23] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};
function Add25(){
    if (produkte["amount"][24] < 101){
        produkte["amount"][24]++
    };
    document.getElementById("Products4").innerHTML = produkte["amount"][24] + " " + produkte["mark"][24] + " " + produkte["price"][24] * produkte["amount"][24] + " €";
    document.getElementById("demo8").innerHTML = (produkte["price"][0] * produkte["amount"][0]) + (produkte["price"][1] * produkte["amount"][1]) + (produkte["price"][2] * produkte["amount"][2]) + (produkte["price"][3] * produkte["amount"][3]) + (produkte["price"][4] * produkte["amount"][4]) + (produkte["price"][5] * produkte["amount"][5]) + (produkte["price"][6] * produkte["amount"][6]) + (produkte["price"][7] * produkte["amount"][7]) + (produkte["price"][8] * produkte["amount"][8]) + (produkte["price"][9] * produkte["amount"][9]) + (produkte["price"][10] * produkte["amount"][10]) + (produkte["price"][11] * produkte["amount"][11]) + (produkte["price"][12] * produkte["amount"][12]) + (produkte["price"][13] * produkte["amount"][13]) + (produkte["price"][14] * produkte["amount"][14]) + (produkte["price"][15] * produkte["amount"][15]) + (produkte["price"][16] * produkte["amount"][16]) + (produkte["price"][17] * produkte["amount"][17]) + (produkte["price"][18] * produkte["amount"][18]) + (produkte["price"][19] * produkte["amount"][19]) + (produkte["price"][20] * produkte["amount"][20]) + (produkte["price"][21] * produkte["amount"][21]) + (produkte["price"][22] * produkte["amount"][22]) + (produkte["price"][23] * produkte["amount"][23]) + " €";
};