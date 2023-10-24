import React from 'react';
import '../App.css';
import './HomeSection.css';
import video from './videos/video-1.mp4';

function HomeSection() {
  return (
    <div className='home-container'>
      <div className='video-container'>
        <video src={video} autoPlay loop muted />
        <div className="question-overlay">
          <h1>¿ESTAS LISTO PARA COMENZAR?</h1>
        </div>
        
      </div>
      <div className='content-scroll-container'>
        <div className='content-container'>

        <div className="welcome-text">
    <h1>BIENVENIDOS A MI BLOG DE FITNESS</h1>
    <h2 style={{textDecorationLine: 'underline', textDecorationSkip: 'none', textDecorationColor: 'black'}}>¡Recuerda que el progreso es acumulativo y cada pequeño paso te acerca más a tus metas!</h2>
</div>

          <div className="tips-container">
            <div className="tip-box">
              <h2>Establece metas realistas</h2>
              <p>Define metas específicas y alcanzables para tu acondicionamiento físico. Esto te mantendrá motivado y te ayudará a medir tu progreso.</p>
            </div>
            <div className="tip-box">
              <h2>Varía tu entrenamiento</h2>
              <p>No te quedes siempre con la misma rutina. Prueba diferentes tipos de ejercicios y modalidades de entrenamiento para desafiar a tu cuerpo y evitar el estancamiento.</p>
            </div>
            <div className="tip-box">
              <h2>Mantén una alimentación balanceada</h2>
              <p>El ejercicio va de la mano con una dieta saludable. Asegúrate de consumir una variedad de alimentos nutritivos y equilibrados para apoyar tus objetivos de fitness.</p>
            </div>
            <div className="tip-box">
              <h2>Descansa y recupérate</h2>
              <p>El descanso es igualmente importante que el ejercicio. Dale a tu cuerpo tiempo para recuperarse adecuadamente entre sesiones de entrenamiento, y asegúrate de dormir lo suficiente para mantener un buen equilibrio.</p>
            </div>
            <div className="tip-box">
              <h2>Encuentra actividades que disfrutes</h2>
              <p>El fitness no tiene que ser aburrido. Encuentra actividades físicas que te gusten, ya sea bailar, practicar deportes, hacer yoga o cualquier otra cosa. Disfrutar de tu actividad física te ayudará a mantenerte constante y comprometido.</p>
            </div>
            <div className="tip-box">
              <h2>Mantén un registro de tu progreso</h2>
              <p>Lleva un seguimiento de tus entrenamientos, medidas corporales o cualquier otro indicador de progreso. Esto te ayudará a ver tu evolución y mantener la motivación.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;