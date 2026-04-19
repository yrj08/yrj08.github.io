window.routeConfigs = {
  
  "350": {title: "Ligne 350 • Verdun / LaSalle",
    files: {currentShapes: "../refontestm/GeoJSON/curr-350.geojson", newShapes: "../refontestm/GeoJSON/350.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Frontenac", 
                      inbound: "Ouest – Centre de transport LaSalle"},
    branchStyles: {
      "3508888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3509999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service via métro Atwater : pôle d'échange déplacé à la station 
        Guy-Concordia;</li>
      <li>Ajustement du parcours entre Papineau et Frontenac pour compenser au retrait 
        de la ligne 358;</li>
      <li>Retrait du service à l'ouest de Shevchenko jusqu'au Terminus Lafleur / Newman; 
        segment remplacé par la nouvelle ligne 352;</li>
      <li>Terminus déplacé devant le CT LaSalle via Newman, Dollard et Elmslie; retrait 
        du détour via Léger;</li>
      <li>Retrait du service dans la boucle Angrignon;</li>
      <li>Retrait du service sur Monk (entre Allard et Jolicoeur) et Laurendeau 
        (entre Monk et Laurendeau); ajout du service sur Allard et Laurendeau;</li>
      <li>Retrait du service sur Champlain en direction ouest; ajout du service sur De La 
        Vérendrye via la boucle Jolicoeur;</li>
      <li>Retrait du service sur Wellington; ajout du service sur LaSalle;</li>
      <li>Ajustement du parcours entre Papineau et Frontenac pour compenser au retrait 
        de la ligne 358;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Créer un pôle d'échange plus sécuritaire et convivial pour la clientèle et 
        pour les employés;</li>
      <li>Réduire la longueur du trajet pour une meilleure régularité;</li>
      <li>Simplifier du trajet pour éviter des boucles desservies dans les deux 
        directions (CT LaSalle);</li>
      <li>Accélérer le service par desserte de la station Angrignon sur rue, 
        devant la station;</li>
      <li>Élargir le bassin de service à Ville-Émard en complément à l'ajout proposé 
        de la ligne 352;</li>
      <li>Rendre le service bi-directionnel et concordant au service du jour (ligne 37) 
        à la station Jolicoeur;</li>
      <li>Élargir le bassin de service en ajoutant un service à proximité de l'Hôpital 
        de LaSalle;</li>
      <li>Remplacer la ligne 358 sur Sainte-Catherine et De Maisonneuve suite à son 
        abolition proposée;</li>
      <li>Concentrer le niveau de service sur le tronçon plus achalandé;</li>
      <li>Réduire le temps de trajet pour les résidents de LaSalle depuis 
        le centre-ville avec la nouvelle ligne 352;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "352": {title: "Ligne 352 • Centrale",
    files: {currentShapes: "../refontestm/GeoJSON/curr-352.geojson", newShapes: "../refontestm/GeoJSON/352.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Place-des-Arts", 
                      inbound: "Ouest – Terminus Lafleur / Newman"},
    branchStyles: {
      "3528888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3529999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Nouvelle ligne pour reprendre le segment délaissé par des modifications 
        à la ligne 350, entre Shevchenko et Terminus Lafleur / Newman;</li>
      <li>Retrait du service via Shevchenko ; remplacé par trajet via Lapierre.</li>
    `,
    pourquoi: `
      <li>Réduire le temps de trajet pour les résidents de LaSalle depuis 
        le centre-ville ; le trajet prend Jolicoeur, Monk et Notre-Dame au 
        lieu de desservir presque toutes les stations sur la ligne verte du 
        métro;</li>
      <li>Élargir le bassin desservi par les lignes de nuit en créant une 
        nouvelle desserte via Notre-Dame, Monk, et Jolicoeur;</li>
      <li>Concorder avec le réseau de jour en suivant (plus ou moins) la ligne 
        110 Centrale à l'ouest du boul. Angrignon;</li>
      <li>Permettre de concentrer les ressources sur la ligne 350 avec une 
        demande plus forte.</li>
    `},
  
  "353": {title: "Ligne 353 • Lacordaire / Maurice-Duplessis",
    files: {currentShapes: "../refontestm/GeoJSON/curr-353.geojson", newShapes: "../refontestm/GeoJSON/353.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Rivière-des-Prairies", 
                      inbound: "Ouest – Station Frontenac"},
    branchStyles: {
      "3538888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3539999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Prolongement du parcours jusqu'à la Gare Rivière-des-Prairies;</li>
      <li>Retrait du service via Perras et Armand-Bombardier; segment remplacé par 
        des modifications aux lignes 372 et 380;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Offrir un service tout au long de Maurice-Duplessis et un service 
        bi-directionnel à l'est du boulevard de la Rivière-des-Prairies;</li>
      <li>Élargir le bassin de desserte dans l'est de l'île, de concert avec les 
        modifications aux lignes 372 et 380;</li>
      <li>Tirer avantage d'un nouveau terminus disponible depuis l'ouverture 
        de la ligne Mascouche;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "354": {title: "Ligne 354 • Des Sources / YUL Aéroport",
    files: {currentShapes: "../refontestm/GeoJSON/curr-354.geojson", newShapes: "../refontestm/GeoJSON/354.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Place-des-Arts", 
                      inbound: "Ouest – Station Pierrefonds–Roxboro"},
    branchStyles: {
      "3548888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3549999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service au métro Atwater;</li>
      <li>Ajout de desserte via YUL Aéroport Montréal-Trudeau et boul. René-Lévesque 
        (jusqu'au métro Place-des-Arts) en remplacement au retrait de la ligne 747;</li>
      <li>Retrait du service entre des Sources et Sainte-Anne-de-Bellevue via 
        Autoroute 20; segment remplacé par des modifications à la ligne 376 
        avec un tracé via Brunswick et Autoroute 40;</li>
      <li>Ajout du service via des Sources jusqu'au REM Pierrefonds-Roxboro 
        en remplacement au segment délaissé par des modifications à la ligne 356;</li>
    `,
    pourquoi: `
      <li>Créer un pôle d'échange plus sécuritaire et convivial pour la clientèle et 
        pour les employés au métro Guy-Concordia au lieu de Lionel-Groulx;</li>
      <li>Réduire la longueur du trajet de la ligne 356 pour une meilleure 
        régularité;</li>
      <li>Concentrer le service là où la demande et plus forte sur la ligne 356, soit 
        principalement sur Sherbrooke et Victoria;</li>
      <li>Réduire le temps de trajet vers boul. des Sources depuis le centre-ville;</li>
      <li>Permet de relier plusieurs stations du REM lorsque ce dernier n'est pas 
        en service pendant la nuit.</li>
    `},

  "355": {title: "Ligne 355 • Pie-IX",
    files: {currentShapes: "../refontestm/GeoJSON/curr-355.geojson", newShapes: "../refontestm/GeoJSON/355.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Carrefour Henri-Bourassa / Pie-IX", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "3558888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3559999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3558888_cancelled": {line: {color: "#FF2600", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FF2600", fillOpacity: 1, shape: "circle"}},
      "3559999_cancelled": {line: {color: "#FFA59B", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FFA59B", fillOpacity: 1, shape: "circle"}},
      "3558888_temporary": {line: {color: "#1F3BFF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#1F3BFF", fillOpacity: 1, shape: "circle"}},
      "3559999_temporary": {line: {color: "#7498FF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#7498FF", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service sur René-Lévesque: tronçon remplacé par un prolongement 
        de la ligne 357);</li>
      <li>Ajout du service via Ontario pour compenser 
        au retrait de la ligne 360;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Le retrait de la ligne 360 permet de concentrer le niveau de service là où 
        les demandes sont plus fortes, mais la desserte sur Ontario doit être 
        préservée;</li>
      <li>Préserver l'accès au centre-ville et Vieux Port pour la clientèle actuelle 
        de la ligne 355;</li>
      <li>Élargir le bassin de desserte du réseau de nuit dans Ville-Marie;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "356": {title: "Ligne 356 • Sherbrooke / YUL Aéroport",
    files: {currentShapes: "../refontestm/GeoJSON/curr-356.geojson", newShapes: "../refontestm/GeoJSON/356.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Frontenac", 
                      inbound: "Ouest – YUL Aéroport"},
    branchStyles: {
      "3568888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3569999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du segment à l'ouest de YUL Aéroport: service remplacé par des 
        modifications à la ligne 354;</li>
      <li>Retrait du service à la station Atwater: pôle d'échange déplacé à la 
        station Guy-Concordia (à distance de marche depuis l'arrêt 
        Guy / Côte-des-Neiges);</li>
      <li>Ajout du service sur Cherrier et retrait du service sur Sherbrooke 
        entre Atateken et Berri;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Réduire la longueur du trajet pour améliorer la performance et ponctualité, 
        ainsi de concentrer les ressources sur le segment plus achalandé;</li>
      <li>Permettre de rejoindre Lachine plus rapidement à partir du centre-ville;</li>
      <li>Reprendre un segment (Cherrier) délaissé par le retrait de la 
        ligne 360 sur ce tronçon ainsi qu'une meilleure correspondance vers d'autres 
        lignes à la station Sherbrooke;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "357": {title: "Ligne 357 • Saint-Michel",
    files: {currentShapes: "../refontestm/GeoJSON/curr-357.geojson", newShapes: "../refontestm/GeoJSON/357.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Saint-Michel / Henri-Bourassa", 
                      inbound: "Sud – Station Guy-Concordia"},
    branchStyles: {
      "3578888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3579999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Prolongement du parcours vers station Lionel-Groulx via boul. 
        René-Lévesque;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Créer un pôle d'échange plus sécuritaire et convivial pour la clientèle et 
        pour les employés (par rapport à Atwater sur la ligne 355 actuelle);</li>
      <li>Remplacer les segments délaissés suite aux modifications à la 
        ligne 355;</li>
      <li>Élargir le bassin desservi par des lignes directes, sans 
        correspondances depuis le centre-ville;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "358": {title: "Ligne 358 • René-Lévesque",
    files: {currentShapes: "../refontestm/GeoJSON/curr-358.geojson", newShapes: "../refontestm/GeoJSON/358.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait complet du service; service sur l'ensemble du trajet maintenu par les 
        lignes modifiées 350, 354, 357, 364 et 371, avec tracé via Sainte-Catherine et 
        De Maisonneuve à l'est de la station Papineau.</li>
    `,
    pourquoi: `
      <li>Permet de réduire le dédoublement des trajets, de concentrer les ressources 
        sur d'autres lignes, et d'offrir plus de trajets sans correspondances à partir 
        du centre-ville par l'ajout des lignes 354 et 371.</li>
    `},
  
  "359": {title: "Ligne 359 • Papineau",
    files: {currentShapes: "../refontestm/GeoJSON/curr-359.geojson", newShapes: "../refontestm/GeoJSON/359.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Henri-Bourassa / De Saint-Firmin", 
                      inbound: "Sud – Station Papineau"},
    branchStyles: {
      "3598888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3599999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet.</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "360": {title: "Ligne 360 • Avenue des Pins",
    files: {currentShapes: "../refontestm/GeoJSON/curr-360.geojson", newShapes: "../refontestm/GeoJSON/360.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait complet du service; segment à l'est de la rue Saint-Denis remplacé 
        par des modifications aux lignes 355 et 356.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur d'autres lignes en enlevant une 
        portion sous-utilisée du trajet.</li>
    `},
  
  "361": {title: "Ligne 361 • Saint-Denis",
    files: {currentShapes: "../refontestm/GeoJSON/curr-361.geojson", newShapes: "../refontestm/GeoJSON/361.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "3618888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3619999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3618888_cancelled": {line: {color: "#FF2600", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FF2600", fillOpacity: 1, shape: "circle"}},
      "3619999_cancelled": {line: {color: "#FFA59B", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FFA59B", fillOpacity: 1, shape: "circle"}},
      "3618888_temporary": {line: {color: "#1F3BFF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#1F3BFF", fillOpacity: 1, shape: "circle"}},
      "3619999_temporary": {line: {color: "#7498FF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#7498FF", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Inversion du sens de parcours dans le Vieux-Montréal et déplacement 
        du terminus devant le Palais de Justice.</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de simplifier le trajet au Vieux-Montréal;</li>
      <li>Permet d'étaler les terminus des différents parcours et créer un 
        pôle d'échange entre plusieurs lignes de nuit, dont 355, 361, 363 et 
        365;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "362": {title: "Ligne 362 • Hochelaga / Notre-Dame",
    files: {currentShapes: "../refontestm/GeoJSON/curr-362.geojson", newShapes: "../refontestm/GeoJSON/362.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – 100e Avenue / Bureau", 
                      inbound: "Ouest – Station Frontenac"},
    branchStyles: {
      "3628888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3629999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service sur Marien et ajout du service sur Broadway;</li>
      <li>Ajout d'un arrêt au stationnement incitatif Sherbrooke;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de concorder les dessertes entre les réseaux du jour et de nuit 
        en supprimant le service sur un axe non-desservi par le réseau de jour;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "363": {title: "Ligne 363 • Saint-Laurent",
    files: {currentShapes: "../refontestm/GeoJSON/curr-363.geojson", newShapes: "../refontestm/GeoJSON/363.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "3638888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3639999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Simplification du parcours au Vieux-Montréal avec terminus à 
        l'intersection de Saint-Laurent et Saint-Jacques;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Simplifier le parcours dans les deux directions;</li>
      <li>Concorder le trajet de nuit avec l'équivalent du jour (ligne 55 
        Saint-Laurent);</li>
      <li>Permet d'étaler les terminus des différents parcours et créer un 
        pôle d'échange entre plusieurs lignes de nuit, dont 355, 361, 363 et 
        365;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "364": {title: "Ligne 364 • Sherbrooke / Joseph-Renaud",
    files: {currentShapes: "../refontestm/GeoJSON/curr-364.geojson", newShapes: "../refontestm/GeoJSON/364.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Centre de transport Anjou", 
                      inbound: "Ouest – Station Guy-Concordia"},
    branchStyles: {
      "3648888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3649999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li></li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "365": {title: "Ligne 365 • Du Parc",
    files: {currentShapes: "../refontestm/GeoJSON/curr-365.geojson", newShapes: "../refontestm/GeoJSON/365.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Terminus Grenet / De Serres", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "3658888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3659999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li></li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "368": {title: "Ligne 368 • Édouard-Montpetit",
    files: {currentShapes: "../refontestm/GeoJSON/curr-368.geojson", newShapes: "../refontestm/GeoJSON/368.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – du Havre / Sainte-Catherine", 
                      inbound: "Ouest – Station Côte-Vertu"},
    branchStyles: {
      "3688888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3689999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li></li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "369": {title: "Ligne 369 • Côte-des-Neiges",
    files: {currentShapes: "../refontestm/GeoJSON/curr-369.geojson", newShapes: "../refontestm/GeoJSON/369.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Côte-de-Liesse", 
                      inbound: "Sud – Saint-Mathieu / René-Lévesque"},
    branchStyles: {
      "3698888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3698887": {line: {color: "#000000", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3699999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Prolongement du parcours via Décarie, Sainte-Croix et Hodge 
        jusqu'au REM Côte-de-Liesse;</li>
      <li>Retrait du service entre Atwater et Guy-Concordia;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permettre de créer un pôle d'échange plus sécuritaire à la 
        station Guy-Concordia au lieu d'Atwater;</li>
      <li>Permettre de desservir un quartier défavorisé et créer un pôle 
        d'échange au REM Côte-de-Liesse;</li>
      <li>Permettre de relier des stations du REM lorsque ce dernier 
        n'est pas en service;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "370": {title: "Ligne 370 • Rosemont",
    files: {currentShapes: "../refontestm/GeoJSON/curr-370.geojson", newShapes: "../refontestm/GeoJSON/370.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Honoré-Beaugrand", 
                      inbound: "Ouest – Kildare / Westminster"},
    branchStyles: {
      "3708888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3709999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Ajustement du trajet en direction ouest pour emprunter Kildare 
        dans les deux directions, entre Westminster et Parkhaven;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permettre un service bi-directionnel sur Kildare et retirer la 
        circulation d'autobus sur Parkhaven et Westminster;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "371": {title: "Ligne 371 • Décarie",
    files: {currentShapes: "../refontestm/GeoJSON/curr-371.geojson", newShapes: "../refontestm/GeoJSON/371.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Terminus Grenet / De Serres", 
                      inbound: "Sud – Station Papineau"},
    branchStyles: {
      "3718888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3719999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait de la desserte à la station Atwater et prolongement du parcours 
        vers station Papineau via René-Lévesque en compensation au retrait 
        de la ligne 358;</li>
      <li>Retrait de la desserte sur Girouard et ajout du service sur Décarie, 
        entre Saint-Jacques et Côte-Saint-Luc;</li>
      <li>Retrait du service à l'ouest de la station Côte-Vertu (trajet via 
        Côte-Vertu et Thimens); parcours prolongé vers le terminus Grenet / 
        De Serres (via Cardinal/Crevier et Grenet) en remplacement des 
        modifications à la ligne 382;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Créer un pôle d'échange secondaire à l'est du centre-ville à la station 
        Papineau (pour diminuer le nombre de ligne terminant à la station Frontenac);</li>
      <li>Améliorer l'accès vers les secteurs résidentiels de Saint-Laurent et 
        Ahuntsic-Cartierville depuis le centre-ville;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "372": {title: "Ligne 372 • Jean-Talon",
    files: {currentShapes: "../refontestm/GeoJSON/curr-372.geojson", newShapes: "../refontestm/GeoJSON/372.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Rivière-des-Prairies", 
                      inbound: "Ouest – Station Namur"},
    branchStyles: {
      "3728888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3729999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3729998": {line: {color: "#6F6F6F", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3728888_cancelled": {line: {color: "#FF2600", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FF2600", fillOpacity: 1, shape: "circle"}},
      "3729999_cancelled": {line: {color: "#FFA59B", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#FFA59B", fillOpacity: 1, shape: "circle"}},
      "3728888_temporary": {line: {color: "#1F3BFF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#1F3BFF", fillOpacity: 1, shape: "circle"}},
      "3729999_temporary": {line: {color: "#7498FF", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#7498FF", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Prolongement du trajet vers la gare Rivière-des-Prairies via 
        Perras et Saint-Jean-Baptiste;</li>
      <li>Légère modification du trajet à la station Namur pour retirer 
        la circulation sur Mountain Sights et Paré;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet un service bi-directionnel tout au long de Perras;</li>
      <li>Élargir le bassin de desserte dans l'est de l'île, de concert 
        avec les modifications aux lignes 353 et 380;</li>
      <li>Tirer avantage d'un nouveau terminus disponible depuis 
        l'ouverture de la ligne Mascouche;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "375": {title: "Ligne 375 • Côte-de-Liesse / YUL Aéroport",
    files: {currentShapes: "../refontestm/GeoJSON/curr-375.geojson", newShapes: "../refontestm/GeoJSON/375.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Saint-Jean / Gouin"},
    branchStyles: {
      "3758888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3759999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3759998": {line: {color: "#6F6F6F", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Nouvelle ligne desservant les axes Saint-Louis, Côte-de-Liesse, 
        Cardinal, A-20 et Saint-Jean pour reprendre les axes délaissés 
        suite aux modifications des lignes 354, 378 et 382. Ajout du 
        service sur Saint-Louis et Saint-Jean (entre A-20 et Hymus) 
        par rapport au réseau actuel;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet d'élargir le bassin desservi par le réseau de nuit;</li>
      <li>Permet de réduire la longueur de la ligne 356 par des modifications 
        aux lignes 354 et 356;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "376": {title: "Ligne 376 • Brunswick / Anse-à-l'Orme",
    files: {currentShapes: "../refontestm/GeoJSON/curr-376.geojson", newShapes: "../refontestm/GeoJSON/376.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Namur", 
                      inbound: "Ouest – Gare Sainte-Anne-de-Bellevue"},
    branchStyles: {
      "3768888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3769999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service via Saint-Jean et Pierrefonds vers Pierrefonds. 
        Service redirigé vers Sainte-Anne-de-Bellevue en remplacement partiel 
        de la ligne 354 via les axes Brunswick, Transcanadienne, Sainte-Marie 
        et des Anciens-Combattants;</li>
      <li>Retrait du service entre Namur et Atwater; remplacé par une 
        correspondance garantie avec la ligne 382 express vers Guy-Concordia;</li>
      <li>Ajout du service via Davignon et Saint-Régis;</li>
      <li>En direction est, légère modification du trajet via Côte-de-Liesse 
        entre Cavendish et jonction A40-A520 pour permettre l'ajout d'un 
        arrêt à ce dernier lieu;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permettre d'élargir la zone desservie par le réseau de nuit;</li>
      <li>Permettre d'assurer un lien vers les stations du REM sur l'antenne 
        Anse-à-l'Orme lorsque celui-ci n'est pas en exploitation durant la nuit;</li>
      <li>Les modifications entre Atwater et Namur permettent un plus grand nombre 
        de correspondances depuis le centre-ville: la ligne 382 dessert plus 
        de stations sur la branche ouest de la ligne orange;</li>
      <li>Permettre d'harmoniser la desserte de jour et de nuit;</li>
      <li>Permettre une correspondance avec la nouvelle ligne 375 à la jonction 
        des autoroutes 40 et 520;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "378": {title: "Ligne 378 • Sauvé / Côte-Vertu",
    files: {currentShapes: "../refontestm/GeoJSON/curr-378.geojson", newShapes: "../refontestm/GeoJSON/378.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Saint-Michel / Sauvé", 
                      inbound: "Ouest – Centre de transport Saint-Laurent"},
    branchStyles: {
      "3788888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3789999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Ajout du service via Côte-Vertu et Thimens à l'ouest du métro 
        Côte-Vertu et retrait du service via Côte-de-Liesse pour reprendre 
        la portion délaissée par les modifications proposées à la ligne 371.</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permettre une desserte linéaire sur Sauvé / Côte-Vertu et de 
        concorder les dessertes jour et nuit (lignes 121 et 177);</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "380": {title: "Ligne 380 • Henri-Bourassa",
    files: {currentShapes: "../refontestm/GeoJSON/curr-380.geojson", newShapes: "../refontestm/GeoJSON/380.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Centre de transport Anjou", 
                      inbound: "Ouest – Station Côte-de-Liesse"},
    branchStyles: {
      "3808888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3809999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3809998": {line: {color: "#6F6F6F", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Changement de sens de circulation près du CT Stinson avec terminer devant 
        la station REM Côte-de-Liesse;</li>
      <li>Retrait du segment sur le terrain privé au CT Anjou;</li>
      <li>Ajout du service sur Perras et retrait du service sur Maurice-Duplessis pour 
        compenser aux modifications à la ligne 353;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permettre une correspondance au REM pour les derniers départs en direction 
        ouest et de concorder avec le réseau de jour;</li>
      <li>Enlever la portion du trajet inaccessible au public des outils 
        d'informations;</li>
      <li>Permet d'élargir le bassin desservi dans l'est de l'île, conjointement avec 
        modifications aux lignes 353 et 372;</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},

  "382": {title: "Ligne 382 • Pierrefonds / Saint-Charles",
    files: {currentShapes: "../refontestm/GeoJSON/curr-382.geojson", newShapes: "../refontestm/GeoJSON/382.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Guy-Concordia", 
                      inbound: "Ouest – Gare Beaconsfield"},
    branchStyles: {
      "3828888": {line: {color: "#000000", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#000000", fillOpacity: 1, shape: "circle"}},
      "3829999": {line: {color: "#6F6F6F", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "3829998": {line: {color: "#6F6F6F", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#6F6F6F", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service sur Hymus et Saint-Jean et ajout du service sur 
        Saint-Charles et Pierrefonds (à l'ouest de Saint-Jean);</li>
      <li>Retrait du service sur Gouin (entre l'Autoroute 13 et Grenet) et 
        ajout du service sur l'Autoroute 13, Henri-Bourassa, Cousens et Marcel-Laurin;</li>
      <li>Retrait des arrêts locaux entre les stations Côte-Vertu et Namur;</li>
      <li>Prolongement de la ligne vers la station Guy-Concordia en remplacement 
        de la ligne 376;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de concorder les dessertes de jour et de nuit en suivant l'axe 
        Saint-Charles;</li>
      <li>Permet d'élargir le bassin desservi globalement avec des 
        modifications proposées sur les lignes 354, 356 et 376;</li>
      <li>Permet d'élargir le bassin couvert en ajoutant un service de nuit 
        dans le secteur Bois-Franc en retirant le service sur un axe peu dense 
        (Gouin / Saraguay);</li>
      <li>Permet un service express à partir du centre-ville vers un plus grand 
        nombre de pôles d'échange majeurs (métro Namur, Du Collège et Côte-Vertu);</li>
      <li>Améliorer la vitesse commerciale et ponctualité en réduisant le 
        nombre d'arrêts.</li>
    `},
  
  "747": {title: "Ligne 747 • YUL Aéroport / Centre-Ville",
    files: {currentShapes: "../refontestm/GeoJSON/curr-747.geojson", newShapes: "../refontestm/GeoJSON/747.geojson", 
            currentStops: "../refontestm/GeoJSON/oldstops.geojson", newStops: "../refontestm/GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait complet du service; service remplacé par des modifications à la ligne 354.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur d'autres lignes en donnant un accès plus rapide 
        du centre-ville vers l'ouest de l'île;</li>
      <li>Permet de relier plusieurs stations du REM lorsque celui-ci n'est pas en exploitation.</li>
    `}
  
};
