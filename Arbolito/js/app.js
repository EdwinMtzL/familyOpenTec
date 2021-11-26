//número de filas 
var n = ['CARL JORY RIANHARD JORY', 'ADRIANA ALCANTAR SALGUERO', 'ADRIANA BAEZ PIER', 'CEYIRA GUADALUPE BARCENAS OLVERA', 'CINAY BARRERA DIAZ', 'WILMA JESSICA BERMUDEZ ALVAREZ', 'EHEKATZIN CASIANO SANCHEZ', 'ANA CATALINA ESCOBAR SANTIAGO', 'BLANCA ERIKA ESTRADA RAMIREZ', 'ABEL GARCIA HERRERA', 'EDUARDO GUEVARA ESPINOSA', 'LUZ NEREYDA HERNANDEZ LEYVA', 'JOSE HERNANDEZ RODRIGUEZ', 'LAURA LOPEZ SANCHEZ', 'KAREN VALERIA LOPEZ VELA', 'FRANCISCO ENRIQUE MAGDALENO GUTIERREZ', 'ISAI MARTINEZ MARTINEZ', 'ALMA GABRIELA MIRANDA PEREZ', 'VANESSA ESTEFANIA OLIVAS ROMAN', 'DORIS PAREDES PEREZ', 'BLANCA ESTELA PEREZ MARTINEZ', 'BERENICE PEREZ ZAVALA', 'GUSTAVO ADOLFO PORTILLO SANDOVAL', 'ALAN FERNANDO RAMIREZ MENDOZA', 'EMIGDIA REYES ROMERO', 'PATRICIA REYES ROMERO', 'MANUEL RODRIGUEZ MARTINEZ', 'ERIK ANTONIO RODRIGUEZ PANTOJA', 'BRENDA GIOVANA SAAVEDRA FLORES', 'MAGALLY VIANEY SERVIN VITE', 'ARMANDO SOTO CERONALEXIS SOTO HEREDIA', 'LETICIA VAZQUEZ HERNANDEZ', 'JANETH JIMENEZ CARRASCO', 'NOEMI ESCARLET GALLEGOS MUÑOZ', 'MANUEL ALEJANDRO ALVAREZ LOPEZ', 'ANGEL MAURICIO PEREZ CORTES', 'ARMANDO AGUILAR MORALES', 'BERENICE SEGOVIA BAUTISTA', 'JONATHAN SALVADOR RAMIREZ VALLEJO', 'TERESA CLAUDIA CUREÑO RAMOS', 'JESSICA FERNANDEZ HERNANDEZ', 'ANA LAURA MORALES  PEREZ', 'EDGAR ITURBIDE TREJO', 'MARIA EUGENIA BARAJAS DIAZ LOZANO', 'ARIEL GARCIA GARCIA', 'ANDREA AIMÉ GARCÍA OLIVERAS', 'JOSE LUIS ONOFRE LOBATO', 'ADRIANA ANGELICA LEYVA GARCIA', 'LUIS ADRIAN MENDOZA RIVERA', 'OLIVER IVAN ARELLANO HERNANDEZ', 'NORMA ELENA AYALA PERALTA', 'OSCAR ISAAC PEREZ DOMINGUEZ', 'EDWIN MARTINEZ LEON', 'OMAR CAMPOS BURGOS', 'CLAUDIA JIMENEZ ANTONIO', 'LOURDES EMPERATRIZ DE JESUS ALVAREZ LEON', 'OMAR DESIDERIO MENDOZA COLORADO', 'ENRIQUE ASGARD GARDUÑO RAMIREZ', 'MONTSERRAT RODRIGUEZ  LOPEZ', 'TANIA SABRINA MOLINA ORTIZ', 'JESUS DE PAZ HERNANDEZ', 'LYNETTE CLARISSA GOMEZ PORTILLO', 'RODRIGO MANUEL PALOMERA BRISEÑO', 'IRVING CABRERA  CHIÑAS', 'MARIA FERNANDA PEREZ VARGAS', 'MIGUEL ANGEL HERNANDEZ MONTERRUBIO', 'JULIO ARNOLDO PRADO SAAVEDRA', 'GLORIA PAULINA GARCIA OLGUINERIKA', 'GUADALUPE HERNANDEZ NAJERAIAN', 'GABRIEL MANCILLA TORRES', 'DANIEL SANCHEZ ESCUTIA', 'VICTOR MARTINEZ ROMERO', 'RICARDO AXEL VARGAS MILLAN'];
let i = 0;
var count = 0;
var result = "";


//creamos la tabla en HTML con etiquetas de tabla
function makeTableHTML() {
    var times = 0;
    while (i < n.length) {

        result += '<div class="container">';

        for (var j = 0; j <= times; j++) {
            makepiramid();
        }


        result += '</div>';
        times++;
    }
    //document.write("<br>");
    return result;
}

function makepiramid() {
    //result += "<span>"+n[i]+"</span>";
    result += '<div class="card name-1"><i class="fas fa-circle one"></i><button  type="button" class="btn" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="' + n[i] + '"></button><i class="fas fa-circle two"></i></div>'
    $("#triangulo");
    i++;
}

//0 1

document.getElementById("triangulo").innerHTML = makeTableHTML();

//Función para pintar los números

$(function() {
    $('[data-toggle="popover"]').popover()
})

$(function() {
    $('.example-popover').popover({
        container: 'body'
    })
})

const spheres = $('.fas.fa-circle');
const colors = ['#b51c16', '#ec5d59', '#d38439', '#832b3e', '#253a49', '#bed2dd', '#d190be', '#ede442'];
const colorsLength = colors.length;

function changeSphereColors() {
    for (let s = 0; s < spheres.length; s++) {
        const sphere = spheres[s];
        const colorIndex = Math.floor(Math.random() * colorsLength);
        sphere.style.color = colors[colorIndex];
        sphere.style.textShadow = `0px 0px 10px ${colors[colorIndex]}`;
    }
}
changeSphereColors();
setInterval(changeSphereColors, 1000);

function createGift() {
    const tronco = document.getElementsByClassName('tronco')[0];
    //const size = Math.floor(Math.random() * 75) + 50;
    const size = 75;
    const color = Math.floor(Math.random() * colorsLength);
    const bottom = Math.floor(Math.random() * -100) - 50;
    const left = Math.floor(Math.random() * 150) - 50;
    const gift = `
    <i class="fas fa-gift" style="font-size: ${size}px; color: ${color}; bottom: ${bottom}px; left: ${left}px"></i>
    `;
    tronco.innerHTML += gift;
}



$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})