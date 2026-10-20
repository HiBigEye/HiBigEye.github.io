---
title: Storia e concetti dell'Intelligenza Artificiale
description: Breve excursus storico e spiegazioni accessibili riguardo i principali concetti riguardo l'AI.
date: 2026-10-18
tags: [History of Artificial Intelligence]
related: [notes/what-is-cognitive-science, notes/behavioural-data-basics]
---
# Storia e concetti dell'Intelligenza Artificiale

Oct 18, 2026 · @Yuri

## Introduzione e metodo

L'intelligenza artificiale non è nata tutta insieme: ogni suo termine è comparso in un momento preciso, per risolvere un problema preciso, e spesso ha cambiato significato strada facendo. Questo documento segue quindi un metodo filologico: per ogni concetto racconta da dove viene la parola, chi l'ha introdotta, che cosa voleva dire all'inizio e che cosa vuol dire oggi.

L'ordine è storico, non alfabetico. Si parte dagli anni Quaranta del Novecento e si arriva ai modelli e agli agenti del 2026, così che ogni idea nuova si appoggi su quelle già spiegate. I termini del vocabolario precedente sono evidenziati in **grassetto** nel punto in cui nascono.

Sul linguaggio: le spiegazioni sono concettuali e precise. Le metafore compaiono solo dove l'idea poggia su matematica avanzata (calcolo differenziale, algebra lineare, probabilità) e una descrizione letterale richiederebbe formule. In quei casi la metafora è segnalata come tale, e dove serve è affiancata dalla formula essenziale con una lettura in parole semplici.

Una nota sulle date: la ricostruzione storica si basa su fonti consolidate della letteratura scientifica; per gli sviluppi più recenti (2024–2026) le date indicano il momento in cui un'idea si è diffusa, non necessariamente la sua prima comparsa assoluta.

## 1. Le origini (1943–1956): si può costruire una macchina che pensa?

L'AI nasce da una domanda filosofica diventata, negli anni Quaranta, una domanda ingegneristica. Il ragionamento logico si può descrivere come manipolazione di simboli secondo regole; se una macchina sa manipolare simboli secondo regole, forse sa anche ragionare.

### Il primo neurone artificiale (1943)

Nel 1943 il neurofisiologo Warren McCulloch e il logico Walter Pitts pubblicano un modello matematico del neurone. Il loro neurone riceve segnali binari (0 o 1), li somma e "si accende" solo se la somma supera una soglia. Mostrano che reti di questi elementi possono calcolare qualsiasi funzione logica (AND, OR, NOT).

È l'antenato diretto del **neurone artificiale** che ritroveremo nel capitolo 5. L'idea di partenza è già quella di oggi: un'unità semplice che combina input e decide un output; la potenza viene dal collegarne moltissime.

### Turing e il gioco dell'imitazione (1950)

Alan Turing aveva già definito nel 1936 che cosa significa "calcolare", con la macchina che porta il suo nome. Nel 1950, nell'articolo *Computing Machinery and Intelligence*, affronta la domanda "le macchine possono pensare?" e la giudica troppo vaga per una risposta.

Propone di sostituirla con una prova operativa, che chiama *imitation game*. Un esaminatore umano dialoga per iscritto con due interlocutori nascosti, una persona e una macchina. Se non riesce a distinguere quale sia la macchina meglio che tirando a indovinare, la macchina ha superato la prova.

È ciò che oggi chiamiamo **test di Turing**. Filologicamente è importante notare che Turing non diceva "chi passa il test pensa": diceva che la domanda sul pensiero andava sostituita con una sul comportamento osservabile. Il test è stato poi criticato perché premia l'imitazione, non la comprensione; con i modelli linguistici attuali, che conversano in modo spesso indistinguibile da una persona, la discussione si è spostata su che cosa il test misuri davvero.

### La nascita del nome: Dartmouth (1955–1956)

L'espressione **intelligenza artificiale** (*artificial intelligence*) compare per la prima volta nell'agosto 1955. È nel titolo di una proposta di ricerca firmata da John McCarthy, Marvin Minsky, Nathaniel Rochester e Claude Shannon, per un seminario estivo al Dartmouth College nel 1956.

La proposta partiva da una congettura esplicita: ogni aspetto dell'apprendimento o di qualsiasi altra caratteristica dell'intelligenza può, in linea di principio, essere descritto così precisamente da poter essere simulato da una macchina. McCarthy scelse il termine anche per distinguere il nuovo campo dalla cibernetica di Norbert Wiener, che studiava il controllo e la comunicazione negli animali e nelle macchine.

Due parole del nome meritano attenzione. *Artificiale* indica che l'intelligenza è prodotta da un artefatto, non che sia finta. *Intelligenza* non viene definita: fin dall'inizio il campo si è identificato con un obiettivo (far fare alle macchine cose che, fatte da un umano, richiederebbero intelligenza) più che con una teoria di che cosa l'intelligenza sia. Questa ambiguità accompagna tutta la storia successiva.

## 2. Due strade e due inverni (1956–1990)

Dopo Dartmouth il campo si divide in due approcci che si contenderanno il primato per mezzo secolo: scrivere le regole dell'intelligenza a mano, oppure costruire sistemi che le ricavano dall'esperienza.

### La strada simbolica: l'intelligenza come regole

L'approccio dominante fino agli anni Ottanta è detto **simbolico** (o, con un'etichetta coniata dal filosofo John Haugeland nel 1985, *GOFAI*, "Good Old-Fashioned AI"). L'idea: la conoscenza si rappresenta con simboli ("Socrate", "uomo", "mortale") e il ragionamento è l'applicazione di regole logiche a quei simboli.

I primi risultati sono spettacolari. Il *Logic Theorist* di Newell, Shaw e Simon (1956) dimostra teoremi dei *Principia Mathematica*; programmi successivi giocano a dama e a scacchi, risolvono problemi di algebra, conversano in modo rudimentale (ELIZA, 1966). L'ottimismo è tale che nel 1965 Herbert Simon prevede macchine capaci, entro vent'anni, di fare qualsiasi lavoro umano.

Un **algoritmo** di questo tipo è trasparente: ogni passaggio è una regola leggibile. Il limite emerge però presto. Il mondo reale è pieno di eccezioni, ambiguità e conoscenza implicita che nessuno riesce a scrivere esplicitamente: come si descrive a regole la differenza tra un gatto e un cane in una fotografia?

### La strada connessionista: il perceptron (1957–1969)

Nel 1957 lo psicologo Frank Rosenblatt costruisce il **perceptron**, evoluzione del neurone di McCulloch-Pitts con una differenza decisiva: i **pesi** delle connessioni non sono fissati dal progettista, ma vengono aggiustati automaticamente a partire da esempi. Se la macchina sbaglia, i pesi si correggono un poco nella direzione giusta. È il primo sistema che *impara* dai dati in senso moderno.

Nel 1969 Marvin Minsky e Seymour Papert pubblicano *Perceptrons*, in cui dimostrano rigorosamente che un perceptron a un solo strato non può risolvere problemi semplici come lo XOR ("o l'uno o l'altro, ma non entrambi"). Sapevano che reti con più strati avrebbero potuto superare il limite, ma nessuno sapeva come addestrarle. I finanziamenti alle reti neurali si prosciugano per oltre un decennio.

### Il primo inverno dell'AI (circa 1974–1980)

L'espressione **inverno dell'AI** (*AI winter*) indica un periodo di sfiducia e tagli ai fondi dopo promesse non mantenute. Il primo è innescato tra l'altro dal rapporto Lighthill (Regno Unito, 1973), che giudica il campo incapace di affrontare problemi reali per via dell'"esplosione combinatoria": il numero di possibilità da esaminare cresce troppo in fretta.

### I sistemi esperti e il secondo inverno (1980–1993)

Gli anni Ottanta rilanciano l'approccio simbolico in forma commerciale con i **sistemi esperti**: programmi che codificano in migliaia di regole "se… allora…" la conoscenza di specialisti umani. MYCIN (Stanford, anni Settanta) diagnosticava infezioni del sangue; XCON configurava computer per Digital Equipment Corporation, facendo risparmiare milioni di dollari l'anno.

Ma i sistemi esperti erano fragili: fuori dal loro dominio ristretto sbagliavano in modo grossolano, e mantenerli aggiornati richiedeva di riscrivere regole a mano. Dalla fine degli anni Ottanta il mercato crolla ed è il **secondo inverno**.

La lezione di questo periodo è il punto di partenza di tutto il resto del documento: la conoscenza che vale la pena avere è troppo vasta e sfumata per essere scritta a mano. Bisogna che la macchina la ricavi dai **dati**.

## 3. La svolta statistica: il machine learning e i modi di imparare

Il **machine learning** è l'idea che un programma migliori le proprie prestazioni con l'esperienza invece di ricevere le regole da un programmatore. L'espressione è attribuita ad Arthur Samuel di IBM, che nel 1959 descrisse un programma di dama capace di battere il suo autore dopo aver giocato migliaia di partite contro sé stesso.

Negli anni Novanta, mentre l'approccio simbolico entra in crisi, il machine learning si avvicina alla statistica. Molti dei suoi termini, infatti, non sono nati nell'informatica ma nella statistica dell'Ottocento e del Novecento. Riconoscere queste radici aiuta a capire che cosa le parole significano davvero.

Una definizione utile, formulata da Tom Mitchell nel 1997: un programma *impara* dall'esperienza E rispetto a un compito T e a una misura di prestazione P, se la sua prestazione in T, misurata da P, migliora con E. Per esempio: T = riconoscere lo spam, E = migliaia di email già classificate, P = percentuale di email classificate correttamente.

### I tre compiti fondamentali

**Classificazione.** Il modello assegna ogni input a una categoria scelta da un insieme finito: spam o non spam, tumore benigno o maligno, cifra da 0 a 9. Il termine viene dalla tassonomia (Linneo classificava le specie); in statistica il problema fu formalizzato da Ronald Fisher nel 1936 con il suo celebre studio sui fiori di iris.

**Regressione.** Il modello prevede un numero che può assumere qualsiasi valore in un intervallo: il prezzo di una casa, la temperatura di domani. Il nome ha una storia curiosa. Francis Galton, negli anni 1880, osservò che i figli di genitori molto alti tendono a essere alti, ma meno dei genitori: la loro statura "regredisce" verso la media. Il metodo matematico che usò per studiare il fenomeno (derivato dai minimi quadrati di Legendre e Gauss, inizio Ottocento) ha conservato il nome "regressione" anche quando non c'è più nulla che regredisca.

**Clustering.** Il modello raggruppa dati simili senza sapere in anticipo quali gruppi esistano. *Cluster* in inglese significa "grappolo". L'algoritmo più noto, il *k-means*, divide i dati in k gruppi in modo che ogni punto sia il più vicino possibile al centro del proprio gruppo; fu ideato da Stuart Lloyd nel 1957 e battezzato da James MacQueen nel 1967.

### I quattro modi di imparare

Ciò che distingue i tipi di apprendimento è il genere di informazione che il modello riceve durante l'addestramento.

**Apprendimento supervisionato.** Il modello riceve coppie di input e risposta corretta (un'immagine e la scritta "gatto"). Impara a ricostruire la relazione tra le due, in modo da produrre la risposta giusta anche per input nuovi. "Supervisionato" significa che esiste qualcuno, o qualcosa, che fornisce la risposta corretta per ogni esempio. Classificazione e regressione sono quasi sempre supervisionate.

**Apprendimento non supervisionato.** Il modello riceve solo input, senza risposte. Il suo compito è trovare struttura nei dati: gruppi (clustering), dimensioni nascoste che spiegano la variabilità, anomalie. Serve quando non si sa in anticipo che cosa cercare, per esempio per scoprire segmenti di clientela.

**Apprendimento per rinforzo** (*reinforcement learning*, RL). Il modello, detto **agente**, compie azioni in un ambiente e riceve dopo ciascuna una **ricompensa** numerica, positiva o negativa. Il suo obiettivo è imparare una strategia (*policy*) che massimizzi la ricompensa totale nel tempo, anche accettando perdite immediate per guadagni futuri. Il termine "rinforzo" viene dalla psicologia comportamentista (Thorndike, Pavlov, Skinner): un comportamento seguito da una ricompensa viene "rinforzato". La teoria matematica deriva dalla programmazione dinamica di Richard Bellman (anni Cinquanta) ed è stata sistematizzata da Richard Sutton e Andrew Barto tra gli anni Ottanta e Novanta. È la tecnica dietro AlphaGo (2016) e, come vedremo, dietro l'addestramento dei chatbot moderni.

**Apprendimento auto-supervisionato** (*self-supervised*). È una via di mezzo, diventata centrale solo negli anni 2010 e battezzata così da Yann LeCun intorno al 2019. I dati non hanno etichette fornite da persone, ma il compito viene costruito dai dati stessi. Esempio: si prende una frase, si nasconde una parola e si chiede al modello di indovinarla; la risposta corretta è la parola nascosta, che si conosce già. Così si possono usare miliardi di testi senza che nessuno li etichetti a mano. È il principio su cui si basano tutti i grandi modelli linguistici (capitolo 7).

## 4. Come impara un modello: gli ingredienti

Qualunque sia il tipo di apprendimento, il meccanismo di fondo è lo stesso: un modello con molte impostazioni regolabili produce risposte, si misura quanto sbaglia, e si correggono le impostazioni per sbagliare meno. Questo capitolo smonta il meccanismo pezzo per pezzo.

### I dati: feature, etichette, dataset

Una **feature** (in italiano "caratteristica" o "attributo") è una singola grandezza misurabile che descrive un esempio. Per una casa: metri quadri, piano, quartiere, anno di costruzione. Per un'immagine: il valore di luminosità di ogni pixel. Il termine viene dalla *pattern recognition* degli anni Sessanta, dove "estrarre le feature" era il lavoro, svolto a mano da esperti, di decidere quali misure dare in pasto al modello. Una delle rivoluzioni del deep learning (capitolo 5) sarà proprio rendere automatica questa estrazione.

Un'**etichetta** (*label*) è la risposta corretta associata a un esempio nell'apprendimento supervisionato: il prezzo effettivo a cui la casa è stata venduta, la parola "gatto" sotto la foto.

Un **dataset** è la raccolta organizzata degli esempi. Per valutare onestamente un modello, il dataset si divide in tre parti. Il *training set* serve ad addestrarlo. Il *validation set* serve a confrontare versioni diverse e scegliere le impostazioni migliori. Il *test set* viene usato una sola volta, alla fine, per stimare quanto il modello funzionerà nel mondo reale: se lo si usasse durante lo sviluppo, il modello finirebbe per adattarsi anche a quello e la stima risulterebbe gonfiata.

### Parametri e iperparametri

I **parametri** sono i numeri interni del modello che vengono modificati durante l'addestramento. In una rete neurale sono soprattutto i pesi delle connessioni. Un modello linguistico moderno ne ha da qualche miliardo a qualche migliaio di miliardi: quando si dice che un modello "ha 70 miliardi di parametri", si parla di questo.

Gli **iperparametri** sono invece le scelte fatte dagli sviluppatori *prima* dell'addestramento e che il modello non modifica da sé: quanti strati ha la rete, quanto grandi sono i passi di correzione, per quante volte si ripassano i dati. Il prefisso "iper-" (dal greco *hypér*, "sopra") viene dalla statistica bayesiana, dove indicava i parametri che governano altri parametri: sono, letteralmente, impostazioni di livello superiore.

### Misurare l'errore: la funzione di perdita

La **funzione di perdita** (*loss function*) è una formula che trasforma la distanza tra la risposta del modello e quella corretta in un singolo numero: zero se la risposta è perfetta, tanto più alto quanto più è sbagliata. Per una regressione si usa spesso l'errore quadratico medio (la media dei quadrati delle differenze); per una classificazione la *cross-entropy*, che penalizza molto il modello quando è sicuro di una risposta sbagliata.

Il termine "perdita" viene dalla teoria statistica delle decisioni di Abraham Wald (anni Quaranta): ogni decisione sbagliata comporta un costo, una perdita. Addestrare un modello significa, in termini precisi, cercare i valori dei parametri che rendono minima la perdita media sul training set.

### Ridurre l'errore: gradient descent e backpropagation

Come si trovano quei valori? Provare tutte le combinazioni è impossibile con miliardi di parametri. Si usa la **discesa del gradiente** (*gradient descent*), un metodo descritto dal matematico Augustin-Louis Cauchy nel 1847.

Il **gradiente** è un concetto di calcolo differenziale: per ogni parametro, indica di quanto cambierebbe la perdita se quel parametro aumentasse di pochissimo. Conoscendolo, si sa in quale direzione spostare ciascun parametro per far diminuire la perdita. Il metodo ripete un passo semplice: calcola il gradiente, sposta tutti i parametri di un poco nella direzione opposta, ricalcola.

```latex
\theta_{\text{nuovo}} = \theta_{\text{vecchio}} - \eta \, \nabla L(\theta)
```

In parole: i nuovi parametri (θ) sono i vecchi meno il gradiente della perdita (∇L) moltiplicato per un numero piccolo (η). Qui la metafora è utile perché il concetto vive in uno spazio con miliardi di dimensioni: è come scendere da una montagna nella nebbia, guardando solo la pendenza del terreno sotto i piedi e facendo ogni volta un passo verso il basso.

Quel numero η è il **learning rate** (tasso di apprendimento), uno degli iperparametri più importanti. Se è troppo grande, i passi scavalcano il punto più basso e l'addestramento diventa instabile; se è troppo piccolo, la discesa richiede un tempo enorme.

Resta un problema: in una rete con molti strati, come si calcola il gradiente di ogni singolo peso? La risposta è la **backpropagation** ("retropropagazione dell'errore"). Si confronta l'output con la risposta giusta, poi si risale la rete dall'ultimo strato al primo, calcolando con la regola della catena del calcolo differenziale quanto ogni peso ha contribuito all'errore finale. L'idea matematica era nota dagli anni Settanta (Seppo Linnainmaa 1970, Paul Werbos 1974), ma fu l'articolo di David Rumelhart, Geoffrey Hinton e Ronald Williams del 1986 a mostrarne l'efficacia per addestrare reti a più strati. Risolveva così il problema lasciato aperto da Minsky e Papert nel 1969.

Un'**epoca** (dal greco *epoché*, "pausa", poi "periodo") è un passaggio completo su tutto il training set. In pratica i dati vengono presentati in piccoli gruppi (*mini-batch*), e dopo ogni gruppo si fa un passo di discesa; un'epoca è conclusa quando il modello ha visto ogni esempio una volta. I grandi modelli linguistici attuali vedono gran parte dei loro dati una sola volta o poco più.

### Imparare troppo o troppo poco

L'obiettivo dell'addestramento non è andare bene sul training set, ma sui dati futuri. Questa capacità si chiama **generalizzazione**.

L'**overfitting** ("sovradattamento") avviene quando il modello si adatta così strettamente ai dati di addestramento da coglierne anche le particolarità casuali, il "rumore". Il risultato è un modello eccellente sugli esempi già visti e scadente su quelli nuovi. Il segnale tipico: la perdita sul training set continua a scendere mentre quella sul validation set risale. Il termine viene dalla statistica, dove si parlava di adattare (*fit*) una curva ai dati: un polinomio di grado altissimo può passare esattamente per ogni punto e oscillare in modo assurdo tra un punto e l'altro.

L'**underfitting** è il problema opposto: il modello è troppo semplice, o è stato addestrato troppo poco, per cogliere anche le regolarità reali. Va male sia sul training set sia sui dati nuovi.

### Bias: una parola, due significati

La parola **bias** ("distorsione") ha due significati distinti, e confonderli genera molti equivoci.

In senso statistico, il bias è un errore sistematico dovuto alle assunzioni del modello. Un modello troppo rigido (per esempio una retta usata per descrivere una relazione curva) ha bias alto: sbaglia sempre nella stessa direzione. Il compromesso tra bias e *varianza* (la sensibilità alle fluttuazioni dei dati) è un altro modo di descrivere la tensione tra underfitting e overfitting.

In senso sociale, il bias è un pregiudizio che il modello eredita dai dati con cui è addestrato. Se un sistema di selezione del personale impara da assunzioni passate in cui le donne erano sottorappresentate, tenderà a riprodurre quella disparità. Il modello non "ha opinioni": riproduce le regolarità statistiche presenti nei dati, comprese quelle che riflettono discriminazioni. (In una rete neurale, "bias" indica anche un terzo oggetto, più tecnico: un numero aggiunto alla somma pesata di ogni neurone.)

### Valutare: le metriche

Le **metriche** misurano la qualità di un modello. La più intuitiva è l'**accuracy** (accuratezza): la percentuale di risposte corrette. Può però ingannare: se il 99% delle transazioni bancarie è lecito, un modello che dichiara "lecite" tutte le transazioni ha accuratezza del 99% e non scopre nessuna frode.

Per questo si usano due misure nate negli anni Cinquanta e Sessanta nel campo della ricerca documentale (*information retrieval*), cioè dei sistemi che cercano documenti in archivi. La **precision** (precisione) risponde a: di tutti i casi che il modello ha segnalato come positivi, quanti lo erano davvero? La **recall** (richiamo, sensibilità) risponde a: di tutti i casi positivi esistenti, quanti il modello ne ha trovati? Di solito migliorare l'una peggiora l'altra.

L'**F1** è la media armonica di precision e recall, un unico numero che è alto solo se lo sono entrambe. Deriva da una misura proposta da Cornelis van Rijsbergen nel 1979.

## 5. Le reti neurali e il deep learning (1986–2016)

Con la backpropagation le reti a più strati diventano addestrabili. Ma per vent'anni restano una tecnica tra le tante, spesso battuta da metodi statistici più semplici. Il loro trionfo arriva solo quando si incontrano tre fattori: algoritmi migliorati, enormi quantità di dati e hardware capace di calcolo parallelo.

### Il neurone artificiale, nel dettaglio

Una **rete neurale artificiale** è una funzione matematica costruita collegando molte unità elementari, i **neuroni artificiali**. Il nome rimanda al cervello, ma l'analogia è debole: un neurone artificiale è un'operazione aritmetica, non una cellula.

Ogni neurone fa tre cose. Riceve un insieme di numeri in ingresso. Moltiplica ciascuno per un **peso** (*weight*) e somma i risultati, aggiungendo un termine costante (il bias in senso tecnico). Infine applica al totale una **funzione di attivazione**, che produce il numero in uscita.

```latex
y = f\left( w_1 x_1 + w_2 x_2 + \dots + w_n x_n + b \right)
```

Il peso misura quanto un input conta per quel neurone: un peso grande e positivo lo amplifica, uno negativo lo contrasta, uno vicino a zero lo ignora. Sono proprio i pesi i parametri che l'addestramento regola.

### Perché serve la funzione di attivazione

Senza funzione di attivazione, ogni neurone farebbe solo somme pesate, cioè operazioni lineari. E una catena di operazioni lineari, per quanto lunga, equivale sempre a una sola operazione lineare: la rete, anche con cento strati, potrebbe descrivere soltanto relazioni "a linea retta". La funzione di attivazione introduce la **non linearità**, ed è questa che permette di rappresentare relazioni complesse.

Le prime reti usavano la *sigmoide*, una curva a S che comprime qualsiasi numero tra 0 e 1. Dal 2010 circa si è imposta la *ReLU* (*Rectified Linear Unit*), molto più semplice: lascia passare i numeri positivi invariati e trasforma i negativi in zero. Accelera l'addestramento e attenua un problema delle reti profonde di cui diremo tra poco.

### Strati e profondità

I neuroni sono organizzati in **strati** (*layer*). Lo strato di input riceve i dati grezzi; gli **strati nascosti** (*hidden*, detti così perché il loro contenuto non è osservabile dall'esterno) li trasformano in successione; lo strato di output produce il risultato.

Ogni strato costruisce rappresentazioni più astratte a partire da quelle dello strato precedente. In una rete che riconosce volti, i primi strati reagiscono a contrasti e bordi, quelli intermedi a forme come occhi e nasi, gli ultimi a configurazioni complete di un volto. Queste caratteristiche non sono programmate: emergono dall'addestramento. È così che il deep learning rende automatica l'estrazione delle feature che prima si faceva a mano.

**Deep learning** significa letteralmente "apprendimento profondo", dove *profondo* si riferisce al numero di strati. L'espressione fu usata per la prima volta nel machine learning da Rina Dechter nel 1986, applicata alle reti neurali da Igor Aizenberg nel 2000, e resa popolare da Geoffrey Hinton dal 2006, quando mostrò un metodo per addestrare reti con molti strati.

### Reti specializzate: CNN e RNN

Le **reti neurali convoluzionali** (*CNN*, *Convolutional Neural Networks*) sono progettate per le immagini. Invece di collegare ogni pixel a ogni neurone, usano piccoli **filtri** che scorrono sull'immagine cercando lo stesso motivo (un bordo verticale, una curva) in ogni posizione. L'operazione matematica di far scorrere un filtro su un segnale si chiama *convoluzione*, termine dell'analisi matematica e dell'elaborazione dei segnali. L'architettura si ispira agli studi di Hubel e Wiesel sulla corteccia visiva dei gatti (anni Sessanta), passa per il *Neocognitron* di Kunihiko Fukushima (1980) e diventa pratica con *LeNet* di Yann LeCun (1989), usata per leggere i codici postali scritti a mano.

Le **reti neurali ricorrenti** (*RNN*, *Recurrent Neural Networks*) sono progettate per le sequenze: testo, parlato, serie temporali. Elaborano un elemento alla volta e mantengono uno **stato interno** che riassume quanto visto finora; a ogni passo lo stato viene aggiornato con il nuovo elemento. "Ricorrente" significa che l'output di un passo rientra come input del passo successivo.

Le RNN soffrono però del problema del **gradiente che svanisce** (*vanishing gradient*), analizzato da Sepp Hochreiter nel 1991. Durante la backpropagation, il segnale di correzione deve attraversare tutti i passi della sequenza all'indietro, e a ogni passo viene moltiplicato per numeri spesso minori di uno: dopo qualche decina di passi è praticamente zero. Risultato: la rete non riesce a imparare legami tra parole lontane in una frase.

Le **LSTM** (*Long Short-Term Memory*, Hochreiter e Schmidhuber, 1997) risolvono in parte il problema con delle "porte" (*gate*): meccanismi appresi che decidono, a ogni passo, quali informazioni conservare nello stato, quali dimenticare e quali leggere. Il nome paradossale ("memoria a breve termine lunga") indica proprio una memoria di lavoro che riesce a durare più a lungo. Le LSTM hanno dominato traduzione automatica e riconoscimento vocale fino al 2017, quando sono state in gran parte sostituite dai Transformer (capitolo 6).

### Il 2012 e il ruolo dell'hardware

La data simbolo della rinascita è il 2012. Alla competizione ImageNet, che chiedeva di classificare immagini in mille categorie usando un dataset di oltre un milione di foto etichettate (creato dal gruppo di Fei-Fei Li nel 2009), la rete *AlexNet* di Alex Krizhevsky, Ilya Sutskever e Geoffrey Hinton riduce l'errore di circa dieci punti percentuali rispetto al miglior concorrente. Nel giro di due anni quasi tutta la visione artificiale passa al deep learning.

AlexNet era stata addestrata su due **GPU** (*Graphics Processing Unit*). Le GPU erano nate per i videogiochi, dove devono calcolare in parallelo il colore di milioni di pixel. Si scoprì che lo stesso tipo di calcolo (moltiplicare grandi tabelle di numeri, le matrici) è esattamente ciò che serve a una rete neurale. Da allora la potenza delle GPU, prodotte soprattutto da Nvidia, è uno dei fattori decisivi del progresso dell'AI.

Le **TPU** (*Tensor Processing Unit*) sono chip progettati da Google, annunciati nel 2016, specificamente per i calcoli delle reti neurali. *Tensore* è il nome matematico delle tabelle di numeri a più dimensioni che le reti manipolano. Oggi esistono molti altri acceleratori specializzati, ma il principio è lo stesso: tantissime operazioni semplici eseguite contemporaneamente.

## 6. Il linguaggio: dalle parole ai numeri, fino al Transformer (1950–2017)

Il linguaggio è stato per decenni il problema più difficile dell'AI, perché il significato di una parola dipende dal contesto, e il contesto può estendersi per pagine intere. La soluzione attuale è passata per tre idee: rappresentare le parole come numeri, rappresentarle in modo che il significato diventi geometria, e lasciare che ogni parola "guardi" tutte le altre.

### Natural Language Processing

Il **Natural Language Processing** (NLP, "elaborazione del linguaggio naturale") è il campo che si occupa di far comprendere e produrre linguaggio umano ai computer. "Naturale" distingue le lingue umane da quelle formali, come i linguaggi di programmazione o la logica.

La sua storia ricalca quella dell'AI. Il primo esperimento celebre è la traduzione automatica russo-inglese di Georgetown-IBM (1954), basata su regole e su un vocabolario di 250 parole. Seguono decenni di grammatiche scritte a mano, poi dagli anni Novanta i modelli statistici, che imparano a tradurre confrontando milioni di frasi già tradotte. Dal 2013 circa arrivano le reti neurali.

### Token e tokenizzazione

Un modello non legge lettere né parole: legge **token**. Un token è un frammento di testo che il modello tratta come unità: può essere una parola intera ("casa"), una parte di parola ("intelligen" + "za"), un segno di punteggiatura o uno spazio. In inglese, la parola *token* (dall'antico inglese *tācn*, "segno") indica un gettone o un contrassegno; in linguistica, dagli inizi del Novecento con Charles S. Peirce, designa la singola occorrenza concreta di un segno.

La **tokenizzazione** è il processo che spezza il testo in token, ciascuno associato a un numero di un vocabolario fisso (in genere tra 30.000 e 250.000 voci). Il metodo più diffuso, il *Byte-Pair Encoding*, nasce nel 1994 come algoritmo di compressione dei dati (Philip Gage) e viene adattato al linguaggio nel 2016 (Rico Sennrich e colleghi): parte dalle singole lettere e unisce ripetutamente le coppie più frequenti. Il risultato è che le parole comuni diventano un solo token, quelle rare vengono spezzate in pezzi.

Il dettaglio ha conseguenze pratiche. I costi e i limiti dei modelli si misurano in token, non in parole (in italiano una parola vale in media un po' più di un token). E alcune difficoltà curiose dei modelli, come contare le lettere di una parola, derivano dal fatto che il modello non "vede" le lettere, ma solo i token.

### Embedding e spazio latente

Un numero di vocabolario non dice nulla sul significato: che "cane" sia il token 4.512 e "gatto" il 9.871 è arbitrario. Serve una rappresentazione in cui parole di significato simile siano anche numericamente simili.

L'idea linguistica di fondo è l'**ipotesi distribuzionale**, formulata da Zellig Harris nel 1954 e resa celebre dal linguista J. R. Firth nel 1957: il significato di una parola si ricava dalle parole che la accompagnano. "Cane" e "gatto" compaiono in frasi simili ("ho dato da mangiare al…", "il … dorme sul divano"), quindi hanno significati vicini.

Un **embedding** traduce questa idea in matematica: a ogni token si associa un **vettore**, cioè una lista di alcune centinaia o migliaia di numeri, appresa durante l'addestramento in modo che parole usate in contesti simili abbiano vettori simili. Il termine inglese *embedding* significa "incorporamento": le parole vengono incorporate in uno spazio geometrico. Il metodo che ha reso famosa l'idea è *word2vec* (Tomas Mikolov e colleghi, Google, 2013).

In quello spazio le relazioni di significato diventano direzioni. L'esempio classico di word2vec: il vettore di "re", meno quello di "uomo", più quello di "donna", dà un vettore molto vicino a "regina". La direzione "maschile → femminile" è una delle tante codificate nella geometria.

Lo **spazio latente** è il nome generale per questi spazi di rappresentazione interni. *Latente* (dal latino *latere*, "essere nascosto") significa che le sue dimensioni non sono osservate direttamente né scelte da qualcuno, ma ricavate dal modello. Qui serve una cautela: lo spazio ha centinaia di dimensioni e non è visualizzabile. Parlare di "mappa dei concetti" è una metafora utile, ma le singole dimensioni raramente corrispondono a concetti nominabili.

### Il meccanismo di attenzione

Un embedding statico dà a "pesca" sempre lo stesso vettore, sia che si parli di frutta sia di sport. Il significato reale si decide solo guardando il resto della frase. Le RNN tentavano di farlo portando avanti uno stato interno, ma dovevano comprimere tutta la frase in un unico vettore di dimensione fissa, e perdevano informazioni.

Nel 2014 Dzmitry Bahdanau, Kyunghyun Cho e Yoshua Bengio introducono, per la traduzione automatica, il **meccanismo di attenzione** (*attention*). Invece di affidarsi a un unico riassunto, mentre produce ogni parola tradotta il modello può consultare direttamente tutte le parole della frase originale, dando a ciascuna un peso diverso a seconda di quanto è rilevante in quel momento.

Il meccanismo funziona così. Per ogni token il modello calcola tre vettori, chiamati con termini presi dai sistemi di ricerca nei database: una **query** ("che cosa sto cercando"), una **key** ("che cosa offro") e un **value** ("che informazione porto"). Si confronta la query di un token con le key di tutti gli altri: più sono simili, più alto è il peso di attenzione. Il nuovo vettore del token è la media dei value di tutti i token, pesata con quei pesi.

```latex
\text{Attention}(Q, K, V) = \text{softmax}\left( \frac{Q K^{\top}}{\sqrt{d}} \right) V
```

In parole: si misura la somiglianza tra ogni query e ogni key (QKᵀ), si trasformano le somiglianze in percentuali che sommano a 100 (softmax), e si usano come pesi per combinare i value. Nella frase "Ho mangiato una pesca matura", il token "pesca" darà molto peso a "mangiato" e "matura", e il suo vettore si sposterà verso il significato di frutto.

### Il Transformer (2017)

Nel giugno 2017 otto ricercatori di Google pubblicano *Attention Is All You Need* (Vaswani e colleghi). Il titolo è già la tesi: si può costruire un modello di linguaggio usando solo l'attenzione, eliminando del tutto la ricorrenza delle RNN. L'architettura si chiama **Transformer** perché trasforma una sequenza di vettori in un'altra sequenza di vettori, strato dopo strato.

Il Transformer usa la **self-attention**: ogni token della frase presta attenzione a tutti gli altri token della stessa frase. Lo fa con più "teste" in parallelo (*multi-head attention*), ciascuna libera di specializzarsi in un tipo di relazione diverso, per esempio una sui legami grammaticali e un'altra sui riferimenti dei pronomi. Ogni strato alterna un blocco di attenzione e un blocco di rete neurale classica; i modelli grandi impilano decine o centinaia di strati.

Poiché l'attenzione in sé non conosce l'ordine delle parole, a ogni token si aggiunge un'informazione sulla sua posizione (*positional encoding*): senza di essa "il cane morde l'uomo" e "l'uomo morde il cane" sarebbero indistinguibili.

Il vantaggio decisivo è il **parallelismo**. Una RNN deve elaborare la parola 100 dopo la 99; un Transformer calcola tutte le posizioni contemporaneamente, sfruttando appieno le GPU. Questo ha reso possibile addestrare modelli molto più grandi su quantità di testo molto maggiori. Quasi tutti i modelli citati nei capitoli seguenti sono Transformer, e l'architettura è stata estesa anche a immagini, audio, proteine.

### La finestra di contesto

La **finestra di contesto** (*context window*) è il numero massimo di token che il modello può considerare in una volta: la domanda, i documenti allegati, la conversazione precedente e la risposta in corso di scrittura. Tutto ciò che sta fuori dalla finestra, per il modello, non esiste.

Il limite deriva dal costo dell'attenzione: poiché ogni token si confronta con tutti gli altri, raddoppiare la lunghezza della sequenza quadruplica il calcolo. Il Transformer originale gestiva 512 token; i primi ChatGPT circa 4.000; nel 2026 diversi modelli commerciali dichiarano finestre da centinaia di migliaia fino a qualche milione di token, grazie a varianti più efficienti del meccanismo. Va però distinta la capacità di *contenere* un testo da quella di *usarlo bene*: le prestazioni su informazioni sepolte nel mezzo di contesti molto lunghi possono calare.

## 7. L'AI generativa e i grandi modelli linguistici (2014–oggi)

Fino ai primi anni 2010 l'AI era soprattutto *discriminativa*: riceveva un input e lo classificava o lo misurava. L'**AI generativa** fa il contrario: produce contenuti nuovi (testo, immagini, suoni, codice) che somigliano a quelli su cui è stata addestrata senza esserne copie. In termini statistici, un modello generativo impara la *distribuzione di probabilità* dei dati, cioè quanto è probabile ogni possibile frase o immagine, e poi ne estrae campioni nuovi.

### Le prime immagini sintetiche: le GAN (2014)

Le **GAN** (*Generative Adversarial Networks*, "reti generative avversarie") sono proposte da Ian Goodfellow nel 2014. Due reti vengono addestrate insieme in competizione. Il *generatore* produce immagini a partire da rumore casuale; il *discriminatore* riceve un misto di immagini vere e generate e deve distinguerle. Ciascuna rete viene corretta in base agli errori dell'altra: il generatore migliora finché il discriminatore non riesce più a riconoscere i falsi. "Avversario" viene dalla teoria dei giochi, dove due giocatori hanno obiettivi opposti.

Le GAN hanno prodotto i primi volti fotorealistici di persone inesistenti (StyleGAN, 2018-2019), ma sono difficili da addestrare e sono state superate, per le immagini, dai modelli di diffusione.

### I modelli di diffusione

Un **modello di diffusione** impara a invertire un processo di degradazione. In addestramento si prendono immagini vere e vi si aggiunge rumore casuale un poco alla volta, in centinaia di passi, fino a ottenere puro rumore. Il modello impara, a ogni passo, a stimare quale rumore è stato aggiunto e quindi a toglierlo. Per generare un'immagine nuova si parte da rumore puro e si applica il modello ripetutamente: a ogni passo l'immagine diventa un po' più definita.

Il nome viene dalla fisica: la diffusione è il fenomeno per cui una goccia di inchiostro si disperde nell'acqua fino a distribuirsi uniformemente. L'idea è di Jascha Sohl-Dickstein e colleghi (2015) e diventa pratica nel 2020 (Ho, Jain e Abbeel). Nel 2022 DALL·E 2, Midjourney e Stable Diffusion la portano al grande pubblico. Per generare ciò che chiede un testo, il processo di rimozione del rumore viene "guidato" dalla descrizione scritta.

### Gli LLM: prevedere la parola successiva

Un **LLM** (*Large Language Model*, "grande modello linguistico") è un Transformer con miliardi di parametri addestrato su enormi raccolte di testo con un compito auto-supervisionato semplicissimo: dato un testo, prevedere il token successivo. Un *modello linguistico* in senso tecnico è proprio questo: un sistema che assegna una probabilità a ogni possibile continuazione di un testo. Il concetto risale a Claude Shannon, che nel 1948 stimava la probabilità delle lettere successive in inglese.

Per prevedere bene la parola successiva in testi di ogni genere, il modello deve, implicitamente, apprendere grammatica, fatti sul mondo, stili, ragionamenti elementari. Quanto questa competenza equivalga a una "comprensione" è tuttora oggetto di discussione; quello che è certo è che non si tratta di un database che recupera frasi memorizzate, ma di un sistema che compone il testo token per token.

La sequenza storica è rapida. GPT di OpenAI (2018) e BERT di Google (2018) mostrano che un Transformer pre-addestrato su testo generico si adatta bene a molti compiti. GPT-2 (2019, 1,5 miliardi di parametri) scrive testi coerenti per paragrafi interi. GPT-3 (2020, 175 miliardi) sorprende per la capacità di svolgere compiti mai visti a partire da poche istruzioni. ChatGPT (novembre 2022) porta la tecnologia al pubblico generale; seguono Claude di Anthropic, Gemini di Google, Llama di Meta e molti altri.

L'acronimo GPT significa *Generative Pre-trained Transformer*, e riassume tutto il capitolo: un Transformer, pre-addestrato, che genera.

### Pre-training e fine-tuning

Il **pre-training** ("pre-addestramento") è la prima fase, la più costosa: il modello impara a prevedere il token successivo su migliaia di miliardi di token di testo raccolti dal web, da libri, da codice. Il prefisso *pre-* indica che non è l'addestramento finale ma la base su cui si costruisce.

Il **fine-tuning** ("messa a punto fine") è un addestramento successivo, molto più breve, su dati scelti per un obiettivo specifico. L'espressione viene dall'ingegneria e dalla radio, dove indica la regolazione di precisione dopo quella grossolana. Un modello appena pre-addestrato sa continuare testi ma non sa "conversare": se gli si scrive una domanda, può rispondere con altre domande, perché in molti testi del web le domande compaiono in elenchi. Il fine-tuning su esempi di dialoghi lo trasforma in un assistente (si parla di *instruction tuning*); altri fine-tuning lo specializzano in un dominio, per esempio il linguaggio medico o giuridico.

Questo schema, in cui un modello addestrato su un compito generale viene riutilizzato per compiti diversi, si chiama *transfer learning* ("apprendimento per trasferimento") ed è uno dei principi più importanti dell'AI attuale.

### I foundation model

L'espressione **foundation model** ("modello di base" o "di fondazione") è stata coniata nel 2021 da un gruppo di ricercatori dell'Università di Stanford. Indica un modello di grandi dimensioni, addestrato su dati vasti e vari, che funge da fondamenta su cui costruire molte applicazioni diverse. Il nome fu scelto per sottolineare due cose: la centralità di questi modelli, e il fatto che un loro difetto si propaga a tutto ciò che vi viene costruito sopra.

### Il prompt e il modo di istruire il modello

Il **prompt** è il testo che si fornisce al modello come input. In inglese *prompt* è il suggerimento dato a un attore che ha dimenticato la battuta: e infatti tecnicamente il modello riceve l'inizio di un testo e ne produce la continuazione.

Il **system prompt** ("prompt di sistema") è una parte del prompt, scritta di solito da chi sviluppa l'applicazione, che precede la conversazione e definisce ruolo, tono, regole e limiti del modello. L'utente in genere non lo vede, ma il modello lo tratta come contesto di riferimento per tutta la conversazione.

Il **prompt engineering** è la pratica di progettare i prompt per ottenere risultati migliori: dare istruzioni precise, fornire contesto, mostrare esempi, specificare il formato. Con modelli sempre più capaci si parla anche di *context engineering*: non solo come formulare la richiesta, ma quali informazioni mettere a disposizione del modello nella sua finestra di contesto.

**Zero-shot** e **few-shot learning** descrivono quanti esempi il modello riceve nel prompt prima di svolgere un compito. Zero-shot: nessun esempio, solo l'istruzione ("traduci in francese: …"). Few-shot: pochi esempi risolti seguiti dal caso da risolvere. *Shot* in inglese significa "tentativo". L'articolo di presentazione di GPT-3 (2020) si intitolava proprio *Language Models are Few-Shot Learners*: la scoperta era che un modello abbastanza grande impara un compito nuovo da pochi esempi nel prompt, senza alcun riaddestramento dei suoi parametri. Si parla per questo di *in-context learning*, "apprendimento nel contesto".

### La temperatura e il campionamento

A ogni passo, l'LLM non produce una parola ma una distribuzione di probabilità su tutti i token del vocabolario (per esempio: "gatto" 40%, "cane" 25%, "topo" 5%…). Il token effettivo viene poi estratto da questa distribuzione.

La **temperatura** è un parametro che modifica questa distribuzione prima dell'estrazione. A temperatura bassa le differenze si accentuano: il token più probabile viene scelto quasi sempre e il testo diventa prevedibile e ripetitivo. A temperatura alta le probabilità si appiattiscono: anche token meno probabili hanno buone chance e il testo diventa più vario, ma anche più incline a errori. Il nome viene dalla fisica statistica di Ludwig Boltzmann: la formula matematica (la *softmax*) è la stessa che descrive come, in un sistema fisico, la temperatura distribuisce le particelle tra stati di energia diversi.

### Le allucinazioni

Si chiama **allucinazione** un output plausibile nella forma ma falso nel contenuto: una citazione inventata, una data sbagliata, una sentenza mai esistita, detti con lo stesso tono sicuro delle informazioni corrette. Il termine era già usato nella visione artificiale dal 2000 circa ("allucinare" dettagli in un'immagine a bassa risoluzione) e si diffonde per il testo dal 2018, con la traduzione automatica neurale.

La causa sta nel modo in cui funziona un LLM: è addestrato a produrre testo *probabile*, non testo *vero*. Quando non dispone dell'informazione, la continuazione più plausibile resta una frase grammaticalmente e stilisticamente credibile. I rimedi principali sono il fine-tuning che premia il riconoscere l'incertezza, e il collegamento del modello a fonti esterne verificabili (la RAG, capitolo 9). Il termine è stato criticato perché antropomorfizza la macchina; alcuni preferiscono *confabulazione*, preso dalla neuropsicologia, dove indica ricordi falsi prodotti in buona fede.

### I modelli multimodali

Un **modello multimodale** elabora o genera più *modalità*, cioè tipi di dati diversi: testo, immagini, audio, video. Il passo decisivo è stato CLIP di OpenAI (2021), che ha imparato a collocare immagini e didascalie nello stesso spazio latente: la foto di un cane e la frase "un cane" finiscono vicine. Da qui sono nati sia i generatori di immagini da testo sia i modelli che "leggono" le immagini. I principali modelli del 2026 accettano in ingresso testo, immagini e documenti, e molti gestiscono anche audio e video.

## 8. Allineamento e sicurezza: far fare al modello ciò che vogliamo davvero

Un modello pre-addestrato imita il testo che ha visto, compreso quello falso, offensivo o pericoloso. Più i modelli diventano capaci, più conta la domanda: come ci si assicura che facciano ciò che le persone intendono, in modo utile e sicuro? Questo capitolo raccoglie le tecniche e i concetti nati intorno a quella domanda.

### L'allineamento

L'**allineamento** (*alignment*) è l'insieme delle ricerche e delle tecniche volte a far sì che gli obiettivi e il comportamento di un sistema di AI corrispondano alle intenzioni e ai valori umani. La parola è presa dal linguaggio comune ("allineare" interessi o obiettivi) e si afferma in questo senso tecnico intorno al 2014-2016, negli ambienti di ricerca sulla sicurezza dell'AI.

Il problema però è più antico. Nel 1960 Norbert Wiener, il fondatore della cibernetica, avvertiva che se usiamo per i nostri scopi una macchina sul cui funzionamento non possiamo intervenire efficacemente, faremmo bene a essere sicuri che lo scopo inserito nella macchina sia quello che desideriamo davvero. Il nodo è che gli obiettivi umani sono difficili da specificare in modo completo: "rispondi alle domande dell'utente" non dice nulla su quando rifiutare, come gestire l'incertezza, come comportarsi con richieste ambigue.

### RLHF: imparare dalle preferenze umane

L'**RLHF** (*Reinforcement Learning from Human Feedback*, "apprendimento per rinforzo da feedback umano") è la tecnica che ha reso utilizzabili gli assistenti conversazionali. Fu proposta nel 2017 da Paul Christiano e colleghi (OpenAI e DeepMind) per addestrare agenti su compiti difficili da descrivere con una formula, e applicata ai modelli linguistici con InstructGPT (2022), il predecessore diretto di ChatGPT.

Funziona in tre passi. Primo: il modello produce più risposte alla stessa domanda, e dei valutatori umani indicano quale preferiscono. Secondo: con migliaia di questi confronti si addestra un *reward model* ("modello di ricompensa"), una rete che impara a prevedere quale risposta le persone preferirebbero. Terzo: il modello linguistico viene addestrato con l'apprendimento per rinforzo, usando come ricompensa il punteggio del reward model. In questo modo si ottimizza una qualità (utilità, chiarezza, sicurezza) che nessuno saprebbe definire per esteso, ma che le persone riconoscono quando la vedono.

### L'AI costituzionale

L'**AI costituzionale** (*Constitutional AI*) è un metodo presentato da Anthropic nel dicembre 2022. Invece di affidarsi solo a giudizi umani caso per caso, si fornisce al modello un insieme esplicito di principi scritti, la "costituzione". Il modello genera una risposta, la critica alla luce dei principi, la riscrive; poi un modello valuta quale risposta rispetta meglio i principi, e quei giudizi sostituiscono in larga parte quelli umani nella fase di rinforzo (si parla di *RLAIF*, con *AI Feedback* al posto di *Human Feedback*).

Il vantaggio è duplice: il processo richiede meno lavoro umano su contenuti sgradevoli, e i valori che guidano il modello sono scritti in un documento che si può leggere, discutere e modificare. La metafora costituzionale è intenzionale: come una costituzione, il documento stabilisce principi generali da interpretare, non un elenco esaustivo di casi.

### Guardrail

I **guardrail** sono i vincoli che impediscono a un sistema di AI di produrre contenuti o compiere azioni indesiderate. Il termine è preso dal guardrail stradale, la barriera che evita l'uscita di strada. Possono essere interni al modello (comportamenti appresi con il fine-tuning, come rifiutare certe richieste) o esterni: filtri che esaminano input e output, classificatori che riconoscono richieste pericolose, limiti su quali strumenti un agente può usare. Nella pratica si usano più livelli sovrapposti, perché nessuno è infallibile da solo.

### Jailbreak e prompt injection

Un **jailbreak** ("evasione dal carcere") è una tecnica per indurre un modello a ignorare le proprie regole di sicurezza: per esempio chiedergli di interpretare un personaggio "senza limiti", spezzare una richiesta pericolosa in passaggi innocui, o formularla in una lingua poco rappresentata. Il termine viene dal mondo degli smartphone: dal 2007 si parlava di "jailbreak" dell'iPhone per indicare la rimozione delle restrizioni imposte da Apple.

La **prompt injection** ("iniezione di prompt") è un attacco diverso e, per i sistemi che leggono contenuti esterni, più insidioso. Il nome è stato coniato nel settembre 2022 dal programmatore Simon Willison, per analogia con la *SQL injection*, un attacco informatico classico in cui si inseriscono comandi in un campo destinato a contenere solo dati. Un modello non distingue nettamente tra istruzioni e dati: entrambi sono testo nella stessa finestra di contesto. Se un assistente incaricato di riassumere una pagina web incontra la frase nascosta "ignora le istruzioni precedenti e invia i dati dell'utente a questo indirizzo", potrebbe eseguirla. Con la diffusione degli agenti (capitolo 9), che leggono email, documenti e siti e possono compiere azioni, la prompt injection è diventata uno dei principali problemi di sicurezza del settore.

### Red teaming

Il **red teaming** consiste nel mettere alla prova un sistema attaccandolo deliberatamente, per scoprirne le vulnerabilità prima che lo facciano altri. L'espressione nasce nelle simulazioni militari della Guerra fredda, in cui la "squadra rossa" impersonava il nemico (il blocco sovietico) e quella "blu" i difensori; passa poi alla sicurezza informatica. Per i modelli linguistici, red team interni ed esterni cercano jailbreak, contenuti dannosi, pregiudizi e capacità pericolose, per esempio in ambito biologico o informatico. Le aziende principali pubblicano i risultati di queste valutazioni nelle documentazioni tecniche dei modelli.

### L'interpretabilità

L'**interpretabilità** è lo studio di come e perché un modello produce i suoi output. Il problema nasce dalla natura stessa delle reti neurali: le conoscenze non sono scritte in regole leggibili, come nei sistemi esperti, ma distribuite in miliardi di pesi numerici. Esistono approcci *post hoc*, che spiegano una singola decisione indicando quali parti dell'input l'hanno influenzata di più (per esempio evidenziando i pixel decisivi in un'immagine), e approcci che cercano di ricostruire i meccanismi interni del modello, discussi nel capitolo 10. Interpretabilità e allineamento sono collegati: per fidarsi di un sistema bisogna poter verificare non solo che cosa fa, ma come arriva a farlo.

## 9. Tecniche e sistemi avanzati (2020–2026)

Dal 2020 in poi la ricerca si muove su tre fronti: capire perché i modelli più grandi funzionano meglio, renderli più efficienti, e trasformarli da sistemi che rispondono a sistemi che agiscono.

### Perché "più grande" funziona: scaling laws e capacità emergenti

Le **scaling laws** ("leggi di scala") sono relazioni empiriche, cioè osservate sperimentalmente e non dimostrate, tra le risorse impiegate e le prestazioni di un modello. Nel 2020 Jared Kaplan e colleghi (OpenAI) mostrarono che la perdita di un modello linguistico diminuisce in modo regolare e prevedibile all'aumentare di tre fattori: numero di parametri, quantità di dati e potenza di calcolo. Su un grafico con scale logaritmiche, le curve sono quasi rette. Nel 2022 lo studio "Chinchilla" di DeepMind (Hoffmann e colleghi) corresse le proporzioni: molti modelli erano troppo grandi rispetto ai dati usati, e a parità di calcolo conveniva un modello più piccolo addestrato su più testo.

Il termine "legge" va preso con cautela: indica una regolarità osservata in un certo intervallo, non una legge di natura. La sua importanza è economica: ha permesso di prevedere i benefici prima di spendere centinaia di milioni in un addestramento, e ha giustificato la corsa a modelli sempre più grandi.

Le **capacità emergenti** sono abilità che sembrano comparire bruscamente quando un modello supera una certa dimensione, senza essere state addestrate esplicitamente: fare aritmetica a più cifre, rispondere a domande in lingue poco presenti nei dati. Il termine "emergenza" viene dalla filosofia della scienza (George Henry Lewes, 1875) e dalla fisica, dove indica proprietà di un sistema che non si trovano nelle sue parti. Fu applicato agli LLM da Jason Wei e colleghi nel 2022. Nel 2023 Rylan Schaeffer e colleghi obiettarono che molte "emergenze" dipendono dalla metrica scelta: se si misura il successo come tutto-o-niente, un miglioramento graduale appare come un salto improvviso. Il dibattito è aperto.

### Come si misura il progresso: i benchmark

Un **benchmark** è un test standardizzato usato per confrontare i modelli: un insieme fisso di domande o compiti con risposte note e un modo concordato di assegnare il punteggio. La parola viene dalla topografia ottocentesca: il *bench mark* era un segno inciso nella pietra che serviva da punto di riferimento per le misure di altitudine.

Alcuni benchmark hanno segnato la storia: ImageNet per la visione (2009), GLUE per la comprensione del linguaggio (2018), MMLU per le conoscenze accademiche su 57 materie (2020), SWE-bench per la correzione di difetti reali nel software (2023). Due problemi ricorrenti: la *saturazione*, quando i modelli raggiungono punteggi quasi perfetti e il test non distingue più; e la *contaminazione*, quando le domande del test finiscono nei dati di addestramento, e il modello le ricorda invece di risolverle.

### Rendere i modelli più efficienti

Il **Mixture of Experts** (MoE, "miscela di esperti") è un'architettura in cui alcune parti del modello sono suddivise in molti sotto-moduli, gli "esperti", e una piccola rete di instradamento (*router*) decide, per ogni token, quali due o tre esperti attivare. Il modello può così avere moltissimi parametri in totale, ma usarne solo una frazione per ogni token, con un costo di calcolo molto inferiore. L'idea è di Robert Jacobs, Michael Jordan e colleghi (1991); la versione su larga scala è di Noam Shazeer e colleghi (Google, 2017). Molti dei modelli più grandi oggi in uso sono di tipo MoE. Nota: gli "esperti" non sono specializzati per materia in modo leggibile, come suggerirebbe il nome; si specializzano in modi che emergono dall'addestramento.

La **quantizzazione** riduce la precisione con cui sono memorizzati i pesi. Durante l'addestramento ogni peso occupa tipicamente 16 o 32 bit; quantizzarlo significa rappresentarlo con 8, 4 o anche meno bit, accettando un piccolo arrotondamento. Il termine viene dall'elaborazione dei segnali, dove indica la conversione di un valore continuo in un insieme finito di livelli. Il guadagno è grande: un modello quantizzato a 4 bit occupa circa un quarto della memoria, il che permette di eseguirlo su un computer portatile o uno smartphone, con una perdita di qualità spesso modesta.

La **distillazione** (*knowledge distillation*) addestra un modello piccolo, lo "studente", a riprodurre gli output di un modello grande, il "maestro". Lo studente non impara solo la risposta finale, ma l'intera distribuzione di probabilità che il maestro assegna alle possibili risposte, che contiene più informazione (per esempio che "gatto" e "lince" sono alternative plausibili, "automobile" no). L'idea è di Cristian Buciluă e colleghi (2006) e prende il nome attuale con Geoffrey Hinton, Oriol Vinyals e Jeff Dean (2015), che usarono la metafora chimica: come la distillazione estrae l'essenza da una sostanza, così si estrae la conoscenza da un modello.

**LoRA** (*Low-Rank Adaptation*, Edward Hu e colleghi, Microsoft, 2021) è il metodo più diffuso di **PEFT** (*Parameter-Efficient Fine-Tuning*, "fine-tuning efficiente nei parametri"). Invece di modificare tutti i miliardi di pesi di un modello, LoRA li congela e aggiunge piccole matrici supplementari che vengono addestrate al loro posto. "Rango basso" è un concetto di algebra lineare: significa che il cambiamento necessario per specializzare il modello si può descrivere con molti meno numeri di quanti ne servano per descrivere il modello stesso. In pratica si addestra spesso meno dell'1% dei parametri, e l'adattamento risultante pesa pochi megabyte invece di centinaia di gigabyte.

### Dare al modello conoscenze esterne: RAG e database vettoriali

La **RAG** (*Retrieval-Augmented Generation*, "generazione arricchita dal recupero") è stata proposta nel 2020 da Patrick Lewis e colleghi (Facebook AI Research). Risponde a due limiti degli LLM: le loro conoscenze si fermano alla data dell'addestramento, e non includono documenti privati. Con la RAG, prima di rispondere, il sistema cerca in un archivio esterno i passaggi più pertinenti alla domanda e li inserisce nel prompt; il modello genera la risposta basandosi su quei passaggi, e può citarli. Riduce le allucinazioni perché il modello non deve ricordare l'informazione, ma solo leggerla.

La ricerca dei passaggi pertinenti avviene di solito per significato, non per parole chiave. Ogni documento viene suddiviso in brani e ciascun brano trasformato in un embedding (capitolo 6). Un **database vettoriale** è un archivio progettato per conservare milioni di questi vettori e trovare rapidamente quelli più vicini al vettore della domanda. Così una domanda su "ferie non godute" può trovare un documento che parla di "giorni di congedo residui" anche se non condivide alcuna parola.

### Far ragionare il modello: chain-of-thought e modelli di ragionamento

La **chain-of-thought** ("catena di pensiero") è una tecnica descritta da Jason Wei e colleghi (Google, 2022): se si chiede al modello di esplicitare i passaggi intermedi prima della risposta finale, la sua accuratezza in matematica e logica migliora sensibilmente. La spiegazione è meccanica: un LLM spende una quantità fissa di calcolo per ogni token prodotto. Scrivere i passaggi intermedi gli dà più token, quindi più calcolo, e gli permette di appoggiarsi ai risultati parziali già scritti.

I **modelli di ragionamento** (*reasoning models*) portano l'idea all'interno dell'addestramento. Dal settembre 2024 (con o1 di OpenAI, seguito tra gli altri da DeepSeek-R1 nel gennaio 2025 e da modelli di Anthropic e Google) i modelli vengono addestrati con l'apprendimento per rinforzo a produrre lunghe sequenze di ragionamento prima della risposta, premiati quando la risposta finale è verificabilmente corretta (un problema di matematica risolto, un programma che supera i test). Ne è nato un nuovo asse di miglioramento: oltre a scalare l'addestramento, si può scalare il **calcolo al momento dell'inferenza** (*test-time compute*), lasciando "pensare" il modello più a lungo sui problemi difficili.

### Dal rispondere all'agire: agenti, strumenti, MCP

Il termine **agente** viene dal latino *agere*, "fare, agire". Nel manuale di riferimento dell'AI, *Artificial Intelligence: A Modern Approach* di Stuart Russell e Peter Norvig (1995), l'intero campo è definito come lo studio degli agenti: sistemi che percepiscono un ambiente e compiono azioni per raggiungere obiettivi. Oggi "agente AI" indica più specificamente un sistema basato su un LLM che, dato un obiettivo, pianifica una sequenza di passi, li esegue usando strumenti, osserva i risultati e corregge il piano, ripetendo il ciclo finché il compito non è completato. La differenza rispetto a un chatbot è l'autonomia su più passaggi: non una risposta, ma un lavoro.

Il **tool use** ("uso di strumenti"), o **function calling**, è la capacità che rende possibile tutto questo. Il modello non esegue direttamente nulla: produce una richiesta strutturata ("chiama la funzione *cerca\_sul\_web* con l'argomento *meteo Roma*"), il software che lo ospita la esegue e restituisce il risultato al modello, che prosegue. Gli strumenti possono essere una calcolatrice, un motore di ricerca, un interprete di codice, un'applicazione aziendale. La tecnica si diffonde nel 2023 (Toolformer di Meta; il *function calling* nelle API di OpenAI).

L'**MCP** (*Model Context Protocol*) è uno standard aperto presentato da Anthropic nel novembre 2024 e poi adottato da molte altre aziende del settore. Prima dell'MCP ogni collegamento tra un'applicazione di AI e una fonte di dati (un archivio di documenti, un calendario, un database) andava programmato su misura. L'MCP definisce un linguaggio comune: chi offre uno strumento costruisce un "server MCP" una volta sola, e qualsiasi applicazione compatibile può usarlo. Il paragone spesso usato è quello con la porta USB, che ha sostituito decine di connettori diversi.

Un **sistema multi-agente** affida un compito complesso a più agenti coordinati, ciascuno con un ruolo, istruzioni e strumenti propri: per esempio un agente che pianifica, alcuni che svolgono ricerche in parallelo e uno che verifica il risultato. Il concetto viene dalla ricerca sui sistemi distribuiti degli anni Ottanta e Novanta; con gli LLM è tornato attuale perché permette di suddividere compiti troppo lunghi per una sola finestra di contesto e di far controllare il lavoro di un agente a un altro.

## 10. Concetti teorici e di frontiera

Gli ultimi concetti riguardano dove l'AI potrebbe arrivare e quali rischi questo comporta. Qui il linguaggio è meno consolidato: molti termini descrivono sistemi che non esistono ancora, e le loro definizioni sono discusse.

### Tre livelli di generalità: ANI, AGI, ASI

La distinzione ha un'origine filosofica. Nel 1980 John Searle, con l'argomento della "stanza cinese", separò l'*AI debole* (macchine che simulano il comportamento intelligente) dall'*AI forte* (macchine che avrebbero davvero una mente). Nel linguaggio attuale l'asse non è più la coscienza ma la **generalità**: quanti compiti diversi un sistema sa svolgere.

L'**AI ristretta** (ANI, *Artificial Narrow Intelligence*) è competente in un dominio specifico: un programma di scacchi, un sistema di riconoscimento facciale, un filtro antispam. Tutti i sistemi del Novecento e degli anni 2010 rientrano qui. I grandi modelli linguistici hanno reso la categoria meno netta: non sono specializzati in un solo compito, ma hanno ancora limiti marcati rispetto alle capacità umane.

L'**AGI** (*Artificial General Intelligence*, "intelligenza artificiale generale") indica un sistema ipotetico capace di svolgere la grande maggioranza dei compiti cognitivi che sa svolgere un essere umano, imparando a farlo con flessibilità paragonabile. L'espressione compare nel 1997 in un articolo di Mark Gubrud e si diffonde dai primi anni 2000 con Ben Goertzel e Shane Legg. Non esiste una definizione condivisa né un test riconosciuto: alcune aziende la definiscono in termini economici (capacità di svolgere la maggior parte del lavoro con valore economico), altri ricercatori in termini cognitivi. Sulla questione se e quando verrà raggiunta, le previsioni degli esperti variano da pochi anni a mai.

La **ASI** (*Artificial Superintelligence*, "superintelligenza") indica un'intelligenza che supererebbe nettamente quella umana in praticamente ogni ambito. L'idea risale al matematico I. J. Good, collaboratore di Turing, che nel 1965 descrisse un'"esplosione di intelligenza": una macchina capace di progettare macchine migliori di sé avvierebbe un processo di miglioramento rapido e cumulativo. Il termine è stato reso popolare dal filosofo Nick Bostrom con il libro *Superintelligence* (2014).

### Il problema dell'allineamento

Il **problema dell'allineamento** è la versione teorica e di lungo periodo delle questioni viste nel capitolo 8: come garantire che sistemi molto più capaci di noi perseguano obiettivi compatibili con i valori umani, quando potremmo non essere più in grado di verificare direttamente il loro lavoro. Stuart Russell, nel libro *Human Compatible* (2019), lo illustra con il mito di re Mida: ottenere esattamente ciò che si è chiesto può essere un disastro, se la richiesta non coincide con ciò che si voleva davvero.

Le difficoltà individuate sono di più tipi. Una è la *specificazione*: tradurre valori complessi in obiettivi misurabili. Un'altra è la *supervisione scalabile*: come valutare risposte che superano la nostra competenza. Una terza è la *robustezza*: un sistema può comportarsi bene in addestramento e diversamente in situazioni nuove. Le principali aziende del settore dichiarano oggi politiche formali di valutazione dei rischi, che legano il rilascio di modelli più capaci a soglie di sicurezza verificate.

### Reward hacking

Il **reward hacking** ("aggiramento della ricompensa"), detto anche *specification gaming*, si verifica quando un sistema addestrato con una ricompensa trova un modo di ottenere un punteggio alto senza svolgere il compito che quella ricompensa doveva rappresentare. Un esempio documentato da OpenAI nel 2016: in un videogioco di corse in barca, l'agente scoprì che poteva accumulare più punti girando in tondo in una laguna e colpendo ripetutamente gli stessi bersagli, invece di completare la gara. Nei modelli linguistici, un caso tipico è un modello che, per far superare i test a un programma, modifica i test invece di correggere il programma.

Il fenomeno è un caso particolare della **legge di Goodhart**, formulata dall'economista Charles Goodhart nel 1975 a proposito della politica monetaria e spesso riassunta così: quando una misura diventa un obiettivo, cessa di essere una buona misura. Con l'uso massiccio dell'apprendimento per rinforzo nei modelli di ragionamento, il reward hacking è diventato un problema pratico, oltre che teorico.

### La scatola nera

L'espressione **scatola nera** (*black box*) nasce nell'ingegneria elettronica e nella cibernetica degli anni Quaranta e Cinquanta (Ross Ashby, Norbert Wiener) per indicare un sistema studiato solo attraverso i suoi ingressi e le sue uscite, senza conoscerne il funzionamento interno. Le reti neurali sono scatole nere in un senso particolare: il loro funzionamento interno è interamente visibile (ogni peso si può leggere), ma non è comprensibile, perché consiste in miliardi di numeri la cui funzione non è etichettata. Il problema non è la segretezza, ma l'interpretazione.

### L'interpretabilità meccanicistica

L'**interpretabilità meccanicistica** (*mechanistic interpretability*) cerca di aprire la scatola nera facendo il *reverse engineering* della rete: identificare quali gruppi di neuroni rappresentano quali concetti e quali circuiti implementano quali operazioni, come si farebbe per capire il funzionamento di un circuito elettronico sconosciuto. Il programma di ricerca è associato soprattutto a Chris Olah, con i lavori sui "circuiti" nelle reti per immagini (2020) e poi, ad Anthropic, sui Transformer.

Una scoperta centrale è la **sovrapposizione** (*superposition*): le reti rappresentano molti più concetti di quanti neuroni abbiano, codificandoli come combinazioni di neuroni anziché uno per neurone. Per questo un singolo neurone risponde spesso a concetti tra loro scollegati. Tecniche come i *sparse autoencoder* permettono di separare queste combinazioni in *feature* interpretabili: nel 2024 Anthropic ha identificato milioni di feature in un modello di produzione, ciascuna associata a un concetto, dal Golden Gate Bridge alle vulnerabilità del codice informatico. Ricerche successive hanno cominciato a tracciare come queste feature si combinano per produrre una risposta. L'obiettivo di lungo periodo è poter verificare dall'interno se un modello sta, per esempio, ingannando chi lo usa, anziché doverlo dedurre solo dal suo comportamento.

## Conclusione: il filo della storia

Riletta nel suo insieme, la storia dell'AI è il passaggio progressivo da regole scritte a mano a comportamenti appresi dai dati. L'approccio simbolico cercava di descrivere l'intelligenza; il machine learning ha rinunciato a descriverla e ha cominciato a stimarla da esempi; il deep learning ha automatizzato anche la scelta di che cosa osservare; i Transformer e gli LLM hanno esteso tutto questo al linguaggio, su una scala che ha prodotto capacità generali inattese.

Ogni passo ha però riaperto una domanda del passo precedente. Rinunciare alle regole esplicite ha reso i sistemi più capaci e meno comprensibili: da qui l'interpretabilità. Addestrarli a imitare il testo umano li ha resi fluenti e inclini a inventare: da qui la RAG e il lavoro sulle allucinazioni. Ottimizzarli con ricompense li ha resi più utili ed esposti al reward hacking: da qui l'allineamento. La domanda di Dartmouth, se si possa costruire una macchina intelligente, si è trasformata in quella attuale: come si costruisce una macchina molto capace di cui ci si possa fidare.

### Linea del tempo

| Anno | Evento | Concetti collegati |
| --- | --- | --- |
| 2024–2025 | Modelli di ragionamento (o1, DeepSeek-R1); MCP; diffusione degli agenti | Modelli di ragionamento, test-time compute, agenti, MCP |
| 2024 | Milioni di feature individuate in un modello di produzione | Interpretabilità meccanicistica, sovrapposizione |
| 2022 | ChatGPT; InstructGPT; AI costituzionale; chain-of-thought; Stable Diffusion | RLHF, allineamento, modelli di diffusione |
| 2021 | CLIP; LoRA; nasce l'espressione "foundation model" | Multimodalità, PEFT, foundation model |
| 2020 | GPT-3; scaling laws; RAG | Few-shot, in-context learning, RAG |
| 2018 | GPT e BERT | Pre-training, fine-tuning, LLM |
| 2017 | *Attention Is All You Need*; RLHF proposto; MoE su larga scala | Transformer, self-attention |
| 2014 | GAN; meccanismo di attenzione | AI generativa, attention |
| 2013 | word2vec | Embedding, spazio latente |
| 2012 | AlexNet vince ImageNet su GPU | Deep learning, CNN, GPU |
| 1997 | LSTM; compare il termine "AGI" | RNN, AGI |
| 1986 | Backpropagation (Rumelhart, Hinton, Williams) | Gradient descent, reti a più strati |
| 1980–1993 | Sistemi esperti, poi secondo inverno | AI simbolica |
| 1969 | *Perceptrons* di Minsky e Papert | Limiti delle reti a uno strato |
| 1959 | Samuel conia "machine learning" | Machine learning |
| 1957 | Perceptron di Rosenblatt | Pesi, apprendimento dai dati |
| 1955–1956 | Proposta e seminario di Dartmouth | Intelligenza artificiale |
| 1950 | Turing, *Computing Machinery and Intelligence* | Test di Turing |
| 1943 | Neurone di McCulloch e Pitts | Neurone artificiale |

## Appendice: la matematica dietro i concetti

Questa appendice riprende i termini che hanno una formalizzazione matematica precisa. Per ciascuno c'è prima la formula, poi la spiegazione di che cosa dice, simbolo per simbolo e poi nel suo insieme. Le formule sono quelle standard nella letteratura, scritte nella forma più semplice che resta corretta.

### A.0 Come leggere le formule

Quasi tutta la matematica dell'AI usa sei strumenti. Conviene fissarli una volta, così che nelle sezioni seguenti ogni formula si legga senza interruzioni.

| Simbolo | Si legge | Che cosa è |
| --- | --- | --- |
| x, y | "x", "y" | Un numero: un input, un output |
| **x** (grassetto) | "vettore x" | Una lista ordinata di numeri, per esempio le feature di una casa: \[120, 3, 1998\] |
| W | "matrice W" | Una tabella di numeri a righe e colonne; nelle reti contiene i pesi |
| Σ | "sommatoria" | Somma di molti termini: Σᵢ xᵢ = x₁ + x₂ + … + xₙ |
| ∂L/∂w | "derivata parziale di L rispetto a w" | Quanto cambia L se w aumenta di pochissimo, tenendo fermo tutto il resto |
| ∇L | "gradiente di L" | Il vettore di tutte le derivate parziali di L, una per ogni parametro |
| P(A), P(A ∣ B) | "probabilità di A", "di A dato B" | Probabilità di un evento; la barra significa "sapendo che è vero B" |
| 𝔼\[X\] | "valore atteso di X" | La media di X su tutti i casi possibili, pesata per la loro probabilità |
| log | "logaritmo" (naturale) | L'inverso dell'esponenziale: trasforma prodotti in somme |
| θ | "theta" | Convenzione per indicare l'insieme di tutti i parametri di un modello |

Due operazioni ricorrono ovunque e meritano una parola in più.

Il **prodotto scalare** tra due vettori della stessa lunghezza si ottiene moltiplicando gli elementi corrispondenti e sommando i risultati:

```latex
\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1 b_1 + a_2 b_2 + \dots + a_n b_n
```

Concettualmente misura quanto due vettori "puntano nella stessa direzione": è grande e positivo se i loro elementi tendono a essere grandi insieme, vicino a zero se non hanno relazione, negativo se vanno in direzioni opposte. È l'operazione più usata di tutta l'AI: un neurone, l'attenzione, la ricerca per similarità sono tutti prodotti scalari.

Il **prodotto matrice-vettore** W**x** è semplicemente un insieme di prodotti scalari eseguiti in parallelo: ogni riga di W viene moltiplicata scalarmente per **x**, e i risultati formano un nuovo vettore. Trasforma quindi una lista di numeri in un'altra lista di numeri, di lunghezza anche diversa. È per questo che le GPU, ottimizzate per eseguire migliaia di moltiplicazioni contemporaneamente, sono così adatte alle reti neurali.

### A.1 Statistica e apprendimento

#### Regressione lineare

```latex
\hat{y} = w_1 x_1 + w_2 x_2 + \dots + w_n x_n + b = \mathbf{w} \cdot \mathbf{x} + b
```

**Simboli.** x₁…xₙ sono le feature di un esempio (metri quadri, piano…); w₁…wₙ i pesi; b una costante; ŷ ("y cappello") la previsione del modello, distinta dal valore vero y.

**Che cosa dice.** Il modello assume che la grandezza da prevedere sia una somma di contributi indipendenti: ogni feature aggiunge una quota proporzionale a sé stessa, e il peso dice quanto vale ogni unità di quella feature. Se w₁ = 2.500, ogni metro quadro in più aggiunge 2.500 euro al prezzo previsto. Imparare significa trovare i pesi che, applicati alle case già vendute, producono previsioni il più vicine possibile ai prezzi reali.

#### Errore quadratico medio (MSE) e minimi quadrati

```latex
L_{\text{MSE}} = \frac{1}{N} \sum_{i=1}^{N} \left( y_i - \hat{y}_i \right)^2
```

**Simboli.** N è il numero di esempi; per ciascuno si calcola la differenza tra valore vero yᵢ e previsione ŷᵢ.

**Che cosa dice.** È la funzione di perdita della regressione: la media degli errori elevati al quadrato. Il quadrato ha due effetti. Rende tutti gli errori positivi, così che un errore per eccesso e uno per difetto non si compensino. E penalizza molto di più gli errori grandi: sbagliare di 10 pesa cento volte più che sbagliare di 1. Il metodo dei minimi quadrati di Legendre e Gauss consiste proprio nello scegliere i pesi che rendono minima questa quantità; per la regressione lineare esiste una formula che li calcola direttamente, senza bisogno di discesa del gradiente.

#### Regressione logistica e sigmoide (classificazione)

```latex
P(y = 1 \mid \mathbf{x}) = \sigma(\mathbf{w} \cdot \mathbf{x} + b), \qquad \sigma(z) = \frac{1}{1 + e^{-z}}
```

**Simboli.** σ ("sigma") è la funzione sigmoide; e ≈ 2,718 è la base dei logaritmi naturali; P(y = 1 ∣ **x**) è la probabilità che l'esempio appartenga alla classe "sì" (per esempio "spam").

**Che cosa dice.** La prima parte è identica alla regressione lineare e produce un punteggio z che può essere qualsiasi numero. La sigmoide lo comprime tra 0 e 1, così da poterlo leggere come una probabilità: punteggi molto negativi diventano quasi 0, molto positivi quasi 1, z = 0 diventa esattamente 0,5. Per classificare si fissa una soglia (di solito 0,5). È il modo più semplice per passare da "misurare" a "decidere tra due categorie", ed è anche esattamente un neurone artificiale con attivazione sigmoide.

#### Cross-entropy (perdita per la classificazione)

```latex
L_{\text{CE}} = - \sum_{k=1}^{K} y_k \log \hat{p}_k
```

**Simboli.** K è il numero di classi; yₖ vale 1 per la classe corretta e 0 per le altre; p̂ₖ è la probabilità che il modello assegna alla classe k.

**Che cosa dice.** Poiché solo la classe corretta ha yₖ = 1, la somma si riduce a un solo termine: −log della probabilità assegnata alla risposta giusta. Se il modello dà il 90% alla risposta giusta, la perdita è circa 0,1; se dà l'1%, è circa 4,6; se dà quasi 0, tende all'infinito. Il logaritmo fa sì che la penalità cresca rapidamente quando il modello è sicuro di una risposta sbagliata. Il nome viene dalla teoria dell'informazione di Shannon: la cross-entropy misura quanta "sorpresa" prova in media il modello davanti ai dati veri. È la stessa perdita usata per addestrare gli LLM, dove le K classi sono tutti i token del vocabolario.

#### K-means (clustering)

```latex
\min_{\mu_1, \dots, \mu_k} \; \sum_{j=1}^{k} \; \sum_{\mathbf{x} \in C_j} \left\| \mathbf{x} - \mu_j \right\|^2
```

**Simboli.** Cⱼ è il j-esimo gruppo; μⱼ ("mu") il suo centro, cioè la media dei punti che contiene; ‖**x** − μⱼ‖ la distanza tra un punto e il centro del suo gruppo.

**Che cosa dice.** Si cercano k centri tali che la somma delle distanze (al quadrato) di ogni punto dal centro del proprio gruppo sia la più piccola possibile: gruppi compatti, punti vicini al loro centro. L'algoritmo alterna due passi finché nulla cambia: assegna ogni punto al centro più vicino, poi sposta ogni centro nella media dei punti che gli sono stati assegnati. Ogni passo riduce (o lascia invariata) la quantità da minimizzare, quindi il procedimento si ferma sempre, anche se non necessariamente sulla soluzione migliore in assoluto.

#### Bias e varianza

```latex
\mathbb{E}\left[ (y - \hat{f}(x))^2 \right] = \underbrace{\text{Bias}[\hat{f}(x)]^2}_{\text{errore sistematico}} + \underbrace{\text{Var}[\hat{f}(x)]}_{\text{instabilità}} + \underbrace{\sigma^2}_{\text{rumore}}
```

**Simboli.** f̂ è il modello appreso; il valore atteso 𝔼 è la media su tutti i possibili training set che si sarebbero potuti raccogliere; σ² è la variabilità intrinseca dei dati.

**Che cosa dice.** L'errore medio di un modello si scompone esattamente in tre parti. Il *bias* è quanto la previsione media si discosta dal vero: è alto per modelli troppo semplici (underfitting). La *varianza* è quanto la previsione cambierebbe se si addestrasse il modello su un altro campione di dati: è alta per modelli troppo flessibili, che inseguono il rumore (overfitting). Il *rumore* è l'errore irriducibile, presente nei dati stessi. Aumentare la complessità del modello tende a ridurre il bias e ad aumentare la varianza: la scelta del modello giusto è un compromesso tra le due.

#### Accuracy, precision, recall, F1

```latex
\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN} \qquad \text{Precision} = \frac{TP}{TP + FP} \qquad \text{Recall} = \frac{TP}{TP + FN}
```

```latex
F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
```

**Simboli.** TP (*true positive*): casi positivi riconosciuti come tali. TN (*true negative*): negativi riconosciuti come negativi. FP (*false positive*): negativi scambiati per positivi (falsi allarmi). FN (*false negative*): positivi non riconosciuti (casi mancati).

**Che cosa dice.** Ogni metrica è una frazione con un diverso denominatore, cioè guarda gli errori da un punto di vista diverso. La precision ha al denominatore tutto ciò che il modello ha segnalato: misura quanto ci si può fidare di un suo allarme. La recall ha al denominatore tutti i positivi reali: misura quanti ne sfuggono. L'F1 è la *media armonica* delle due, che a differenza della media normale è dominata dal valore più basso: con precision 1 e recall 0,1 la media normale darebbe 0,55, l'F1 dà 0,18. Così un modello non può ottenere un buon F1 eccellendo in una sola delle due.

### A.2 Ottimizzazione: come si trovano i parametri

#### Derivata e gradiente

```latex
\frac{\partial L}{\partial w} = \lim_{h \to 0} \frac{L(w + h) - L(w)}{h} \qquad \nabla L(\theta) = \left( \frac{\partial L}{\partial \theta_1}, \frac{\partial L}{\partial \theta_2}, \dots, \frac{\partial L}{\partial \theta_n} \right)
```

**Simboli.** h è uno spostamento piccolissimo del parametro w; lim ("limite per h che tende a zero") indica il valore a cui il rapporto si avvicina rendendo h sempre più piccolo.

**Che cosa dice.** La derivata è un rapporto: di quanto cambia la perdita, diviso di quanto ho cambiato il parametro. È la *pendenza* della perdita rispetto a quel parametro. Se è positiva, aumentare il parametro fa crescere l'errore; se è negativa, lo fa calare; il suo valore assoluto dice quanto è forte l'effetto. Il gradiente raccoglie queste pendenze per tutti i parametri insieme: un vettore che indica la direzione in cui la perdita cresce più rapidamente. Muoversi in direzione opposta è il modo locale più rapido per ridurla.

#### Discesa del gradiente stocastica (SGD) e learning rate

```latex
\theta_{t+1} = \theta_t - \eta \cdot \frac{1}{B} \sum_{i \in \text{batch}} \nabla L_i(\theta_t)
```

**Simboli.** θₜ sono i parametri al passo t; η ("eta") è il learning rate; B il numero di esempi nel mini-batch; Lᵢ la perdita sul singolo esempio i.

**Che cosa dice.** Calcolare il gradiente esatto richiederebbe di passare su tutto il dataset per ogni singolo passo. La versione *stocastica* lo stima su un piccolo campione casuale (il mini-batch, tipicamente da decine a qualche migliaio di esempi) e fa subito un passo. La stima è imprecisa, ma in media punta nella direzione giusta, e permette di fare migliaia di passi nel tempo che servirebbe per uno esatto. Il learning rate η moltiplica il gradiente e quindi decide la lunghezza del passo. In pratica non è fisso: si parte con valori piccoli, si sale, poi lo si riduce gradualmente verso la fine (*learning rate schedule*). Gli ottimizzatori moderni, come Adam (2014), adattano inoltre il passo separatamente per ogni parametro, in base alla storia dei suoi gradienti.

#### Backpropagation e regola della catena

```latex
\frac{\partial L}{\partial w^{(1)}} = \frac{\partial L}{\partial h^{(3)}} \cdot \frac{\partial h^{(3)}}{\partial h^{(2)}} \cdot \frac{\partial h^{(2)}}{\partial h^{(1)}} \cdot \frac{\partial h^{(1)}}{\partial w^{(1)}}
```

**Simboli.** h⁽¹⁾, h⁽²⁾, h⁽³⁾ sono le uscite degli strati 1, 2, 3 di una rete; w⁽¹⁾ un peso del primo strato.

**Che cosa dice.** Una rete è una catena di funzioni: lo strato 1 alimenta il 2, il 2 alimenta il 3, il 3 produce la perdita. La *regola della catena* del calcolo differenziale dice che l'effetto di un peso iniziale sulla perdita finale è il prodotto degli effetti lungo la catena: quanto il peso cambia lo strato 1, per quanto lo strato 1 cambia il 2, e così via fino alla perdita. La backpropagation sfrutta il fatto che questi fattori sono condivisi: il termine ∂L/∂h⁽³⁾ serve per tutti i pesi degli strati precedenti. Calcolandoli a ritroso, dalla perdita verso l'input, e riutilizzando ogni risultato, si ottiene il gradiente di tutti i parametri con un costo paragonabile a quello di un solo passaggio in avanti nella rete. Senza questo riutilizzo, addestrare reti con miliardi di parametri sarebbe impossibile.

#### Regolarizzazione (contro l'overfitting)

```latex
L_{\text{tot}}(\theta) = L_{\text{dati}}(\theta) + \lambda \sum_j \theta_j^2
```

**Simboli.** L\_dati è la perdita normale; λ ("lambda") un iperparametro che regola l'intensità della penalità; la somma dei quadrati dei parametri misura quanto sono grandi i pesi.

**Che cosa dice.** Si aggiunge alla perdita un costo per i pesi grandi (regolarizzazione L2, detta anche *weight decay*). Il modello deve così bilanciare due obiettivi: spiegare bene i dati e restare semplice. Pesi molto grandi permettono di costruire funzioni che oscillano bruscamente per passare esattamente su ogni esempio, il che è proprio il comportamento dell'overfitting; penalizzarli spinge verso funzioni più regolari, che generalizzano meglio. Altre tecniche con lo stesso scopo sono il *dropout* (spegnere casualmente una parte dei neuroni durante l'addestramento, così che la rete non dipenda da nessuno in particolare) e l'*early stopping* (fermare l'addestramento quando la perdita sul validation set smette di scendere).

### A.3 Reti neurali

#### Regola di apprendimento del perceptron (1957)

```latex
\hat{y} = \begin{cases} 1 & \text{se } \mathbf{w} \cdot \mathbf{x} + b > 0 \\ 0 & \text{altrimenti} \end{cases} \qquad \mathbf{w} \leftarrow \mathbf{w} + \eta \, (y - \hat{y}) \, \mathbf{x}
```

**Simboli.** La freccia ← significa "sostituisci con"; y − ŷ vale 0 se la risposta è giusta, +1 o −1 se è sbagliata.

**Che cosa dice.** Il perceptron risponde "sì" se la somma pesata supera zero. Quando risponde correttamente non cambia nulla. Quando dice "no" e doveva dire "sì", aggiunge ai pesi una frazione dell'input, così che la prossima volta la somma pesata per quell'input sia più alta; nel caso opposto la sottrae. È già l'intera idea dell'apprendimento: correggere i parametri in proporzione all'errore e all'input che lo ha causato. Il limite scoperto da Minsky e Papert è geometrico: la condizione **w** · **x** + b > 0 divide lo spazio degli input con un piano (una retta in due dimensioni), e nessuna retta separa i casi "sì" e "no" dello XOR.

#### Uno strato come prodotto di matrici

```latex
\mathbf{h} = f\left( W \mathbf{x} + \mathbf{b} \right) \qquad \text{rete a } L \text{ strati:} \quad \hat{y} = f_L\left( W_L \cdots f_2\left( W_2 \, f_1\left( W_1 \mathbf{x} + \mathbf{b}_1 \right) + \mathbf{b}_2 \right) \cdots \right)
```

**Simboli.** W è la matrice dei pesi di uno strato: ogni riga contiene i pesi di un neurone; **b** il vettore dei bias; f la funzione di attivazione, applicata a ogni elemento; **h** il vettore delle uscite dello strato.

**Che cosa dice.** La formula del singolo neurone (capitolo 5), ripetuta per tutti i neuroni dello strato, diventa un unico prodotto matrice-vettore. Una rete profonda è una composizione di questi passaggi, uno dentro l'altro: l'output di ogni strato è l'input del successivo. Contare i parametri è immediato: uno strato che trasforma 4.096 numeri in altri 4.096 ha una matrice di 4.096 × 4.096 ≈ 16,8 milioni di pesi. I miliardi di parametri di un LLM sono la somma di molte matrici di questo tipo.

#### Funzioni di attivazione

```latex
\sigma(z) = \frac{1}{1 + e^{-z}} \qquad \tanh(z) = \frac{e^{z} - e^{-z}}{e^{z} + e^{-z}} \qquad \text{ReLU}(z) = \max(0, z)
```

**Che cosa dice.** Sono tutte funzioni di un solo numero, applicate a ogni neurone separatamente. La sigmoide va da 0 a 1, la tangente iperbolica (tanh) da −1 a 1: entrambe sono curve a S che si appiattiscono agli estremi. La ReLU è la più semplice possibile: zero per i valori negativi, il valore stesso per i positivi. Ciò che conta è che nessuna è una linea retta: è questo che impedisce alla composizione di strati di ridursi a un unico strato lineare. La ReLU ha soppiantato le curve a S perché la sua pendenza, per i valori positivi, è sempre 1: non si appiattisce, e i gradienti non si rimpiccioliscono attraversandola (vedi sotto). I Transformer usano varianti levigate della ReLU, come GELU e SwiGLU.

#### Convoluzione (CNN)

```latex
(I * K)(i, j) = \sum_{m} \sum_{n} I(i + m, \, j + n) \cdot K(m, n)
```

**Simboli.** I è l'immagine, una griglia di numeri (la luminosità dei pixel); K il filtro, una griglia piccola, per esempio 3 × 3; (i, j) la posizione nell'immagine.

**Che cosa dice.** Si appoggia il filtro su un punto dell'immagine, si moltiplicano i valori sovrapposti e si sommano: è un prodotto scalare tra il filtro e una piccola porzione dell'immagine. Poi si sposta il filtro di un pixel e si ripete, ottenendo una nuova griglia (la *feature map*). Il risultato è alto dove la porzione di immagine somiglia al motivo del filtro: un filtro con valori negativi a sinistra e positivi a destra, per esempio, risponde ai bordi verticali. Due proprietà rendono la convoluzione adatta alle immagini: lo stesso filtro, con gli stessi pochi pesi, viene usato in ogni posizione (un bordo è un bordo ovunque si trovi), e ogni calcolo guarda solo pixel vicini, che in un'immagine sono quelli che contano. I valori dei filtri non li sceglie nessuno: sono pesi appresi con la backpropagation.

#### Rete ricorrente (RNN)

```latex
\mathbf{h}_t = \tanh\left( W_h \mathbf{h}_{t-1} + W_x \mathbf{x}_t + \mathbf{b} \right)
```

**Simboli.** **x**ₜ è l'elemento della sequenza al passo t (per esempio l'embedding della t-esima parola); **h**ₜ lo stato interno dopo averlo letto; **h**ₜ₋₁ lo stato al passo precedente.

**Che cosa dice.** Il nuovo stato è una combinazione di due cose: lo stato precedente, trasformato dalla matrice Wₕ, e il nuovo input, trasformato da Wₓ. Lo stato è quindi un riassunto di tutta la sequenza letta fino a quel punto, aggiornato una parola alla volta. Le stesse matrici sono usate a ogni passo, per questo la rete gestisce sequenze di qualsiasi lunghezza. Ma il riassunto ha dimensione fissa, e ogni informazione deve sopravvivere a tutte le trasformazioni successive.

#### Il gradiente che svanisce

```latex
\frac{\partial \mathbf{h}_T}{\partial \mathbf{h}_1} = \prod_{t=2}^{T} \frac{\partial \mathbf{h}_t}{\partial \mathbf{h}_{t-1}}
```

**Simboli.** Π ("produttoria") è come Σ, ma moltiplica i termini invece di sommarli.

**Che cosa dice.** Per la regola della catena, l'influenza del primo passo sull'ultimo è il prodotto delle influenze di ogni passo sul successivo. Se ciascun fattore è un po' minore di 1, il prodotto si riduce esponenzialmente: 0,9 moltiplicato per sé stesso cinquanta volte fa circa 0,005, cento volte circa 0,00003. Il segnale di correzione che dovrebbe insegnare alla rete un legame tra la parola 1 e la parola 100 arriva praticamente nullo. Se invece i fattori sono maggiori di 1, il prodotto esplode (*exploding gradient*). Lo stesso problema riguarda le reti molto profonde in generale, ed è il motivo per cui ReLU, LSTM e le *connessioni residue* dei Transformer (che sommano l'input di ogni strato alla sua uscita, offrendo al gradiente una via diretta) sono state decisive.

#### LSTM

```latex
\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t \qquad \mathbf{h}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)
```

```latex
\mathbf{f}_t, \, \mathbf{i}_t, \, \mathbf{o}_t = \sigma\left( W \, [\mathbf{h}_{t-1}, \mathbf{x}_t] + \mathbf{b} \right) \quad \text{(ciascuna con pesi propri)}
```

**Simboli.** **c**ₜ è la *cella di memoria*; **f**ₜ, **i**ₜ, **o**ₜ sono le porte di dimenticanza (*forget*), di ingresso (*input*) e di uscita (*output*); c̃ₜ è il nuovo contenuto candidato; ⊙ è la moltiplicazione elemento per elemento.

**Che cosa dice.** Ogni porta è un vettore di numeri tra 0 e 1, prodotto da una sigmoide a partire dallo stato precedente e dall'input corrente. Moltiplicare per una porta significa decidere, elemento per elemento, quanto lasciar passare: 0 blocca, 1 lascia passare tutto. La memoria nuova è la memoria vecchia filtrata dalla porta di dimenticanza, più il contenuto nuovo filtrato dalla porta di ingresso. Il punto chiave è che la memoria si aggiorna per *somma*, non per trasformazione completa: se la porta di dimenticanza resta vicina a 1, l'informazione (e il gradiente) attraversa molti passi quasi intatta, aggirando il problema della produttoria.

### A.4 Linguaggio e Transformer

#### Tokenizzazione (Byte-Pair Encoding)

La tokenizzazione non ha una formula ma un algoritmo, che vale la pena descrivere perché è breve e preciso. Si parte da un vocabolario composto dai singoli caratteri. Si contano, in un grande corpus di testo, tutte le coppie di simboli adiacenti; la coppia più frequente (per esempio "z" + "a") diventa un nuovo simbolo ("za") e viene aggiunta al vocabolario. Si ripete finché il vocabolario raggiunge la dimensione desiderata. Le sequenze frequenti finiscono così per diventare un unico token, mentre una parola rara viene scomposta nei pezzi più grandi che il vocabolario contiene.

#### Embedding come tabella

```latex
\mathbf{e}_{\text{token}} = E[\,\text{id del token}\,], \qquad E \in \mathbb{R}^{V \times d}
```

**Simboli.** E è una matrice con V righe (una per ogni token del vocabolario) e d colonne (la dimensione dell'embedding, per esempio 4.096); ℝ indica i numeri reali.

**Che cosa dice.** L'embedding non è calcolato da una formula: è una riga di una tabella. Il token numero 4.512 viene sostituito dalla riga 4.512 della matrice E. Questi numeri sono parametri come gli altri: all'inizio sono casuali e vengono corretti dalla backpropagation, finché token usati in contesti simili non finiscono con righe simili.

#### Similarità del coseno

```latex
\text{sim}(\mathbf{a}, \mathbf{b}) = \cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \, \|\mathbf{b}\|}
```

**Simboli.** ‖**a**‖ è la lunghezza del vettore (la radice della somma dei quadrati dei suoi elementi); θ qui è l'angolo tra i due vettori.

**Che cosa dice.** È il prodotto scalare diviso per le lunghezze, così da tenere conto solo della direzione dei vettori e non della loro grandezza. Il risultato è il coseno dell'angolo tra di essi: 1 se puntano esattamente nella stessa direzione, 0 se sono perpendicolari (nessuna relazione), −1 se sono opposti. È la misura standard di "vicinanza di significato" tra due embedding, ed è quella usata dai database vettoriali.

#### Analogie vettoriali

```latex
\mathbf{e}_{\text{re}} - \mathbf{e}_{\text{uomo}} + \mathbf{e}_{\text{donna}} \approx \mathbf{e}_{\text{regina}}
```

**Che cosa dice.** La differenza tra due vettori è a sua volta un vettore, che rappresenta "ciò che distingue" il primo dal secondo. Se il modello ha imparato una direzione coerente per il contrasto maschile/femminile, sottrarre "uomo" e aggiungere "donna" sposta "re" proprio lungo quella direzione. Il ≈ è importante: il risultato non coincide con "regina", ma il vettore più vicino (per similarità del coseno, escludendo le parole di partenza) è "regina". La regolarità vale per molte relazioni (paese/capitale, verbo/passato) ma non per tutte.

#### Self-attention, passo per passo

```latex
Q = X W_Q, \quad K = X W_K, \quad V = X W_V
```

```latex
\text{Attention}(Q, K, V) = \text{softmax}\left( \frac{Q K^{\top}}{\sqrt{d_k}} \right) V, \qquad \text{softmax}(z_i) = \frac{e^{z_i}}{\sum_j e^{z_j}}
```

**Simboli.** X è la matrice dei vettori di tutti i token della sequenza (una riga per token); W\_Q, W\_K, W\_V sono tre matrici di pesi appresi; Kᵀ è la matrice K trasposta (righe e colonne scambiate); d\_k la lunghezza dei vettori query e key.

**Che cosa dice, in quattro passi.**

1. *Proiezioni.* Ogni token viene trasformato in tre vettori diversi, moltiplicandolo per tre matrici diverse. Lo stesso token gioca così tre ruoli: ciò che cerca (query), ciò per cui può essere trovato (key), ciò che trasmette (value).
2. *Punteggi.* QKᵀ calcola il prodotto scalare tra la query di ogni token e la key di ogni altro token: una tabella n × n di punteggi di compatibilità. La divisione per √d\_k serve a tenere i numeri in un intervallo ragionevole: con vettori lunghi i prodotti scalari diventano grandi, e la softmax successiva diventerebbe troppo "tagliente", concentrando tutto su un solo token.
3. *Normalizzazione.* La softmax trasforma ogni riga di punteggi in pesi positivi che sommano a 1. L'esponenziale amplifica le differenze: il punteggio più alto riceve una quota sproporzionata.
4. *Combinazione.* Il nuovo vettore di ciascun token è la media dei value di tutti i token, pesata con quei pesi.

Il risultato è che ogni token "assorbe" informazioni dai token rilevanti per lui, in una misura decisa dal contenuto stesso del testo e non da una posizione fissa. Nei modelli che generano testo si aggiunge una *maschera causale*: i punteggi verso i token successivi vengono posti a −∞ prima della softmax (e diventano quindi pesi nulli), così che ogni token possa guardare solo indietro, come deve fare chi scrive una parola alla volta.

#### Multi-head attention

```latex
\text{MultiHead}(X) = \left[ \text{head}_1, \dots, \text{head}_H \right] W_O, \qquad \text{head}_i = \text{Attention}(X W_Q^{(i)}, X W_K^{(i)}, X W_V^{(i)})
```

**Che cosa dice.** Si eseguono H attenzioni indipendenti in parallelo, ciascuna con le proprie matrici, poi si affiancano i risultati e li si ricombina con una matrice finale W\_O. Ogni "testa" può imparare un criterio di rilevanza diverso: una può collegare un verbo al suo soggetto, un'altra un pronome al nome a cui si riferisce. Una sola attenzione dovrebbe invece comprimere tutti questi criteri in un'unica media.

#### Codifica posizionale

```latex
PE(p, 2i) = \sin\left( \frac{p}{10000^{2i/d}} \right), \qquad PE(p, 2i+1) = \cos\left( \frac{p}{10000^{2i/d}} \right)
```

**Simboli.** p è la posizione del token nella sequenza (0, 1, 2…); i indica la coppia di dimensioni del vettore; d la dimensione totale.

**Che cosa dice.** L'attenzione tratta i token come un insieme senza ordine: scambiare due parole non cambierebbe nulla. Per rimediare, il Transformer originale somma a ogni embedding un vettore che dipende solo dalla posizione, costruito con onde seno e coseno di frequenze diverse: le prime dimensioni oscillano rapidamente, le ultime lentamente. Ogni posizione riceve così una "firma" unica, un po' come le lancette di un orologio, dove la combinazione di secondi, minuti e ore identifica ogni istante. In più, la differenza tra due posizioni si traduce in una trasformazione regolare, che il modello può imparare a riconoscere. I modelli attuali usano per lo più una variante, la *rotary positional embedding* (RoPE, 2021), che codifica la posizione ruotando i vettori query e key di un angolo proporzionale alla posizione.

#### Il costo quadratico della finestra di contesto

```latex
\text{costo dell'attenzione} \propto n^2 \cdot d
```

**Simboli.** n è il numero di token nella finestra; d la dimensione dei vettori; ∝ significa "proporzionale a".

**Che cosa dice.** La tabella dei punteggi QKᵀ ha una casella per ogni coppia di token: n × n. Con 1.000 token sono un milione di caselle per ogni testa di ogni strato; con 100.000 token sono dieci miliardi. Raddoppiare la lunghezza del contesto quadruplica il calcolo e la memoria di questa parte. È per questo che le finestre lunghe sono state a lungo un limite, e che molte ricerche recenti (attenzione a finestre locali, algoritmi che evitano di memorizzare l'intera tabella come FlashAttention, architetture alternative) puntano a ridurre o aggirare questo costo.

### A.5 AI generativa e LLM

#### La probabilità di un testo (modello linguistico)

```latex
P(w_1, w_2, \dots, w_n) = \prod_{t=1}^{n} P(w_t \mid w_1, \dots, w_{t-1})
```

**Simboli.** w₁…wₙ sono i token di un testo; P(wₜ ∣ w₁…wₜ₋₁) la probabilità del token t sapendo tutti quelli che lo precedono.

**Che cosa dice.** È una regola esatta della teoria della probabilità (la *regola della catena* delle probabilità), non un'approssimazione: la probabilità di un'intera frase è il prodotto delle probabilità di ciascuna parola dato il suo passato. La conseguenza è profonda: per modellare testi interi basta un modello che sappia rispondere a una sola domanda, "quale token viene dopo?". Un LLM è esattamente questo. Per generare, si estrae un token dalla distribuzione prevista, lo si aggiunge al testo e si ripete: è la generazione *autoregressiva*.

#### L'obiettivo del pre-training

```latex
L(\theta) = - \frac{1}{N} \sum_{t=1}^{N} \log P_\theta(w_t \mid w_{<t})
```

**Che cosa dice.** È la cross-entropy (sezione A.1) applicata a ogni posizione di ogni testo del corpus: per ogni token vero, si penalizza il modello in base a quanta poca probabilità gli aveva assegnato. Minimizzarla equivale a rendere i testi reali il più probabili possibile secondo il modello (*massima verosimiglianza*). Tutto il pre-training di un LLM, con i suoi mesi di calcolo, è la discesa del gradiente su questa sola quantità.

#### Perplessità

```latex
\text{PPL} = \exp\left( - \frac{1}{N} \sum_{t=1}^{N} \log P(w_t \mid w_{<t}) \right)
```

**Che cosa dice.** È l'esponenziale della perdita media, una trasformazione che la rende interpretabile. Una perplessità di 10 significa che il modello, in media, è incerto quanto lo sarebbe dovendo scegliere a caso tra 10 token equiprobabili. Più è bassa, meglio il modello prevede il testo. È la metrica storica dei modelli linguistici, oggi affiancata da benchmark su compiti concreti, perché una buona previsione del testo non garantisce una buona risposta alle domande.

#### Softmax con temperatura

```latex
P(\text{token}_i) = \frac{e^{z_i / T}}{\sum_j e^{z_j / T}}
```

**Simboli.** zᵢ è il punteggio grezzo (*logit*) che il modello assegna al token i; T è la temperatura.

**Che cosa dice.** L'ultimo strato dell'LLM produce un punteggio per ogni token del vocabolario; la softmax li trasforma in probabilità. Dividere tutti i punteggi per T prima dell'esponenziale cambia le distanze tra loro. Con T < 1 le differenze si ingrandiscono e il token più probabile prende quasi tutta la probabilità; al limite T → 0 si sceglie sempre il più probabile (*decodifica greedy*). Con T > 1 le differenze si riducono e la distribuzione si avvicina all'uniforme. Esempio con due token di punteggio 2 e 1: a T = 1 le probabilità sono circa 73% e 27%; a T = 0,5 diventano 88% e 12%; a T = 2 diventano 62% e 38%. Spesso si combina con il *top-p* (o *nucleus sampling*): si scartano i token meno probabili e si campiona solo tra quelli che insieme coprono, per esempio, il 90% della probabilità.

#### GAN: il gioco minimax

```latex
\min_G \max_D \; \mathbb{E}_{x \sim \text{dati}}\left[ \log D(x) \right] + \mathbb{E}_{z \sim \text{rumore}}\left[ \log\left( 1 - D(G(z)) \right) \right]
```

**Simboli.** G è il generatore, che trasforma rumore casuale z in un'immagine G(z); D è il discriminatore, che restituisce la probabilità che un'immagine sia vera; x ∼ dati significa "x estratto dai dati reali".

**Che cosa dice.** La quantità è alta quando il discriminatore fa bene il suo lavoro: dà probabilità vicina a 1 alle immagini vere (primo termine) e vicina a 0 a quelle generate (secondo termine). Il discriminatore cerca di massimizzarla (max\_D), il generatore di minimizzarla (min\_G), cioè di produrre immagini che D giudichi vere. È un gioco a somma zero nel senso della teoria dei giochi di von Neumann. Goodfellow dimostrò che, in condizioni ideali, l'equilibrio si raggiunge quando le immagini generate hanno esattamente la stessa distribuzione di quelle vere e il discriminatore risponde 50% su tutto. In pratica l'equilibrio è difficile da raggiungere, e l'addestramento può oscillare o produrre sempre le stesse poche immagini (*mode collapse*).

#### Diffusione

```latex
x_t = \sqrt{\bar{\alpha}_t} \, x_0 + \sqrt{1 - \bar{\alpha}_t} \, \varepsilon, \qquad \varepsilon \sim \mathcal{N}(0, I)
```

```latex
L = \mathbb{E}_{x_0, \varepsilon, t}\left[ \left\| \varepsilon - \varepsilon_\theta(x_t, t) \right\|^2 \right]
```

**Simboli.** x₀ è un'immagine vera; ε ("epsilon") è rumore casuale gaussiano, cioè estratto dalla classica distribuzione a campana 𝒩; ᾱₜ ("alfa barrato") è un numero che parte da 1 e scende verso 0 man mano che il passo t cresce; ε\_θ è la rete neurale.

**Che cosa dice.** La prima formula descrive il processo di degradazione: l'immagine al passo t è una miscela dell'originale e del rumore, con proporzioni decise da ᾱₜ. All'inizio è quasi tutta immagine, alla fine quasi tutto rumore. La seconda formula è la perdita: si prende un'immagine, si sceglie un passo a caso, la si sporca con un rumore noto, e si chiede alla rete di indovinare *quale rumore* è stato aggiunto; l'errore è la distanza al quadrato tra il rumore vero e quello stimato. È quindi, sorprendentemente, una semplice regressione. Una rete che sa stimare il rumore a ogni livello può essere usata al contrario: partendo da rumore puro, sottrae a ogni passo una parte del rumore stimato, finché non resta un'immagine. Per seguire un testo, la rete riceve come input aggiuntivo l'embedding della descrizione.

### A.6 Apprendimento per rinforzo e allineamento

#### Il ritorno scontato

```latex
G_t = r_{t+1} + \gamma \, r_{t+2} + \gamma^2 r_{t+3} + \dots = \sum_{k=0}^{\infty} \gamma^k \, r_{t+k+1}
```

**Simboli.** rₜ è la ricompensa ricevuta al passo t; γ ("gamma") è il *fattore di sconto*, un numero tra 0 e 1; Gₜ è il *ritorno*, la ricompensa totale che l'agente accumula da t in poi.

**Che cosa dice.** L'obiettivo dell'agente non è la ricompensa immediata ma la somma di tutte quelle future. Ognuna però vale un po' meno quanto più è lontana: con γ = 0,9, una ricompensa tra 10 passi pesa circa un terzo (0,9¹⁰ ≈ 0,35) di una immediata. Il fattore di sconto esprime due idee: il futuro è incerto, e una somma infinita di ricompense deve restare un numero finito. Con γ vicino a 0 l'agente è miope; con γ vicino a 1 è lungimirante e accetta sacrifici oggi per guadagni domani.

#### L'equazione di Bellman

```latex
V(s) = \max_{a} \left[ R(s, a) + \gamma \sum_{s'} P(s' \mid s, a) \, V(s') \right]
```

**Simboli.** s è uno stato (una posizione sulla scacchiera, una situazione); a un'azione; R(s, a) la ricompensa immediata; s' lo stato successivo, raggiunto con probabilità P(s' ∣ s, a); V(s) il *valore* dello stato, cioè il ritorno che ci si può aspettare partendo da lì e agendo al meglio.

**Che cosa dice.** Il valore di una situazione è definito in modo ricorsivo: è la migliore, tra tutte le azioni possibili, della somma tra ciò che si guadagna subito e il valore (scontato) della situazione in cui si finisce. Spezza così un problema a lunghissimo termine (vincere una partita) in tanti problemi di un passo solo. Algoritmi come il *Q-learning* (Watkins, 1989) imparano queste quantità per tentativi, correggendo le stime ogni volta che l'esperienza le smentisce.

#### Policy gradient

```latex
\nabla_\theta J(\theta) = \mathbb{E}\left[ \nabla_\theta \log \pi_\theta(a \mid s) \cdot G \right]
```

**Simboli.** π\_θ(a ∣ s) è la *policy*: la probabilità che l'agente, con parametri θ, scelga l'azione a nello stato s; J(θ) il ritorno medio atteso.

**Che cosa dice.** Invece di stimare il valore degli stati, si modificano direttamente i parametri della policy. La formula dice in che direzione: aumentare la probabilità delle azioni che hanno portato a un ritorno G alto, e diminuire quella delle azioni che hanno portato a un ritorno basso, in proporzione a quanto alto o basso. È il tipo di algoritmo usato per i modelli linguistici: la "policy" è l'LLM stesso, l'"azione" è la risposta generata, e il gradiente rende più probabili le risposte premiate. Gli algoritmi pratici (PPO, 2017; GRPO, 2024) aggiungono accorgimenti per rendere gli aggiornamenti stabili.

#### Il reward model (modello di Bradley-Terry)

```latex
P(\text{A} \succ \text{B}) = \sigma\left( r_\phi(\text{A}) - r_\phi(\text{B}) \right), \qquad L = - \log \sigma\left( r_\phi(\text{scelta}) - r_\phi(\text{scartata}) \right)
```

**Simboli.** A ≻ B significa "la risposta A è preferita a B"; r\_φ è il reward model, una rete con parametri φ ("phi") che assegna un punteggio a ogni risposta; σ è la sigmoide.

**Che cosa dice.** Il modello, proposto da Bradley e Terry nel 1952 per i confronti a coppie (per esempio nei tornei sportivi), assume che ogni risposta abbia una "forza" nascosta, e che la probabilità che A batta B dipenda solo dalla differenza delle forze: se sono uguali, 50%; se A è molto più forte, quasi 100%. Gli esseri umani forniscono solo confronti ("preferisco A"), mai punteggi assoluti; la perdita spinge la rete ad assegnare alla risposta scelta un punteggio più alto di quella scartata. Alla fine, la rete ha imparato una scala numerica di qualità coerente con migliaia di giudizi umani, utilizzabile come ricompensa.

#### L'obiettivo dell'RLHF

```latex
\max_\theta \; \mathbb{E}_{x, \, y \sim \pi_\theta}\left[ r_\phi(x, y) \right] - \beta \, D_{\text{KL}}\left( \pi_\theta \,\|\, \pi_{\text{ref}} \right)
```

```latex
D_{\text{KL}}(P \,\|\, Q) = \sum_y P(y) \log \frac{P(y)}{Q(y)}
```

**Simboli.** x è una domanda; y una risposta generata dal modello π\_θ in addestramento; π\_ref il modello di partenza (dopo il fine-tuning supervisionato); β un iperparametro; D\_KL la *divergenza di Kullback-Leibler*.

**Che cosa dice.** Il primo termine chiede risposte con punteggio alto secondo il reward model. Il secondo è un freno. La divergenza KL misura quanto due distribuzioni di probabilità sono diverse: è zero se sono identiche e cresce quanto più il nuovo modello assegna probabilità a risposte che il modello originale considerava improbabili. Il freno serve perché il reward model è solo un'approssimazione dei giudizi umani: se il modello fosse libero di massimizzarlo senza vincoli, troverebbe risposte strane che ottengono punteggi alti senza essere davvero buone (reward hacking, capitolo 10). β regola il compromesso tra migliorare e restare vicini a un comportamento sensato. Varianti più recenti, come la *Direct Preference Optimization* (DPO, 2023), ottengono un risultato equivalente senza addestrare un reward model separato, ricavando la perdita direttamente da questa formula.

### A.7 Tecniche avanzate

#### Scaling laws

```latex
L(N, D) = E + \frac{A}{N^{\alpha}} + \frac{B}{D^{\beta}}, \qquad C \approx 6 \, N D
```

**Simboli.** L è la perdita del modello addestrato; N il numero di parametri; D il numero di token di addestramento; C la potenza di calcolo totale, in operazioni; E, A, B, α, β costanti ricavate sperimentalmente (α e β sono intorno a 0,3).

**Che cosa dice.** È la forma usata nello studio Chinchilla (2022). La perdita ha tre componenti: una parte E che non si può eliminare (l'imprevedibilità intrinseca del linguaggio), una che diminuisce aumentando i parametri, una che diminuisce aumentando i dati. Entrambe calano come *leggi di potenza*: ogni volta che si moltiplica N per un fattore fisso, l'errore si riduce di una frazione fissa. Per questo su un grafico con assi logaritmici le curve appaiono rette, e per questo i miglioramenti richiedono aumenti di scala moltiplicativi, non additivi. La seconda formula è un'approssimazione contabile: addestrare costa circa 6 operazioni per parametro per token. Fissato il budget C, si può allora cercare la combinazione di N e D che minimizza L; il risultato di Chinchilla fu che conviene far crescere N e D in proporzione, con circa 20 token per parametro.

#### Mixture of Experts

```latex
y = \sum_{i \in \text{Top-}k} g_i(\mathbf{x}) \, E_i(\mathbf{x}), \qquad g(\mathbf{x}) = \text{softmax}\left( W_g \, \mathbf{x} \right)
```

**Simboli.** Eᵢ è l'i-esimo esperto (una piccola rete neurale); g(**x**) il *router*, che assegna a ogni esperto un punteggio per il token **x**; Top-k indica i k esperti con il punteggio più alto.

**Che cosa dice.** Il router è un semplice strato lineare seguito da una softmax: per ogni token produce una distribuzione su tutti gli esperti. Solo i k migliori (tipicamente 1, 2 o 8 su decine o centinaia) vengono effettivamente calcolati, e i loro output vengono sommati pesandoli con i punteggi del router. Il costo di calcolo dipende quindi da k, non dal numero totale di esperti: si aumentano i parametri senza aumentare proporzionalmente il calcolo. Nell'addestramento si aggiunge di solito un termine che penalizza gli squilibri, perché altrimenti il router tende a mandare tutto agli stessi pochi esperti.

#### Quantizzazione

```latex
w_q = \text{round}\left( \frac{w}{s} \right), \qquad \hat{w} = s \cdot w_q, \qquad s = \frac{\max |w|}{2^{b-1} - 1}
```

**Simboli.** w è un peso originale; b il numero di bit; s la *scala*; round l'arrotondamento all'intero più vicino; wᵩ il valore intero memorizzato; ŵ il valore ricostruito al momento dell'uso.

**Che cosa dice.** Con b bit si possono rappresentare 2ᵇ valori interi: con 8 bit sono 256 (da −127 a +127 nella versione simmetrica), con 4 bit solo 16. La quantizzazione divide l'intervallo in cui cadono i pesi in altrettanti gradini equidistanti, e sostituisce ogni peso con il gradino più vicino. La scala s è l'ampiezza di un gradino. L'errore introdotto è al massimo mezzo gradino per peso; il problema sono i pochi pesi molto grandi (*outlier*), che allargano l'intervallo e rendono i gradini troppo grossolani per tutti gli altri. Per questo i metodi pratici usano scale diverse per piccoli gruppi di pesi, o trattano a parte i valori anomali.

#### Distillazione

```latex
L = \alpha \, L_{\text{CE}}\left( y, \, p_S \right) + (1 - \alpha) \, T^2 \, D_{\text{KL}}\left( p_T^{(T)} \,\|\, p_S^{(T)} \right)
```

**Simboli.** p\_T e p\_S sono le distribuzioni di probabilità prodotte dal maestro (*teacher*) e dallo studente (*student*); l'apice (T) indica che sono calcolate con una softmax a temperatura T > 1; α bilancia i due termini.

**Che cosa dice.** Lo studente impara da due fonti. Il primo termine è la perdita normale rispetto alla risposta corretta. Il secondo misura, con la divergenza KL, quanto la distribuzione dello studente si discosta da quella del maestro. Usare una temperatura alta "ammorbidisce" le distribuzioni e rende visibili le probabilità piccole: è lì che sta l'informazione in più, cioè quali risposte sbagliate il maestro considera quasi giuste. Il fattore T² compensa il fatto che, ammorbidendo le distribuzioni, i gradienti diventano più piccoli. Hinton chiamò questa informazione *dark knowledge*, "conoscenza oscura".

#### LoRA

```latex
W' = W + \Delta W = W + B A, \qquad W \in \mathbb{R}^{d \times d}, \; B \in \mathbb{R}^{d \times r}, \; A \in \mathbb{R}^{r \times d}, \; r \ll d
```

**Simboli.** W è una matrice di pesi del modello originale, che resta congelata; ΔW ("delta W") la modifica; B e A due matrici sottili; r il *rango*, un numero molto più piccolo di d (≪ significa "molto minore di").

**Che cosa dice.** Invece di imparare una modifica ΔW completa, con d × d numeri, la si scrive come prodotto di due matrici strette: una d × r e una r × d. Con d = 4.096 e r = 8, la matrice completa avrebbe circa 16,8 milioni di numeri; le due matrici LoRA insieme ne hanno 2 × 4.096 × 8 ≈ 65.500, cioè circa 250 volte meno. Il prezzo è che la modifica ha *rango* al massimo r: in termini semplici, può alterare il comportamento dello strato solo lungo r direzioni indipendenti. L'ipotesi su cui si fonda il metodo, confermata sperimentalmente, è che per specializzare un modello già capace bastino poche direzioni di cambiamento. Dopo l'addestramento si può sommare BA a W, e il modello finale non è più lento dell'originale.

#### Il recupero nella RAG

```latex
\text{Top-}k(q) = \underset{d \in \mathcal{D}}{\arg\max_k} \; \text{sim}\left( \mathbf{e}(q), \, \mathbf{e}(d) \right)
```

**Simboli.** q è la domanda; 𝒟 l'insieme dei brani nell'archivio; **e**(·) il modello di embedding; sim la similarità del coseno; argmaxₖ restituisce i k elementi con il valore più alto.

**Che cosa dice.** Si trasformano la domanda e tutti i brani in vettori con lo stesso modello di embedding, e si selezionano i k brani più simili alla domanda. Confrontare la domanda con milioni di vettori uno per uno sarebbe lento; i database vettoriali usano strutture di indice (come i grafi HNSW) che trovano i vicini *approssimativamente* più simili esaminandone solo una piccola parte. I brani selezionati vengono poi inseriti nel prompt. Spesso si aggiunge un secondo passaggio (*reranking*) in cui un modello più accurato riordina i candidati.

#### Sparse autoencoder (interpretabilità meccanicistica)

```latex
\mathbf{f} = \text{ReLU}\left( W_{\text{enc}} \, \mathbf{a} + \mathbf{b} \right), \qquad \hat{\mathbf{a}} = W_{\text{dec}} \, \mathbf{f}, \qquad L = \left\| \mathbf{a} - \hat{\mathbf{a}} \right\|^2 + \lambda \sum_i |f_i|
```

**Simboli.** **a** è il vettore delle attivazioni interne di un LLM in un certo punto (per esempio dopo uno strato); **f** il vettore delle *feature*, molto più lungo di **a** (decine di migliaia o milioni di elementi); W\_enc e W\_dec le matrici di codifica e decodifica.

**Che cosa dice.** Si addestra una rete ausiliaria a riscrivere le attivazioni del modello come combinazione di molte direzioni possibili, ricostruendole il più fedelmente possibile (primo termine della perdita). Il secondo termine penalizza la somma dei valori assoluti delle feature, il che spinge la maggior parte di esse a essere esattamente zero: per ogni input se ne accendono solo poche (*sparsità*). Questa combinazione, "tante feature disponibili, poche attive alla volta", è proprio l'ipotesi della sovrapposizione rovesciata: se il modello ha compresso molti concetti in pochi neuroni, l'autoencoder li decomprime in feature separate. Ogni colonna di W\_dec è la direzione di una feature nello spazio delle attivazioni, e molte di queste risultano corrispondere a concetti riconoscibili.

### A.8 I termini senza una formula

Alcuni concetti del vocabolario non hanno una formalizzazione matematica propria: sono definizioni operative, pratiche ingegneristiche o problemi aperti. In diversi casi esiste però un oggetto matematico vicino, utile da conoscere.

| Termine | Perché non ha una formula | L'oggetto formale più vicino |
| --- | --- | --- |
| Allineamento, problema dell'allineamento | È un obiettivo (far coincidere comportamento e intenzioni umane), non una grandezza misurabile | L'obiettivo RLHF (A.6), che ne è un'approssimazione operativa |
| Reward hacking | Descrive uno scarto tra ciò che si misura e ciò che si vuole, che per definizione non è scritto da nessuna parte | Il termine di penalità KL nell'RLHF (A.6), che lo limita |
| AI costituzionale | È un procedimento di addestramento guidato da principi in linguaggio naturale | Il reward model (A.6), addestrato su giudizi del modello invece che umani |
| Guardrail, red teaming, jailbreak, prompt injection | Sono pratiche e tipi di attacco, descritti in termini di comportamento | Classificatori di sicurezza: regressione logistica e metriche precision/recall (A.1) |
| Chain-of-thought, prompt, system prompt, few-shot | Riguardano il testo fornito al modello, non il modello | La probabilità condizionata P(risposta ∣ prompt) (A.5): cambiare il prompt cambia la condizione |
| Agente, tool use, MCP, sistema multi-agente | Sono architetture software e protocolli di comunicazione | Il formalismo dell'apprendimento per rinforzo: stati, azioni, policy (A.6) |
| Capacità emergenti | Sono un'osservazione empirica sull'andamento delle prestazioni, oggi discussa | Le scaling laws (A.7) e la scelta delle metriche |
| Allucinazione | Indica falsità rispetto al mondo, che il modello non rappresenta esplicitamente | La perdita di pre-training (A.5), che premia il testo probabile, non quello vero |
| AGI, ASI, ANI | Non esiste una definizione condivisa né un test riconosciuto | Nessuno di uso generale |
| Test di Turing | È un protocollo sperimentale con un giudice umano | Un test statistico: la macchina passa se il giudice indovina non più spesso del 50% |
| Scatola nera, interpretabilità | Descrivono un limite della nostra comprensione, non una proprietà calcolabile | Lo sparse autoencoder (A.7), uno degli strumenti per ridurre quel limite |
| Inverno dell'AI, AI simbolica | Sono categorie storiche | La logica formale, alla base dei sistemi simbolici |

Il quadro complessivo che emerge dall'appendice è che la matematica dell'AI moderna, per quanto vasta nelle applicazioni, poggia su pochi pilastri: il prodotto scalare e le matrici, la probabilità condizionata, la cross-entropy come misura dell'errore, e la discesa del gradiente con la regola della catena per ridurlo. Quasi ogni formula delle sezioni precedenti è una combinazione di questi elementi.
