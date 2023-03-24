// se importa con yarn add prop-types
import PropTypes from 'prop-types'; //nos sirve para definir los tipos a las proptypes
export const Naej = ({title = "", subTitle= "", name}) => {    

  // if (!title) {
  //   throw new Error('El title no existe')
  // };

    return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  );
}

Naej.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

// aprendemos a que las props tengas tipo exportando 
// y tambien podemos hacer que sea como requisito un tipo de dato
// tambien podemos hacer defaul props en el parametro

Naej.defaultProps = {
  name: 'Jean Gonzales',
  subTitle: 'no hay subtitulo',
  title: "no hay titulo",
}