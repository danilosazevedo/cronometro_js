let hh=0,mm=0,ss=0,sss=0;function iniciar(){$("#play").click((function(){cron=setInterval((function(){const s=sss+=1;if(99==s){const s=ss+=1;if(sss=0,console.log(s),$("#segundo").html(s<10?`0${ss}:`:`${ss}:`),60===s){const s=mm+=1;if(ss=0,$("#minuto").html(s<10?`0${mm}:`:`${mm}:`),60===s){hh+=1;mm=0,$("#hora").html(hh<10?`0${hh}:`:`${hh}:`)}}}$("#milisegundo").html(s<10?`0${sss}`:sss)}),10),$("#pause").removeClass("d-none"),$("#play").addClass("d-none"),$("#aviso").addClass("d-none")}))}function pausar(){$("#pause").click((function(){clearInterval(cron),$("#play").removeClass("d-none"),$("#pause").addClass("d-none"),$("#aviso").removeClass("d-none")}))}function zerar(){$("#zerar").click((function(){$("#aviso").addClass("d-none"),hh=0,mm=0,ss=0,sss=0,clearInterval(cron),$("#hora").html("00:"),$("#minuto").html("00:"),$("#segundo").html("00:"),$("#milisegundo").html("00")}))}pausar(),iniciar(),zerar();
//# sourceMappingURL=index.0b34ae31.js.map
