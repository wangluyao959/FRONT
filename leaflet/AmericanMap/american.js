var map = L.map('mapid').setView([37.8, -96], 4);


L.tileLayer("http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}", {
  id: "mapbox.light"
}).addTo(map);



//根据人口密度来添加颜色。
function getColor(d) {
  return d > 1000 ? '#800026' :
    d > 500 ? '#BD0026' :
      d > 200 ? '#E31A1C' :
        d > 100 ? '#FC4E2A' :
          d > 50 ? '#FD8D3C' :
            d > 20 ? '#FEB24C' :
              d > 10 ? '#FED976' :
                '#FFEDA0';
}

//为GeoJSON图层定义一个样式函数，所以他的fillColor依赖于feature.properties.density属性。并且可以调整显示样式以及在触摸时增加一个带有虚线的边框。
function style(feature){
  return {
    fillColor:getColor(feature.properties.density),
    weight:2,
    opacity:1,
    color:'white',
    dashArray:'3',
    fillOpacity:0.7
  }
}


//增加地图交互:让鼠标悬停在各个周上面时高亮他们，首先应该定义一个mouseover事件的监听函数
function highlightFeature(e){
  var layer=e.target;
  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });
  //兼容处理，在IE和Opera浏览器中不行
  if (!L.Browser.ie && !L.Browser.opera) {
    //bringToFront 将图层移动到其他图层的顶部
    layer.bringToFront();
  } 
  info.update(layer.feature.properties);
}

//定义mouseout发生的event
function resetHighLight(e){
  geojson.resetStyle(e.target);
  info.update();
}
//geojson.resetStyle将重置图层样式为默认的样式，为了让这个函数起效，应该保证，GeoJSON图层是可用的。应该保证在监听之前和把图层赋值给geojson之前，定义好geojson变量：
/**
 * var geojson;
*/


//作为可选的触摸事件，我们定一个click监听器来监听各州缩放改变
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
};


/**
 * 现在使用onEachFeature选项增加各个州图层的监听器
*/
function onEachFeature(feature,layer){
  layer.on({
    mouseover:highlightFeature,
    mouseout: resetHighLight,
    click: zoomToFeature
  });
}

var geojson;
geojson=L.geoJson(statesData,{
  style:style,
  onEachFeature: onEachFeature
}).addTo(map);

//我们可以显示不同州信息的时候使用常规弹出框，但是也可以选择不同的方式：通过悬浮的自定义控件上显示不同信息


/**
 * 自定义信息控件代码
*/
var info=L.control();
info.onAdd=function(map){
  console.log('this :', this);
  this._div=L.DomUtil.create('div','info');//创建一个class名为info的div
  this.update();
  return this._div;
};
//根据传递的特性属性更新控件的方法
info.update=function(props){
  this._div.innerHTML= '<h4>美国人口密度</h4>' +  (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
    : '请悬浮在某个州');
};
info.addTo(map);

//当用户悬浮到一个州上的时候，我们需要更新控件，所以我们也需要修改监听器。在highlightFeature和resetHighlight

/**
 * 自定义图例控件代码
*/
var Len = L.control({
  position:"bottomright"
});

Len.onAdd=function(map){
  var Ddiv=L.DomUtil.create('div','info lengend');
  var grades = [0, 10, 20, 50, 100, 200, 500, 1000];
  for (let i = 0; i < grades.length; i++) {
    Ddiv.innerHTML+='<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return Ddiv;
};
Len.addTo(map);