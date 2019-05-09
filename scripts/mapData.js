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

		
		//Set the groups
		var overlays = {			
			"Locations - Obelisks": obeliskGroup,
			"Locations - Travel Guild": travelGuildGroup,
			"Locations - Cities": adminCityGroup,
		};

		//Location - Obelisks
		L.marker([-960.75,1333], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk1.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1210.75,1482.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk2.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1282,885], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk9.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1401.25,616.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk8.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-744,398], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk5.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1049.5,440.25], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk7.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1205.25,627.5], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk6.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-555.75,829.75], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk3.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-743.5,739.5], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk10.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-568.75,598], {icon: obeliskIcon}).bindPopup("<img class='border-fix' src='data/images/markers/obelisks/obelisk4.png' width='300'></img><p align='center'>Obelisk</p>").addTo(obeliskGroup),

		//Locations - Travel Guild
		L.marker([-1446.5,725.25], {icon: TravelGuildIcon}).bindPopup("Shattered Bridge").addTo(travelGuildGroup),
		L.marker([-1326.75,1139.5], {icon: TravelGuildIcon}).bindPopup("Lookout's Hook").addTo(travelGuildGroup),
		L.marker([-1154.25,1358.5], {icon: TravelGuildIcon}).bindPopup("Bay of Hulks").addTo(travelGuildGroup),
			
		//Locations - Admin Cities
		L.marker([-1023.25,1589], {icon: adminCityIcon}).bindPopup("Tortuga").addTo(adminCityGroup),
		L.marker([-929.25,782.25], {icon: adminCityIcon}).bindPopup("Wolf Tribe Village").addTo(adminCityGroup),
		L.marker([-1084.75,358.75], {icon: adminCityIcon}).bindPopup("Réalta Nua").addTo(adminCityGroup);

		var hash = new L.Hash(map);
		//Group Overlay Combiner
		var groupedLocations = {
			"Locations": {
				"<img src='data/images/icons/obelisk.png' width='16' height='16'></img> Obelisks": obeliskGroup,
				"<img src='data/images/icons/TravelGuild.png' width='16' height='16'></img> Travel Guild": travelGuildGroup,
				"<img src='data/images/icons/admincity.png' width='16' height='16'></img> Cities": adminCityGroup,
			}
		}

		//Enable Group Options
		var options = {
			autoZIndex: true,
			groupCheckboxes: true,
			collapsed: false
		};

		var layerControlLocations = L.control.groupedLayers(null, groupedLocations, options);

		//OLD FILTERING
		//layerControlResources.addTo(map);
		//layerControlThralls.addTo(map);
		//layerControlNamedThralls.addTo(map);
		layerControlLocations.addTo(map);
		L.DomEvent.disableClickPropagation(layerControlLocations._container);
		//L.DomEvent.disableClickPropagation(layerControlThralls._container);
		//L.DomEvent.disableClickPropagation(layerControlResources._container);
		

		//Add Default Filters
		obeliskGroup.addTo(map);
		adminCityGroup.addTo(map);