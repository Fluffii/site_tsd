ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [82.207751, 55.021390],
        zoom: 9,
        controls: ['typeSelector', 'fullscreenControl', 'rulerControl']
    }),
    objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 64
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/boundaries.geojson')
    .done(function(geoJson) {
        geoJson.features.forEach(function(obj) {
           coordinates = obj.geometry.coordinates;
           regionName = 'Граница';
           for(var i = 0; i <= coordinates.length; i++) {
               var polyline = new ymaps.Polyline(coordinates[i]);
               polyline.options.set('strokeColor', '#000000');
               polyline.options.set('strokeWidth', '2');
               polyline.properties.set('hintContent', regionName);
               polyline.properties.set('balloonContent', regionName);
               map.geoObjects.add(polyline);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/railroad.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = 'Железная дорога';
           for(var i=0; i<=coordinates.length; i++){
              var polyline = new ymaps.Polyline(coordinates[i]);
              polyline.options.set('strokeColor', '#000000');
              polyline.options.set('strokeWidth', '5');
              polyline.options.set('strokeStyle', 'dash');
              polyline.properties.set('hintContent', regionName);
              polyline.properties.set('balloonContent', regionName);
              map.geoObjects.add(polyline);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/road.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = 'Дорога';
           for(var i=0; i<=coordinates.length; i++) {
              var polyline = new ymaps.Polyline(coordinates[i]);
              polyline.options.set('strokeColor', '#3F3F3F');
              polyline.options.set('strokeWidth', '2');
              polyline.properties.set('hintContent', regionName);
              polyline.properties.set('balloonContent', regionName);
              map.geoObjects.add(polyline);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/forest.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates=obj.geometry.coordinates;
           regionName = 'Леса';
           for(var i=0;i<=coordinates.length;i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              polygon.options.set('fillColor', 'rgba(0, 112, 29, 0.6)');
              polygon.options.set('strokeColor','#00701D');
              polygon.options.set('strokeWidth','1');
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContent', regionName);
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/forest_belt.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = 'Лесная полоса';
           for(var i=0;i<=coordinates.length;i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              polygon.options.set('fillColor', 'rgba(90, 255, 134, 0.6)');
              polygon.options.set('strokeColor','#5AFF86');
              polygon.options.set('strokeWidth','1');
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContent', regionName);
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/locality.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates=obj.geometry.coordinates;
           regionName = obj.properties.Назва;
           for(var i=0;i<=coordinates.length;i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              polygon.options.set('fillColor', 'rgba(45, 123, 66, 0.3)');
              polygon.options.set('strokeColor','#2D7B42');
              polygon.options.set('strokeWidth','1');
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContent', regionName);
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/cemetery.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates=obj.geometry.coordinates;
           regionName = obj.properties.Назва;
           for(var i=0;i<=coordinates.length;i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              polygon.options.set('fillColor', 'rgba(136, 133, 132, 0.3)');
              polygon.options.set('strokeColor','#888584');
              polygon.options.set('strokeWidth','1');
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContent', regionName);
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/Kochenevskiy.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = obj.properties.description;
           for(var i = 0; i <= coordinates.length; i++){
              var polygon = new ymaps.Polygon(coordinates[i]);
              polygon.options.set('fillColor', 'rgba(255, 255, 255, 0.3)');
              polygon.options.set('strokeColor', '#000000');
              polygon.options.set('strokeWidth', '2');
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContent', regionName);
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/field.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = obj.properties.Номер;
           fieldPl = obj.properties.Площа;
           fieldKl = obj.properties.Культ;
           for(var i=0; i<=coordinates.length; i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              if (obj.properties.Культ == 'Вика') {
                polygon.options.set('fillColor', 'rgba(255, 0, 0, 0.5)');
                polygon.options.set('strokeColor','#FF0000');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Лён') {
                polygon.options.set('fillColor', 'rgba(140, 4, 168, 0.5)');
                polygon.options.set('strokeColor','#8C04A8');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Горох') {
                polygon.options.set('fillColor', 'rgba(70, 16, 174, 0.5)');
                polygon.options.set('strokeColor','#4610AE');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Многолетние травы') {
                polygon.options.set('fillColor', 'rgba(201, 245, 0, 0.5)');
                polygon.options.set('strokeColor','#C9F500');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Кукуруза') {
                polygon.options.set('fillColor', 'rgba(0, 183, 74, 0.5)');
                polygon.options.set('strokeColor','#00B74A');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Овёс') {
                polygon.options.set('fillColor', 'rgba(254, 170, 0, 0.5)');
                polygon.options.set('strokeColor','#FEAA00');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Однолетние травы') {
                polygon.options.set('fillColor', 'rgba(254, 231, 0, 0.5)');
                polygon.options.set('strokeColor','#FEE700');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Пары') {
                polygon.options.set('fillColor', 'rgba(0, 0, 0, 0.5)');
                polygon.options.set('strokeColor','#000000');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Пшеница') {
                polygon.options.set('fillColor', 'rgba(51, 204, 204, 0.5)');
                polygon.options.set('strokeColor','#33CCCC');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Рапс') {
                polygon.options.set('fillColor', 'rgba(220, 55, 184, 0.5)');
                polygon.options.set('strokeColor','#DC37B8');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Соя') {
                polygon.options.set('fillColor', 'rgba(108, 42, 7, 0.5)');
                polygon.options.set('strokeColor','#6C2A07');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Ячмень') {
                polygon.options.set('fillColor', 'rgba(255, 54, 17, 0.5)');
                polygon.options.set('strokeColor','#FF3611');
                polygon.options.set('strokeWidth','1');
              } else {
                polygon.options.set('fillColor', 'rgba(255, 116, 0, 0.5)');
                polygon.options.set('strokeColor','#FF7400');
                polygon.options.set('strokeWidth','1');
              }
              polygon.properties.set('hintContent', 'Номер поля: ' + regionName);
              polygon.properties.set('balloonContentHeader', 'Номер поля: ' + regionName);
              polygon.properties.set('balloonContent', 'Площадь: ' + fieldPl + ';<br> Культура: ' + fieldKl + '.');
              map.geoObjects.add(polygon);
           }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/soil.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
            coordinates = obj.geometry.coordinates;
            regionName = obj.properties.NAME_SOIL;
            ID_TIP = obj.properties.ID_TIP;
            ID_SOIL = obj.properties.ID_SOIL;
            PODTYP = obj.properties.PODTYP;
            INDEX_MAP = obj.properties.INDEX_MAP;
            INDEX_BASE = obj.properties.INDEX_BASE;
            LAT = obj.properties.LAT;
            LON = obj.properties.LON;
            LOCATION = obj.properties.LOCATION;
            RAION = obj.properties.RAION;
            AREA_HA = obj.properties.AREA_HA;
            AREA_KM2 = obj.properties.AREA_KM2;
            PERIM_KM = obj.properties.PERIM_KM;
            KR = obj.properties.KR;
            POWER = obj.properties.POWER;
            HUMUS = obj.properties.HUMUS;
            CLAY = obj.properties.CLAY;
            PH = obj.properties.PH;
            PHOSHORUS = obj.properties.PHOSHORUS;
            POTASSIUM = obj.properties.POTASSIUM;
            AGGEGATES = obj.properties.AGGEGATES;
            BULKWEIGHT = obj.properties.BULKWEIGHT;
            CODE_POWER = obj.properties.CODE_POWER;
            CODE_HUMUS = obj.properties.CODE_HUMUS;
            CODE_GRAN = obj.properties.CODE_GRAN;
            CODE_PH = obj.properties.CODE_PH;
            CODE_PHOS = obj.properties.CODE_PHOS;
            CODE_POTAS = obj.properties.CODE_POTAS;
            CODE_AGGRE = obj.properties.CODE_AGGRE;
            CODE_BULK = obj.properties.CODE_BULK;
            CODE_EROSI = obj.properties.CODE_EROSI;
            CODE_SOLON = obj.properties.CODE_SOLON;
            CODE_SALIN = obj.properties.CODE_SALIN;
            CODE_DRAIN = obj.properties.CODE_DRAIN;
            KPOWER = obj.properties.KPOWER;
            KHUMUS = obj.properties.KHUMUS;
            KCLAY = obj.properties.KCLAY;
            KPH = obj.properties.KPH;
            KEROSION = obj.properties.KEROSION;
            KSOLON = obj.properties.KSOLON;
            KSALIN = obj.properties.KSALIN;
            KDRAIN = obj.properties.KDRAIN;
            KSOIL = obj.properties.KSOIL;
            UR = obj.properties.UR;
            KINDEX2 = obj.properties.KINDEX2;
            ECOL_INDEX = obj.properties.ECOL_INDEX;
            BALL_POWER = obj.properties.BALL_POWER;
            BALL_HUMUS = obj.properties.BALL_HUMUS;
            BALL_CLAY = obj.properties.BALL_CLAY;
            BONITET = obj.properties.BONITET;
            ENERGO = obj.properties.ENERGO;
            KONTR = obj.properties.KONTR;
            for(var i = 0; i <= coordinates.length; i++){
                var polygon=new ymaps.Polygon(coordinates[i]);
                if (obj.properties.NAME_SOIL == 'Болотные низинные торфянисто-глеевые') {
                    polygon.options.set('fillColor', 'rgba(85, 107, 47, 0.5)');
                    polygon.options.set('strokeColor','#556B2F');
                    polygon.options.set('strokeWidth','1');
                } else if (obj.properties.NAME_SOIL == 'Лугово-болотные перегнойные') {
                    polygon.options.set('fillColor', 'rgba(128, 128, 0, 0.5)');
                    polygon.options.set('strokeColor','#808000');
                    polygon.options.set('strokeWidth','1');
                } else if (obj.properties.NAME_SOIL == 'Лугово-черноземные маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(107, 142, 35, 0.5)');
                    polygon.options.set('strokeColor','#6B8E23');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Лугово-черноземные маломощные среднегумусные слабосмытые') {
                    polygon.options.set('fillColor', 'rgba(154, 205, 50, 0.5)');
                    polygon.options.set('strokeColor','#9ACD32');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Лугово-черноземные среднемощные среднегумусные слабосмытые') {
                    polygon.options.set('fillColor', 'rgba(0, 100, 0, 0.5)');
                    polygon.options.set('strokeColor','#006400');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Лугово-черноземные среднемощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(0, 128, 0, 0.5)');
                    polygon.options.set('strokeColor','#008000');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Луговые маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(34, 139, 34, 0.5)');
                    polygon.options.set('strokeColor','#228B22');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Луговые осолоделые маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(50, 205, 50, 0.5)');
                    polygon.options.set('strokeColor','#32CD32');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Луговые солончаковатые маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(240, 230, 140, 0.5)');
                    polygon.options.set('strokeColor','#F0E68C');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Луговые солончаковые маломощные малогумусные') {
                    polygon.options.set('fillColor', 'rgba(60, 179, 113, 0.5)');
                    polygon.options.set('strokeColor','#3CB371');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Луговые солончаковые маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(46, 139, 87, 0.5)');
                    polygon.options.set('strokeColor','#2E8B57');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Солоди луговые мелкодерновые серые') {
                    polygon.options.set('fillColor', 'rgba(169, 169, 169, 0.5)');
                    polygon.options.set('strokeColor','#A9A9A9');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Темно-серые лесные осолоделые среднемощные') {
                    polygon.options.set('fillColor', 'rgba(143, 188, 143, 0.5)');
                    polygon.options.set('strokeColor','#8FBC8F');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Черноземно-луговые солончаковатые маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(139, 69, 19, 0.5)');
                    polygon.options.set('strokeColor','#8B4513');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Черноземно-луговые солончаковые среднемощные среднегумусны') {
                    polygon.options.set('fillColor', 'rgba(184, 134, 11, 0.5)');
                    polygon.options.set('strokeColor','#B8860B');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Черноземы обыкновенные маломощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(218, 165, 32, 0.5)');
                    polygon.options.set('strokeColor','#DAA520');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'Черноземы обыкновенные среднемощные среднегумусные') {
                    polygon.options.set('fillColor', 'rgba(205, 133, 63, 0.5)');
                    polygon.options.set('strokeColor','#CD853F');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'лугово-черноземные маломощные мало, -среднегумусные слабосмытые в комплексе с луговыми осолоделыми д') {
                    polygon.options.set('fillColor', 'rgba(222, 184, 135, 0.5)');
                    polygon.options.set('strokeColor','#DEB887');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'луговые солончаковые маломощные среднегумусные в комплексе с лугово-болотными  перегнойными солончак') {
                    polygon.options.set('fillColor', 'rgba(189, 183, 107, 0.5)');
                    polygon.options.set('strokeColor','#BDB76B');
                    polygon.options.set('strokeWidth','1');
                  } else if (obj.properties.NAME_SOIL == 'черноземы выщелоченные среднемощные мало и среднегумусные в комплексе с серыми лесными осолоделыми д') {
                    polygon.options.set('fillColor', 'rgba(238, 232, 170, 0.5)');
                    polygon.options.set('strokeColor','#EEE8AA');
                    polygon.options.set('strokeWidth','1');
                  } else {
                    polygon.options.set('fillColor', 'rgba(255, 116, 0, 0.5)');
                    polygon.options.set('strokeColor','#FF7400');
                    polygon.options.set('strokeWidth','1');
                  }

                polygon.properties.set('hintContent', regionName);

                polygon.properties.set('balloonContentHeader', regionName);
                polygon.properties.set('balloonContent',
                'Индекс типа: ' + ID_TIP + ';<br>' +
                'Индекс почвы: ' + ID_SOIL + ';<br>' +
                'Подтип: ' + PODTYP + ';<br>' +
                'Индекс карты: ' + INDEX_MAP + ';<br>' +
                'Базовый индекс: ' + INDEX_BASE + ';<br>' +
                'LAT: ' + LAT + ';<br>' +
                'LON: ' + LON + ';<br>' +
                'Локация: ' + LOCATION + ';<br>' +
                'Район: ' + RAION + ';<br>' +
                'AREA_HA: ' + AREA_HA + ';<br>' +
                'AREA_KM2: ' + AREA_KM2 + ';<br>' +
                'Периметр(км): ' + PERIM_KM + ';<br>' +
                'KR: ' + KR + ';<br>' +
                'Мощность: ' + POWER + ';<br>' +
                'Гумус: ' + HUMUS + ';<br>' +
                'Глина:' + CLAY + ';<br>' +
                'Кислотность: ' + PH + ';<br>' +
                'Фосфор: ' + PHOSHORUS + ';<br>' +
                'Калий: ' + POTASSIUM + ';<br>' +
                'Агрегаты: ' + AGGEGATES + ';<br>' +
                'Равновесная плотность: ' + BULKWEIGHT + ';<br>' +
                'CODE_POWER: ' + CODE_POWER + ';<br>' +
                'CODE_HUMUS: ' + CODE_HUMUS + ';<br>' +
                'CODE_GRAN: ' + CODE_GRAN + ';<br>' +
                'CODE_PH: ' + CODE_PH + ';<br>' +
                'CODE_PHOS: ' + CODE_PHOS + ';<br>' +
                'CODE_POTAS: ' + CODE_POTAS + ';<br>' +
                'CODE_AGGRE: ' + CODE_AGGRE + ';<br>' +
                'CODE_BULK: ' + CODE_BULK + ';<br>' +
                'CODE_EROSI: ' + CODE_EROSI + ';<br>' +
                'CODE_SOLON: ' + CODE_SOLON + ';<br>' +
                'CODE_SALIN: ' + CODE_SALIN + ';<br>' +
                'CODE_DRAIN: ' + CODE_DRAIN + ';<br>' +
                'KPOWER: ' + KPOWER + ';<br>' +
                'KHUMUS: ' + KHUMUS + ';<br>' +
                'KCLAY: ' + KCLAY + ';<br>' +
                'KPH: ' + KPH + ';<br>' +
                'KEROSION: ' + KEROSION + ';<br>' +
                'KSOLON: ' + KSOLON + ';<br>' +
                'KSALIN: ' + KSALIN + ';<br>' +
                'KDRAIN: ' + KDRAIN + ';<br>' +
                'KSOIL: ' + KSOIL + ';<br>' +
                'UR: ' + UR + ';<br>' +
                'KINDEX2: ' + KINDEX2 + ';<br>' +
                'ECOL_INDEX: ' + ECOL_INDEX + ';<br>' +
                'BALL_POWER: ' + BALL_POWER + ';<br>' +
                'BALL_HUMUS: ' + BALL_HUMUS + ';<br>' +
                'BALL_CLAY: ' + BALL_CLAY + ';<br>' +
                'BONITET: ' + BONITET + ';<br>' +
                'ENERGO: ' + ENERGO + ';<br>' +
                'KONTR: ' + KONTR + '.'
                );
                map.geoObjects.add(polygon);
            }
        });
    });

    map.geoObjects.add(objectManager);
    $.getJSON('static/scripts/geojson/19122018.geojson')
    .done(function (geoJson) {
        geoJson.features.forEach(function (obj) {
           coordinates = obj.geometry.coordinates;
           regionName = ['Номер поля: ' + obj.properties.Номер];
           fieldPl = ['Площадь: ' + obj.properties.Площа + ';<br> Культура: ' + obj.properties.culture]
           for(var i=0; i<=coordinates.length; i++){
              var polygon=new ymaps.Polygon(coordinates[i]);
              if (obj.properties.Культ == 'Многолетние травы') {
                polygon.options.set('fillColor', 'rgba(201, 245, 0, 0.5)');
                polygon.options.set('strokeColor','#C9F500');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Овёс') {
                polygon.options.set('fillColor', 'rgba(254, 170, 0, 0.5)');
                polygon.options.set('strokeColor','#FEAA00');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Черноземы обыкнов') {
                polygon.options.set('fillColor', 'rgba(0, 0, 0, 0.5)');
                polygon.options.set('strokeColor','#000000');
                polygon.options.set('strokeWidth','1');
              } else if (obj.properties.Культ == 'Пшеница') {
                polygon.options.set('fillColor', 'rgba(51, 204, 204, 0.5)');
                polygon.options.set('strokeColor','#33CCCC');
                polygon.options.set('strokeWidth','1');
              } else {
                polygon.options.set('fillColor', 'rgba(255, 116, 0, 0.5)');
                polygon.options.set('strokeColor','#FF7400');
                polygon.options.set('strokeWidth','1');
              }
              polygon.properties.set('hintContent', regionName);
              polygon.properties.set('balloonContentHeader', regionName);
              polygon.properties.set('balloonContent', fieldPl);
              map.geoObjects.add(polygon);
           }
        });
    });

    // Кнопка с центровкой районов
    ListBoxLayout = ymaps.templateLayoutFactory.createClass(
        "<div class='dropdown' style='display: flex;'>" +
            "<button id='my-listbox-header' class='btn btn-success dropdown-toggle' data-toggle='dropdown' type='button' style='background: #28A745; border-color: #28A745; height: 28px; padding-top: 1px;'>" +
                "{{data.title}} <span class='caret'></span>" +
            "</button>" +
            "<ul id='my-listbox'" +
                " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenuButton'" +
                " style='display: {% if state.expanded %}block{% else %}none{% endif %}; cursor: pointer;'></ul>", {

        build: function() {
            ListBoxLayout.superclass.build.call(this);
            this.childContainerElement = $('#my-listbox').get(0);
            this.events.fire('childcontainerchange', {
                newChildContainerElement: this.childContainerElement,
                oldChildContainerElement: null
            });
        },
            getChildContainerElement: function () {
                return this.childContainerElement;
            },

            clear: function () {
                this.events.fire('childcontainerchange', {
                    newChildContainerElement: null,
                    oldChildContainerElement: this.childContainerElement
                });
                this.childContainerElement = null;
                ListBoxLayout.superclass.clear.call(this);
            }
        }),

        ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
                "<li><a class='dropdown-item'>{{data.content}}</a></li>" +
            "</div>"
        ),

        listBoxItems = [
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Мирный',
                    center: [82.082575, 54.941204],
                    zoom: 13
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Элитный',
                    center: [82.969311, 54.902504],
                    zoom: 12
                }
            })
        ],

        listBox = new ymaps.control.ListBox({
                items: listBoxItems,
                data: {
                    title: 'Выберите район'
                },
                options: {
                    layout: ListBoxLayout,
                    itemLayout: ListBoxItemLayout
                }
            });

        listBox.events.add('click', function (e) {
            var item = e.get('target');
            if (item != listBox) {
                map.setCenter(
                    item.data.get('center'),
                    item.data.get('zoom')
                );
            }
        });

    map.controls.add(listBox, {float: 'left'});

    var myButton = new ymaps.control.Button({
        data: {
            content: '<i class="fas fa-caret-down" id="icon" style="transform: rotate(90deg); margin: auto;"></i>',
            title: 'Скрыть легенду'
        },
        options: {
            maxWidth: [85, 600, 610]
        }
    });
    myButton.events
      .add(
        'select',
        function () {
          document.getElementById('card-maps').hidden = true;
          document.getElementById('icon').style.transform = "rotate(270deg)";
        }
      )
      .add(
        'deselect',
        function () {
          document.getElementById('card-maps').hidden = false;
          document.getElementById('icon').style.transform = "rotate(90deg)";
        }
      );
        map.controls.add(myButton, {
            float: 'left'
        });

    FirstCustomControlClass = function(options) {
        FirstCustomControlClass.superclass.constructor.call(this, options);
        this._$content = null;
        this._geocoderDeferred = null;
    };

  ymaps.util.augment(FirstCustomControlClass, ymaps.collection.Item, {
    onAddToMap: function(map) {
      FirstCustomControlClass.superclass.onAddToMap.call(this, map);
      this.getParent().getChildElement(this).then(this._onGetChildElement, this);
    },
    setText: function(s) {
      this._$content.html(s);
    },
    setVis: function(s) {
      this.options.set('visible', s);
    },
    onRemoveFromMap: function(oldMap) {
      if (this._$content) {
        this._$content.remove();
        this._mapEventGroup.removeAll();
      }
      FirstCustomControlClass.superclass.onRemoveFromMap.call(this, oldMap);
    },
    _onGetChildElement: function(parentDomContainer) {
      this._$content = $('<div class="card" id="card-maps" style="max-width: 317px;"></div>').appendTo(parentDomContainer);
      var content=
          '<nav>' +
              '<div class="nav nav-tabs" id="nav-tab" role="tablist">' +
                  '<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Элитный</button>' +
                  '<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Мирный</button>' +
              '</div>' +
          '</nav>' +
          '<div class="card-body">' +
              '<h5 class="card-title">Общие условные обозначения</h5>'+
              '<p class="card-text">'+
                  '<label for="district"><span class="c-filter__icon--color" style="background-color: #000000;"></span>Граница</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color" style="border: dashed;"></span>Железная дорога</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color" style="background-color: #3F3F3F;"></span>Дорога</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #00701D;"></span>Леса</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #5AFF86;"></span>Лесная полоса</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #2D7B42"></span>Участки</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #888584;"></span>Кладбище</label>'+
                  '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FF7400;"></span>Другое</label>'+
              '</p>' +
              '<p class="card-text">'+
                  '<div class="tab-content" id="nav-tabContent">' +
                    '<h5 class="card-title">Условные обозначения</h5>'+
                      '<div class="tab-pane fade show active" style="max-height: 310px; overflow-y: scroll;" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">' +
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FF0000;"></span>Вика</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #8C04A8;"></span>Лён</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #4610AE;"></span>Горох</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #C9F500;"></span>Многолетние травы</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #00B74A;"></span>Кукуруза</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FEAA00;"></span>Овёс</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FEE700;"></span>Однолетние травы</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #000000;"></span>Пары</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #33CCCC;"></span>Пшеница</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #DC37B8;"></span>Рапс</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #6C2A07;"></span>Соя</label>'+
                          '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FF3611;"></span>Ячмень</label>'+
                      '</div>' +
                      '<div class="tab-pane fade" style="max-height: 310px; overflow-y: scroll;" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">' +
                        '<label for="district"><span class="c-filter__icon--color_r" style="background-color: #C9F500;"></span>Многолетние травы</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #FEAA00;"></span>Овёс</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #33CCCC;"></span>Пшеница</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #556B2F;"></span>Болотные низинные торфянисто-глеевые</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #808000;"></span>Лугово-болотные перегнойные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #6B8E23;"></span>Лугово-черноземные маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #9ACD32;"></span>Лугово-черноземные маломощные среднегумусные слабосмытые</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #006400;"></span>Лугово-черноземные среднемощные среднегумусные слабосмытые</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #008000;"></span>Лугово-черноземные среднемощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #228B22;"></span>Луговые маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #32CD32;"></span>Луговые осолоделые маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #F0E68C;"></span>Луговые солончаковатые маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #3CB371;"></span>Луговые солончаковые маломощные малогумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #2E8B57;"></span>Луговые солончаковые маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #A9A9A9;"></span>Солоди луговые мелкодерновые серые</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #8FBC8F;"></span>Темно-серые лесные осолоделые среднемощные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #8B4513;"></span>Черноземно-луговые солончаковатые маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #B8860B;"></span>Черноземно-луговые солончаковые среднемощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #DAA520;"></span>Черноземы обыкновенные маломощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #CD853F;"></span>Черноземы обыкновенные среднемощные среднегумусные</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #DEB887;"></span>лугово-черноземные маломощные мало, -среднегумусные слабосмытые в комплексе с луговыми осолоделыми д</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #BDB76B;"></span>луговые солончаковые маломощные среднегумусные в комплексе с лугово-болотными  перегнойными солончак</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #EEE8AA;"></span>черноземы выщелоченные среднемощные мало и среднегумусные в комплексе с серыми лесными осолоделыми д</label>'+
                        '<br><label for="district"><span class="c-filter__icon--color_r" style="background-color: #000000;"></span>Черноземы обыкновенные</label>'+
                      '</div>' +
                  '</div>' +
              '</p>' +
          '</div>'
      this._$content.html(content);
    },
  });

    var FirstcustomControl = new FirstCustomControlClass();
    map.controls.add(FirstcustomControl, {
        float: 'left'
    });



    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            position: {
                right: 10,
                top: 120
            }
        }
    });

    map.controls.add(zoomControl);
});
