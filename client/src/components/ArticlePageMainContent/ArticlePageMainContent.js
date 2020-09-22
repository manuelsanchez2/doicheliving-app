import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContentContainer = styled.section`
  padding: 0 1em 0 1em;
  background: white;
  display: flex;
  flex-direction: column;

  h2,
  h3 {
    text-align: center;
    margin: 0.5rem 0;
  }

  h4 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  img {
    align-self: center;
    width: 90%;
    margin: 0.5rem 0;
    border-radius: 10px;

    border-bottom: 0.2px solid var(--color-dark-border);
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }

  a {
    text-decoration: none;
    color: red;
  }

  button {
    align-self: center;
    margin: 0.5rem 0;
    border: 1px solid var(--color-gradient-submit);
    border-radius: 15px;
    max-width: 70%;
    background: var(--color-gradient-submit);
    padding: 0.3rem 2rem;
    color: var(--color-white);
    font-family: var(--font-lato);
    font-size: 0.7rem;
    letter-spacing: 1px;
    display: block;
  }

  button > a {
    color: white;
  }
`;

const ArticlePageMainContent = ({ src, alt, children }) => {
  return (
    <ContentContainer>
      <h2>La Filarmónica del Elba</h2>
      <p>
        <strong>
          La Filarmónica del Elba, o Elbphilharmonie, es básicamente una obra
          maestra de la arquitectura contemporánea en forma de sala de
          conciertos. Desde 2017, ha pasado a ser uno de los símbolos
          característicos de la ciudad de Hamburgo, ¡y nos queda bastante claro
          el porqué!
        </strong>
      </p>
      <p>
        En este artículo, te contamos todo lo que debes saber sobre este símbolo
        de la ciudad. Por ejemplo, ¿sabes cuánto se han dejado para la
        construcción de tal maravilla? Nosotros te lo contamos.
      </p>
      <img src={"https://i.imgur.com/MmIwaMn.jpg"} alt="filarmonica del elba" />
      <h3>¿Qué es la Filarmónica del Elba?</h3>
      <p>
        Construida sobre unos antiguos almacenes de cacao, tabaco y té, la
        Filarmónica de Hamburgo es desde 2017 uno de los símbolos de la ciudad.
        Ha sido un proyecto a gran escala: se estimaba que se iban a gastar unos
        77 millones de euros,
        <strong>¡y acabaron dejándose 789.000.000!</strong> Lo pongo con todos
        los ceros porque puede parecer que la palabra millones con cantidades
        tan ingentes de dinero le roba protagonismo a la cifra en cuestión.
        <strong>
          {" "}
          En resumen, fue, ha sido y es un proyecto ambicioso. De hecho, los
          alemanes no han invertido tanto dinero en ningún otro monumento.
        </strong>
        Pero, ¿qué se ha conseguido con la Filarmónica del Elba?
      </p>
      <p>
        El interior de la Filarmónica alberga un hotel de lujo, varios
        restaurantes, un museo, más de 40 apartamentos y de los auditorios. Lo
        que se pretendía conseguir era algo imposible hasta la fecha: que la
        música se escuchase a la perfección independientemente del asiento en el
        que estés sentado. Gracias a Yasuhisa Toyota, un ingeniero acústico
        japonés, se ha conseguido algo que era hasta entonces impensable:
        <strong>
          da igual si la sala está llena de gente o vacía, la música suena igual
          de bien desde cualquier lugar.
        </strong>
      </p>
      <p>
        Estilísticamente hablando, el edificio llama bastante la atención al
        conservar el ladrillo rojo -muy característico de esta zona de Hamburgo-
        <strong>
          y tener una parte superior que simula una gran ola de cristal.
        </strong>
      </p>
      <h3>Filarmónica del Elba: Entradas</h3>
      <p>
        La entrada para ver las instalaciones más básicas de la Filarmónica
        <strong>es completamente gratuita</strong>. Sin embargo, no tendrás
        acceso a la zona de los conciertos de esta forma. La única forma de ver
        los auditorios es viendo uno de los conciertos que hacen allí. Si
        queréis saber la programación de los conciertos en la Filarmónica del
        Elba, entonces le puedes echar un vistazo a este{" "}
        <a
          href="https://www.elbphilharmonie.de/de/konzerte/"
          target="_blank"
          rel="noreferrer"
        >
          enlace
        </a>
        . Merece la pena ver la página de vez en cuando, porque{" "}
        <strong>a veces hay conciertos gratuitos!</strong>
      </p>
      <p>
        También con respecto a la Filarmónica, si, como nosotros, sois muy
        curiosos y os gustan las grandes historias llenas de altibajos, entonces
        puede que os interese uno de los tours que se pueden hacer por la
        Filarmónica de Hamburgo. Hay opciones para todos los bolsillos, pero
        nosotros hemos encontrado uno que en relación calidad-precio es una
        pasada.
      </p>
      <button>
        <a
          href="https://www.getyourguide.es/hamburgo-l23/filarmonica-del-elba-tour-guiado-sin-salas-de-conciertos-t92790/?partner_id=AUS9KHH&utm_medium=online_publisher&placement=other&cmp=ES_Filar"
          target="_blank"
          rel="noreferrer"
        >
          VER TOUR POR LA FILARMÓNICA
        </a>
      </button>
      <h3>Preguntas Frecuentes</h3>
      <h4>¿Cómo llegar a la Filarmónica del Elba?</h4>
      <p>
        La Filarmónica del Elba se encuentra en el extremo occidental del barrio
        de HafenCity de Hamburgo, concretamente en la Platz der Deutschen
        Einheit (Plaza de la Unidad Alemana). La forma más fácil de llegar es
        cogiendo la U3 hasta Baumwall Station o con el S1 o S2 hasta
        Landungsbrücken o Stadthausbrücke. Desde ahí, estaréis a unos 5-10
        minutos a pie de la Filarmónica de Hamburgo.
      </p>
      <img
        src={"https://i.imgur.com/wGRo81y.jpg"}
        alt="speicherstadt hamburgo"
      />
      <p>
        Sin embargo, a nosotros nos gusta personalmente ir sin prisa y dándonos
        un paseo por la Speicherstadt, que es el antiguo barrio de almacenes de
        la ciudad. Es una zona que, como gran parte de la ciudad, está repleta
        de puentes.
        <strong>
          {" "}
          De hecho, dicen que Hamburgo es la ciudad con más puentes del mundo.
          ¡Muy por encima de Venecia y Amsterdam!
        </strong>
      </p>
      <h4>¿Cuánto cuesta la entrada a la Elbphilarmonie?</h4>
      <p>
        Como hemos dicho antes, la entrada a la Filarmónica de Hamburgo es
        completamente gratuita. Sin embargo, si queréis que os cuenten pequeñas
        anécdotas sobre su construcción y queréis hacer un tour diferente,
        entonces os recomendamos que hagáis alguno de los tours que hay por
        menos de 20 euros que merecen mucho la pena.
      </p>
      <button>
        <a
          href="https://www.getyourguide.es/hamburgo-l23/filarmonica-del-elba-tour-guiado-sin-salas-de-conciertos-t92790/?partner_id=AUS9KHH&utm_medium=online_publisher&placement=other&cmp=ES_Filar"
          target="_blank"
          rel="noreferrer"
        >
          VER TOUR POR LA FILARMÓNICA
        </a>
      </button>
      <h4>¿Merece la pena la Elbphilarmonie?</h4>
      <p>
        Si te gustan los edificios grandes y tener unas vistas que son una
        pasada, entonces es un sí rotundo. Creemos que es una visita obligada en
        Hamburgo, ya sea con concierto, tour o sin nada planificado.
      </p>
    </ContentContainer>
  );
};

ArticlePageMainContent.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ArticlePageMainContent;
