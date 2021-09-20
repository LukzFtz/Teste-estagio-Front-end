import React, { useEffect, useState } from 'react';
import SecondBackground from '../components/SecondBackground'
import SecondBackgroundMobile from '../components/SecondBackgroundMobile'
import '../css/secondPage.css'
import FunctionIcon from '../components/FunctionIcon';
import { motion, AnimatePresence } from "framer-motion"
import $ from 'jquery';


function App() {
    
    const [showFunctionalities, setShowFunctionalities] = useState(false)

    const  animateFunctionalitie1={
        hidden:{ opacity:0 , x:-500},
        visible:{
          opacity:1,
          x:0,
          transition:{ duration:1, delay:1.2 }
        }
      }
    const  animateFunctionalitie2={
        hidden:{ opacity:0 , x:-500},
        visible:{
          opacity:1,
          x:0,
          transition:{ duration:1, delay:1.5 }
        }
      }
    const  animateFunctionalitie3={
        hidden:{ opacity:0 , x:-500},
        visible:{
          opacity:1,
          x:0,
          transition:{ duration:1, delay:1.8 }
        }
      }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if ($("#secondPageMainDiv").is(":visible")) {
                setShowFunctionalities(true)
            }
        })

        window.addEventListener("load", ()=>{
            if($(window).width()<=1200){
                let component = document.getElementById("secondBackground")
                component.style.paddingTop='25vh'
                let component2 = document.getElementById("functionalitiesMD")
                component2.style.paddingTop='10vh'
                
            }
            if($(window).width()>=1400 && $(window).width()<=1650){
                let component = document.getElementById("secondBackground")
                component.style.paddingTop='25vh'
                let component2 = document.getElementById("functionalities")
                component2.style.paddingTop='10vh'
            }
        })

        window.addEventListener("resize",()=>{
            if($(window).width()<=1200){
                // $('#secondBackground').
                let component = document.getElementById("secondBackground")
                component.style.paddingTop='25vh'
                let component2 = document.getElementById("functionalitiesMD")
                component2.style.paddingTop='10vh'
                
                // $('#secondBackground').css(secondBackgroundPadding)
            }else{
                let component = document.getElementById("secondBackground")
                let component2 = document.getElementById("functionalitiesMD")
                component.style.paddingTop='0vh'
                component2.style.paddingTop='0vh'
            }

            if($(window).width()>=1400 && $(window).width()<=1650){
                let component = document.getElementById("secondBackground")
                component.style.paddingTop='25vh'
                let component2 = document.getElementById("functionalities")
                component2.style.paddingTop='10vh'
            }else if($(window).width()>1650){
                let component = document.getElementById("secondBackground")
                component.style.paddingTop='0vh'
                let component2 = document.getElementById("functionalities")
                component2.style.paddingTop='0vh'
            }
        })
    },[])
    
    return (
        <div id="secondPageMainDiv">
            <div className="container-fluid">
                <div className="positionAbsolute">
                    <div className="d-xxl-block d-none textInfo">
                        <div className="row">

                            <div className="col-xxl-1" ></div>
                            <div className="col-xxl-6">
                                <div>
                                    <h2 className="titleTextXXL text-start">Neovision</h2>
                                </div>
                                <div>
                                    <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                                    <br/>
                                    <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-xxl-none d-xl-block d-none row textInfo">
                        <div className="col-xl-0 col-xxl-1" />
                        <div className="col-xl-7 col-xxl-5">
                            <div>
                                <h2 className="titleTextXL text-start">Neovision</h2>
                            </div>
                            <div>
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                                <br />
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-xxl-none d-xl-none d-none d-md-block row textInfo">
                        <div className="col-xl-0 col-xxl-1" />
                        <div className="col-md-11">
                            <div>
                                <h2 className="titleTextXL text-start">Neovision</h2>
                            </div>
                            <div>
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                                <br />
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none d-xl-none  row textInfo">
                        <div className="col-xl-0 col-xxl-1" />
                        <div className="col-md-11">
                            <div>
                                <h2 className="titleTextMOB text-start">Neovision</h2>
                            </div>
                            <div>
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                                {/* <br /> */}
                                <p className="text-start fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sane ista voluptas. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Atqui reperies, inquit, in hoc quidem pertinacem; Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. Quod quidem iam fit etiam in Academia.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container-fluid functionsIcons d-none d-xxl-block">
                        <div id="functionalities" className="row ">

                            <div className="col-1" />
                            <AnimatePresence>
                            {showFunctionalities &&
                                <div className="col-xl-4 col-xxl-3">
                                    <motion.div variants={animateFunctionalitie1} initial="hidden" animate="visible" className=" row align-items-center">
                                        <div className="col-xxl-3">
                                            <FunctionIcon />
                                        </div>
                                        <div className="col-xl-9">
                                            <span className="fs-2 text-light">Funcionalidade 1</span>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={animateFunctionalitie2} initial="hidden" animate="visible" className=" row align-items-center">
                                        <div className="col-xxl-3">
                                            <FunctionIcon />
                                        </div>
                                        <div className="col-xl-9">
                                            <span className="fs-2 text-light">Funcionalidade 2</span>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={animateFunctionalitie3} initial="hidden" animate="visible" className=" row align-items-center">
                                        <div className="col-xxl-3">
                                            <FunctionIcon />
                                        </div>
                                        <div className="col-xl-9">
                                            <span className="fs-2 text-light">Funcionalidade 3</span>
                                        </div>
                                    </motion.div>
                                </div>
                            }
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="container-fluid row functionsIconsXl d-none d-xl-block d-xxl-none">
                        <div className="col-1" />
                        <AnimatePresence>
                        {showFunctionalities &&
                            <div className=" col-6  col-xl-4">
                                <motion.div variants={animateFunctionalitie1} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2 col-xl-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-xl-8">
                                        <span className="fs-3 text-light">Funcionalidade 1</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie2} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2 col-xl-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-xl-8">
                                        <span className="fs-3 text-light">Funcionalidade 2</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie3} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2 col-xl-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-xl-8">
                                        <span className="fs-3 text-light">Funcionalidade 3</span>
                                    </div>
                                </motion.div>
                            </div>
                        }
                        </AnimatePresence>
                    </div>

                    <div id="functionalitiesMD" className="container-fluid row functionsIconsMD d-none d-md-block d-xl-none">
                        <div className="col-1" />
                        <AnimatePresence>
                        {showFunctionalities &&
                            <div className=" col-6">
                                <motion.div variants={animateFunctionalitie1} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10 ">
                                        <span className="fs-3 text-light">Funcionalidade 1</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie2} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10 ">
                                        <span className="fs-3 text-light">Funcionalidade 2</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie3} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10">
                                        <span className="fs-3 text-light">Funcionalidade 3</span>
                                    </div>
                                </motion.div>
                            </div>
                        }
                        </AnimatePresence>
                    </div>
                    
                    <div id="functionalitiesMobile" className="container-fluid row functionsIconsMD d-block d-md-none ">
                        <div className="col-1" />
                        <AnimatePresence>
                        {showFunctionalities &&
                            <div className=" col-12">
                                <motion.div variants={animateFunctionalitie1} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10 text-start">
                                        <span className="fs-3 text-light">Funcionalidade 1</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie2} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10 text-start">
                                        <span className="fs-3 text-light">Funcionalidade 2</span>
                                    </div>
                                </motion.div>
                                <motion.div variants={animateFunctionalitie3} initial="hidden" animate="visible" className=" row align-items-center">
                                    <div className="col-2">
                                        <FunctionIcon />
                                    </div>
                                    <div className="col-10 text-start">
                                        <span className="fs-3 text-light">Funcionalidade 3</span>
                                    </div>
                                </motion.div>
                            </div>
                        }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div id="secondBackground" className="d-none d-md-block">
                <SecondBackground />
            </div>
            <div id="secondBackgroundMobile" className="d-block d-md-none">
                <SecondBackgroundMobile />
            </div>

        </div>
    );
}

export default App;
