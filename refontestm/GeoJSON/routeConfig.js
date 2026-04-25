window.routeConfigs = {

  "10": {title: "Ligne 10 • De Lorimier",
    files: {currentShapes: "../GeoJSON/curr-010.geojson", newShapes: "../GeoJSON/010.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Crémazie / Fabre", 
                      inbound: "Sud – Station Papineau"},
    branchStyles: {
      "108888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "109999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "11": {title: "Ligne 11 • Parc du Mont-Royal",
    files: {currentShapes: "../GeoJSON/curr-011.geojson", newShapes: "../GeoJSON/011.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Christophe-Colomb / Rachel", 
                      inbound: "Ouest – Station Snowdon"},
    branchStyles: {
      "118888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "119999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait de la desserte via Ridgewood en tout temps. Service sur Ridgewood 
          assuré par la ligne 166 toute la journée;</li>
      <li>Retrait du service vers le métro Côte-des-Neiges; service redirigé vers Snowdon 
          en remplacement de la ligne 711;</li>
      <li>Retrait du service sur Mont-Royal. Service redirigé sur Laurier en 
          remplacement de la ligne 711;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de réduire le dédoublement des lignes sur le mont Royal et 
          dans Plateau-Mont-Royal;</li>
      <li>Permet d'éviter la congestion routière et piétonnisations sur 
          l'avenue du Mont-Royal en tout temps et d'accérer le service 
          de façon significative;</li>
      <li>Permet aux usagers d'accéder plus facilement le centre-ville et le 
          métro Snowdon sans correspondance vers la ligne 165;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "12": {title: "Ligne 12 • Île-des-Soeurs",
    files: {currentShapes: "../GeoJSON/curr-012.geojson", newShapes: "../GeoJSON/012.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station De L'Église", 
                      inbound: "Sud – Pointe-Sud"},
    branchStyles: {
      "120001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "128888": {line: {color: "#009EE0", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "120002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "129999": {line: {color: "#5DBDEA", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Modification du terminus De L'Église à l'édicule Galt;</li>
      <li>Création des lignes courtes 12X pour remplacer la ligne 172;</li>
      <li>Retrait du service au delà de la boucle Pointe-Sud;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet un meilleur niveau de service entre Pointe-Sud et REM;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "13": {title: "Ligne 13 • Christophe-Colomb",
    files: {currentShapes: "../GeoJSON/curr-013.geojson", newShapes: "../GeoJSON/013.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Station Rosemont"},
    branchStyles: {
      "138888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "139999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "14": {title: "Ligne 14 • Atateken",
    files: {currentShapes: "../GeoJSON/curr-014.geojson", newShapes: "../GeoJSON/014.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord", inbound: "Sud"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service; ligne remplacée par des modifications aux lignes 11 et 29.</li>
    `,
    pourquoi: `
      <li>Améliorer l'efficacité du service et bonification du service sur des tronçons affectés.</li>
    `},
  
  "16": {title: "Ligne 16 • Graham",
    files: {currentShapes: "../GeoJSON/curr-016.geojson", newShapes: "../GeoJSON/016.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Acadie", 
                      inbound: "Ouest – Boucle Thimens"},
    branchStyles: {
      "168888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "169999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "17": {title: "Ligne 17 • Décarie",
    files: {currentShapes: "../GeoJSON/curr-017.geojson", newShapes: "../GeoJSON/017.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Côte-Vertu", 
                      inbound: "Sud – Station Lionel-Groulx"},
    branchStyles: {
      "178888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "179999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "18": {title: "Ligne 18 • Beaubien",
    files: {currentShapes: "../GeoJSON/curr-018.geojson", newShapes: "../GeoJSON/018.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Honoré-Beaugrand", 
                      inbound: "Ouest – Station Beaubien"},
    branchStyles: {
      "188888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "189999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "20": {title: "Ligne 20 • Crémazie / Marché Central",
    files: {currentShapes: "../GeoJSON/curr-020.geojson", newShapes: "../GeoJSON/020.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Parc Frédéric-Back", 
                      inbound: "Ouest – Gare Ahuntsic"},
    branchStyles: {
      "208888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "209999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "22": {title: "Ligne 22 • Notre-Dame",
    files: {currentShapes: "../GeoJSON/curr-022.geojson", newShapes: "../GeoJSON/022.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Honoré-Beaugrand", 
                      inbound: "Ouest – Station Assomption"},
    branchStyles: {
      "228888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "229999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "24": {title: "Ligne 24 • Sherbrooke",
    files: {currentShapes: "../GeoJSON/curr-024.geojson", newShapes: "../GeoJSON/024.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Frontenac", 
                      inbound: "Ouest – Station Villa-Maria"},
    branchStyles: {
      "248888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "249999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "25": {title: "Ligne 25 • Angus",
    files: {currentShapes: "../GeoJSON/curr-025.geojson", newShapes: "../GeoJSON/025.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Rosemont", 
                      inbound: "Sud – Joliette / Charles-Wilson"},
    branchStyles: {
      "258888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "259999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "26": {title: "Ligne 26 • Mercier Est",
    files: {currentShapes: "../GeoJSON/curr-026.geojson", newShapes: "../GeoJSON/026.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Terminus Roger-Rousseau", 
                      inbound: "Ouest – Station Honoré-Beaugrand"},
    branchStyles: {
      "268888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "269999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "27": {title: "Ligne 27 • Saint-Joseph",
    files: {currentShapes: "../GeoJSON/curr-027.geojson", newShapes: "../GeoJSON/027.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Laurier / Pie-IX", 
                      inbound: "Ouest – Station Laurier"},
    branchStyles: {
      "270002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "270001": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "28": {title: "Ligne 28 • Honoré-Beaugrand",
    files: {currentShapes: "../GeoJSON/curr-028.geojson", newShapes: "../GeoJSON/028.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Centre de transport Anjou", 
                      inbound: "Sud – Hector-Barsalou / De Boucherville"},
    branchStyles: {
      "288888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "289999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "29": {title: "Ligne 29 • Rachel",
    files: {currentShapes: "../GeoJSON/curr-029.geojson", newShapes: "../GeoJSON/029.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Pie-IX", 
                      inbound: "Ouest – Station Place-d'Armes"},
    branchStyles: {
      "298888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "299999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Prolongement du trajet via Atateken, Viger et Notre-Dame avec terminus devant le
          Palais de justice pour remplacer la ligne 14. Trajet via Rachel jusqu'au métro
          Pie-IX pour remplacer un segment de la ligne 97;</li>
      <li>Retrait du service via Davidson et Joliette via métro Joliette (segment remplacé
          par des modifications à la ligne 25);</li>
      <li>Retrait du service sur Rachel à l'ouest du Parc La Fontaine;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de rejoindre le centre-ville et le réseau de métro du côté ouest;</li>
      <li>Permet d'avoir un service bi-directionnel dans le secteur de Davidson/Joliette;</li>
      <li>Permet une amélioration du service sur Parc-La Fontaine et Atateken;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "31": {title: "Ligne 31 • Saint-Denis",
    files: {currentShapes: "../GeoJSON/curr-031.geojson", newShapes: "../GeoJSON/031.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Saint-Hubert / Viger"},
    branchStyles: {
      "318888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "319999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "32": {title: "Ligne 32 • Lacordaire",
    files: {currentShapes: "../GeoJSON/curr-032.geojson", newShapes: "../GeoJSON/032.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Ozias-Leduc / Paul-Letondal", 
                      inbound: "Sud – Station Assomption"},
    branchStyles: {
      "328888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "329999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "33": {title: "Ligne 33 • Langelier",
    files: {currentShapes: "../GeoJSON/curr-033.geojson", newShapes: "../GeoJSON/033.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Ozias-Leduc / Paul-Letondal", 
                      inbound: "Sud – Hector-Barsalou / De Boucherville"},
    branchStyles: {
      "338888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "339999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "34": {title: "Ligne 34 • Sainte-Catherine",
    files: {currentShapes: "../GeoJSON/curr-034.geojson", newShapes: "../GeoJSON/034.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Viau", 
                      inbound: "Ouest – Station Papineau"},
    branchStyles: {
      "340002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "340001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "35": {title: "Ligne 35 • Griffintown",
    files: {currentShapes: "../GeoJSON/curr-035.geojson", newShapes: "../GeoJSON/035.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station McGill", 
                      inbound: "Ouest – Station Angrignon"},
    branchStyles: {
      "358888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "359999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "36": {title: "Ligne 36 • Monk",
    files: {currentShapes: "../GeoJSON/curr-036.geojson", newShapes: "../GeoJSON/036.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Square-Victoria–OACI", 
                      inbound: "Ouest – Station Angrignon"},
    branchStyles: {
      "368888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "369999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "37": {title: "Ligne 37 • Jolicoeur",
    files: {currentShapes: "../GeoJSON/curr-037.geojson", newShapes: "../GeoJSON/037.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station LaSalle", 
                      inbound: "Ouest – Station Angrignon"},
    branchStyles: {
      "370002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "370001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "38": {title: "Ligne 38 • De l'Église",
    files: {currentShapes: "../GeoJSON/curr-038.geojson", newShapes: "../GeoJSON/038.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Vendôme", 
                      inbound: "Sud – Station LaSalle"},
    branchStyles: {
      "388888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "389999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},  

  "39": {title: "Ligne 39 • Des Grandes-Prairies",
    files: {currentShapes: "../GeoJSON/curr-039.geojson", newShapes: "../GeoJSON/039.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Centre de transport Anjou", 
                      inbound: "Ouest – d'Amiens / de l'Hôtel-de-Ville"},
    branchStyles: {
      "390001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "390002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "40": {title: "Ligne 40 • Henri-Bourassa",
    files: {currentShapes: "../GeoJSON/curr-040.geojson", newShapes: "../GeoJSON/040.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Pointe-aux-Trembles", 
                      inbound: "Ouest – Station Radisson"},
    branchStyles: {
      "408888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "409999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "41": {title: "Ligne 41 • Ahuntsic / Saint-Michel",
    files: {currentShapes: "../GeoJSON/curr-041.geojson", newShapes: "../GeoJSON/041.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – d'Amiens / de l'Hôtel-de-Ville", 
                      inbound: "Ouest – de Liège / Jeanne-Mance"},
    branchStyles: {
      "418888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "419999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "43": {title: "Ligne 43 • Monselet",
    files: {currentShapes: "../GeoJSON/curr-043.geojson", newShapes: "../GeoJSON/043.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Centre de transport Anjou", 
                      inbound: "Ouest – Carrefour Henri-Bourassa / Pie-IX"},
    branchStyles: {
      "438888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "439999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "44": {title: "Ligne 44 • Armand-Bombardier",
    files: {currentShapes: "../GeoJSON/curr-044.geojson", newShapes: "../GeoJSON/044.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – 26e Avenue / Gouin", 
                      inbound: "Sud – Station Radisson"},
    branchStyles: {
      "440001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "440002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "45": {title: "Ligne 45 • Papineau",
    files: {currentShapes: "../GeoJSON/curr-045.geojson", newShapes: "../GeoJSON/045.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – De Saint-Firmin / Gouin", 
                      inbound: "Sud – Station Papineau"},
    branchStyles: {
      "450004": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "450003": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "47": {title: "Ligne 47 • Masson",
    files: {currentShapes: "../GeoJSON/curr-047.geojson", newShapes: "../GeoJSON/047.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Saint-Joseph / Pie-IX", 
                      inbound: "Ouest – Station Laurier"},
    branchStyles: {
      "470001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "470002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "48": {title: "Ligne 48 • Perras",
    files: {currentShapes: "../GeoJSON/curr-048.geojson", newShapes: "../GeoJSON/048.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Rivière-des-Prairies", 
                      inbound: "Ouest – Station Henri-Bourassa"},
    branchStyles: {
      "488888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "489999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "49": {title: "Ligne 49 • Maurice-Duplessis",
    files: {currentShapes: "../GeoJSON/curr-049.geojson", newShapes: "../GeoJSON/049.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Rivière-des-Prairies", 
                      inbound: "Ouest – Station Henri-Bourassa"},
    branchStyles: {
      "498888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "499999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "50": {title: "Ligne 50 • Vieux-Montréal / Vieux-Port",
    files: {currentShapes: "../GeoJSON/curr-050.geojson", newShapes: "../GeoJSON/050.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Champ-de-Mars", 
                      inbound: "Ouest – des Pins / du Docteur-Penfield"},
    branchStyles: {
      "500015": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "500014": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "51": {title: "Ligne 51 • Édouard-Montpetit",
    files: {currentShapes: "../GeoJSON/curr-051.geojson", newShapes: "../GeoJSON/051.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Laurier", 
                      inbound: "Ouest – Gare Montréal-Ouest"},
    branchStyles: {
      "510001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "510002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "52": {title: "Ligne 52 • De Liège",
    files: {currentShapes: "../GeoJSON/curr-052.geojson", newShapes: "../GeoJSON/052.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service; ligne remplacée par des modifications à la ligne 440 par le 
          remplacement du trajet industriel par une nouvelle ligne 143.</li>
    `,
    pourquoi: `
      <li>Améliorer l'efficacité du service et bonification du service sur des tronçons affectés.</li>
    `},
  
  "54": {title: "Ligne 54 • Charland / Chabanel",
    files: {currentShapes: "../GeoJSON/curr-054.geojson", newShapes: "../GeoJSON/054.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Sauvé / J.-J.-Gagnier", 
                      inbound: "Ouest – Place de la Côte-Vertu / Lebeau"},
    branchStyles: {
      "548888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "549999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "55": {title: "Ligne 55 • Saint-Laurent",
    files: {currentShapes: "../GeoJSON/curr-055.geojson", newShapes: "../GeoJSON/055.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "558888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "559999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "56": {title: "Ligne 56 • Saint-Hubert",
    files: {currentShapes: "../GeoJSON/curr-056.geojson", newShapes: "../GeoJSON/056.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Henri-Bourassa", 
                      inbound: "Sud – Station Jean-Talon"},
    branchStyles: {
      "568888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "569999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "57": {title: "Ligne 57 • Charlevoix",
    files: {currentShapes: "../GeoJSON/curr-057.geojson", newShapes: "../GeoJSON/057.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Atwater", 
                      inbound: "Sud – Dick-Irvin / Charon"},
    branchStyles: {
      "570001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "570002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "61": {title: "Ligne 61 • Wellington",
    files: {currentShapes: "../GeoJSON/curr-061.geojson", newShapes: "../GeoJSON/061.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station McGill", 
                      inbound: "Ouest – Place LaSalle"},
    branchStyles: {
      "618888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "619999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "63": {title: "Ligne 63 • Girouard",
    files: {currentShapes: "../GeoJSON/curr-063.geojson", newShapes: "../GeoJSON/063.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Vézina / Macdonald", 
                      inbound: "Sud – Station Atwater"},
    branchStyles: {
      "638888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "639999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "64": {title: "Ligne 64 • Grenet",
    files: {currentShapes: "../GeoJSON/curr-064.geojson", newShapes: "../GeoJSON/064.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – ", 
                      inbound: "Sud – "},
    branchStyles: {
      "640007": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "640008": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "66": {title: "Ligne 66 • The Boulevard",
    files: {currentShapes: "../GeoJSON/curr-066.geojson", newShapes: "../GeoJSON/066.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Guy-Concordia", 
                      inbound: "Ouest – Connaught / Westmore"},
    branchStyles: {
      "669999": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "668888": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "67": {title: "Ligne 67 • Saint-Michel",
    files: {currentShapes: "../GeoJSON/curr-067.geojson", newShapes: "../GeoJSON/067.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Saint-Michel / Henri-Bourassa", 
                      inbound: "Sud – Station Joliette"},
    branchStyles: {
      "678888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "679999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "68": {title: "Ligne 68 • Pierrefonds",
    files: {currentShapes: "../GeoJSON/curr-068.geojson", newShapes: "../GeoJSON/068.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Pierrefonds–Roxboro", 
                      inbound: "Ouest – Station Anse-à-l'Orme"},
    branchStyles: {
      "680026": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "680027": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "69": {title: "Ligne 69 • Henri-Bourassa",
    files: {currentShapes: "../GeoJSON/curr-069.geojson", newShapes: "../GeoJSON/069.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Cégep Marie-Victorin", 
                      inbound: "Ouest – Station Bois-Franc"},
    branchStyles: {
      "690028": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "690027": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "70": {title: "Ligne 70 • Poirier",
    files: {currentShapes: "../GeoJSON/curr-070.geojson", newShapes: "../GeoJSON/070.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Levy / No 5060"},
    branchStyles: {
      "700010": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "700009": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet; ajout d'un arrêt à Côte-Vertu / Marcel-Laurin;</li>
      <li>Retrait de quelques arrêts trop rapprochés ailleurs sur le parcours.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "71": {title: "Ligne 71 • Pointe-Saint-Charles",
    files: {currentShapes: "../GeoJSON/curr-071.geojson", newShapes: "../GeoJSON/071.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Guy-Concordia", 
                      inbound: "Sud – Station De L'Église"},
    branchStyles: {
      "718888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "719999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "72": {title: "Ligne 72 • Alfred-Nobel",
    files: {currentShapes: "../GeoJSON/curr-072.geojson", newShapes: "../GeoJSON/072.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "720012": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "720011": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet; ajout d'un arrêt à Côte-Vertu / Place Vertu 
          et Côte-Vertu / Montée de Liesse</li>
      <li>Retrait de quelques arrêts trop rapprochés ailleurs sur le parcours.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "73": {title: "Ligne 73 • Dalton",
    files: {currentShapes: "../GeoJSON/curr-073.geojson", newShapes: "../GeoJSON/073.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Boucle - Cavendish / Griffith", 
                      inbound: "Boucle - Station Côte-Vertu"},
    branchStyles: {
      "739999": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "738888": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet: desserte en boucle maintenue avec deux 
          directions indiquées pour mieux guider la clientèle.</li>
      <li>Service redirigé vers Côte-Vertu puisque toutes les autres lignes du 
          secteur se dirige vers Du Collège ou De La Savane;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer l'expérience client en ayant deux destinations pour éviter 
          des confusions.</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "74": {title: "Ligne 74 • Bridge",
    files: {currentShapes: "../GeoJSON/curr-074.geojson", newShapes: "../GeoJSON/074.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Gare Lucien-L'Allier", 
                      inbound: "Sud – Carrie-Derick / Marc-Cantin"},
    branchStyles: {
      "748888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "749999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "79": {title: "Ligne 79 • Gouin",
    files: {currentShapes: "../GeoJSON/curr-079.geojson", newShapes: "../GeoJSON/079.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Henri-Bourassa", 
                      inbound: "Ouest – Station Pierrefonds–Roxboro"},
    branchStyles: {
      "790002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "790001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "80": {title: "Ligne 80 • Avenue du Parc",
    files: {currentShapes: "../GeoJSON/curr-080.geojson", newShapes: "../GeoJSON/080.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Aréna Howie-Morenz", 
                      inbound: "Sud – Station Place-des-Arts"},
    branchStyles: {
      "800002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "809999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "81": {title: "Ligne 81 • Saint-Jean-Baptiste",
    files: {currentShapes: "../GeoJSON/curr-081.geojson", newShapes: "../GeoJSON/081.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Gare Rivière-des-Prairies", 
                      inbound: "Sud – Prince-Albert / 9e Avenue"},
    branchStyles: {
      "818888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "819999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "85": {title: "Ligne 85 • Hochelaga",
    files: {currentShapes: "../GeoJSON/curr-085.geojson", newShapes: "../GeoJSON/085.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – des Sciences / des Bâtisseurs", 
                      inbound: "Ouest – Station Frontenac"},
    branchStyles: {
      "858888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "859999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "86": {title: "Ligne 86 • Pointe-aux-Trembles",
    files: {currentShapes: "../GeoJSON/curr-086.geojson", newShapes: "../GeoJSON/086.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Pointe-aux-Trembles", 
                      inbound: "Ouest – 58e Avenue / Gouin"},
    branchStyles: {
      "868888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "869999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "90": {title: "Ligne 90 • Saint-Jacques",
    files: {currentShapes: "../GeoJSON/curr-090.geojson", newShapes: "../GeoJSON/090.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Vendôme", 
                      inbound: "Ouest – Esther-Blondin / Duff Court"},
    branchStyles: {
      "900001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "900004": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "92": {title: "Ligne 92 • Jean-Talon Ouest",
    files: {currentShapes: "../GeoJSON/curr-092.geojson", newShapes: "../GeoJSON/092.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Jean-Talon", 
                      inbound: "Ouest – Station De La Savane"},
    branchStyles: {
      "920012": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "920011": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "93": {title: "Ligne 93 • Jean-Talon",
    files: {currentShapes: "../GeoJSON/curr-093.geojson", newShapes: "../GeoJSON/093.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Vertières", 
                      inbound: "Ouest – Station Parc"},
    branchStyles: {
      "938888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "939999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "94": {title: "Ligne 94 • D'Iberville",
    files: {currentShapes: "../GeoJSON/curr-094.geojson", newShapes: "../GeoJSON/094.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Cirque du Soleil", 
                      inbound: "Sud – du Havre / Sainte-Catherine"},
    branchStyles: {
      "940001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "940002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "95": {title: "Ligne 95 • Bélanger",
    files: {currentShapes: "../GeoJSON/curr-095.geojson", newShapes: "../GeoJSON/095.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Anjou", 
                      inbound: "Ouest – Station Jean-Talon"},
    branchStyles: {
      "958888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "959999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "97": {title: "Ligne 97 • Avenue du Mont-Royal",
    files: {currentShapes: "../GeoJSON/curr-097.geojson", newShapes: "../GeoJSON/097.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Préfontaine", 
                      inbound: "Ouest – Parc du Mont-Royal"},
    branchStyles: {
      "978888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "979999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "99": {title: "Ligne 99 • Villeray",
    files: {currentShapes: "../GeoJSON/curr-099.geojson", newShapes: "../GeoJSON/099.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Vertières", 
                      inbound: "Ouest – Station Jean-Talon"},
    branchStyles: {
      "998888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "999999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "100": {title: "Ligne 100 • Crémazie",
    files: {currentShapes: "../GeoJSON/curr-100.geojson", newShapes: "../GeoJSON/100.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Crémazie", 
                      inbound: "Ouest – Terminus CAE"},
    branchStyles: {
      "1008888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1009999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "101": {title: "Ligne 101 • Saint-Patrick",
    files: {currentShapes: "../GeoJSON/curr-101.geojson", newShapes: "../GeoJSON/101.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Riverview / Airlie"},
    branchStyles: {
      "1018888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1019999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "102": {title: "Ligne 102 • Somerled",
    files: {currentShapes: "../GeoJSON/curr-102.geojson", newShapes: "../GeoJSON/102.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service: ligne fusionnée avec la ligne 66.</li>
    `,
    pourquoi: `
      <li>Permettre un accès direct au centre-ville.</li>
    `},
  
  "103": {title: "Ligne 103 • Monkland",
    files: {currentShapes: "../GeoJSON/curr-103.geojson", newShapes: "../GeoJSON/103.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Villa-Maria", 
                      inbound: "Ouest – Côte-Saint-Luc / Hudson"},
    branchStyles: {
      "1030001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1030002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "104": {title: "Ligne 104 • Cavendish",
    files: {currentShapes: "../GeoJSON/curr-104.geojson", newShapes: "../GeoJSON/104.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Atwater", 
                      inbound: "Ouest – Collins / Cavendish"},
    branchStyles: {
      "1048888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1049999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "105": {title: "Ligne 105 • Sherbrooke",
    files: {currentShapes: "../GeoJSON/curr-105.geojson", newShapes: "../GeoJSON/105.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Vendôme", 
                      inbound: "Ouest – Gare Montréal-Ouest"},
    branchStyles: {
      "1050002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1050001": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "106": {title: "Ligne 106 • Newman",
    files: {currentShapes: "../GeoJSON/curr-106.geojson", newShapes: "../GeoJSON/106.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Angrignon", 
                      inbound: "Ouest – Terminus Lafleur / Newman"},
    branchStyles: {
      "1060002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1060001": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "107": {title: "Ligne 107 • Verdun",
    files: {currentShapes: "../GeoJSON/curr-107.geojson", newShapes: "../GeoJSON/107.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Square Dorchester", 
                      inbound: "Ouest – Place LaSalle"},
    branchStyles: {
      "1078888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1079999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "108": {title: "Ligne 108 • Bannantyne",
    files: {currentShapes: "../GeoJSON/curr-108.geojson", newShapes: "../GeoJSON/108.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Atwater", 
                      inbound: "Ouest – Parc Hadley"},
    branchStyles: {
      "1080001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1080011": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "110": {title: "Ligne 110 • Centrale",
    files: {currentShapes: "../GeoJSON/curr-110.geojson", newShapes: "../GeoJSON/110.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Angrignon", 
                      inbound: "Ouest – Galeries Lachine"},
    branchStyles: {
      "1100018": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1100003": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "112": {title: "Ligne 112 • Airlie",
    files: {currentShapes: "../GeoJSON/curr-112.geojson", newShapes: "../GeoJSON/112.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Jolicoeur", 
                      inbound: "Ouest – Terminus Lafleur / Newman"},
    branchStyles: {
      "1120001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1120002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "113": {title: "Ligne 113 • Lapierre",
    files: {currentShapes: "../GeoJSON/curr-113.geojson", newShapes: "../GeoJSON/113.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Angrignon", 
                      inbound: "Ouest – Terminus Lafleur / Newman"},
    branchStyles: {
      "1130002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1130001": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "114": {title: "Ligne 114 • Angrignon",
    files: {currentShapes: "../GeoJSON/curr-114.geojson", newShapes: "../GeoJSON/114.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Gare Montréal-Ouest", 
                      inbound: "Sud – Place LaSalle"},
    branchStyles: {
      "1148888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1149999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "117": {title: "Ligne 117 • O'Brien",
    files: {currentShapes: "../GeoJSON/curr-117.geojson", newShapes: "../GeoJSON/117.geojson",
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Terminus Grenet / De Serres", 
                      inbound: "Sud – Station Du Collège"},
    branchStyles: {
      "1178888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1179999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "119": {title: "Ligne 119 • Rockland",
    files: {currentShapes: "../GeoJSON/curr-119.geojson", newShapes: "../GeoJSON/119.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Laurier", 
                      inbound: "Ouest – Station Ville-de-Mont-Royal"},
    branchStyles: {
      "1190007": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1190006": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "120": {title: "Ligne 120 • Royalmount",
    files: {currentShapes: "../GeoJSON/curr-120.geojson", newShapes: "../GeoJSON/120.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station De La Savane", 
                      inbound: "Sud – Station Namur"},
    branchStyles: {
      "1200001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1200003": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Ajustement du point de départ en direction nord;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "121": {title: "Ligne 121 • Sauvé / Côte-Vertu",
    files: {currentShapes: "../GeoJSON/curr-121.geojson", newShapes: "../GeoJSON/121.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Saint-Michel / Sauvé", 
                      inbound: "Ouest – Place Vertu"},
    branchStyles: {
      "1219001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1210002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "123": {title: "Ligne 123 • Dollard / Shevchenko",
    files: {currentShapes: "../GeoJSON/curr-123.geojson", newShapes: "../GeoJSON/123.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Saint-Jacques / Richardson", 
                      inbound: "Sud – Place LaSalle"},
    branchStyles: {
      "1238888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1239999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "124": {title: "Ligne 124 • Victoria",
    files: {currentShapes: "../GeoJSON/curr-124.geojson", newShapes: "../GeoJSON/124.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Côte-de-Liesse", 
                      inbound: "Sud – Station Vendôme"},
    branchStyles: {
      "1240010": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1240011": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "125": {title: "Ligne 125 • Ontario",
    files: {currentShapes: "../GeoJSON/curr-125.geojson", newShapes: "../GeoJSON/125.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Viau", 
                      inbound: "Ouest – Station Place-des-Arts"},
    branchStyles: {
      "1250002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1250001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "127": {title: "Ligne 127 • Alexis-Nihon",
    files: {currentShapes: "../GeoJSON/curr-127.geojson", newShapes: "../GeoJSON/127.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Bois-Franc", 
                      inbound: "Sud – Station Du Collège"},
    branchStyles: {
      "1278888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1279999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Déplacement du terminus nord dans la boucle de bus à Bois-Franc;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Avoir un meilleur point d'accès vers le REM Bois-Franc;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "128": {title: "Ligne 128 • Saint-Laurent",
    files: {currentShapes: "../GeoJSON/curr-128.geojson", newShapes: "../GeoJSON/128.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Muir / Montpellier", 
                      inbound: "Sud – Station Côte-de-Liesse"},
    branchStyles: {
      "1280023": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1280022": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "129": {title: "Ligne 129 • Côte-Sainte-Catherine",
    files: {currentShapes: "../GeoJSON/curr-129.geojson", newShapes: "../GeoJSON/129.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Clanranald / Isabella", 
                      inbound: "Sud – Station Place-d'Armes"},
    branchStyles: {
      "1298888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1299999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "131": {title: "Ligne 131 • De l'Assomption",
    files: {currentShapes: "../GeoJSON/curr-131.geojson", newShapes: "../GeoJSON/131.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Antonio-Dagenais / Lespinay", 
                      inbound: "Sud – Viau / Sainte-Catherine"},
    branchStyles: {
      "1318888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1319999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "136": {title: "Ligne 136 • Viau",
    files: {currentShapes: "../GeoJSON/curr-136.geojson", newShapes: "../GeoJSON/136.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – des Grandes-Prairies / No 5940", 
                      inbound: "Sud – Station Viau"},
    branchStyles: {
      "1360001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1360002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "138": {title: "Ligne 138 • Notre-Dame-de-Grâce",
    files: {currentShapes: "../GeoJSON/curr-138.geojson", newShapes: "../GeoJSON/138.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service: service absorbé par la ligne 104.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur la ligne 104.</li>
    `},
  
  "139": {title: "Ligne 139 • Pie-IX",
    files: {currentShapes: "../GeoJSON/curr-139.geojson", newShapes: "../GeoJSON/139.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Carrefour Henri-Bourassa / Pie-IX", 
                      inbound: "Sud – Pie-IX / Notre-Dame"},
    branchStyles: {
      "1390001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1390002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "140": {title: "Ligne 140 • Fleury",
    files: {currentShapes: "../GeoJSON/curr-140.geojson", newShapes: "../GeoJSON/140.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – d'Amos / Lacordaire", 
                      inbound: "Ouest – Gare Ahuntsic"},
    branchStyles: {
      "1408888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1409999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "141": {title: "Ligne 141 • Jean-Talon Est",
    files: {currentShapes: "../GeoJSON/curr-141.geojson", newShapes: "../GeoJSON/141.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Anjou", 
                      inbound: "Ouest – Station Vertières"},
    branchStyles: {
      "1418888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1419999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "144": {title: "Ligne 144 • Des Pins",
    files: {currentShapes: "../GeoJSON/curr-144.geojson", newShapes: "../GeoJSON/144.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Sherbrooke", 
                      inbound: "Ouest – Station Atwater"},
    branchStyles: {
      "1440002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1440001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "150": {title: "Ligne 150 • René-Lévesque",
    files: {currentShapes: "../GeoJSON/curr-150.geojson", newShapes: "../GeoJSON/150.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Papineau", 
                      inbound: "Ouest – Station Atwater"},
    branchStyles: {
      "1508888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1509999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "155": {title: "Ligne 155 • Wilderton",
    files: {currentShapes: "../GeoJSON/curr-155.geojson", newShapes: "../GeoJSON/155.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Canora", 
                      inbound: "Sud – Station Édouard-Montpetit"},
    branchStyles: {
      "1558888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1559999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "160": {title: "Ligne 160 • Barclay",
    files: {currentShapes: "../GeoJSON/curr-160.geojson", newShapes: "../GeoJSON/160.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Beaubien", 
                      inbound: "Ouest – Clanranald / David-Lewis"},
    branchStyles: {
      "1600014": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1600015": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "161": {title: "Ligne 161 • Van Horne",
    files: {currentShapes: "../GeoJSON/curr-161.geojson", newShapes: "../GeoJSON/161.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Rosemont", 
                      inbound: "Ouest – Kildare / Westminster"},
    branchStyles: {
      "1610016": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1610017": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "162": {title: "Ligne 162 • Westminster",
    files: {currentShapes: "../GeoJSON/curr-162.geojson", newShapes: "../GeoJSON/162.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Villa-Maria", 
                      inbound: "Ouest – Heywood / Cavendish"},
    branchStyles: {
      "1628888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1629999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "164": {title: "Ligne 164 • Dudemaine",
    files: {currentShapes: "../GeoJSON/curr-164.geojson", newShapes: "../GeoJSON/164.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Henri-Bourassa", 
                      inbound: "Ouest – Centre de transport Saint-Laurent"},
    branchStyles: {
      "1640001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1640002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "165": {title: "Ligne 165 • Côte-des-Neiges",
    files: {currentShapes: "../GeoJSON/curr-165.geojson", newShapes: "../GeoJSON/165.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Ville-de-Mont-Royal", 
                      inbound: "Sud – Station Guy-Concordia"},
    branchStyles: {
      "1650002": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1650001": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "166": {title: "Ligne 166 • Queen-Mary",
    files: {currentShapes: "../GeoJSON/curr-166.geojson", newShapes: "../GeoJSON/166.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Côte-des-Neiges", 
                      inbound: "Sud – Station Guy-Concordia"},
    branchStyles: {
      "1668888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1669999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "168": {title: "Ligne 168 • Cité-du-Havre",
    files: {currentShapes: "../GeoJSON/curr-168.geojson", newShapes: "../GeoJSON/168.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Bonaventure", 
                      inbound: "Sud – André-Prévost / Serge-Garant"},
    branchStyles: {
      "1688888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1689999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "170": {title: "Ligne 170 • Keller",
    files: {currentShapes: "../GeoJSON/curr-170.geojson", newShapes: "../GeoJSON/170.geojson",
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Jean-Bourdon / Louis-Jadon", 
                      inbound: "Sud – Station Côte-Vertu"},
    branchStyles: {
      "1700010": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1700009": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "171": {title: "Ligne 171 • Henri-Bourassa",
    files: {currentShapes: "../GeoJSON/curr-171.geojson", newShapes: "../GeoJSON/171.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Henri-Bourassa", 
                      inbound: "Ouest – Station Côte-Vertu"},
    branchStyles: {
      "1718888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1719999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Léger ajustement du point de départ à la station Côte-Vertu;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Déplacement du terminus pour une localisation plus 
          proche des lignes 121 et 177;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "172": {title: "Ligne 172 • Du Golf",
    files: {currentShapes: "../GeoJSON/curr-172.geojson", newShapes: "../GeoJSON/172.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord", inbound: "Sud"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service; ligne remplacée par des lignes courtes sur la ligne 12.</li>
    `,
    pourquoi: `
      <li>Améliorer l'efficacité du service et bonification du service entre REM et Pointe-Sud.</li>
    `},
  
  "174": {title: "Ligne 174 • Côte-Vertu",
    files: {currentShapes: "../GeoJSON/curr-174.geojson", newShapes: "../GeoJSON/174.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Montpellier", 
                      inbound: "Ouest – Air Canada"},
    branchStyles: {
      "1740005": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1740004": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Léger ajustement du terminus ouest;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Déplacement du terminus pour une localisation plus 
          proche des générateurs de déplacements;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "175": {title: "Ligne 175 • Griffith",
    files: {currentShapes: "../GeoJSON/curr-175.geojson", newShapes: "../GeoJSON/175.geojson",
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Du Collège", 
                      inbound: "Ouest – Saint-Amour / Saint-François"},
    branchStyles: {
      "1750008": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1750007": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "176": {title: "Ligne 176 • Berlioz",
    files: {currentShapes: "../GeoJSON/curr-176.geojson", newShapes: "../GeoJSON/176.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord", inbound: "Sud"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service; ligne remplacée par des lignes courtes sur la ligne 168.</li>
    `,
    pourquoi: `
      <li>Améliorer l'efficacité du service et bonification du service entre le REM et la pointe-Sud.</li>
    `},
  
  "177": {title: "Ligne 177 • Thimens",
    files: {currentShapes: "../GeoJSON/curr-177.geojson", newShapes: "../GeoJSON/177.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est - Thompson / Grimard", 
                      inbound: "Ouest – Centre de transport Saint-Laurent"},
    branchStyles: {
      "1770007": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1770008": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "179": {title: "Ligne 179 • De l'Acadie",
    files: {currentShapes: "../GeoJSON/curr-179.geojson", newShapes: "../GeoJSON/179.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – de l'Acadie / De Salaberry", 
                      inbound: "Sud – Station Parc"},
    branchStyles: {
      "1798888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1799999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "180": {title: "Ligne 180 • De Salaberry",
    files: {currentShapes: "../GeoJSON/curr-180.geojson", newShapes: "../GeoJSON/180.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Sauvé", 
                      inbound: "Ouest – Terminus Grenet / De Serres"},
    branchStyles: {
      "1800012": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1800013": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "182": {title: "Ligne 182 • Hochelaga / des Ormeaux",
    files: {currentShapes: "../GeoJSON/curr-182.geojson", newShapes: "../GeoJSON/182.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Georges-V / Notre-Dame", 
                      inbound: "Ouest – Station Anjou"},
    branchStyles: {
      "1828888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1829999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "183": {title: "Ligne 183 • Gouin Est",
    files: {currentShapes: "../GeoJSON/curr-183.geojson", newShapes: "../GeoJSON/183.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Terminus Sherbrooke / Gouin", 
                      inbound: "Sud – Gare Rivière-des-Prairies"},
    branchStyles: {
      "1838888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1839999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "184": {title: "Ligne 184 • Jean-Grou / Industriel",
    files: {currentShapes: "../GeoJSON/curr-184.geojson", newShapes: "../GeoJSON/184.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Pointe-aux-Trembles", 
                      inbound: "Ouest – Station Honoré-Beaugrand"},
    branchStyles: {
      "1848888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1849999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "185": {title: "Ligne 185 • Sherbrooke",
    files: {currentShapes: "../GeoJSON/curr-185.geojson", newShapes: "../GeoJSON/185.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Claude-Masson / Robitaille", 
                      inbound: "Ouest – Station Frontenac"},
    branchStyles: {
      "1858888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1859999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "186": {title: "Ligne 186 • Sherbrooke Est",
    files: {currentShapes: "../GeoJSON/curr-186.geojson", newShapes: "../GeoJSON/186.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – 100e Avenue / Bureau", 
                      inbound: "Ouest – Station Honoré-Beaugrand"},
    branchStyles: {
      "1868888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1869999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "187": {title: "Ligne 187 • René-Lévesque",
    files: {currentShapes: "../GeoJSON/curr-187.geojson", newShapes: "../GeoJSON/187.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – 42e Avenue / Henri-Bourassa", 
                      inbound: "Ouest – Station Honoré-Beaugrand"},
    branchStyles: {
      "1878888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1879999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "188": {title: "Ligne 188 • Couture",
    files: {currentShapes: "../GeoJSON/curr-188.geojson", newShapes: "../GeoJSON/188.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Anjou", 
                      inbound: "Ouest – Station Saint-Michel"},
    branchStyles: {
      "1888888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1889999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "189": {title: "Ligne 189 • Notre-Dame",
    files: {currentShapes: "../GeoJSON/curr-189.geojson", newShapes: "../GeoJSON/189.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Terminus Sherbrooke / Gouin", 
                      inbound: "Ouest – Station Honoré-Beaugrand"},
    branchStyles: {
      "1898888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1899999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "190": {title: "Ligne 190 • Norman",
    files: {currentShapes: "../GeoJSON/curr-190.geojson", newShapes: "../GeoJSON/190.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Norman / Claire"},
    branchStyles: {
      "1900004": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1909999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "192": {title: "Ligne 192 • Robert",
    files: {currentShapes: "../GeoJSON/curr-192.geojson", newShapes: "../GeoJSON/192.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Centre de transport Anjou", 
                      inbound: "Ouest – Station Crémazie"},
    branchStyles: {
      "1920002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1920001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "193": {title: "Ligne 193 • Jarry",
    files: {currentShapes: "../GeoJSON/curr-193.geojson", newShapes: "../GeoJSON/193.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est - Jarry / Louis-H.-La Fontaine", 
                      inbound: "Ouest – Aréna Howie-Morenz"},
    branchStyles: {
      "1930001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1930002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "195": {title: "Ligne 195 • Dorval / Angrignon",
    files: {currentShapes: "../GeoJSON/curr-195.geojson", newShapes: "../GeoJSON/195.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Angrignon", 
                      inbound: "Ouest – Terminus Dorval"},
    branchStyles: {
      "1950004": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1950005": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "196": {title: "Ligne 196 • Parc Industriel Saint-Laurent",
    files: {currentShapes: "../GeoJSON/curr-196.geojson", newShapes: "../GeoJSON/196.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord - Station Côte-Vertu", 
                      inbound: "Sud – Galeries Lachine"},
    branchStyles: {
      "1960015": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1960016": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "197": {title: "Ligne 197 • Rosemont",
    files: {currentShapes: "../GeoJSON/curr-197.geojson", newShapes: "../GeoJSON/197.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est - ?", 
                      inbound: "Ouest – Station Rosemont"},
    branchStyles: {
      "1978888": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "1979999": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "198": {title: "Ligne 198 • Broadway",
    files: {currentShapes: "../GeoJSON/curr-198.geojson", newShapes: "../GeoJSON/198.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Angrignon", 
                      inbound: "Ouest – Terminus Dorval"},
    branchStyles: {
      "1980014": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1980001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "200": {title: "Ligne 200 • Sainte-Anne-de-Bellevue",
    files: {currentShapes: "../GeoJSON/curr-200.geojson", newShapes: "../GeoJSON/200.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Fairview-Pointe-Claire", 
                      inbound: "Ouest – Terminus Macdonald"},
    branchStyles: {
      "2000007": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2000008": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "201": {title: "Ligne 201 • Saint-Charles",
    files: {currentShapes: "../GeoJSON/curr-201.geojson", newShapes: "../GeoJSON/201.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Saint-Pierre / de Pierrefonds", 
                      inbound: "Sud – Gare Beaconsfield"},
    branchStyles: {
      "2010023": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2010022": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "202": {title: "Ligne 202 • Dawson",
    files: {currentShapes: "../GeoJSON/curr-202.geojson", newShapes: "../GeoJSON/202.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Stuart-Graham / No 951", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2028888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2029999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "203": {title: "Ligne 203 • Carson",
    files: {currentShapes: "../GeoJSON/curr-203.geojson", newShapes: "../GeoJSON/203.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Terminus Dorval", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2030015": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2030014": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "204": {title: "Ligne 204 • Cardinal",
    files: {currentShapes: "../GeoJSON/curr-204.geojson", newShapes: "../GeoJSON/204.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Gare Pine Beach", 
                      inbound: "Ouest – Station Des Sources"},
    branchStyles: {
      "2048888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2049999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "205": {title: "Ligne 205 • Gouin",
    files: {currentShapes: "../GeoJSON/curr-205.geojson", newShapes: "../GeoJSON/205.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Pierrefonds–Roxboro", 
                      inbound: "Ouest – Station Fairview-Pointe-Claire"},
    branchStyles: {
      "2050009": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2050008": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "206": {title: "Ligne 206 • Roger-Pilon",
    files: {currentShapes: "../GeoJSON/curr-206.geojson", newShapes: "../GeoJSON/206.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Place Riviera", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2060005": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2060006": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "207": {title: "Ligne 207 • Jacques-Bizard",
    files: {currentShapes: "../GeoJSON/curr-207.geojson", newShapes: "../GeoJSON/207.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – des Bruants / Jacques-Bizard", 
                      inbound: "Sud – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2070005": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2070006": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "208": {title: "Ligne 208 • Brunswick",
    files: {currentShapes: "../GeoJSON/curr-208.geojson", newShapes: "../GeoJSON/208.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Pierrefonds–Roxboro", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2088888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2089999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "209": {title: "Ligne 209 • Des Sources / YUL Aéroport",
    files: {currentShapes: "../GeoJSON/curr-209.geojson", newShapes: "../GeoJSON/209.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Pierrefonds–Roxboro", 
                      inbound: "Sud – YUL Aéroport"},
    branchStyles: {
      "2090011": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2090010": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "210": {title: "Ligne 210 • John Abbott",
    files: {currentShapes: "../GeoJSON/curr-210.geojson", newShapes: "../GeoJSON/210.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Anse-à-l'Orme", 
                      inbound: "Ouest – Collège John Abbott"},
    branchStyles: {
      "2100001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2100002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "211": {title: "Ligne 211 • Bord-du-Lac",
    files: {currentShapes: "../GeoJSON/curr-211.geojson", newShapes: "../GeoJSON/211.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Station Anse-à-l'Orme"},
    branchStyles: {
      "2110016": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "2110017": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "2110015": {line: {color: "#781B7D", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "2110018": {line: {color: "#8B469E", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "212": {title: "Ligne 212 • Sainte-Anne",
    files: {currentShapes: "../GeoJSON/curr-212.geojson", newShapes: "../GeoJSON/212.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Boucle - Gare Sainte-Anne-de-Bellevue", 
                      inbound: "Boucle - Station Anse-à-l'Orme"},
    branchStyles: {
      "2129999": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2128888": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet: desserte en boucle maintenue avec deux directions
          indiquées pour mieux guider la clientèle;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer l'expérience client en ayant deux destinations pour éviter 
          des confusions;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "214": {title: "Ligne 214 • Stuart-Graham / YUL Aéroport",
    files: {currentShapes: "../GeoJSON/curr-214.geojson", newShapes: "../GeoJSON/214.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait complet du service: remplacé par des modifications de la ligne 202;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de réduire la longueur de la ligne 202 et concentrer le niveau de service
          entre Dorval et REM Côte-de-Liesse par la nouvelle ligne 232;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "215": {title: "Ligne 215 • Henri-Bourassa / Brunswick",
    files: {currentShapes: "../GeoJSON/curr-215.geojson", newShapes: "../GeoJSON/215.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2150014": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2150016": {line: {color: "#009EE0", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2150015": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "2150017": {line: {color: "#5DBDEA", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "216": {title: "Ligne 216 • Transcanadienne",
    files: {currentShapes: "../GeoJSON/curr-216.geojson", newShapes: "../GeoJSON/216.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Station Des Sources"},
    branchStyles: {
      "2160006": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2160005": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "218": {title: "Ligne 218 • Antoine-Faucon",
    files: {currentShapes: "../GeoJSON/curr-218.geojson", newShapes: "../GeoJSON/218.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Fairview–Pointe-Claire", 
                      inbound: "Ouest – de Pierrefonds / du Château-Pierrefonds"},
    branchStyles: {
      "2180005": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2180004": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "220": {title: "Ligne 220 • Kieran",
    files: {currentShapes: "../GeoJSON/curr-220.geojson", newShapes: "../GeoJSON/220.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Du Collège", 
                      inbound: "Ouest – Kieran / Douglas-B.-Floreani"},
    branchStyles: {
      "2208888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2200003": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "221": {title: "Ligne 221 • Saint-Jean",
    files: {currentShapes: "../GeoJSON/curr-221.geojson", newShapes: "../GeoJSON/221.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Fairview–Pointe-Claire", 
                      inbound: "Sud – Gare Beaconsfield"},
    branchStyles: {
      "2210002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2210001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "222": {title: "Ligne 222 • Senneville",
    files: {currentShapes: "../GeoJSON/curr-222.geojson", newShapes: "../GeoJSON/222.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Boucle - Senneville", 
                      inbound: "Boucle - Station Anse-à-l'Orme"},
    branchStyles: {
      "2229999": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2228888": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet: desserte en boucle maintenue avec deux 
          directions indiquées pour mieux guider la clientèle.</li>
    `,
    pourquoi: `
      <li>Améliorer l'expérience client en ayant deux destinations pour éviter 
          des confusions.</li>
    `},

  "223": {title: "Ligne 223 • Parc Industriel Baie-D'Urfé",
    files: {currentShapes: "../GeoJSON/curr-223.geojson", newShapes: "../GeoJSON/223.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Boucle - Parc Industriel Baie-D'Urfé", 
                      inbound: "Boucle - Station Anse-à-l'Orme"},
    branchStyles: {
      "2239999": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2238888": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Aucune modification de trajet: desserte en boucle maintenue avec deux 
          directions indiquées pour mieux guider la clientèle.</li>
    `,
    pourquoi: `
      <li>Améliorer l'expérience client en ayant deux destinations pour éviter 
          des confusions.</li>
    `},

  "225": {title: "Ligne 225 • Hymus",
    files: {currentShapes: "../GeoJSON/curr-225.geojson", newShapes: "../GeoJSON/225.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2250013": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2250012": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "227": {title: "Ligne 227 • Île-Bizard",
    files: {currentShapes: "../GeoJSON/curr-227.geojson", newShapes: "../GeoJSON/227.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Bellevue / Laurier", 
                      inbound: "Sud – Station Fairview–Pointe-Claire"},
    branchStyles: {
      "2270002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2270001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "229": {title: "Ligne 229 • Transcanadienne / Brunswick",
    files: {currentShapes: "../GeoJSON/curr-229.geojson", newShapes: "../GeoJSON/229.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Fairview–Pointe-Claire", 
                      inbound: "Ouest – Station Anse-à-l'Orme"},
    branchStyles: {
      "2290002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2290001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "230": {title: "Ligne 230 • Saint-Louis",
    files: {currentShapes: "../GeoJSON/curr-230.geojson", newShapes: "../GeoJSON/230.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Des Sources", 
                      inbound: "Ouest – Saint-Jean / Gouin"},
    branchStyles: {
      "2300002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2300001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "2300004": {line: {color: "#009EE0", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2300003": {line: {color: "#5DBDEA", weight: 4, opacity: 1, dashArray: "5,10"},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "232": {title: "Ligne 232 • Côte-de-Liesse",
    files: {currentShapes: "../GeoJSON/curr-232.geojson", newShapes: "../GeoJSON/232.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-de-Liesse", 
                      inbound: "Ouest – Terminus Dorval"},
    branchStyles: {
      "2328888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "2329999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Reprend la portion du trajet sur la ligne 202 entre Dorval et Côte-de-Liesse;</li>
      <li>Trajet via du Collège au lieu de Saint-Louis pour conformer au trajet de la ligne 128;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur le segment plus achalandé;</li>
      <li>Permet d'améliorer la ponctualité;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},  
  
  "350": {title: "Ligne 350 • Verdun / LaSalle",
    files: {currentShapes: "../GeoJSON/curr-350.geojson", newShapes: "../GeoJSON/350.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-352.geojson", newShapes: "../GeoJSON/352.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station McGill", 
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
    files: {currentShapes: "../GeoJSON/curr-353.geojson", newShapes: "../GeoJSON/353.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-354.geojson", newShapes: "../GeoJSON/354.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-355.geojson", newShapes: "../GeoJSON/355.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-356.geojson", newShapes: "../GeoJSON/356.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-357.geojson", newShapes: "../GeoJSON/357.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-358.geojson", newShapes: "../GeoJSON/358.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-359.geojson", newShapes: "../GeoJSON/359.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-360.geojson", newShapes: "../GeoJSON/360.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-361.geojson", newShapes: "../GeoJSON/361.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-362.geojson", newShapes: "../GeoJSON/362.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-363.geojson", newShapes: "../GeoJSON/363.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-364.geojson", newShapes: "../GeoJSON/364.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-365.geojson", newShapes: "../GeoJSON/365.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-368.geojson", newShapes: "../GeoJSON/368.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-369.geojson", newShapes: "../GeoJSON/369.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-370.geojson", newShapes: "../GeoJSON/370.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-371.geojson", newShapes: "../GeoJSON/371.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-372.geojson", newShapes: "../GeoJSON/372.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-375.geojson", newShapes: "../GeoJSON/375.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-376.geojson", newShapes: "../GeoJSON/376.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-378.geojson", newShapes: "../GeoJSON/378.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-380.geojson", newShapes: "../GeoJSON/380.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    files: {currentShapes: "../GeoJSON/curr-382.geojson", newShapes: "../GeoJSON/382.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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

  "410": {title: "Ligne 410 • Express Notre-Dame",
    files: {currentShapes: "../GeoJSON/curr-410.geojson", newShapes: "../GeoJSON/410.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – 100e Avenue / Bureau", 
                      inbound: "Ouest – Station Bonaventure"},
    branchStyles: {
      "4108888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4109999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "411": {title: "Ligne 411 • Express Lionel-Groulx",
    files: {currentShapes: "../GeoJSON/curr-411.geojson", newShapes: "../GeoJSON/411.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Terminus Macdonald"},
    branchStyles: {
      "4110005": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4110006": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Déplacement du point de départ à Lakeshore / Macdonald (devancé d'un quai);</li>
      <li>Retrait de certains arrêts locaux tout au long de Lakeshore pour accélérer le service;</li>
      <li>Retrait de quelques arrêts trop rapprochés ailleurs sur le parcours.</li>
    `,
    pourquoi: `
      <li>Pour accélérer le parcours en une vraie ligne express tout au long du trajet;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "420": {title: "Ligne 420 • Express Notre-Dame-de-Grâce",
    files: {currentShapes: "../GeoJSON/curr-420.geojson", newShapes: "../GeoJSON/420.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Place-des-Arts", 
                      inbound: "Ouest – Côte-Saint-Luc / Westminster"},
    branchStyles: {
      "4208888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4209999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "427": {title: "Ligne 427 • Express Saint-Joseph",
    files: {currentShapes: "../GeoJSON/curr-427.geojson", newShapes: "../GeoJSON/427.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait définitif du service.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur la ligne 27 pour améliorer sa fréquence.</li>
    `},

  "428": {title: "Ligne 428 • Express Parcs Industriels de l'Est",
    files: {currentShapes: "../GeoJSON/curr-428.geojson", newShapes: "../GeoJSON/428.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord", inbound: "Sud"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Ligne remplacée par des modifications à la ligne 40.</li>
    `,
    pourquoi: `
      <li>Améliorer l'accès hors pointe vers les stations Anjou et Radisson.</li>
    `},
  
  "430": {title: "Ligne 430 • Express Pointe-aux-Trembles",
    files: {currentShapes: "../GeoJSON/curr-430.geojson", newShapes: "../GeoJSON/430.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service: ligne fusionnée avec 410 Express Notre-Dame.</li>
    `,
    pourquoi: `
      <li>Consolider la desserte sur une seule ligne pour améliorer la fréquence.</li>
    `},

  "432": {title: "Ligne 432 • Express Lacordaire",
    files: {currentShapes: "../GeoJSON/curr-432.geojson", newShapes: "../GeoJSON/432.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Cégep Marie-Victorin", 
                      inbound: "Sud – Station Assomption"},
    branchStyles: {
      "4328888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4329999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "439": {title: "Ligne 439 • Express Pie-IX",
    files: {currentShapes: "../GeoJSON/curr-439.geojson", newShapes: "../GeoJSON/439.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Laval | Cégep Marie-Victorin", 
                      inbound: "Sud – Pie-IX / Sainte-Catherine"},
    branchStyles: {
      "4398001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "4398002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "4399001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "4399002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "440": {title: "Ligne 440 • Express Charleroi",
    files: {currentShapes: "../GeoJSON/curr-440.geojson", newShapes: "../GeoJSON/440.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – d'Amos / Lacordaire", 
                      inbound: "Ouest – Station Sauvé"},
    branchStyles: {
      "4408888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4409999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "444": {title: "Ligne 444 • Express Marie-Victorin",
    files: {currentShapes: "../GeoJSON/curr-444.geojson", newShapes: "../GeoJSON/444.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Cégep Marie-Victorin", 
                      inbound: "Sud – Station Radisson"},
    branchStyles: {
      "4448888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4449999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>;</li>
      <li>;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "445": {title: "Ligne 445 • Express Papineau",
    files: {currentShapes: "../GeoJSON/curr-445.geojson", newShapes: "../GeoJSON/445.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Beaubien / Pie-IX", 
                      inbound: "Ouest – Station Bonaventure"},
    branchStyles: {
      "4458888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4459999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "448": {title: "Ligne 448 • Express Maurice-Duplessis",
    files: {currentShapes: "../GeoJSON/curr-448.geojson", newShapes: "../GeoJSON/448.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Rodolphe-Forget / Fernand-Forest", 
                      inbound: "Ouest – Station Radisson"},
    branchStyles: {
      "4488888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4489999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>;</li>
      <li>;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "449": {title: "Ligne 449 • Express Rivière-des-Prairies",
    files: {currentShapes: "../GeoJSON/curr-449.geojson", newShapes: "../GeoJSON/449.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Gare Rivière-des-Prairies", 
                      inbound: "Sud – Station Radisson"},
    branchStyles: {
      "4498888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4499999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>;</li>
      <li>;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "460": {title: "Ligne 460 • Express Métropolitaine",
    files: {currentShapes: "../GeoJSON/curr-460.geojson", newShapes: "../GeoJSON/460.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Galeries d'Anjou", 
                      inbound: "Ouest – YUL Aéroport"},
    branchStyles: {
      "4600004": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4600001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Simplification du parcours en direction ouest pour rejoindre 
          l'A-40 plus rapidement à partir des Galeries d'Anjou;</li>
      <li>Service express tout au long du trajet, même sur Côte-de-Liesse;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Pour accélérer le parcours en une vraie ligne express tout au long du trajet;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "468": {title: "Ligne 468 • Express Pierrefonds / Gouin",
    files: {currentShapes: "../GeoJSON/curr-468.geojson", newShapes: "../GeoJSON/468.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Usine de filtration de Pierrefonds"},
    branchStyles: {
      "4680009": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4680010": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "469": {title: "Ligne 469 • Express Henri-Bourassa",
    files: {currentShapes: "../GeoJSON/curr-469.geojson", newShapes: "../GeoJSON/469.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Cégep Marie-Victorin", 
                      inbound: "Ouest – Station Du Ruisseau"},
    branchStyles: {
      "4698888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4699999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>;</li>
      <li>;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>;</li>
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "470": {title: "Ligne 470 • Express Pierrefonds",
    files: {currentShapes: "../GeoJSON/curr-470.geojson", newShapes: "../GeoJSON/470.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Côte-Vertu", 
                      inbound: "Ouest – Usine de filtration de Pierrefonds"},
    branchStyles: {
      "4700018": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "4700019": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "475": {title: "Ligne 475 • Express Dollard-des-Ormeaux",
    files: {currentShapes: "../GeoJSON/curr-475.geojson", newShapes: "../GeoJSON/475.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Du Collège", 
                      inbound: "Ouest – Cégep Gérald-Godin"},
    branchStyles: {
      "4758888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4759999": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "480": {title: "Ligne 480 • Express du Parc",
    files: {currentShapes: "../GeoJSON/curr-480.geojson", newShapes: "../GeoJSON/480.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord", inbound: "Sud"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait de la desserte: service remplacé par ajouts sur la ligne 80.</li>
    `,
    pourquoi: `
      <li>Permet de concentrer les ressources sur des segments plus achalandés.</li>
    `},
  
  "491": {title: "Ligne 491 • Express Provost",
    files: {currentShapes: "../GeoJSON/curr-491.geojson", newShapes: "../GeoJSON/491.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Galeries Lachine"},
    branchStyles: {
      "4910002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "4910001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},
  
  "496": {title: "Ligne 496 • Express Victoria",
    files: {currentShapes: "../GeoJSON/curr-496.geojson", newShapes: "../GeoJSON/496.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Lionel-Groulx", 
                      inbound: "Ouest – Terminus Dorval"},
    branchStyles: {
      "4960001": {line: {color: "#781B7D", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#781B7D", fillOpacity: 1, shape: "circle"}},
      "4960002": {line: {color: "#8B469E", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#8B469E", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `},

  "711": {title: "Ligne 711 • Parc-du-Mont-Royal / Oratoire",
    files: {currentShapes: "../GeoJSON/curr-711.geojson", newShapes: "../GeoJSON/711.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est", inbound: "Ouest"},
    branchStyles: {
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait du service; ligne remplacée par des modifications à la ligne 11.</li>
    `,
    pourquoi: `
      <li>Retrait des services redondants.</li>
    `},
  
  "747": {title: "Ligne 747 • YUL Aéroport / Centre-Ville",
    files: {currentShapes: "../GeoJSON/curr-747.geojson", newShapes: "../GeoJSON/747.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
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
    `},

  "767": {title: "Ligne 767 • La Ronde / Station Jean-Drapeau",
    files: {currentShapes: "../GeoJSON/curr-767.geojson", newShapes: "../GeoJSON/767.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – La Ronde", 
                      inbound: "Ouest – Station Jean-Drapeau"},
    branchStyles: {
      "7670002": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "7670001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Service saisonnier : aucune modification.</li>
    `,
    pourquoi: `
      <li>N/A</li>
    `},

  "768": {title: "Ligne 768 • Plage Jean-Doré",
    files: {currentShapes: "../GeoJSON/curr-768.geojson", newShapes: "../GeoJSON/768.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Jean-Drapeau", 
                      inbound: "Ouest – Plage Jean-Doré"},
    branchStyles: {
      "7680011": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "7680001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait des arrêts intermédiaires sur le circuit Gilles-Villeneuve;</li>
      <li>Ajustement du quai à Jean-Drapeau.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale et assurer un service bi-directionnel direct au plage.</li>
    `},

  "769": {title: "Ligne 769 • La Ronde / Station Papineau",
    files: {currentShapes: "../GeoJSON/curr-769.geojson", newShapes: "../GeoJSON/769.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Nord – Station Papineau", 
                      inbound: "Sud – La Ronde"},
    branchStyles: {
      "7690019": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "7690001": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Retrait de l'arrêt devant le pont Papineau.</li>
    `,
    pourquoi: `
      <li>Améliorer la vitesse commerciale et assurer un service direct vers La Ronde.</li>
    `},

  "777": {title: "Ligne 777 • Jean-Drapeau / Casino / Bonaventure",
    files: {currentShapes: "../GeoJSON/curr-777.geojson", newShapes: "../GeoJSON/777.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "Est – Station Jean-Drapeau", 
                      inbound: "Ouest – Station Bonaventure"},
    branchStyles: {
      "7770001": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "7770002": {line: {color: "#5DBDEA", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},
    changements: `
      <li>Ajustement de quai à Jean-Drapeau.</li>
    `,
    pourquoi: `
      <li>N/A</li>
    `}
  
};
