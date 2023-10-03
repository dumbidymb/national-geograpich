import '../css/estilos.css'
export default function carrusel() {
    return (
        <section id="container-slider">    
			<a href="javascript: funcionEjecutar('anterior');" class="arrowPrev"><i class="fas fa-chevron-circle-left"></i></a>
			<a href="javascript: funcionEjecutar('siguiente');" class="arrowNext"><i class="fas fa-chevron-circle-right"></i></a>
			<ul class="listslider">
			  <li><a itlist="itList_0" href="#" class="item-select-slid"></a></li>
			  <li><a itlist="itList_1" href="#"></a></li>
			  <li><a itlist="itList_2" href="#"></a></li>
			</ul>
			<ul id="slider">
			  <li style="background-image: url('images/gallery-1.jpg'); z-index:0; opacity: 1;">
				<div class="content_slider" >
				  <div>
					<h2>Lago en canada</h2>
				<p>Nueva especie descubierta del tamano de tu dedo.</p>
				<a href="" target="_blank" class="btnSlider">leer</a>
			  </div>
				</div>
			  </li>
			  <li style="background-image: url('images/gallery-2.jpg'); ">
				<div class="content_slider" >
				  <div>
					<h2>Cambios ambientales</h2>
				<p>Conoce como ayudar a nuestro planeta</p>
				<a href="" target="_blank" class="btnSlider">leer</a>
			  </div>
				</div>
			  </li>
			  <li style="background-image: url('images/gallery-3.jpg'); ">
				<div class="content_slider" >
				  <div>
					<h2>Primer documental en una zona de riesgo</h2>
				<p>Mira como tenemos otro planeta en nuestro mismo mundo</p>
				<a href="" target="_blank" class="btnSlider">leer</a>
			  </div>
				</div>
			  </li>
		   </ul>
		 </section>
    )
  }

