import './Advice.scss';
import diceIcon from "./assets/icon-dice.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import desktopDivider from "./assets/pattern-divider-desktop.svg";
import { useMediaQuery } from 'react-responsive';
import useFetch from './hooks/useFetch';
import { useState, useEffect } from 'react';


export default function Advice() {
  const isDesktop = useMediaQuery({ query: '(min-width: 600px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const {get} = useFetch("https://api.adviceslip.com/");
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  let isInit = false;

  useEffect(() => {
    
    get("advice").then(data => {
      if (!isInit) {
        setData(data);
        isInit = true;
      }
    })
    .catch(error => console.error(error));    
    // eslint-disable-next-line
  }, []);

  const handleButtonClick = () => {
    setButtonClicked(true);

    get("advice").then(data => {
      setData(data);
    })

    setTimeout(() => {
      setButtonClicked(false);
    }, 2000);
  }

  return (
    <section className="advice">
        <div className="advice__number">Advice #{data.slip?.id || "none"}</div>
        <div className="advice__quote">"{data.slip?.advice || "Press the button for a new quote."}"</div>
        <div className="advice__divider">
            {isTabletOrMobile && <img src={mobileDivider} alt="" />}
            {isDesktop && <img src={desktopDivider} alt="" />}
        </div>
        <button className="advice__dice" onClick={handleButtonClick} disabled={buttonClicked ? true : false}>
            <div>
                <img src={diceIcon} alt="" />
            </div>
        </button>
    </section>
  )
}
