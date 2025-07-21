/////////////////////////////////////////////////////////
//      Radar Chart Function (Nadieh Bremer)           //
//   Eklemeler: cfg.labels, alan tooltip, alt legend   //
//           ve legend hover highlight                 //
/////////////////////////////////////////////////////////

function RadarChart(id, data, options){
	// Varsayılan konfig
	var cfg = {
	  w: 600, h: 600,
	  margin: {top:100,right:20,bottom:20,left:20},
	  levels: 3, maxValue: 0,
	  labelFactor: 1.15, wrapWidth: 90,
	  opacityArea: 0.05, dotRadius: 4,
	  opacityCircles: 0.1, strokeWidth: 2,
	  roundStrokes: false,
	  color: d3.scale.category10(),
	  labels: [],        //  <- veri seti adları
	  title: "Radar Chart"  // yeni varsayılan başlık
	};
  
	// Dışarıdan gelen seçenekler
	if(typeof options !== "undefined"){
	  for(var i in options){
		if(typeof options[i] !== "undefined"){ cfg[i] = options[i]; }
	  }
	}
  
	// Blob adına ait tooltip
	var areaTooltip = d3.select("body")
						.append("div")
						.attr("class","areaTooltip");
  
	// maxValue güncelle
	var maxValue = Math.max(cfg.maxValue,
					d3.max(data, function(i){ return d3.max(i.map(function(o){ return o.value; })); }));
  
	var allAxis    = (data[0].map(function(i){ return i.axis; })),
		total      = allAxis.length,
		radius     = Math.min(cfg.w/2, cfg.h/2),
		Format     = d3.format('%'),
		angleSlice = Math.PI * 2 / total;
  
	// Skala
	var rScale = d3.scale.linear()
				   .range([0, radius])
				   .domain([0.15, maxValue]);
  
	/////////////////////////////////////////////////////////
	//   SVG Kapsayıcı                                    //
	/////////////////////////////////////////////////////////
	d3.select(id).select("svg").remove();
  
	// Yükseklik, alttaki legend’e yer açacak şekilde
	var extraLegendH = 40;

	var svg = d3.select(id).append("svg")
				.attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
				// .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom + extraLegendH)
				.attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom + extraLegendH + 100)
				.attr("class","radar"+id.replace('.',''))
				.attr("y", cfg.margin.top / 2)

	svg.append("text")
		.attr("x", (cfg.w + cfg.margin.left + cfg.margin.right) / 2)
		.attr("y", 15)
		// .attr("y", cfg.margin.top / 2)

		.attr("text-anchor", "middle")
		.style("font-size", "20px")
		.style("font-weight", "bold")
		.text(cfg.title);  // burayı sabit yazı yerine dinamik yap
		
	// svg.append("text")
	// 	.attr("x", (cfg.w + cfg.margin.left + cfg.margin.right) / 2)
	// 	.attr("y", cfg.h + cfg.margin.top + cfg.margin.bottom + 120)
	// 	.attr("text-anchor", "middle")
	// 	.style("font-size", "14px")
	// 	.style("fill", "#555")
	// 	.text("This chart compares user priorities when selecting a smartphone.");
	 

	var g = svg.append("g")
			   .attr("transform",
					  "translate(" + (cfg.w/2 + cfg.margin.left) + ","
									 + (cfg.h/2 + cfg.margin.top)  + ")");
  
	/////////////////////////////////////////////////////////
	//   Glow (estetik)                                   //
	/////////////////////////////////////////////////////////
	var filter = g.append('defs').append('filter').attr('id','glow'),
		feGaussianBlur = filter.append('feGaussianBlur')
							   .attr('stdDeviation','2.5')
							   .attr('result','coloredBlur'),
		feMerge = filter.append('feMerge'),
		feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
		feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');
  
	/////////////////////////////////////////////////////////
	//   Grid & Axis                                      //
	/////////////////////////////////////////////////////////
	var axisGrid = g.append("g").attr("class","axisWrapper");
  
		axisGrid.selectAll(".levels")
		.data(d3.range(1, (cfg.levels + 1)).reverse())
		.enter().append("circle")
		.attr("class", "gridCircle")
		.attr("r", function(d) {
			var levelValue = 0.2 + (maxValue - 0.2) * d / cfg.levels;
			return rScale(levelValue);
		})
		.style("fill", "#CDCDCD")
		.style("stroke", "#CDCDCD")
		.style("fill-opacity", cfg.opacityCircles)
		.style("filter", "url(#glow)");
	
  
		axisGrid.selectAll(".axisLabel")
		.data(d3.range(1, (cfg.levels + 1)).reverse())
		.enter().append("text")
		.attr("class", "axisLabel")
		.attr("x", 4)
		.attr("y", function(d) {
			var levelValue = 0.2 + (maxValue - 0.2) * d / cfg.levels;
			return -rScale(levelValue);
		})
		.attr("dy", "0.4em")
		.style("font-size", "12px")
		.attr("fill", "#000000")
		.text(function(d) {
			var levelValue = 0.2 + (maxValue - 0.2) * d / cfg.levels;
			return Format(levelValue);
		});
	


	var axis = axisGrid.selectAll(".axis")
		.data(allAxis).enter().append("g").attr("class","axis");
  
	axis.append("line")
		.attr("x1",0).attr("y1",0)
		.attr("x2",function(d,i){ return rScale(maxValue*1.1)*Math.cos(angleSlice*i - Math.PI/2); })
		.attr("y2",function(d,i){ return rScale(maxValue*1.1)*Math.sin(angleSlice*i - Math.PI/2); })
		.attr("class","line")
		.style("stroke","white").style("stroke-width","2px");
  
	axis.append("text")
		.attr("class","legend")
		.style("font-size","14px")
		.attr("text-anchor","middle")
		.attr("dy","0.35em")
		.attr("x",function(d,i){ return rScale(maxValue*cfg.labelFactor)*Math.cos(angleSlice*i - Math.PI/2); })
		.attr("y",function(d,i){ return rScale(maxValue*cfg.labelFactor)*Math.sin(angleSlice*i - Math.PI/2); })
		// .attr("x", function(d, i) {
		// 	return rScale(cfg.maxValue) * Math.cos(angleSlice * i - Math.PI / 2);
		// })
		// .attr("y", function(d, i) {
		// 	return rScale(cfg.maxValue) * Math.sin(angleSlice * i - Math.PI / 2);
		// })
		.text(function(d){return d;})
		.call(wrap,cfg.wrapWidth);
  
	/////////////////////////////////////////////////////////
	//   Radar Blobs                                      //
	/////////////////////////////////////////////////////////
	var radarLine = d3.svg.line.radial()
					  .interpolate(cfg.roundStrokes ? "cardinal-closed" : "linear-closed")
					  .radius(function(d){ return rScale(d.value); })
					  .angle(function(d,i){ return i*angleSlice; });
  
	var blobWrapper = g.selectAll(".radarWrapper")
		.data(data).enter().append("g")
		.attr("class","radarWrapper");
  
	blobWrapper.append("path")
		.attr("class","radarArea")
		.attr("d",function(d){ return radarLine(d); })
		.style("fill",function(d,i){ return cfg.color(i); })
		.style("fill-opacity",cfg.opacityArea)
		.on("mouseover",function(d,i){
			g.selectAll(".radarArea")
			  .transition().duration(200)
			  .style("fill-opacity",0.1);
  
			d3.select(this)
			  .transition().duration(200)
			  .style("fill-opacity",0.7);
  
			areaTooltip.html(cfg.labels[i] || "")
					   .style("left",(d3.event.pageX+10)+"px")
					   .style("top",(d3.event.pageY-10)+"px")
					   .style("opacity",1);
		})
		.on("mousemove",function(){
			areaTooltip.style("left",(d3.event.pageX+10)+"px")
					   .style("top",(d3.event.pageY-10)+"px");
		})
		.on("mouseout",function(){
			g.selectAll(".radarArea")
			  .transition().duration(200)
			  .style("fill-opacity",cfg.opacityArea);
  
			areaTooltip.style("opacity",0);
		});
  
	blobWrapper.append("path")
		.attr("class","radarStroke")
		.attr("d",function(d){ return radarLine(d); })
		.style("stroke-width",cfg.strokeWidth+"px")
		.style("stroke",function(d,i){ return cfg.color(i); })
		.style("fill","none")
		.style("filter","url(#glow)");
  
	blobWrapper.selectAll(".radarCircle")
		.data(function(d){ return d; })
		.enter().append("circle")
		.attr("class","radarCircle")
		.attr("r",cfg.dotRadius)
		.attr("cx",function(d,i){ return rScale(d.value)*Math.cos(angleSlice*i - Math.PI/2); })
		.attr("cy",function(d,i){ return rScale(d.value)*Math.sin(angleSlice*i - Math.PI/2); })
		.style("fill",function(d,i,j){ return cfg.color(j); })
		.style("fill-opacity",0.8);
  
	/////////////////////////////////////////////////////////
	//   Küçük nokta tooltip (değer)                       //
	/////////////////////////////////////////////////////////
	var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
		.data(data).enter().append("g")
		.attr("class","radarCircleWrapper");
  
	var tooltipText = g.append("text")
					   .attr("class","tooltip")
					   .style("opacity",0);
  
	blobCircleWrapper.selectAll(".radarInvisibleCircle")
		.data(function(d){ return d; })
		.enter().append("circle")
		.attr("class","radarInvisibleCircle")
		.attr("r",cfg.dotRadius*1.5)
		.attr("cx",function(d,i){ return rScale(d.value)*Math.cos(angleSlice*i - Math.PI/2); })
		.attr("cy",function(d,i){ return rScale(d.value)*Math.sin(angleSlice*i - Math.PI/2); })
		.style("fill","none").style("pointer-events","all")
		.on("mouseover",function(d){
			tooltipText.attr("x",parseFloat(d3.select(this).attr('cx'))-10)
					   .attr("y",parseFloat(d3.select(this).attr('cy'))-10)
					   .text(Format(d.value))
					   .transition().duration(200).style("opacity",1);
		})
		.on("mouseout",function(){
			tooltipText.transition().duration(200).style("opacity",0);
		});
  
	/////////////////////////////////////////////////////////
	//   Legend (grafiğin altında)                         //
	/////////////////////////////////////////////////////////
	// Hesaplama için geçici metin öğeleri oluştur
	var legendWidths = cfg.labels.map(function(label){
		var tempText = svg.append("text")
		.attr("class", "tempLegendText")
		.style("font-size", "12px")
		.text(label);
		var width = tempText.node().getComputedTextLength() + 25; // 10px renk kutusu + 15px boşluk
		tempText.remove();
		return width;
	});
	
	var totalLegendWidth = legendWidths.reduce((a,b)=>a+b, 0);
	var legendStartX = cfg.margin.left + cfg.w/2 - totalLegendWidth/2;
	var legendStartY = cfg.h + cfg.margin.top + 150;
	
	var legendZone = svg.append("g")
		.attr("class","legendZone")
		.attr("transform", `translate(${legendStartX},${legendStartY})`);
	
	var legendBox = legendZone.append("rect")
		.attr("class", "legendBox")
		.attr("fill", "#f9f9f9")
		.attr("stroke", "#ccc")
		.attr("rx", 6).attr("ry", 6);
	
	var cumulativeX = 0;
	var legend = legendZone.selectAll(".legendItem")
		.data(cfg.labels).enter().append("g")
		.attr("class","legendItem")
		.attr("transform",(d,i)=>{
		var tx = cumulativeX;
		cumulativeX += legendWidths[i];
		return `translate(${tx},0)`;
		})
		.style("cursor","pointer")
		.on("mouseover",function(d,i){
		g.selectAll(".radarArea")
			.transition().duration(200)
			.style("fill-opacity",function(p,j){ return (j===i)?0.7:0.1; });
		g.selectAll(".radarStroke")
			.transition().duration(200)
			.style("stroke-opacity",function(p,j){ return (j===i)?1:0.15; });
		})
		.on("mouseout",function(){
		g.selectAll(".radarArea")
			.transition().duration(200)
			.style("fill-opacity",cfg.opacityArea);
		g.selectAll(".radarStroke")
			.transition().duration(200)
			.style("stroke-opacity",1);
		});
	
	legend.append("rect")
		.attr("width",10).attr("height",10)
		.style("fill",function(d,i){ return cfg.color(i); });
	
	legend.append("text")
		.attr("x",15).attr("y",5).attr("dy","0.35em")
		.style("font-size","12px")
		.text(function(d){ return d; });
	
	// Legend kutusu hizalama
	var legendNode = legendZone.node();
	var legendBBox = legendNode.getBBox();
	legendBox
		.attr("x", legendBBox.x - 10)
		.attr("y", legendBBox.y - 6)
		.attr("width", legendBBox.width + 20)
		.attr("height", legendBBox.height + 12);
	

  
	/////////////////////////////////////////////////////////
	//   Helper: axis label wrap                           //
	/////////////////////////////////////////////////////////
	function wrap(text, width){
	  text.each(function(){
		var text = d3.select(this),
			words = text.text().split(/\s+/).reverse(),
			word, line=[], lineNumber=0,
			lineHeight = 1.4,
			y = text.attr("y"), x = text.attr("x"),
			dy = parseFloat(text.attr("dy")),
			tspan = text.text(null)
						.append("tspan")
						.attr("x",x).attr("y",y).attr("dy",dy+"em");
  
		while(word = words.pop()){
		  line.push(word); tspan.text(line.join(" "));
		  if(tspan.node().getComputedTextLength() > width){
			line.pop(); tspan.text(line.join(" "));
			line = [word];
			tspan = text.append("tspan")
						.attr("x",x).attr("y",y)
						.attr("dy", ++lineNumber*lineHeight + dy + "em")
						.text(word);
		  }
		}
	  });
	}
  }
  