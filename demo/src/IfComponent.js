const IfComp = ({ expression, trueComp = null, falseComp = null }) => (
  expression ? trueComp : falseComp
);
export default IfComp;