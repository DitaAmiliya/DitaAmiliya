var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaGeologi_1 = new ol.format.GeoJSON();
var features_PetaGeologi_1 = format_PetaGeologi_1.readFeatures(json_PetaGeologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaGeologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaGeologi_1.addFeatures(features_PetaGeologi_1);
var lyr_PetaGeologi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaGeologi_1, 
                style: style_PetaGeologi_1,
                popuplayertitle: "Peta Geologi",
                interactive: true,
    title: 'Peta Geologi<br />\
    <img src="styles/legend/PetaGeologi_1_0.png" /> Aluvial<br />\
    <img src="styles/legend/PetaGeologi_1_1.png" /> Andesit<br />\
    <img src="styles/legend/PetaGeologi_1_2.png" /> Anggota Breksi<br />\
    <img src="styles/legend/PetaGeologi_1_3.png" /> Anggota tufa<br />\
    <img src="styles/legend/PetaGeologi_1_4.png" /> Basal dan Rijang<br />\
    <img src="styles/legend/PetaGeologi_1_5.png" /> Batuan terbreksikan<br />\
    <img src="styles/legend/PetaGeologi_1_6.png" /> Batugamping Terumbu<br />\
    <img src="styles/legend/PetaGeologi_1_7.png" /> Batupasir Grewake<br />\
    <img src="styles/legend/PetaGeologi_1_8.png" /> Diabas<br />\
    <img src="styles/legend/PetaGeologi_1_9.png" /> Endapan Pantai<br />\
    <img src="styles/legend/PetaGeologi_1_10.png" /> Formas Waturanda<br />\
    <img src="styles/legend/PetaGeologi_1_11.png" /> Formasi Gabon<br />\
    <img src="styles/legend/PetaGeologi_1_12.png" /> Formasi Halang<br />\
    <img src="styles/legend/PetaGeologi_1_13.png" /> Formasi Kalipucang<br />\
    <img src="styles/legend/PetaGeologi_1_14.png" /> Formasi Karangsambung<br />\
    <img src="styles/legend/PetaGeologi_1_15.png" /> Formasi Peniron<br />\
    <img src="styles/legend/PetaGeologi_1_16.png" /> Formasi Penosogan<br />\
    <img src="styles/legend/PetaGeologi_1_17.png" /> Formasi Totogan<br />\
    <img src="styles/legend/PetaGeologi_1_18.png" /> Komplek Lok Ulo<br />\
    <img src="styles/legend/PetaGeologi_1_19.png" /> Mafik dan Ultramafik<br />\
    <img src="styles/legend/PetaGeologi_1_20.png" /> Sekis dan Filit<br />\
    <img src="styles/legend/PetaGeologi_1_21.png" /> Serpentinit<br />'
        });
var format_StrukturGeologi_2 = new ol.format.GeoJSON();
var features_StrukturGeologi_2 = format_StrukturGeologi_2.readFeatures(json_StrukturGeologi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturGeologi_2.addFeatures(features_StrukturGeologi_2);
var lyr_StrukturGeologi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrukturGeologi_2, 
                style: style_StrukturGeologi_2,
                popuplayertitle: "Struktur Geologi",
                interactive: true,
    title: 'Struktur Geologi<br />\
    <img src="styles/legend/StrukturGeologi_2_0.png" /> Antiklin<br />\
    <img src="styles/legend/StrukturGeologi_2_1.png" /> Kelurusan<br />\
    <img src="styles/legend/StrukturGeologi_2_2.png" /> Sesar<br />\
    <img src="styles/legend/StrukturGeologi_2_3.png" /> Sesar Diperkirakan<br />\
    <img src="styles/legend/StrukturGeologi_2_4.png" /> Sesar Mendatar<br />\
    <img src="styles/legend/StrukturGeologi_2_5.png" /> Sesar Mendatar Dikira<br />\
    <img src="styles/legend/StrukturGeologi_2_6.png" /> Sesar Naik Diperkirakan<br />\
    <img src="styles/legend/StrukturGeologi_2_7.png" /> Sinklin<br />\
    <img src="styles/legend/StrukturGeologi_2_8.png" /> Sinklin Diperkirakan<br />'
        });

lyr_Basemap_0.setVisible(false);lyr_PetaGeologi_1.setVisible(true);lyr_StrukturGeologi_2.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_PetaGeologi_1,lyr_StrukturGeologi_2];
lyr_PetaGeologi_1.set('fieldAliases', {'ET_ID': 'ET_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'map_id': 'map_id', 'theme_id': 'theme_id', 'map_indeks': 'map_indeks', 'map_name': 'map_name', 'scale_id': 'scale_id', 'regi_pv_id': 'regi_pv_id', 'regi_ds_id': 'regi_ds_id', 'map_acyear': 'map_acyear', 'map_puyear': 'map_puyear', 'map_inst': 'map_inst', 'cc_id_load': 'cc_id_load', 'map_com': 'map_com', 'filename': 'filename', 'filepath': 'filepath', 'OBJECTID_1': 'OBJECTID_1', 'FCODE': 'FCODE', 'SIMOBJ': 'SIMOBJ', 'NAMOBJ': 'NAMOBJ', 'UMUROBJ': 'UMUROBJ', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_StrukturGeologi_2.set('fieldAliases', {'ET_ID': 'ET_ID', 'Shape_Leng': 'Shape_Leng', 'map_id': 'map_id', 'theme_id': 'theme_id', 'map_indeks': 'map_indeks', 'map_name': 'map_name', 'scale_id': 'scale_id', 'regi_pv_id': 'regi_pv_id', 'regi_ds_id': 'regi_ds_id', 'map_acyear': 'map_acyear', 'map_puyear': 'map_puyear', 'map_inst': 'map_inst', 'cc_id_load': 'cc_id_load', 'map_com': 'map_com', 'filename': 'filename', 'filepath': 'filepath', 'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'KLSSTR': 'KLSSTR', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', });
lyr_PetaGeologi_1.set('fieldImages', {'ET_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'map_id': 'TextEdit', 'theme_id': 'TextEdit', 'map_indeks': 'TextEdit', 'map_name': 'TextEdit', 'scale_id': 'TextEdit', 'regi_pv_id': 'TextEdit', 'regi_ds_id': 'TextEdit', 'map_acyear': 'TextEdit', 'map_puyear': 'TextEdit', 'map_inst': 'TextEdit', 'cc_id_load': 'TextEdit', 'map_com': 'TextEdit', 'filename': 'TextEdit', 'filepath': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'FCODE': 'TextEdit', 'SIMOBJ': 'TextEdit', 'NAMOBJ': 'TextEdit', 'UMUROBJ': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', });
lyr_StrukturGeologi_2.set('fieldImages', {'ET_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'map_id': 'TextEdit', 'theme_id': 'TextEdit', 'map_indeks': 'TextEdit', 'map_name': 'TextEdit', 'scale_id': 'TextEdit', 'regi_pv_id': 'TextEdit', 'regi_ds_id': 'TextEdit', 'map_acyear': 'TextEdit', 'map_puyear': 'TextEdit', 'map_inst': 'TextEdit', 'cc_id_load': 'TextEdit', 'map_com': 'TextEdit', 'filename': 'TextEdit', 'filepath': 'TextEdit', 'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'KLSSTR': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_PetaGeologi_1.set('fieldLabels', {'ET_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'map_id': 'no label', 'theme_id': 'no label', 'map_indeks': 'no label', 'map_name': 'no label', 'scale_id': 'no label', 'regi_pv_id': 'no label', 'regi_ds_id': 'no label', 'map_acyear': 'no label', 'map_puyear': 'no label', 'map_inst': 'no label', 'cc_id_load': 'no label', 'map_com': 'no label', 'filename': 'no label', 'filepath': 'no label', 'OBJECTID_1': 'no label', 'FCODE': 'no label', 'SIMOBJ': 'no label', 'NAMOBJ': 'inline label - visible with data', 'UMUROBJ': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', });
lyr_StrukturGeologi_2.set('fieldLabels', {'ET_ID': 'no label', 'Shape_Leng': 'no label', 'map_id': 'no label', 'theme_id': 'no label', 'map_indeks': 'no label', 'map_name': 'no label', 'scale_id': 'no label', 'regi_pv_id': 'no label', 'regi_ds_id': 'no label', 'map_acyear': 'no label', 'map_puyear': 'no label', 'map_inst': 'no label', 'cc_id_load': 'no label', 'map_com': 'no label', 'filename': 'no label', 'filepath': 'no label', 'FCODE': 'no label', 'NAMOBJ': 'no label', 'KLSSTR': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', });
lyr_StrukturGeologi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});