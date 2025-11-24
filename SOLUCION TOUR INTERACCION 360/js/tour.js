
var panorama, viewer, container, infospot;


window.addEventListener('load', () => {
    Swal.fire({
        title: 'Bienvenido al Tour 360° del Taller Mecánico',
        text: 'Haz clic en los puntos interactivos para aprender más.',
        icon: 'info',
        confirmButtonText: 'Entrar'
    });
});



container = document.querySelector('#container_principal');


panorama = new PANOLENS.ImagePanorama('imagenes/taller2.png');


var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot1.position.set(-150, -295, -501);


infospot1.addHoverText(
  'Como regla general, se recomienda cambiarlas cuando alcancen los 40,000 a 60,000 kilómetros, o cuando hayan cumplido 10 años desde su fecha de fabricación, ya que el caucho se degrada con el tiempo',
  10
);


infospot1.element.innerHTML = `
  <div style="
      background: linear-gradient(135deg, #4b4b4b, #2e2e2e);
      color: #fff;
      border: 2px solid #777;
      border-radius: 10px;
      padding: 15px;
      font-size: 15px;
      width: 250px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.35);
      font-family: 'Arial', sans-serif;
      letter-spacing: 0.3px;
      line-height: 1.4;
  ">
    <strong style="font-size:16px; display:block; margin-bottom:6px;">Cambio de neumaticos</strong>
    Como regla general, se recomienda cambiarlas cuando alcancen los 40,000 a 60,000 kilómetros, o cuando hayan cumplido 10 años desde su fecha de fabricación, ya que el caucho se degrada con el tiempo.
  </div>
`;
panorama.add(infospot1);




var infospot2= new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);



infospot2.position.set(218 ,-103 , 500);
infospot2.addHoverText('Más información sobre Cambio de Aceite')
infospot2.element.innerHTML = `
    <div style="
        background-color: #5d5d5d; 
        color: #ffffff; 
        padding: 8px 15px;
        border-radius: 4px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        white-space: nowrap; 
        cursor: pointer;
    ">
        CAMBIO DE ACEITE
    </div>
`;
infospot2.element.style.pointerEvents = "none"

infospot2.addEventListener('click', function() {
    Swal.fire({
        title: 'Servicio de Cambio de Aceite',
        html: `
            <div style="text-align: left;">
                <p>Mantener el aceite del motor en óptimas condiciones es crucial para la vida útil de tu vehículo. En Taller Ramírez utilizamos aceites de alta calidad y filtros originales.</p>
                <ul style="padding-left: 20px;">
                    <li><strong>Aceite:</strong> Sintético o semisintético.</li>
                    <li><strong>Filtros:</strong> OEM o equivalentes de alta calidad.</li>
                    <li><strong>Frecuencia:</strong> Recomendado cada 5.000 - 10.000 km.</li>
                </ul>
                <p>¡Agenda tu cita hoy mismo!</p>
            </div>
        `,
        icon: 'success', 
        confirmButtonText: 'Entendido'
    });
});

panorama.add(infospot2);


var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(500, -170, -119);
infospot3.addHoverText('Balanceo de llantas y como hacerlo.', -60);
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/aIAci7I6U-A"></iframe>        
    </div>
`;

panorama.add(infospot3);

// --- Infospot: Aire Acondicionado Automotriz ---
var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

// Ajusta la posición 3D según tu escena
infospot4.position.set(500 ,106 , -434);

// Texto que aparece al pasar el cursor
infospot4.addHoverText('Mantenimiento de A/C', -40);

// Contenido visual dentro del infospot (mini tarjeta)
infospot4.element.innerHTML = `
    <div style="
        background-color: #111010ff; 
        color: #ffffff; 
        padding: 8px 15px;
        border-radius: 4px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        white-space: nowrap; 
        cursor: pointer;
    ">
    Aire Acondicionado</strong>
      Revisión, recarga y detección de fugas.
    </div>
`;

// Permitir interacciones (si lo quieres clickeable)
infospot4.element.style.pointerEvents = "auto";

// Evento click: abrir SweetAlert con más información y vídeo
infospot4.addEventListener('click', function () {
  Swal.fire({
    title: 'Mantenimiento de Aire Acondicionado',
    html: `
      <div style="text-align:left; font-size:15px; line-height:1.45;">
        <p><strong>¿Qué revisamos?</strong></p>
        <ul style="padding-left:18px;">
          <li>Detección y reparación de fugas de gas refrigerante.</li>
          <li>Medición de presión y recarga (si aplica).</li>
          <li>Limpieza de evaporador y cambio de filtro de cabina.</li>
        </ul>
        <p><strong>Frecuencia recomendada:</strong> revisión anual o cada 20,000 km.</p>
        <p><strong>Consejo:</strong> Si el aire sale tibio o hay olor a humedad, trae tu vehículo.</p>
      </div>
      <br>
    `,
    width: 800,
    background: "#0b1620",
    color: "#e6f7ff",
    confirmButtonText: 'Cerrar',
  });
});


panorama.add(infospot4);


var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot5.position.set(-500, -51, 344);

infospot5.addHoverText('Un audio MP3 multimedial...', -60);
infospot5.element.innerHTML = 
'<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);




var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot6.position.set(-292 ,-41 , -500);

infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = 
'<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio2.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);



var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-480, -134, 500);
infospot7.addHoverText('Mantenimientos Preventivos.',100);
infospot7.element.innerHTML = `
    <div style="
        background-color: rgba(0,0,0,0.8);
        color:#fff;
        border-radius:8px;
        padding:10px;
        font-size:14px;
        width:200px;
        text-align:center;">

        Entrar al PDF sobre Mantenimientos Preventivos.
    </div>
`;


infospot7.addEventListener('click', function() {
    Swal.fire({
        title: '¿Abrir archivo PDF?',
        text: "Se abrirá en una nueva pestaña.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Abrir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("pdf/Mantenimientos.pdf", "_blank");
        }
    });
});


panorama.add(infospot7);




var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);


infospot8.position.set(13, -9, -500);


infospot8.addHoverText('Ver promociones del taller', -60);


infospot8.element.innerHTML = `
    <div style="
        background-color: rgba(0,0,0,0.8);
        color:#fff;
        border-radius:8px;
        padding:10px;
        font-size:14px;
        width:200px;
        text-align:center;">
        Promociones del Taller
    </div>
`;


infospot8.addEventListener('click', function () {
    Swal.fire({
        title: '🔥 Promociones del Mes',
        html: `
            <div style="text-align:left; font-size:16px;">
                <p><strong>Cambio de aceite + revisión = ₡19,900</strong></p>
                <p>✔ 10% de descuento en servicio de frenos</p>
                <p>✔ Balanceo GRATIS con cada alineamiento</p>
                <p style="color:#0f0;"> Promoción válida durante este mes </p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        background: '#1a1a1a',
        color: '#fff'
    });
});

panorama.add(infospot8);




var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);


infospot9.position.set(-500, -39, 160);


infospot9.addHoverText('Información sobre pintura', -60);


infospot9.element.innerHTML = `
    <div style="
        background-color: rgba(0,0,0,0.85);
        color:#fff;
        padding:10px;
        border-radius:8px;
        font-size:14px;
        width:200px;
        text-align:center;">
        Servicio de Pintura
    </div>
`;


infospot9.addEventListener('click', function () {
    Swal.fire({
        title: ' Servicio de Pintura Automotriz',
        html: `
            <div style="text-align:left; font-size:16px;">
                <p><strong>✔ Reparación y pintura completa o por panel</strong></p>
                <p><strong>✔ Igualación de color con espectrofotómetro</strong></p>
                <p><strong>✔ Pulido y detallado final incluido</strong></p>
                <p>Utilizamos pintura automotriz de alta calidad y proceso profesional de cabina.</p>
                <p style="color:#0f0;"> Consulta por precios según tipo de daño.</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        background: '#1a1a1a',
        color: '#fff'
    });
});


panorama.add(infospot9);



var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info); 


infospot10.position.set(-500, -25, -162);


infospot10.addHoverText('Batería y Sistema Eléctrico', -60);


infospot10.element.innerHTML = `
    <div style="
        backdrop-filter: blur(6px);
        background-color: rgba(0,0,0,0.85);
        padding: 12px;
        border-radius: 12px;
        color: #ffffff;
        font-size: 15px;
        width: 220px;
        text-align:center;
        border: 1px solid rgba(255,255,255,0.3);
    ">
        ⚡ Sistema Eléctrico
    </div>
`;


infospot10.addEventListener('click', function () {
    Swal.fire({
        title: '⚡ Batería y Sistema Eléctrico',
        html: `
            <div style="text-align:left; font-size:16px; line-height:1.5;">
                <p><strong>✔ Diagnóstico de batería y alternador</strong></p>
                <p><strong>✔ Revisión de fusibles y cableado</strong></p>
                <p><strong>✔ Cambio de batería con test de carga</strong></p>
                <p><strong>✔ Detección de fallas eléctricas</strong></p>
                <p style="color:#00b7ff;">Servicio especializado con herramientas de diagnóstico digital.</p>
            </div>
             <br>
            <iframe width="100%" height="300"
                src="https://www.youtube.com/embed/o0HAAmWt5Hw?start=122"
                frameborder="0" allowfullscreen>
            </iframe>
        `,
        background: "#001929",
        color: "#e0f7ff",
        confirmButtonColor: "#00aaff",
        confirmButtonText: "Cerrar",
        iconHtml: "⚡",   
    });
});


panorama.add(infospot10);






viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);





