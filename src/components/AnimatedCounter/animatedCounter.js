import "./animatedCounter.scss";
const AnimatedCounter = ({
  counter1,
  counter2,
  counter3,
  counter4,
  fact1,
  fact2,
  fact3,
  fact4,
}) => {
  // animated counter component take facts and numer to show it by jQuery
  return (
    <div id="counter" className="animatedCounter">
      <div className="animatedCounter__counter">
        <h3 className="animatedCounter__fact">{fact1}</h3>
        <div className="animatedCounter__counter-value" data-count={counter1}>
          0
        </div>
      </div>
      <div className="animatedCounter__counter">
        <h3 className="animatedCounter__fact">{fact2}</h3>
        <div className="animatedCounter__counter-value" data-count={counter2}>
          0
        </div>
      </div>
      <div className="animatedCounter__counter">
        <h3 className="animatedCounter__fact">{fact3}</h3>
        <div className="animatedCounter__counter-value" data-count={counter3}>
          0
        </div>
      </div>
    </div>
  );
};
export default AnimatedCounter;
