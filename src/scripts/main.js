let hh = 0;
let mm = 0;
let ss = 0;
let sss = 0;

//
function iniciar() {
    $('#play').click(function () {
        cron = setInterval(function () {
            const milisegundos = (sss += 1)

            if (milisegundos == 99) {
                const segundos = (ss += 1)
                sss = 0
                console.log(segundos)
                $('#segundo').html(segundos < 10 ? `0${ss}:` : `${ss}:`)
                if (segundos === 60) {
                    const minutos = (mm += 1)
                    ss = 0
                    $('#minuto').html(minutos < 10 ? `0${mm}:` : `${mm}:`)
                    if (minutos === 60) {
                        const horas = (hh += 1)
                        mm = 0
                        $('#hora').html(hh < 10 ? `0${hh}:` : `${hh}:`)
                    }
                }
            }
            $('#milisegundo').html(milisegundos < 10 ? `0${sss}` : sss)
        }, 10)
        $('#pause').removeClass("d-none");
        $('#play').addClass('d-none');
        $('#aviso').addClass('d-none')
    })

}

//
function pausar() {
    $('#pause').click(function () {
        clearInterval(cron)
        $('#play').removeClass('d-none')
        $('#pause').addClass('d-none')
        $('#aviso').removeClass('d-none')
    })
}

//
function zerar() {
    $('#zerar').click(function () {

        hh = 0;
        mm = 0;
        ss = 0;
        sss = 0;
        clearInterval(cron)

        $('#hora').html("00:")
        $('#minuto').html("00:")
        $('#segundo').html("00:")
        $('#milisegundo').html("00")
    })
}

//
pausar();
iniciar();
zerar();