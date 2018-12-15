import PropTypes from 'prop-types';

const IfComp = ({ expression, trueComp, falseComp }) => (
  expression ? trueComp : falseComp
);

IfComp.propTypes = {
  expression: PropTypes.bool,
  trueComp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  falseComp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

IfComp.defaultProps = {
  expression: true,
  trueComp: null,
  falseComp: null
}

export default IfComp;