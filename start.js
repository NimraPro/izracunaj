$(document).ready(function() {
    $("*").keyup( function() {
				$('#god').keyup(function() {
		var god = (new Date).getFullYear();
		var sad = $(this).val();
		if (sad.length == 4) $(this).val(god-sad);
	});
      if ($('#arko').val() > 1 && $('#ccm').val() > 2 && $('#god').val()) {
        var amk = 8;
        var voda = 20;
        var stiker = 5;
        var komunalna = 20;
        var tehnicki = 60.66; 
		var potoreg = 0;
		var tabl = 0;
		var potvrda = 0;
		var uplate = 10;
		var ukupno = amk+voda+stiker+komunalna+tehnicki+porez+putarina+polica+zastita+uplate - 0;
		$('#potvrdaoreg').val(potoreg);
		$('#potvrdaovl').val(potvrda);
		$('#tablice1').val(tabl);
        $('#amk').val(amk);
        $('#voda').val(voda);
        $('#stiker').val(stiker);
        $('#komunalna').val(komunalna);
		$('#tehnicki').val(tehnicki); 
        $('#god').val();
		$('#uplate').val(uplate);
		$('#ukupno').val(ukupno);
		// ZAŠTITA OKOLINE
	if ($('#god').val() > 0 && $('#god').val() <= 5 && $('#ccm').val() <= 750 ) {
		zastita = 12.15;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 5 && $('#god').val() < 9 && $('#ccm').val() <= 750 ) {
		zastita = 12.83;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 8 && $('#god').val() < 11 && $('#ccm').val() <= 750 ) {
		zastita = 13.50;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 10 && $('#god').val() < 16 && $('#ccm').val() <= 750 ) {
		zastita = 14.85;
		$('#zastita').val(zastita);
		}		 
	else if ($('#god').val() > 15 && $('#god').val() < 21 && $('#ccm').val() <= 750 ) {
		zastita = 16.20;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 20 && $('#god').val() < 31 && $('#ccm').val() <= 750 ) {
		zastita = 18.90;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 30 && $('#ccm').val() <= 750 ) {
		zastita = 21.60;
		$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 0 && $('#god').val() <= 5 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 12.83;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 5 && $('#god').val() <= 8 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 13.55;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 8 && $('#god').val() <= 10 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 14.25;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 10 && $('#god').val() <= 15 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 15.68;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 15 && $('#god').val() <= 20 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 17.10;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 20 && $('#god').val() <= 30 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 19.95;
	$('#zastita').val(zastita);
		}
		else if ($('#god').val() > 30 && $('#ccm').val() > 750 && $('#ccm').val() <= 1400 ) {
		zastita = 22.80;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 0 && $('#god').val() <= 5 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 13.50;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 5 && $('#god').val() <= 8 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 14.25;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 8 && $('#god').val() <= 10 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 15;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 10 && $('#god').val() <= 15 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 16.50;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 15 && $('#god').val() <= 20 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 18;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 20 && $('#god').val() <= 30 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 21;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 30 && $('#ccm').val() > 1400 && $('#ccm').val() <= 2000 ) {
		zastita = 24;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 0 && $('#god').val() <= 5 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 16.2;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 5 && $('#god').val() <= 8 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 17.1;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 8 && $('#god').val() <= 10 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 18;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 10 && $('#god').val() <= 15 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 19.8;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 15 && $('#god').val() <= 20 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 21.6;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 20 && $('#god').val() <= 30 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 25.2;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 30 && $('#ccm').val() > 2000 && $('#ccm').val() <= 4000 ) {
		zastita = 28.8;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 0 && $('#god').val() <= 5 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 18.9;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 5 && $('#god').val() <= 8 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 19.95;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 8 && $('#god').val() <= 10 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 21;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 10 && $('#god').val() <= 15 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 23.1;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 15 && $('#god').val() <= 20 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 25.2;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 20 && $('#god').val() <= 30 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 29.4;
	$('#zastita').val(zastita);
		}
	else if ($('#god').val() > 30 && $('#ccm').val() > 4000 && $('#ccm').val() <= 8000 ) {
		zastita = 33.6;
	$('#zastita').val(zastita);
		}	
		// POREZ
        if ($('#god').val() <= 2 && $('#ccm').val() <= 1600 ) {
        porez = 50;
        $('#porez').val(porez);
         }
        else if ($('#god').val() <= 2 && $('#ccm').val() > 1600 ) { 
          porez = 100;
          $('#porez').val(porez);
        }
         else if ($('#god').val() > 2 && $('#god').val() <= 5 && $('#ccm').val() <= 1600 ) {
          porez = 35;
          $('#porez').val(porez);
        }
         else if ($('#god').val() > 2 && $('#god').val() <= 5 && $('#ccm').val() > 1600 ) {
          porez = 70;
          $('#porez').val(porez);
        }
        else if ($('#god').val() > 5 && $('#god').val() <= 10 && $('#ccm').val() <= 1600 ) {
          porez = 25;
          $('#porez').val(porez);
        }
        else if ($('#god').val() > 5 && $('#god').val() <= 10 && $('#ccm').val() > 1600 ) {
          porez = 50;
          $('#porez').val(porez);
        }
        else if ($('#god').val() > 10 && $('#ccm').val() > 1600 ) { 
          porez = 20;
          $('#porez').val(porez);
        }
        else if ($('#god').val() > 10 && $('#ccm').val() < 1600 ) { 
          porez = 10;
          $('#porez').val(porez);
        }
        else {
          porez = 0; 
        }
      } 
	  if ($('#arko').val() <= 22 ) {
	  polica = 115;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 22 && $('#arko').val() <= 33 ) {
	  polica = 164;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 33 && $('#arko').val() <= 44 ) {
	  polica = 198;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 44 && $('#arko').val() <= 55 ) {
	  polica = 230;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 55 && $('#arko').val() <= 66 ) {
	  polica = 263;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 66 && $('#arko').val() <= 84 ) {
	  polica = 289;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 84 && $('#arko').val() <= 110 ) {
	  polica = 346;
	  $('#polica').val(polica);
	  }
	  else if ($('#arko').val() > 110 ) {
	  polica = 416;
	  $('#polica').val(polica);
	  }
	  else {
	  polica = 0;
	  }
	  	          if ($('#ccm').val() <= 1100) {
        putarina = 25.20;
        $('#putarina').val(putarina);
         }
	else if ($('#ccm').val() > 1100 && $('#ccm').val() <= 1600 ) {
	putarina = 50.10;
	$('#putarina').val(putarina);
	}
		else if ($('#ccm').val() > 1600 && $('#ccm').val() <= 2000 ) {
	putarina = 60;
	$('#putarina').val(putarina);
	}
		else if ($('#ccm').val() > 2000 && $('#ccm').val() <= 2500 ) {
	putarina = 99.90;
	$('#putarina').val(putarina);
	}
		else if ($('#ccm').val() > 2500 && $('#ccm').val() <= 3000 ) {
	putarina = 150;
	$('#putarina').val(putarina);
	}
		else if ($('#ccm').val() > 3000 ) {
	putarina = 250;
	$('#putarina').val(putarina);
	}
	        else {
          putarina = 0000; 
        }
            $(":checkbox").change( function() {
                      if ($('#potvrda').is(' :checked')) {
                          potvrda = 5;
              $('#potvrdaovl').val(potvrda);
              }
      else {
                  potvrda = 0;
         $('#potvrdaovl').val(potvrda);
      }
	            if ($('#saobracajna').is(' :checked')) {
                          potoreg = 5;
              $('#potvrdaoreg').val(potoreg);
              }
      else {
                 potoreg = 0;
         $('#potvrdaoreg').val(potoreg);
      }

               if ($('#tablice').is(' :checked')) {
                tabl = 20;
              $('#tablice1').val(tabl);
              }
      else {
                  tabl = 0;
         $('#tablice1').val(tabl);
      }
	  var ukupno = amk+voda+stiker+komunalna+tehnicki+porez+putarina+potoreg+tabl+potvrda+polica+zastita+uplate - 0;
	  $('#ukupno').val(ukupno);
		}); 
   });
});