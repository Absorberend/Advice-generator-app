import './Advice.scss';
import diceIcon from "./assets/icon-dice.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";

export default function Advice() {
  return (
    <section className="advice">
        <div className="advice__number">Advice #117</div>
        <div className="advice__quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam ac ante luctus gravida. "</div>
        <div>
            <img src={mobileDivider} />
        </div>
        <div className="advice__dice">
            <div>
                <img src={diceIcon} />
            </div>
        </div>
    </section>
  )
}
