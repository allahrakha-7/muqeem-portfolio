import PropTypes from 'prop-types';

const ShinyEffect = ({left, right, top, size = 500}) => {

    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        positionStyles.left = `${left}px`
    }

    if (right !== undefined) {
        positionStyles.right = `${right}px`
    }


  return (
    <div className='shiny-effect' style={positionStyles}></div>
  )
}


ShinyEffect.propTypes = {
  left: PropTypes.number,

  right: PropTypes.number,

  top: PropTypes.number.isRequired,

  size: PropTypes.number,
};


export default ShinyEffect