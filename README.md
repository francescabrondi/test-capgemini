creare componente card per la home
applicare DRY alle card in hom --> esempio in nav

tag semantici --> rimuovere div-hell

creare un context al progetto
impostare le chiamate nel context
leggere i dati ricevuti in componente immagini e renderizzare quanto arriva

impostare anche la chiamata per il cerca immagini nel context
renderizzare dai dati nel context anche il cerca immagini

aggiungere uno stato loading nel context
impostare componente loader (uno spinner a schermo intero può andare bene)
in cerca immagini aggiungere il loader fino a che tutte le immagini non sono caricate, quindi loader sparisce ed appaiono tutte le immagini cercate

aggiungere un tasto "Restart" che fa sparire le immagini cercate e riporta cercaImmagini allo stato iniziale

sia per le immagini in "immagini" sia per quelle in "cercaImmagini" impostare un hover del mouse che fa partire un'animazione che aumenta le dimensioni del 25% in 500 millisecondi con animazione easy-in

inoltre per le immagini del punto precedente impostare onClick che fa aprire l'immagine in una modale

impostare componente modale che occupi l'80% dello schermo, la costruzione è a tua discrezione --> consiglio: impostare lo stato della modale nel context
la modale dovrà avere un bottone per chiudersi

spostare la variabile client_id in un file .enc a livello root, aggiungere il file .env al .gitignore

componente frase --> impostare la chiamata nel context mantenendo la medesima UX nel componente

bonus: rendere responsive i nuovi componenti --> es.: modale (schermo intero per media query tablet e phone)

typescript --> implementare TS nel progetto --> 
switch da .js a .tsx in tutti i file
creare cartella model
creare interfacce per tutti i componenti in UI e impostarle di conseguenza
aggiungere i types a tutte le funzioni (sia nel context sia nei componenti)