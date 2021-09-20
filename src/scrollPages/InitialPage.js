import InitialBackground from '../components/InitialBackground';
import InitialBackgroundMobile from '../components/InitialBackgroundMobile';
import LogoBackground from '../components/LogoBackground';
import '../css/InitialPage.css';
import { motion } from "framer-motion"


function App() {
    const textAppearAnimate = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, delay: 2.5 }
        }
    }

    return (
        <div className="text-center mainPage">

            <div className="container">
                <motion.div id="divBackgroundInfo" variants={textAppearAnimate} initial="hidden" animate="visible" className="row justify-content-center justify-content-md-end align-items-start align-items-md-center">
                    <div className="col-12 col-md-6 text-center">
                        <div className="d-block d-md-none spacingItens" />
                        <span className="display-6 text-light">
                            Reconhecimento de imagem com
                        </span>
                        <br />
                        <span className="display-4 text-light">
                            Inteligência Artificial
                        </span>
                    </div>
                    <div className="d-none d-md-block col-1">
                    </div>
                </motion.div>
            </div>
            <div className=" d-none d-md-block">
                <InitialBackground />
            </div>
            <div className=" d-block d-md-none">
                <InitialBackgroundMobile />
            </div>
        </div>
    );
}

export default App;