ymaps.ready(function(){
		var myMap = new ymaps.Map("map", {
        center: [52.129029, 19.393702],
        zoom: 1
    })
var myPlacemark = new ymaps.Placemark(
			
				[42.749289,  25.322719] , {
                    
                    hintContent: 'Шипкинский перевал'
                });     
 
 
			myMap.geoObjects.add(myPlacemark);
			var myPlacemark1 = new ymaps.Placemark(
				[51.108249, 17.026901] , {
                    hintContent: 'Вроцлав'
                });     
 
			myMap.geoObjects.add(myPlacemark1);
			var myPlacemark2 = new ymaps.Placemark(
				[52.235576, 21.010265] , {
                    
                    hintContent: 'Варшава'
                });     
 
			myMap.geoObjects.add(myPlacemark2);
			
// Создание метки 
var myPlacemark5= new YMaps.Placemark(
      // Координаты метки
      new YMaps.GeoPoint(37.6, 55.8), {
        /* Опции метки:
           - флаг перетаскивания метки */
        draggable: true,
        /* - показывать значок метки 
             при открытии балуна */
        hideIcon: false
      }
    );

// Задание контента значка метки
myPlacemark5.name = "Москва";
// Задание контента балуна
myPlacemark5.description = "Столица России";

// Добавление метки на карту
myMap.addOverlay(myPlacemark5); 
	});