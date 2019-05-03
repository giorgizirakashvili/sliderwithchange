var deposite = Number($("#deposite").val()), invest = Number($("#invest").val()), monthinvest = Number($("#monthinvest").val());
/// FIRST POINTS
$('#deposite').on('input', function () {
	deposite = Number($(this).val());
	$("#deposite_value").text(deposite);
});
$('#invest').on('input', function () {
	invest = Number($(this).val());	
	$("#invest_value").text(invest);
});
$('#monthinvest').on('input', function () {
	monthinvest = Number($(this).val());
	$("#monthinvest_value").text(monthinvest);
});
plus1 = 1.12;
plus2 = 1.17;
plus3 = 1.22;
var massivi = {"nashti":{},"sargebeli1":{},"sargebeli2":{},"nashtisargeblit":{}};
var massivi2 = {"nashti":{},"sargebeli1":{},"sargebeli2":{},"nashtisargeblit":{}};
var massivi3 = {"nashti":{},"sargebeli1":{},"sargebeli2":{},"nashtisargeblit":{}};
var lastmass1 = [10100,10200,10300,10400,10500,10600,10700,10800,10900,11000,11100,11200,11300,11400,11500,11600,11700,11800,11900,12000,12100,12200,12300,12400],
	lastmass2 = [10142,10284,10426,10568,10710,10852,10994,11136,11278,11420,11562,11704,11846,11988,12130,12272,12414,12556,12698,12840,12982,13124,13266,13408],
	lastmass3 = [10183,10366,10549,10732,10915,11098,11281,11464,11647,11830,12013,12196,12379,12562,12745,12928,13111,13294,13477,13660,13843,14026,14209,14392];
var foreachplus, pirveli,sargebeli1,sargebeli2,test,test2;
var ctx = document.getElementById('myChart').getContext('2d');
$('input[type=range]').on('input', function () {
		for (i = 0; i < 24; i++) {
		nashti = deposite+(monthinvest*i); // ნაშთი 
		massivi['nashti'][i] = Math.round(nashti);
		sargebeli1 = Math.round((nashti*(plus1-1)/12)); // სარგებელი 1
		massivi['sargebeli1'][i] = Math.round(sargebeli1);
		test = Math.round(massivi['sargebeli1'][0]);
		test2 = Math.round(sargebeli1*invest*(plus1-1)/12);
		if (i == 0) {
			massivi['sargebeli2'][i] = Math.round(sargebeli1*invest*(plus1-1)/12);
			massivi['nashtisargeblit'][i] = nashti + sargebeli1 + Math.round(sargebeli1*invest*(plus1-1)/12);
		} else {
			for(a = 1; a < i; a++) {
				test += massivi['sargebeli1'][a];
			}
			for(d = 0; d < i; d++) {
				test2 += massivi['sargebeli2'][d];
			}
			sargebeli2 = i-1;
			massivi['sargebeli2'][i] = Math.round((test+test2)*(plus1-1)*invest/12);
			massivi['nashtisargeblit'][i] = invest + sargebeli1 + massivi['sargebeli2'][i] + massivi['nashtisargeblit'][sargebeli2];
		}
		
		/// Second points
		nashti = deposite+(monthinvest*i); // ნაშთი 
		massivi2['nashti'][i] = Math.round(nashti);
		sargebeli1 = Math.round((nashti*(plus2-1)/12)); // სარგებელი 1
		massivi2['sargebeli1'][i] = Math.round(sargebeli1);
		test = Math.round(massivi2['sargebeli1'][0]);
		test2 = Math.round(sargebeli1*invest*(plus2-1)/12);
		if (i == 0) {
			massivi2['sargebeli2'][i] = Math.round(sargebeli1*invest*(plus2-1)/12);
			massivi2['nashtisargeblit'][i] = nashti + sargebeli1 + Math.round(sargebeli1*invest*(plus2-1)/12);
		} else {
			for(a = 1; a < i; a++) {
				test += massivi2['sargebeli1'][a];
			}
			for(d = 0; d < i; d++) {
				test2 += massivi2['sargebeli2'][d];
			}
			sargebeli2 = i-1;
			massivi2['sargebeli2'][i] = Math.round((test+test2)*(plus2-1)*invest/12);
			massivi2['nashtisargeblit'][i] = invest + sargebeli1 + massivi2['sargebeli2'][i] + massivi2['nashtisargeblit'][sargebeli2];
		}
		
		///third points
		nashti = deposite+(monthinvest*i); // ნაშთი 
		massivi3['nashti'][i] = Math.round(nashti);
		sargebeli1 = Math.round((nashti*(plus3-1)/12)); // სარგებელი 1
		massivi3['sargebeli1'][i] = Math.round(sargebeli1);
		test = Math.round(massivi3['sargebeli1'][0]);
		test2 = Math.round(sargebeli1*invest*(plus3-1)/12);
		if (i == 0) {
			massivi3['sargebeli2'][i] = Math.round(sargebeli1*invest*(plus3-1)/12);
			massivi3['nashtisargeblit'][i] = nashti + sargebeli1 + Math.round(sargebeli1*invest*(plus3-1)/12);
		} else {
			for(a = 1; a < i; a++) {
				test += massivi3['sargebeli1'][a];
			}
			for(d = 0; d < i; d++) {
				test2 += massivi3['sargebeli2'][d];
			}
			sargebeli2 = i-1;
			massivi3['sargebeli2'][i] = Math.round((test+test2)*(plus3-1)*invest/12);
			massivi3['nashtisargeblit'][i] = invest + sargebeli1 + massivi3['sargebeli2'][i] + massivi3['nashtisargeblit'][sargebeli2];
		}
	}
	lastmass1 = [];
	for(c = 0; c < Object.keys(massivi['nashtisargeblit']).length; c++) {
		lastmass1[c] = massivi['nashtisargeblit'][c];
	}
	lastmass2 = [];
	for(c = 0; c < Object.keys(massivi2['nashtisargeblit']).length; c++) {
		lastmass2[c] = massivi2['nashtisargeblit'][c];
	}
	lastmass3 = [];
	for(c = 0; c < Object.keys(massivi3['nashtisargeblit']).length; c++) {
		lastmass3[c] = massivi3['nashtisargeblit'][c];
	}
myData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        datasets: [
          {
            label: "1.12",
            fill: true,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: lastmass1,
          },
            {
            label: "1.17",
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: lastmass2,
        },
            {
            label: "1.22",
            fill: true,
            backgroundColor: 'rgba(125, 255, 99, 0.3)',
            borderColor: 'rgb(180, 255, 99)',
            data: lastmass3,
        }],
        options: {
			animation: {
				duration: 0
			},
			responsive:true,
			maintainAspectRatio: false
		}
    };
Chart.defaults.global.defaultFontFamily = "monospace";
var myChart = new Chart(ctx, {
	type: 'line',
	data: myData,
});
});
///////////////////////////////////
myData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        datasets: [
          {
            label: "1.12",
            fill: true,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: lastmass1,
          },
            {
            label: "1.17",
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: lastmass2,
        },
            {
            label: "1.22",
            fill: true,
            backgroundColor: 'rgba(125, 255, 99, 0.3)',
            borderColor: 'rgb(180, 255, 99)',
            data: lastmass3,
        }],
        options: {
			animation: {
				duration: 0
			},
			responsive:true,
			maintainAspectRatio: false

		}
    };

// Default chart defined with type: 'line'
Chart.defaults.global.defaultFontFamily = "monospace";
var myChart = new Chart(ctx, {
    type: 'line',
    data: myData
});
