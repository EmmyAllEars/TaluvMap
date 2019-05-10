		var mapExtent = [0.00000000, -2000.00000000, 2000.00000000, 0.00000000];
		var mapMinZoom = 3;
		var mapMaxZoom = 5;
		var mapMaxResolution = 0.25000000;
		var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
		var tileExtent = [0.00000000, -2000.00000000, 2000.00000000, 0.00000000];
		var maxBounds = [[0,0], [-2000,2000]];
		var crs = L.CRS.Simple;
			crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
			crs.scale = function(zoom) {
				return Math.pow(2, zoom) / mapMinResolution;
			};
			crs.zoom = function(scale) {
				return Math.log(scale * mapMinResolution) / Math.LN2;
			};

		var map = new L.Map('map', {
			renderer: L.canvas,
			maxZoom: mapMaxZoom,
			minZoom: mapMinZoom,
			layers: overlays,
			crs: crs,
			maxBounds: maxBounds,
			maxBoundsViscosity: 1,
			attributionControl:false,
			zoomControl:false
				
		});
			
			layer = L.tileLayer('data/images/map/{z}_{x}_{y}.png', {
			minZoom: mapMinZoom, maxZoom: mapMaxZoom,
			bounds: [[0,0], [-2000,2000]],
			tms: false
			
		}).addTo(map);

		map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
		]);

		//Coordinates Display (Bottom Left)
		L.control.mousePosition().addTo(map)
		
		//Create Location Groups
		var obeliskGroup = L.layerGroup();
		var travelGuildGroup = L.layerGroup();
		var adminCityGroup = L.layerGroup();
		var tavernGroup = L.layerGroup();
		var marketplaceGroup = L.layerGroup();

		
		//Set the groups
		var overlays = {			
			"Locations - Obelisks": obeliskGroup,
			"Locations - Travel Guild": travelGuildGroup,
			"Locations - Cities": adminCityGroup,
			"Locations - Taverns/Inns": tavernGroup,
			"Locations - Markets": marketplaceGroup,
		};

		//Location - Obelisks
		L.marker([-985.75,1251], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk1.png' width='300'></img><p align='center'>Obelisk: Upper Staging Area</p>").addTo(obeliskGroup),
		L.marker([-1210.75,1482.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk2.png' width='300'></img><p align='center'>Obelisk: Xelha</p>").addTo(obeliskGroup),
		L.marker([-1282,885], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk9.png' width='300'></img><p align='center'>Obelisk: The Sinkhole</p>").addTo(obeliskGroup),
		L.marker([-1401.25,616.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk8.png' width='300'></img><p align='center'>Obelisk: The Dregs</p>").addTo(obeliskGroup),
		L.marker([-744,398], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk5.png' width='300'></img><p align='center'>Obelisk: Mounds of the Dead</p>").addTo(obeliskGroup),
		L.marker([-1049.5,440.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk7.png' width='300'></img><p align='center'>Obelisk: Shattered Springs</p>").addTo(obeliskGroup),
		L.marker([-1205.25,627.5], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk6.png' width='300'></img><p align='center'>Obelisk: The University of the Arcane</p>").addTo(obeliskGroup),
		L.marker([-555.75,829.75], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk3.png' width='300'></img><p align='center'>Obelisk: Volcano</p>").addTo(obeliskGroup),
		L.marker([-743.5,739.5], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk10.png' width='300'></img><p align='center'>Obelisk: Ruins of Xullan</p>").addTo(obeliskGroup),
		L.marker([-568.75,598], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk4.png' width='300'></img><p align='center'>Obelisk: Temple of Frost</p>").addTo(obeliskGroup),

		//Locations - Travel Guild
		L.marker([-1446.5,725.25], {icon: TravelGuildIcon}).bindPopup("Travel Guild: Shattered Bridge").addTo(travelGuildGroup),
		L.marker([-1326.75,1139.5], {icon: TravelGuildIcon}).bindPopup("Travel Guild: Lookout's Hook").addTo(travelGuildGroup),
		L.marker([-1154.25,1358.5], {icon: TravelGuildIcon}).bindPopup("<img class='border-fix' src='data/images/markers/locations/TG-BayofHulks.jpg' width='300'></img><p align='center'>Travel Guild: Bay of Hulks</p>").addTo(travelGuildGroup),
		L.marker([-1014,1583.5], {icon: TravelGuildIcon}).bindPopup("Travel Guild: Tortuga").addTo(travelGuildGroup),
		L.marker([-941,790.75], {icon: TravelGuildIcon}).bindPopup("<img class='border-fix' src='data/images/markers/locations/TG-WolfTribe.jpg' width='300'></img><p align='center'>Travel Guild: Wolf Tribe Village</p>").addTo(travelGuildGroup),
		L.marker([-1084.75,358.75], {icon: TravelGuildIcon}).bindPopup("Travel Guild: Réalta Nua").addTo(travelGuildGroup);
			
		//Locations - Admin Cities
		L.marker([-1023.25,1589], {icon: adminCityIcon}).bindPopup("Tortuga").addTo(adminCityGroup),
		L.marker([-929.25,782.25], {icon: adminCityIcon}).bindPopup("<img class='border-fix' src='data/images/markers/locations/WolfTribeVillage.jpg' width='300'></img><p align='center'>Wolf Tribe Village <a href='https://www.fromashesrisen.com/wiki/Wolf_Tribe_Village'>(Wiki link)</a></p><ul><li>Blacksmith (Character)</li><li>Tavern and Inn</li><li>Arena</li><li>Jhebbal Sag Shamanic Sanctuary</li><li>Vendors: All AoC, Pet Vendor, Weapons & Repair Kits</li></ul>").addTo(adminCityGroup),
		L.marker([-1084.75,358.75], {icon: adminCityIcon}).bindPopup("Réalta Nua").addTo(adminCityGroup);

		//Locations - Taverns/Inns
		L.marker([-1033.25,1599], {icon: tavernIcon}).bindPopup("Tavern: The Broken Sun").addTo(tavernGroup),
		L.marker([-894,800], {icon: tavernIcon}).bindPopup("<img class='border-fix' src='data/images/markers/locations/WolfTribeVillage.jpg' width='300'></img><p align='center'>Tavern and Inn: Wolf Tribe Village</p>").addTo(tavernGroup),
		L.marker([-1051,937], {icon: tavernIcon}).bindPopup("Tavern: Trader's Rest").addTo(tavernGroup);

		//Locations - Services and Shopping
		L.marker([-1014,1583.5], {icon: marketIcon}).bindPopup("Tortuga: Marketplace").addTo(marketplaceGroup);
		L.marker([-929.25,782.25], {icon: marketIcon}).bindPopup("Wolf Tribe: Blacksmith, Marketplace, Pets").addTo(marketplaceGroup);

		var hash = new L.Hash(map);
		//Group Overlay Combiner
		var fastTravelLocations = {
			"Fast Travel": {
				"<img src='data/images/icons/obelisk.png' width='16' height='16'></img> Obelisks": obeliskGroup,
				"<img src='data/images/icons/TravelGuild.png' width='16' height='16'></img> Travel Guild": travelGuildGroup
			}
		}	
		var groupedLocations = {
			"Locations": {
			 	"<img src='data/images/icons/admincity.png' width='16' height='16'></img> Cities": adminCityGroup
			}
		}

		//Enable Group Options
		var options = {
			autoZIndex: true,
			groupCheckboxes: true,
			collapsed: true
		};

		var layerControlLocations = L.control.groupedLayers(null, groupedLocations, options);
		var layerControlFastTravel = L.control.groupedLayers(null, fastTravelLocations, options);

		//OLD FILTERING
		//layerControlResources.addTo(map);
		//layerControlThralls.addTo(map);
		layerControlFastTravel.addTo(map);
		layerControlLocations.addTo(map);
		L.DomEvent.disableClickPropagation(layerControlLocations._container);
		L.DomEvent.disableClickPropagation(layerControlFastTravel._container);
		//L.DomEvent.disableClickPropagation(layerControlResources._container);
		

		//Add Default Filters
		obeliskGroup.addTo(map);
		adminCityGroup.addTo(map);
		travelGuildGroup.addTo(map);