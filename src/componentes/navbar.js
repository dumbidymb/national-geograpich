import '../css/estilos.css'
import Link from 'next/link';

export default function navbar() {
    return (
        <nav class="colorlib-nav" role="navigation">
<div class="container">
    <div class="row">
        <div class="col-xs-2">
            <div id="colorlib-logo"><a href="index.html"></a>
                <div class="logo">
                <img class='imagen-geo' src="./img/logo_geo.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div class="col-xs-10 text-right menu-1">
            <ul>
            <Link href="/pagina">
            <li class="active"><strong>Ciencia</strong></li>
          </Link>
               
                <li class="has-dropdown">
                    <a href="blog.html"><strong>Animales</strong></a>
                </li>
                <li><a href="event.html"><strong>Medio ambiente</strong></a></li>
                <li><a href="travel.html"><strong>Historia</strong></a></li>
                <li><a href="about.html"><strong>Viajes</strong></a></li>
                <li><a href="contact.html"><strong>Foto del Día</strong></a></li>
            </ul>
        </div>
    </div>
</div>
</nav>
        )
    }
