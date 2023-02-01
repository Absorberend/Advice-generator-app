import './Advice.scss';
import diceIcon from "./assets/icon-dice.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import desktopDivider from "./assets/pattern-divider-desktop.svg";
import { useMediaQuery } from 'react-responsive';


export default function Advice() {
  const isDesktop = useMediaQuery({ query: '(min-width: 600px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 599px)' });

  return (
    <section className="advice">
        <div className="advice__number">Advice #117</div>
        <div className="advice__quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam ac ante. "</div>
        <div className="advice__divider">
            {isTabletOrMobile && <img src={mobileDivider} alt="" />}
            {isDesktop && <img src={desktopDivider} alt="" />}
        </div>
        <div className="advice__dice">
            <div>
                <img src={diceIcon} alt="" />
            </div>
        </div>
    </section>
  )
}
