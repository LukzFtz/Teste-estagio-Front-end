import React from 'react';
import '../css/InitialBackground.css';
import { motion } from "framer-motion"

// eslint-disable-next-line import/no-anonymous-default-export
export default function InitialBackground() {

  const  animateStyleShelf={
    hidden:{ opacity:0 , x:-500},
    visible:{
      opacity:1,
      x:0,
      transition:{ duration:1 }
    }
  }

  const  box1Animate={
    hidden:{ opacity:0 , y:-500},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:.2, delay:.5 }
    }
  }
  const  box2Animate={
    hidden:{ opacity:0 , y:-500},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:.2, delay:1.7 }
    }
  }
  const  box3Animate={
    hidden:{ opacity:0 , y:-500},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:.2, delay:.8 }
    }
    
  }
  const  box4Animate={
    
    hidden:{ opacity:0 , y:-500},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:.2, delay:1.1 }
    }
  }
  const  box5Animate={
    hidden:{ opacity:0 , y:-500},
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:.2, delay:1.4 }
    }
  }


  const  thinking1Animate={
    hidden:{ opacity:0 },
    visible:{
      opacity:1,
      transition:{ duration:.2, delay:1.9 }
    }
  }
  const  thinking2Animate={
    hidden:{ opacity:0 },
    visible:{
      opacity:1,
      transition:{ duration:.2, delay:2.1 }
    }
  }
  const  thinking3Animate={
    hidden:{ opacity:0 },
    visible:{
      opacity:1,
      transition:{ duration:.2, delay:2.3 }
    }
  }

  const mobileAnimate={
    hidden:{ opacity:0 ,rotate:90, y:500, x:500 },
    visible:{
      opacity:1,
      rotate:0,
      y:0,
      x:0,
      transition:{ duration:1, delay:2.0 }
    }
  }


  return (
    <div className="mainPageBackgroung">
      <svg version="1.1" id="componentsGroup" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 1920 1080" >
        <linearGradient id="backgroundGradient" gradientUnits="userSpaceOnUse" x1="959.6321" y1="26.8573" x2="960.3658" y2="1050.3741">
          <stop id="gradientStop1" offset="0" />
          <stop id="gradientStop2" offset="0.5243" />
          <stop id="gradientStop3" offset="1" />
        </linearGradient>
        <rect id="background" width="1920" height="1080" />
        <motion.g id="shelf" variants={animateStyleShelf} initial="hidden" animate="visible">
          <path class="st1" d="M637.33,459.99v11.56h-49.04V403.7h-20.11h-10.15h-11.47h-30.26h-20.75v30.69h-3.34h-30.05h-40.98h-32.29
       v39.45h-4.11h-3.44V403.7h-20.11h-10.15H339.6h-30.26h-20.75v30.69h-3.34H255.2h-7.54V422.7v-20.62h-23.83h-7.38h-22.88h-31.2
       h-24.58v69.48H73.46v-11.56h-9.73v497.29h9.73v-22.11h117.42v22.11h9.73v-95.05h309.58v95.05h9.73v-22.11h117.41v22.11h9.73V459.99
       H637.33z M637.33,838.5h-23.6v-42.82h-20.11h-6.23h-18.82v-10.83v-47.32h-28.61h-14.44h-5.6v-21.35h117.41V838.5z M369.19,750.36
       v17.17h-18.05h-6.23H325.6h-26.34h-6.67v-39.45h-31.29h-9.69h-30.05H200.6v-11.9h309.58v21.35h-0.98h-43.05h-29.52v12.83h-4.07
       h-37.59H369.19z M510.18,568.53v37.59h-13.77h-32.04h-25.24v15.36h-5.4h-6.23h-19.32h-26.34h-6.67v-39.45H343.9h-9.69h-30.05
       h-40.98h-24.21v-6.39H214.5h-6.87h-0.7h-6.33v-7.11H510.18z M527.48,606.12h-7.57v-37.59h117.41v123.92h-85.38v-86.33H527.48z
        M190.87,568.53v7.11h-7.44h-32.04h-25.24v116.81H73.46V568.53H190.87z M190.87,716.19v11.9h-10.28h-32.29V838.5H73.46V716.19
       H190.87z M611.83,544.8v-59.75h25.49v59.75H611.83z M103.16,485.05v59.75h-29.7v-59.75H103.16z M190.87,921.68H73.46v-59.45h117.42
       V921.68z M519.91,921.68v-59.45h117.41v59.45H519.91z"/>
          <g class="st2">
            <g>
              <rect x="510.18" y="459.99" class="st3" width="9.73" height="497.29" />
              <rect x="637.33" y="459.99" class="st3" width="9.73" height="497.29" />
              <rect x="515.05" y="471.56" class="st3" width="127.15" height="13.49" />
              <rect x="515.05" y="696.62" class="st3" width="127.15" height="13.49" />
              <rect x="515.05" y="921.68" class="st3" width="127.15" height="13.49" />
            </g>
            <g>
              <rect x="436.62" y="737.53" class="st4" width="103.33" height="100.97" />
              <rect x="466.15" y="737.53" class="st5" width="102.42" height="100.97" />
              <rect x="509.2" y="737.53" class="st6" width="16.31" height="25.98" />
              <rect x="509.2" y="812.52" class="st6" width="16.31" height="25.98" />
              <g>
                <rect x="534.75" y="817.8" class="st7" width="26.57" height="16.05" />
                <g>
                  <rect x="535.97" y="820.05" class="st8" width="2.82" height="11.55" />
                  <rect x="540.5" y="820.05" class="st8" width="0.99" height="11.55" />
                  <rect x="545.54" y="820.05" class="st8" width="2.31" height="11.55" />
                  <rect x="542.62" y="820.05" class="st8" width="1.41" height="11.55" />
                  <rect x="549.58" y="820.05" class="st8" width="0.96" height="11.55" />
                  <rect x="554.09" y="820.05" class="st8" width="1.91" height="11.55" />
                  <rect x="556.66" y="820.05" class="st8" width="0.95" height="11.55" />
                  <rect x="551.93" y="820.05" class="st8" width="1.31" height="11.55" />
                  <rect x="558.63" y="820.05" class="st8" width="1.41" height="11.55" />
                </g>
              </g>
            </g>
            <rect x="436.62" y="784.85" class="st9" width="131.94" height="53.65" />
            <g>
              <rect x="495.54" y="403.7" class="st4" width="72.63" height="70.97" />
              <rect x="516.29" y="403.7" class="st5" width="71.99" height="70.97" />
              <rect x="546.55" y="403.7" class="st6" width="11.47" height="18.26" />
              <rect x="546.55" y="456.41" class="st6" width="11.47" height="18.26" />
              <g>
                <rect x="564.51" y="460.11" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="565.37" y="461.7" class="st8" width="1.98" height="8.12" />
                  <rect x="568.55" y="461.7" class="st8" width="0.7" height="8.12" />
                  <rect x="572.09" y="461.7" class="st8" width="1.63" height="8.12" />
                  <rect x="570.05" y="461.7" class="st8" width="0.99" height="8.12" />
                  <rect x="574.94" y="461.7" class="st8" width="0.67" height="8.12" />
                  <rect x="578.11" y="461.7" class="st8" width="1.34" height="8.12" />
                  <rect x="579.91" y="461.7" class="st8" width="0.67" height="8.12" />
                  <rect x="576.59" y="461.7" class="st8" width="0.92" height="8.12" />
                  <rect x="581.29" y="461.7" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="520.98" y="795.69" class="st4" width="72.63" height="42.82" />
              <rect x="541.73" y="795.69" class="st5" width="71.99" height="42.82" />
              <rect x="568.07" y="795.69" class="st6" width="19.32" height="12.68" />
              <g>
                <rect x="545.18" y="823.95" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="546.03" y="825.53" class="st8" width="1.98" height="8.12" />
                  <rect x="549.22" y="825.53" class="st8" width="0.7" height="8.12" />
                  <rect x="552.76" y="825.53" class="st8" width="1.63" height="8.12" />
                  <rect x="550.71" y="825.53" class="st8" width="0.99" height="8.12" />
                  <rect x="555.6" y="825.53" class="st8" width="0.67" height="8.12" />
                  <rect x="558.78" y="825.53" class="st8" width="1.34" height="8.12" />
                  <rect x="560.58" y="825.53" class="st8" width="0.67" height="8.12" />
                  <rect x="557.25" y="825.53" class="st8" width="0.92" height="8.12" />
                  <rect x="561.96" y="825.53" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="519.09" y="473.83" class="st4" width="72.63" height="70.97" />
              <rect x="539.84" y="473.83" class="st5" width="71.99" height="70.97" />
              <rect x="566.18" y="473.83" class="st6" width="19.32" height="18.26" />
              <rect x="566.18" y="526.54" class="st6" width="19.32" height="18.26" />
              <g>
                <rect x="543.29" y="530.25" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="544.14" y="531.83" class="st8" width="1.98" height="8.12" />
                  <rect x="547.33" y="531.83" class="st8" width="0.7" height="8.12" />
                  <rect x="550.87" y="531.83" class="st8" width="1.63" height="8.12" />
                  <rect x="548.82" y="531.83" class="st8" width="0.99" height="8.12" />
                  <rect x="553.71" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="556.89" y="531.83" class="st8" width="1.34" height="8.12" />
                  <rect x="558.69" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="555.36" y="531.83" class="st8" width="0.92" height="8.12" />
                  <rect x="560.07" y="531.83" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="388.88" y="434.38" class="st4" width="113" height="110.42" />
              <rect x="421.17" y="434.38" class="st5" width="112.01" height="110.42" />
              <rect x="462.14" y="434.38" class="st6" width="30.05" height="28.41" />
              <rect x="462.14" y="516.39" class="st6" width="30.05" height="28.41" />
              <g>
                <rect x="426.53" y="522.16" class="st7" width="29.06" height="17.56" />
                <g>
                  <rect x="427.86" y="524.62" class="st8" width="3.08" height="12.63" />
                  <rect x="432.82" y="524.62" class="st8" width="1.08" height="12.63" />
                  <rect x="438.33" y="524.62" class="st8" width="2.53" height="12.63" />
                  <rect x="435.14" y="524.62" class="st8" width="1.54" height="12.63" />
                  <rect x="442.75" y="524.62" class="st8" width="1.04" height="12.63" />
                  <rect x="447.69" y="524.62" class="st8" width="2.09" height="12.63" />
                  <rect x="450.49" y="524.62" class="st8" width="1.04" height="12.63" />
                  <rect x="445.32" y="524.62" class="st8" width="1.43" height="12.63" />
                  <rect x="452.64" y="524.62" class="st8" width="1.54" height="12.63" />
                </g>
              </g>
            </g>
            <g>
              <rect x="369.19" y="750.36" class="st4" width="90.21" height="88.14" />
              <rect x="394.97" y="750.36" class="st5" width="89.41" height="88.14" />
              <rect x="432.55" y="750.36" class="st6" width="14.24" height="22.68" />
              <rect x="432.55" y="815.82" class="st6" width="14.24" height="22.68" />
              <g>
                <rect x="454.86" y="820.43" class="st7" width="23.2" height="14.01" />
                <g>
                  <rect x="455.92" y="822.39" class="st8" width="2.46" height="10.08" />
                  <rect x="459.87" y="822.39" class="st8" width="0.86" height="10.08" />
                  <rect x="464.27" y="822.39" class="st8" width="2.02" height="10.08" />
                  <rect x="461.73" y="822.39" class="st8" width="1.23" height="10.08" />
                  <rect x="467.8" y="822.39" class="st8" width="0.83" height="10.08" />
                  <rect x="471.74" y="822.39" class="st8" width="1.67" height="10.08" />
                  <rect x="473.98" y="822.39" class="st8" width="0.83" height="10.08" />
                  <rect x="469.85" y="822.39" class="st8" width="1.14" height="10.08" />
                  <rect x="475.7" y="822.39" class="st8" width="1.23" height="10.08" />
                </g>
              </g>
            </g>
            <g>
              <rect x="278.51" y="767.53" class="st4" width="72.63" height="70.97" />
              <rect x="299.27" y="767.53" class="st5" width="71.99" height="70.97" />
              <rect x="325.6" y="767.53" class="st6" width="19.32" height="18.26" />
              <rect x="325.6" y="820.24" class="st6" width="19.32" height="18.26" />
              <g>
                <rect x="302.72" y="823.95" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="303.57" y="825.53" class="st8" width="1.98" height="8.12" />
                  <rect x="306.76" y="825.53" class="st8" width="0.7" height="8.12" />
                  <rect x="310.3" y="825.53" class="st8" width="1.63" height="8.12" />
                  <rect x="308.25" y="825.53" class="st8" width="0.99" height="8.12" />
                  <rect x="313.14" y="825.53" class="st8" width="0.67" height="8.12" />
                  <rect x="316.31" y="825.53" class="st8" width="1.34" height="8.12" />
                  <rect x="318.12" y="825.53" class="st8" width="0.67" height="8.12" />
                  <rect x="314.79" y="825.53" class="st8" width="0.92" height="8.12" />
                  <rect x="319.5" y="825.53" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="148.31" y="728.08" class="st4" width="113" height="110.42" />
              <rect x="180.59" y="728.08" class="st5" width="112.01" height="110.42" />
              <rect x="221.57" y="728.08" class="st6" width="30.05" height="28.41" />
              <rect x="221.57" y="810.09" class="st6" width="30.05" height="28.41" />
              <g>
                <rect x="185.96" y="815.86" class="st7" width="29.06" height="17.56" />
                <g>
                  <rect x="187.29" y="818.32" class="st8" width="3.08" height="12.63" />
                  <rect x="192.25" y="818.32" class="st8" width="1.08" height="12.63" />
                  <rect x="197.76" y="818.32" class="st8" width="2.53" height="12.63" />
                  <rect x="194.57" y="818.32" class="st8" width="1.54" height="12.63" />
                  <rect x="202.18" y="818.32" class="st8" width="1.05" height="12.63" />
                  <rect x="207.11" y="818.32" class="st8" width="2.09" height="12.63" />
                  <rect x="209.92" y="818.32" class="st8" width="1.04" height="12.63" />
                  <rect x="204.75" y="818.32" class="st8" width="1.43" height="12.63" />
                  <rect x="212.07" y="818.32" class="st8" width="1.54" height="12.63" />
                </g>
              </g>
            </g>
            <g>
              <rect x="137.78" y="402.08" class="st4" width="86.04" height="84.08" />
              <rect x="162.36" y="402.08" class="st5" width="85.29" height="84.08" />
              <rect x="193.57" y="402.08" class="st6" width="22.88" height="21.63" />
              <rect x="193.57" y="464.52" class="st6" width="22.88" height="21.63" />
              <g>
                <rect x="166.45" y="468.92" class="st7" width="22.13" height="13.37" />
                <g>
                  <rect x="167.46" y="470.79" class="st8" width="2.35" height="9.62" />
                  <rect x="171.24" y="470.79" class="st8" width="0.82" height="9.62" />
                  <rect x="175.43" y="470.79" class="st8" width="1.92" height="9.62" />
                  <rect x="173.01" y="470.79" class="st8" width="1.17" height="9.62" />
                  <rect x="178.8" y="470.79" class="st8" width="0.8" height="9.62" />
                  <rect x="182.56" y="470.79" class="st8" width="1.59" height="9.62" />
                  <rect x="184.7" y="470.79" class="st8" width="0.79" height="9.62" />
                  <rect x="180.76" y="470.79" class="st8" width="1.09" height="9.62" />
                  <rect x="186.33" y="470.79" class="st8" width="1.17" height="9.62" />
                </g>
              </g>
            </g>
            <rect x="168.28" y="422.7" class="st9" width="79.37" height="63.46" />
            <g>
              <rect x="288.59" y="403.7" class="st4" width="72.63" height="70.97" />
              <rect x="309.34" y="403.7" class="st5" width="71.99" height="70.97" />
              <rect x="339.6" y="403.7" class="st6" width="11.47" height="18.26" />
              <rect x="339.6" y="456.41" class="st6" width="11.47" height="18.26" />
              <g>
                <rect x="357.56" y="460.11" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="358.42" y="461.7" class="st8" width="1.98" height="8.12" />
                  <rect x="361.6" y="461.7" class="st8" width="0.69" height="8.12" />
                  <rect x="365.15" y="461.7" class="st8" width="1.63" height="8.12" />
                  <rect x="363.1" y="461.7" class="st8" width="0.99" height="8.12" />
                  <rect x="367.99" y="461.7" class="st8" width="0.67" height="8.12" />
                  <rect x="371.16" y="461.7" class="st8" width="1.34" height="8.12" />
                  <rect x="372.96" y="461.7" class="st8" width="0.67" height="8.12" />
                  <rect x="369.64" y="461.7" class="st8" width="0.92" height="8.12" />
                  <rect x="374.35" y="461.7" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="312.14" y="473.83" class="st4" width="72.63" height="70.97" />
              <rect x="332.89" y="473.83" class="st5" width="71.99" height="70.97" />
              <rect x="359.23" y="473.83" class="st6" width="19.32" height="18.26" />
              <rect x="359.23" y="526.54" class="st6" width="19.32" height="18.26" />
              <g>
                <rect x="336.34" y="530.25" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="337.2" y="531.83" class="st8" width="1.98" height="8.12" />
                  <rect x="340.38" y="531.83" class="st8" width="0.7" height="8.12" />
                  <rect x="343.92" y="531.83" class="st8" width="1.63" height="8.12" />
                  <rect x="341.87" y="531.83" class="st8" width="0.99" height="8.12" />
                  <rect x="346.76" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="349.94" y="531.83" class="st8" width="1.34" height="8.12" />
                  <rect x="351.74" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="348.41" y="531.83" class="st8" width="0.92" height="8.12" />
                  <rect x="353.12" y="531.83" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="181.93" y="434.38" class="st4" width="113" height="110.42" />
              <rect x="214.22" y="434.38" class="st5" width="112.01" height="110.42" />
              <rect x="255.2" y="434.38" class="st6" width="30.05" height="28.41" />
              <rect x="255.2" y="516.39" class="st6" width="30.05" height="28.41" />
              <g>
                <rect x="219.59" y="522.16" class="st7" width="29.06" height="17.56" />
                <g>
                  <rect x="220.91" y="524.62" class="st8" width="3.08" height="12.63" />
                  <rect x="225.87" y="524.62" class="st8" width="1.08" height="12.63" />
                  <rect x="231.38" y="524.62" class="st8" width="2.53" height="12.63" />
                  <rect x="228.19" y="524.62" class="st8" width="1.54" height="12.63" />
                  <rect x="235.8" y="524.62" class="st8" width="1.04" height="12.63" />
                  <rect x="240.74" y="524.62" class="st8" width="2.09" height="12.63" />
                  <rect x="243.55" y="524.62" class="st8" width="1.04" height="12.63" />
                  <rect x="238.37" y="524.62" class="st8" width="1.43" height="12.63" />
                  <rect x="245.7" y="524.62" class="st8" width="1.54" height="12.63" />
                </g>
              </g>
            </g>
            <g>
              <rect x="439.13" y="606.12" class="st4" width="88.35" height="86.33" />
              <rect x="464.37" y="606.12" class="st5" width="87.57" height="86.33" />
              <rect x="496.41" y="606.12" class="st6" width="23.5" height="22.21" />
              <rect x="496.41" y="670.24" class="st6" width="23.5" height="22.21" />
              <g>
                <rect x="468.57" y="674.75" class="st7" width="22.72" height="13.73" />
                <g>
                  <rect x="469.61" y="676.68" class="st8" width="2.41" height="9.88" />
                  <rect x="473.48" y="676.68" class="st8" width="0.85" height="9.88" />
                  <rect x="477.79" y="676.68" class="st8" width="1.98" height="9.88" />
                  <rect x="475.3" y="676.68" class="st8" width="1.21" height="9.88" />
                  <rect x="481.25" y="676.68" class="st8" width="0.82" height="9.88" />
                  <rect x="485.11" y="676.68" class="st8" width="1.63" height="9.88" />
                  <rect x="487.3" y="676.68" class="st8" width="0.81" height="9.88" />
                  <rect x="483.26" y="676.68" class="st8" width="1.12" height="9.88" />
                  <rect x="488.98" y="676.68" class="st8" width="1.21" height="9.88" />
                </g>
              </g>
            </g>
            <g>
              <rect x="126.15" y="575.65" class="st4" width="88.35" height="116.81" />
              <rect x="151.39" y="575.65" class="st5" width="87.57" height="116.81" />
              <rect x="183.43" y="575.65" class="st6" width="23.5" height="22.21" />
              <rect x="183.43" y="670.24" class="st6" width="23.5" height="22.21" />
              <g>
                <rect x="155.59" y="674.75" class="st7" width="22.72" height="13.73" />
                <g>
                  <rect x="156.63" y="676.68" class="st8" width="2.41" height="9.88" />
                  <rect x="160.5" y="676.68" class="st8" width="0.85" height="9.88" />
                  <rect x="164.81" y="676.68" class="st8" width="1.98" height="9.88" />
                  <rect x="162.32" y="676.68" class="st8" width="1.21" height="9.88" />
                  <rect x="168.27" y="676.68" class="st8" width="0.82" height="9.88" />
                  <rect x="172.13" y="676.68" class="st8" width="1.63" height="9.88" />
                  <rect x="174.32" y="676.68" class="st8" width="0.81" height="9.88" />
                  <rect x="170.28" y="676.68" class="st8" width="1.12" height="9.88" />
                  <rect x="176" y="676.68" class="st8" width="1.21" height="9.88" />
                </g>
              </g>
            </g>
            <rect x="207.63" y="575.65" class="st9" width="31.34" height="116.81" />
            <g>
              <rect x="361.1" y="621.48" class="st4" width="72.63" height="70.97" />
              <rect x="381.85" y="621.48" class="st5" width="71.99" height="70.97" />
              <rect x="408.19" y="621.48" class="st6" width="19.32" height="18.26" />
              <rect x="408.19" y="674.19" class="st6" width="19.32" height="18.26" />
              <g>
                <rect x="385.3" y="677.9" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="386.16" y="679.49" class="st8" width="1.98" height="8.12" />
                  <rect x="389.34" y="679.49" class="st8" width="0.7" height="8.12" />
                  <rect x="392.89" y="679.49" class="st8" width="1.63" height="8.12" />
                  <rect x="390.84" y="679.49" class="st8" width="0.99" height="8.12" />
                  <rect x="395.73" y="679.49" class="st8" width="0.67" height="8.12" />
                  <rect x="398.9" y="679.49" class="st8" width="1.34" height="8.12" />
                  <rect x="400.7" y="679.49" class="st8" width="0.67" height="8.12" />
                  <rect x="397.38" y="679.49" class="st8" width="0.92" height="8.12" />
                  <rect x="402.09" y="679.49" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <g>
              <rect x="230.89" y="582.03" class="st4" width="113" height="110.42" />
              <rect x="263.18" y="582.03" class="st5" width="112.01" height="110.42" />
              <rect x="304.16" y="582.03" class="st6" width="30.05" height="28.41" />
              <rect x="304.16" y="664.04" class="st6" width="30.05" height="28.41" />
              <g>
                <rect x="268.55" y="669.81" class="st7" width="29.06" height="17.56" />
                <g>
                  <rect x="269.88" y="672.28" class="st8" width="3.08" height="12.63" />
                  <rect x="274.83" y="672.28" class="st8" width="1.08" height="12.63" />
                  <rect x="280.34" y="672.28" class="st8" width="2.53" height="12.63" />
                  <rect x="277.16" y="672.28" class="st8" width="1.54" height="12.63" />
                  <rect x="284.76" y="672.28" class="st8" width="1.04" height="12.63" />
                  <rect x="289.7" y="672.28" class="st8" width="2.09" height="12.63" />
                  <rect x="292.51" y="672.28" class="st8" width="1.04" height="12.63" />
                  <rect x="287.33" y="672.28" class="st8" width="1.43" height="12.63" />
                  <rect x="294.66" y="672.28" class="st8" width="1.54" height="12.63" />
                </g>
              </g>
            </g>
            <g>
              <rect x="103.16" y="473.83" class="st4" width="72.63" height="70.97" />
              <rect x="123.91" y="473.83" class="st5" width="71.99" height="70.97" />
              <rect x="150.25" y="473.83" class="st6" width="19.32" height="18.26" />
              <rect x="150.25" y="526.54" class="st6" width="19.32" height="18.26" />
              <g>
                <rect x="127.36" y="530.25" class="st7" width="18.68" height="11.28" />
                <g>
                  <rect x="128.21" y="531.83" class="st8" width="1.98" height="8.12" />
                  <rect x="131.4" y="531.83" class="st8" width="0.7" height="8.12" />
                  <rect x="134.94" y="531.83" class="st8" width="1.63" height="8.12" />
                  <rect x="132.89" y="531.83" class="st8" width="0.99" height="8.12" />
                  <rect x="137.78" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="140.95" y="531.83" class="st8" width="1.34" height="8.12" />
                  <rect x="142.76" y="531.83" class="st8" width="0.67" height="8.12" />
                  <rect x="139.43" y="531.83" class="st8" width="0.92" height="8.12" />
                  <rect x="144.14" y="531.83" class="st8" width="0.99" height="8.12" />
                </g>
              </g>
            </g>
            <rect x="176.13" y="473.83" class="st9" width="19.77" height="70.97" />
            <rect x="68.59" y="544.8" class="st10" width="568.73" height="23.73" />
            <rect x="68.59" y="692.46" class="st10" width="568.73" height="23.73" />
            <rect x="68.59" y="838.5" class="st10" width="568.73" height="23.73" />
            <g>
              <rect x="63.73" y="459.99" class="st3" width="9.73" height="497.29" />
              <rect x="190.87" y="459.99" class="st3" width="9.73" height="497.29" />
              <rect x="68.59" y="471.56" class="st3" width="127.15" height="13.49" />
              <rect x="68.59" y="921.68" class="st3" width="127.15" height="13.49" />
            </g>
          </g>
        </motion.g>
        <g id="person">
          <polygon class="st11" points="248.47,602.98 247.26,646.84 270.17,647.29 272.04,603.34 	" />
          <g>
            <path class="st12" d="M234.1,525.38v22.6c-0.39-0.03-0.75-0.12-1.15-0.12c-8.24,0-14.91,6.78-14.91,15.14
         c0,8.36,6.68,15.14,14.91,15.14c0.39,0,0.76-0.09,1.15-0.12v5.22c0,19.57,15.87,35.44,35.44,35.44h0.72
         c19.57,0,35.44-15.87,35.44-35.44v-57.87H234.1z"/>
            <path class="st13" d="M269.3,561.23c0,2.7-2.19,4.89-4.9,4.89c-2.7,0-4.9-2.19-4.9-4.89c0-2.7,2.19-4.9,4.9-4.9
         C267.11,556.33,269.3,558.52,269.3,561.23z"/>
            <path class="st13" d="M296.3,561.23c0,2.7-2.19,4.89-4.89,4.89c-2.7,0-4.9-2.19-4.9-4.89c0-2.7,2.19-4.9,4.9-4.9
         C294.11,556.33,296.3,558.52,296.3,561.23z"/>
            <path class="st14" d="M262.34,585.7h28.22c0,0-0.92,13.77-13.77,13.77C263.95,599.47,262.34,585.7,262.34,585.7z" />
            <path class="st13" d="M295.72,551.13h-9.85c-0.98,0-1.77-0.79-1.77-1.77v-0.29c0-0.98,0.79-1.77,1.77-1.77h9.85
         c0.98,0,1.77,0.79,1.77,1.77v0.29C297.49,550.34,296.69,551.13,295.72,551.13z"/>
            <path class="st13" d="M269.33,551.13h-9.85c-0.98,0-1.77-0.79-1.77-1.77v-0.29c0-0.98,0.79-1.77,1.77-1.77h9.85
         c0.98,0,1.77,0.79,1.77,1.77v0.29C271.1,550.34,270.31,551.13,269.33,551.13z"/>
            <path class="st13" d="M220.03,525.38c0,0,3.82-31.82,39.69-25.09c35.87,6.73,53.92,7.65,58.82,1.53c0,0,10.33,33.65-30.02,33.65
         s-38.51-4.9-42.18,3.06c-3.67,7.95-1.53,21.11-1.53,21.11h-9.18c0,0,0.06-14.23-13.43-7.11
         C222.2,552.53,218.8,543.12,220.03,525.38z"/>
          </g>
          <path class="st15" d="M323.39,732.33c0.6-0.94,1.21-1.82,1.82-2.68c-4.29-4.45-8.98-9.37-12.16-12.86
       c-2.38-2.61-4.15-5.7-5.21-9.06l-10.05-51.4c-1.66-8.49-6.65-16.05-14-20.61c-0.44-0.27-0.83-0.5-1.14-0.65
       c-16.8-8.23-22.29,13.23-22.61,20.77c-0.1,2.26,0.35,4.49,1.33,6.53l28.76,63.98c1.52,3.15,4.72,5.14,8.21,5.11l19.06,14.15
       C318.77,740.95,320.86,736.3,323.39,732.33z"/>
          <path class="st13" d="M280.54,936.97v37.57h67.88l0-0.16c0.12-8.76-5.25-16.77-13.53-19.65c-9.64-3.35-22.27-9.8-30.8-21.94
       L280.54,936.97z"/>
          <path class="st16" d="M304.1,932.79l-23.56,4.18l0.17,13.1l39.04-2.62C314.09,943.85,308.54,939.1,304.1,932.79z" />
          <path class="st13" d="M223.03,936.97v37.57h67.88l0-0.16c0.12-8.76-5.25-16.77-13.53-19.65c-9.64-3.35-22.27-9.8-30.8-21.94
       L223.03,936.97z"/>
          <path class="st16" d="M246.59,932.79l-23.56,4.18l0.17,13.1l39.04-2.62C256.58,943.85,251.03,939.1,246.59,932.79z" />
          <path class="st17" d="M292.11,759.01l4.99-0.19c4.58-46.76-0.13-83.94-4.36-105.31c-2.43-12.31-10.83-22.35-21.77-27.06
       c-6.82,2.63-14.73,3.39-21.08-0.69c-0.56-0.36-1.05-0.78-1.56-1.18c-14.09,3.42-31.92,11.89-34.47,26.56
       c-8.04,46.17,3.12,114.85,2.69,117.01c-1.33,6.59,1.08,173.29,1.08,173.29h41.87l0.5-143.98c6.96,12.33,14.94,45.84,14.27,48.78
       l1.11,91.34l38.81,4.57l4.11-101.89C320.26,832.59,301.93,784.8,292.11,759.01z"/>
          <path class="st18" d="M236.43,746.5c13.08,1.59,26.05,4.14,39.28,4.06c2.75-0.02,5.46-0.01,8.15,0.05
       c6.21-5.54,3.1-12.75,0.88-16.22c-5.83-9.09-35.26-9.8-38.96-20.07c-4.06-11.26-2.81-23.3-2.44-35.01
       c0.51-16.21-1.71-28.06-17.12-35.48c-2.4-1.16-4.85-2.19-7.32-3.19c-2.52,3.07-4.34,6.55-5.02,10.49c-5,28.72-2.58,66.1-0.13,90.8
       C221.02,744.22,228.4,745.52,236.43,746.5z"/>
          <g>
            <path class="st17" d="M186.62,718.91l30.35-76.01c0.84-2.1,2.18-3.94,3.91-5.39c5.79-4.86,22.41-9.26,27.71,8.69
         c0.89,3,0.58,7.96-0.45,10.92l-26.62,51.19c-0.98,2.82,50.38-2.41,50.38-2.41l1.46,28.37c0,0-31.86,1.46-49.47,1.74
         C187.41,736.6,185.32,722.16,186.62,718.91z"/>
            <path class="st12" d="M275.1,705.45c-1.11,0.06-2.17,0.22-3.21,0.44l1.46,28.37c1.06,0.11,2.14,0.16,3.24,0.11
         c9.57-0.49,16.99-7.37,16.57-15.35C292.75,711.03,284.67,704.96,275.1,705.45z"/>
          </g>
          <polygon class="st19" points="304,684.62 266.76,751.97 314.18,762.95 358,693.55 	" />
          <path class="st11" d="M345.16,715.57c1.72,1.35,0.76,7.78-1.92,13.59c-2.67,5.82-7.05,11.02-8.74,10.35
       c-5.9-2.34-8.19-9.85-5.25-16.46C332.2,716.45,340.11,711.62,345.16,715.57z"/>
        </g>
        <g id="thinking">
          <motion.ellipse id="circulo1" variants={thinking1Animate} initial="hidden" animate="visible" class="st14" cx="297.84" cy="481.04" rx="4.46" ry="4" />
          <motion.ellipse id="circulo2" variants={thinking2Animate} initial="hidden" animate="visible" class="st14" cx="310.57" cy="449.34" rx="14.38" ry="12.75" />
          <motion.ellipse id="circulo3" variants={thinking3Animate} initial="hidden" animate="visible" class="st14" cx="375.82" cy="403.58" rx="66.13" ry="42.99" />
          <motion.text variants={thinking3Animate} initial="hidden" animate="visible" transform="matrix(1.1394 0 0 1 356.8155 428.3517)" class="st17 st20 st21">?</motion.text>
        </g>
        <g id="allBox">
          <motion.g id="box5" variants={box5Animate} initial="hidden" animate="visible">
            <rect x="488.13" y="605.2" class="st22" width="184.89" height="268.62" />
            <rect x="551.06" y="605.2" class="st23" width="182.95" height="268.62" />
            <rect x="630.93" y="605.2" class="st24" width="42.92" height="55.38" />
            <rect x="630.93" y="818.44" class="st24" width="42.92" height="55.38" />
            <g>
              <rect x="561.52" y="829.69" class="st25" width="56.64" height="34.22" />
              <g>
                <rect x="564.11" y="834.49" class="st13" width="6.01" height="24.62" />
                <rect x="573.77" y="834.49" class="st13" width="2.11" height="24.62" />
                <rect x="584.51" y="834.49" class="st13" width="4.93" height="24.62" />
                <rect x="578.3" y="834.49" class="st13" width="3.01" height="24.62" />
                <rect x="593.13" y="834.49" class="st13" width="2.04" height="24.62" />
                <rect x="602.75" y="834.49" class="st13" width="4.07" height="24.62" />
                <rect x="608.22" y="834.49" class="st13" width="2.02" height="24.62" />
                <rect x="598.13" y="834.49" class="st13" width="2.79" height="24.62" />
                <rect x="612.41" y="834.49" class="st13" width="3.01" height="24.62" />
              </g>
            </g>
          </motion.g>
          <motion.g id="box4" variants={box4Animate} initial="hidden" animate="visible">
            <rect x="616.89" y="714.43" class="st22" width="149.34" height="145.92" />
            <rect x="659.56" y="714.43" class="st23" width="148.02" height="145.92" />
            <rect x="721.78" y="714.43" class="st24" width="23.57" height="37.55" />
            <rect x="721.78" y="822.8" class="st24" width="23.57" height="37.55" />
            <g>
              <rect x="758.71" y="830.43" class="st25" width="38.4" height="23.2" />
            </g>
          </motion.g>
          <motion.g id="box3" variants={box3Animate} initial="hidden" animate="visible">
            <rect x="665.31" y="858.64" class="st22" width="149.34" height="145.92" />
            <rect x="707.98" y="858.64" class="st23" width="148.02" height="145.92" />
            <rect x="762.13" y="858.64" class="st24" width="39.72" height="37.55" />
            <rect x="762.13" y="967.01" class="st24" width="39.72" height="37.55" />
            <g>
              <rect x="715.07" y="974.64" class="st25" width="38.4" height="23.2" />
            </g>
          </motion.g>
          <motion.g id="box2" variants={box2Animate} initial="hidden" animate="visible">
            <rect x="512.97" y="459.27" class="st22" width="149.34" height="145.92" />
            <rect x="555.64" y="459.27" class="st23" width="148.02" height="145.92" />
            <rect x="609.79" y="459.27" class="st24" width="39.72" height="37.55" />
            <g>
              <rect x="562.73" y="575.28" class="st25" width="38.4" height="23.2" />
            </g>
          </motion.g>
          <motion.g id="box1" variants={box1Animate} initial="hidden" animate="visible">
            <rect x="397.59" y="777.52" class="st22" width="232.34" height="227.03" />
            <rect x="463.98" y="777.52" class="st23" width="230.3" height="227.03" />
            <rect x="548.23" y="777.52" class="st24" width="61.79" height="58.42" />
            <rect x="548.23" y="946.14" class="st24" width="61.79" height="58.42" />
            <g>
              <rect x="475.01" y="958.01" class="st25" width="59.75" height="36.1" />
            </g>
          </motion.g>
        </g>
        <motion.g id="mobile" variants={mobileAnimate} initial="hidden" animate="visible">
          <g>
            <path class="st26" d="M756.09,827.83c26.97,0,49.04-22.06,49.04-49.03V644.3l19-5.88l77.47,250.22L769.63,929.5l-21.39-69.09
         l-39.91-32.59H756.09z"/>
            <path class="st26" d="M567.79,712.11c-6.71-8.85-7.07-21.37,0-30.49V712.11z" />
            <path class="st26" d="M567.79,593.91v48.51l-6.82-5.56c-10.64-8.69-12.55-24.37-3.99-35.13
         C559.9,598.07,563.67,595.45,567.79,593.91z"/>
            <path class="st26" d="M529.94,505.58c8.57-10.76,24.46-12.67,35.12-3.99l2.73,2.23v64.5l-33.86-27.62
         C523.28,532.02,521.38,516.34,529.94,505.58z"/>
          </g>
          <polygon class="st27" points="909.62,846.75 739.94,899.29 796.07,1080.55 982.01,1080.55 	" />
          <path class="st28" d="M616.14,629.38l-8.5-6.55c-15.44,4.15-22.82,14.56-23.48,30.19l8.01,6.41
       C613.99,676.81,634.5,643.13,616.14,629.38z"/>
          <g>
            <path class="st29" d="M568.6,409.04v369.74c0,26.97,22.06,49.03,49.04,49.03h139.27c26.97,0,49.04-22.06,49.04-49.03V409.04
         c0-26.97-22.06-49.04-49.04-49.04H617.64C590.67,360,568.6,382.07,568.6,409.04z M589.48,396.06c0-0.38,0.31-0.69,0.69-0.69
         h194.22c0.38,0,0.69,0.31,0.69,0.69v384.07c0,0.38-0.31,0.69-0.69,0.69H590.16c-0.38,0-0.69-0.31-0.69-0.69V396.06z"/>
            <path class="st30" d="M723.26,371.58h-71.96c-1.95,0-3.54,1.6-3.54,3.54v0c0,1.95,1.6,3.54,3.54,3.54h71.96
         c1.95,0,3.55-1.6,3.55-3.54v0C726.8,373.17,725.21,371.58,723.26,371.58z"/>
            <path class="st30" d="M687.27,793.59c-6.62,0-11.99,5.37-11.99,11.99s5.37,11.99,11.99,11.99c6.63,0,11.99-5.37,11.99-11.99
         S693.9,793.59,687.27,793.59z"/>
          </g>
          <path id="screen" class="st31" d="M784.24,396.53H590.02c-0.38,0-0.69,0.31-0.69,0.69v384.07c0,0.38,0.31,0.69,0.69,0.69h194.22
       c0.38,0,0.69-0.31,0.69-0.69V397.21C784.93,396.84,784.62,396.53,784.24,396.53z"/>
          <path class="st26" d="M824.48,745.75l-16.86,5.22l-4.63-21.43l-37.24-172.03c-7.75-35.78,14.5-47.87,36.54-54.69l43.96,203.07
       C849.94,722.94,840.15,740.89,824.48,745.75z"/>
          <g>
            <path class="st26" d="M565.92,682.51L565.92,682.51c-8.56,10.76-6.73,26.55,3.99,35.12l36.44,29.14
         c10.72,8.57,26.56,6.77,35.12-3.99l0,0c8.57-10.76,6.75-26.53-3.99-35.11l-36.44-29.14C590.3,669.93,574.49,671.74,565.92,682.51z
         "/>
            <path class="st28" d="M634.14,711.08l-8.5-6.54c-15.44,4.15-22.82,14.56-23.48,30.19l8,6.41
         C631.99,758.53,652.5,724.84,634.14,711.08z"/>
          </g>
          <path class="st26" d="M554.4,604.85L554.4,604.85c-8.56,10.76-6.73,26.55,3.99,35.13l31.04,24.81c10.72,8.57,26.56,6.77,35.12-3.99
       l0,0c8.56-10.76,6.75-26.53-3.99-35.11l-31.04-24.82C578.78,592.28,562.96,594.1,554.4,604.85z"/>
          <path class="st28" d="M617.39,630.44l-8.5-6.54c-15.44,4.15-22.82,14.56-23.48,30.19l8,6.41
       C615.24,677.89,635.74,644.2,617.39,630.44z"/>
        </motion.g>
      </svg>
    </div>
  );

}
