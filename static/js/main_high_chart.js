
$(document).ready(function() {
	$(chart_id).highcharts({
		chart: chart,
		        legend: {
            enabled: false
        },
        title: '',
		xAxis: xAxis,
		yAxis: yAxis,
		series: series
	});
});