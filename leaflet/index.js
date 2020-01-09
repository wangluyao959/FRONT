//创建地图容器
var map = L.map('mapid', {
  minZoom: 3,
  maxZoom: 18,
  center: [31.5, 113.09],
  attributionControl: false
});
map.setView([31.5, 113.09], 8);

//创建地图底图
L.tileLayer("http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}").addTo(map);

//添加marker
var marker = L.marker([31.5, 113.09]).addTo(map);

//添加圆点,第二个参数为实质半径
var circle = L.circle([31.5, 113.09], 5000, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5
}).addTo(map);

//添加多边形
var polygon = L.polygon([
  [31.509, 113.08],
  [31.503, 113.06],
  [31.51, 113.047]
]).addTo(map);

//marker绑定弹出框
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//圆形绑定弹出框
circle.bindPopup("<b>Hello world!</b><br>I am a circle.");
//多边形添加弹出框
polygon.bindPopup("I am a polygon.");

//图层绑定弹出框
// var popup=L.popup().setLatLng([31.5,113.09]).setContent("I am standalone popup.").openOn(map);


//给图层添加点击事件
// map.on('click',onMapClick);
// function onMapClick(e){
//   //点击地图图层的时候弹出弹出弹框
//   L.popup().setLatLng([e.latlng.lat,e.latlng.lng]).setContent(`I am ${e.latlng.lat+','+e.latlng.lng}.`).openOn(map);
// }



//在地图上创建geojson图层
var myLines = [{
  "type": "LineString",
  "coordinates": [[110, 40], [115, 45], [-110, 55]]
}, {
  "type": "LineString",
  "coordinates": [[115, 40], [-110, 45], [-115, 55]]
}];



/**
 * geoJson图层的Option
 *  
 *  style 
 */
var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.5
};

// L.geoJson(myLines, {
//   style: myStyle
// }).addTo(map);

/**
 * 另一种方式，我们通过 一个函数，样式的不同依赖的它们自己的属性
*/
var states = [{
  "type": "Feature",
  "properties": { "party": "Republican" },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [114.05, 48.99],
      [-97.22, 48.98],
      [-96.58, 45.94],
      [114.03, 45.94],
      [114.05, 48.99]
    ]]
  }
}, {
  "type": "Feature",
  "properties": { "party": "Democrat" },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [119.05, 41.00],
      [112.06, 40.99],
      [112.03, 36.99],
      [119.04, 36.99],
      [119.05, 41.00]
    ]]
  }
},{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [
      119.05, 41.00
    ]
  }
}];

/**
 * 使用pointToLayer创建:这个方
*/
var geojsonMarkerOptions = {
  radius:8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}

// L.geoJson(states, {
//   //线，面使用
//   style: function (feature) {
//     switch (feature.properties.party) {
//       case 'Republican': return { color: "#ff0000" };
//       case 'Democrat': return { color: "#0000ff" };
//     }
//   },
//   //geoJSON中有点数据的时候使用
//   pointToLayer:function(feature, latlng){
//     console.log('feature :', feature);
//     console.log('latlng :', latlng);
//     return L.circleMarker(latlng,geojsonMarkerOptions)
//   }
// }).addTo(map);


/**
 * onEachFeature 选项是一个可以被每个feature在添加到geoJSON图层之前调用的函数。使用这个选项的原因是：将一个弹出框与被点击的feature关联
*/
function onEachFeature(feature,layer){
  if(feature.properties && feature.properties.popupContent){
    //如果当前feature属性和属性中popupContent同时存在，则将底图弹框内容为属性中popupContent内容
    layer.bindPopup(feature.properties.popupContent);
  }
}
var geoJsonFeature={
  "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is onEachFeature!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.99404, 31.75621]
    }
};
// L.geoJson(geojsonFeature, {
//   onEachFeature: onEachFeature,
//   //geoJSON中有点数据的时候使用
//   pointToLayer:function(feature, latlng){
//     return L.marker(latlng)
//   }
// }).addTo(map);


/**
 * filter 选项使用在控制GeoJSON特征的可见性上。我们通过使用一个带有filter选项的函数来实现这些。这个函数可以被GeoJSON图层中的每个feature调用，单数为feature和layer。
 * 
*/

var someFeatures = [{
  "type": "Feature",
  "properties": {
      "name": "Coors Field",
      "show_on_map": true
  },
  "geometry": {
      "type": "Point",
      "coordinates": [114.99404, 31.75621]
  }
}, {
  "type": "Feature",
  "properties": {
      "name": "Busch Field",
      "show_on_map": true
  },
  "geometry": {
      "type": "Point",
      "coordinates": [114.98404, 31.74621]
  }
}];
L.geoJson(someFeatures, {
  filter: function(feature, layer) {
      return feature.properties.show_on_map;
  },
  coordsToLatLng:function(feature){
    
  }
}).addTo(map);