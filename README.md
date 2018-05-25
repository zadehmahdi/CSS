- Groups:
for class use dot = .{}
for id use hashtag = #{}
more than one tag use comma = p,h1,h2{}
for all the HTML file use = *{}
for a specific tag in a class use = p.myClass{}


- Text Style (Fonts: https://fonts.google.com/ )
negrito/bold: font-weight: bold;
cor do texto: color: white;
fonte: font-family: 'nome da fonte'
font-style: 'oblique', 'italic'...

-Image style
opacity: 0.3;


Selectors:
.class {}
#id{}
tag{}
div p = seleciona o p dentro da div, primeiro grau ou dentro de outros filhos
div>p = seleciona somente p que sejam filhos de primeiro grau
div~p = seleciona o p que seja irmao da div "nest"
.p:nth-child(3n+1){} seleciona as tag's p de 3 em 3 comecando do 1
.p:nth-of-type(2){} seleciona o segundo elemento da classe p
.box:not(#id2){}  select all box classes except the one with id"id2"

LINKS
text-decoration: none; tirar o sublinhado dos links.


POSITION
display: inline-block; / display: inline; - organizar em linha

	position: relative;
	top: 10px;          >> movimenta um objeto em relacao a posicao original dentro de uma div.
	left: 10px;
  
position: absolute; >> set an objetc direct in the body, overwriting other divisions, or set the father as relative to move him inside the div. using top,rigth,left and bottom;



z-index: 100 adjust the Z axis, the overwriting position. to use this command you need a position(relative,absolute...)


BACKGROUND(use position relative on father div)
background-size: cover;  Cobrir toda a area com o background
background-attachment: fixed;  Efeito de imagem parada no scroll down (ITD site effect)
