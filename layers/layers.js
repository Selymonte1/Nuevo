var wms_layers = [];

var format_Parroquia_Tulcan_0 = new ol.format.GeoJSON();
var features_Parroquia_Tulcan_0 = format_Parroquia_Tulcan_0.readFeatures(json_Parroquia_Tulcan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parroquia_Tulcan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parroquia_Tulcan_0.addFeatures(features_Parroquia_Tulcan_0);
var lyr_Parroquia_Tulcan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parroquia_Tulcan_0, 
                style: style_Parroquia_Tulcan_0,
                interactive: true,
                title: '<img src="styles/legend/Parroquia_Tulcan_0.png" /> Parroquia _Tulcan'
            });
var format_GEOLAM_1 = new ol.format.GeoJSON();
var features_GEOLAM_1 = format_GEOLAM_1.readFeatures(json_GEOLAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLAM_1.addFeatures(features_GEOLAM_1);
var lyr_GEOLAM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLAM_1, 
                style: style_GEOLAM_1,
                interactive: true,
                title: '<img src="styles/legend/GEOLAM_1.png" /> GEOLAM'
            });
var lyr_Ciudadareas_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ciudadareas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ciudadareas_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8653646.510020, 88712.342581, -8650398.469987, 93008.466151]
                            })
                        });
var format_Ciudad_3 = new ol.format.GeoJSON();
var features_Ciudad_3 = format_Ciudad_3.readFeatures(json_Ciudad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciudad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciudad_3.addFeatures(features_Ciudad_3);
var lyr_Ciudad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciudad_3, 
                style: style_Ciudad_3,
                interactive: true,
                title: '<img src="styles/legend/Ciudad_3.png" /> Ciudad'
            });
var format_Viaultima_4 = new ol.format.GeoJSON();
var features_Viaultima_4 = format_Viaultima_4.readFeatures(json_Viaultima_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viaultima_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viaultima_4.addFeatures(features_Viaultima_4);
var lyr_Viaultima_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viaultima_4, 
                style: style_Viaultima_4,
                interactive: true,
                title: '<img src="styles/legend/Viaultima_4.png" /> Viaultima'
            });
var format_Callenueva_5 = new ol.format.GeoJSON();
var features_Callenueva_5 = format_Callenueva_5.readFeatures(json_Callenueva_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Callenueva_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Callenueva_5.addFeatures(features_Callenueva_5);
var lyr_Callenueva_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Callenueva_5, 
                style: style_Callenueva_5,
                interactive: true,
                title: '<img src="styles/legend/Callenueva_5.png" /> Callenueva'
            });
var format_Via5_6 = new ol.format.GeoJSON();
var features_Via5_6 = format_Via5_6.readFeatures(json_Via5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Via5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Via5_6.addFeatures(features_Via5_6);
var lyr_Via5_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Via5_6, 
                style: style_Via5_6,
                interactive: true,
                title: '<img src="styles/legend/Via5_6.png" /> Via5'
            });
var format_Via4_7 = new ol.format.GeoJSON();
var features_Via4_7 = format_Via4_7.readFeatures(json_Via4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Via4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Via4_7.addFeatures(features_Via4_7);
var lyr_Via4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Via4_7, 
                style: style_Via4_7,
                interactive: true,
                title: '<img src="styles/legend/Via4_7.png" /> Via4'
            });
var format_Via2_8 = new ol.format.GeoJSON();
var features_Via2_8 = format_Via2_8.readFeatures(json_Via2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Via2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Via2_8.addFeatures(features_Via2_8);
var lyr_Via2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Via2_8, 
                style: style_Via2_8,
                interactive: true,
                title: '<img src="styles/legend/Via2_8.png" /> Via2'
            });
var format_Via1_9 = new ol.format.GeoJSON();
var features_Via1_9 = format_Via1_9.readFeatures(json_Via1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Via1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Via1_9.addFeatures(features_Via1_9);
var lyr_Via1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Via1_9, 
                style: style_Via1_9,
                interactive: true,
                title: '<img src="styles/legend/Via1_9.png" /> Via1'
            });
var format_Hospitales_Tulcan_10 = new ol.format.GeoJSON();
var features_Hospitales_Tulcan_10 = format_Hospitales_Tulcan_10.readFeatures(json_Hospitales_Tulcan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_Tulcan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_Tulcan_10.addFeatures(features_Hospitales_Tulcan_10);
var lyr_Hospitales_Tulcan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitales_Tulcan_10, 
                style: style_Hospitales_Tulcan_10,
                interactive: true,
                title: '<img src="styles/legend/Hospitales_Tulcan_10.png" /> Hospitales_Tulcan'
            });

lyr_Parroquia_Tulcan_0.setVisible(true);lyr_GEOLAM_1.setVisible(true);lyr_Ciudadareas_2.setVisible(true);lyr_Ciudad_3.setVisible(true);lyr_Viaultima_4.setVisible(true);lyr_Callenueva_5.setVisible(true);lyr_Via5_6.setVisible(true);lyr_Via4_7.setVisible(true);lyr_Via2_8.setVisible(true);lyr_Via1_9.setVisible(true);lyr_Hospitales_Tulcan_10.setVisible(true);
var layersList = [lyr_Parroquia_Tulcan_0,lyr_GEOLAM_1,lyr_Ciudadareas_2,lyr_Ciudad_3,lyr_Viaultima_4,lyr_Callenueva_5,lyr_Via5_6,lyr_Via4_7,lyr_Via2_8,lyr_Via1_9,lyr_Hospitales_Tulcan_10];
lyr_Parroquia_Tulcan_0.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', });
lyr_GEOLAM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'DPA_NOMBRE': 'DPA_NOMBRE', 'DPA_TIPO': 'DPA_TIPO', 'DPA_LAM': 'DPA_LAM', 'DPA_PARROQ': 'DPA_PARROQ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ciudad_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_PARROQ': 'DPA_PARROQ', 'DPA_NOMBRE': 'DPA_NOMBRE', 'DPA_TIPO': 'DPA_TIPO', 'Shape_Leng': 'Shape_Leng', });
lyr_Viaultima_4.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Callenueva_5.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Via5_6.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Via4_7.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Via2_8.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Via1_9.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Hospitales_Tulcan_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'emergency': 'emergency', 'name_en': 'name_en', 'name_es': 'name_es', 'addr_city': 'addr_city', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'opening_ho': 'opening_ho', 'operator': 'operator', 'payment_ca': 'payment_ca', 'phone': 'phone', });
lyr_Parroquia_Tulcan_0.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_VALOR': 'Range', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', });
lyr_GEOLAM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'DPA_NOMBRE': 'TextEdit', 'DPA_TIPO': 'TextEdit', 'DPA_LAM': 'TextEdit', 'DPA_PARROQ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ciudad_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_PARROQ': 'TextEdit', 'DPA_NOMBRE': 'TextEdit', 'DPA_TIPO': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Viaultima_4.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Callenueva_5.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Via5_6.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Via4_7.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Via2_8.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Via1_9.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Hospitales_Tulcan_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'emergency': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'addr_city': 'TextEdit', 'addr_house': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_stree': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'payment_ca': 'TextEdit', 'phone': 'TextEdit', });
lyr_Parroquia_Tulcan_0.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_VALOR': 'no label', 'DPA_ANIO': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', });
lyr_GEOLAM_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'DPA_NOMBRE': 'no label', 'DPA_TIPO': 'no label', 'DPA_LAM': 'no label', 'DPA_PARROQ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ciudad_3.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_PARROQ': 'no label', 'DPA_NOMBRE': 'no label', 'DPA_TIPO': 'no label', 'Shape_Leng': 'no label', });
lyr_Viaultima_4.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Callenueva_5.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Via5_6.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Via4_7.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Via2_8.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Via1_9.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Hospitales_Tulcan_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'emergency': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'addr_city': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'addr_stree': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'payment_ca': 'no label', 'phone': 'no label', });
lyr_Hospitales_Tulcan_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});