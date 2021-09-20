import React from 'react';
import '../css/InitialBackgroundMobile.css';
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
    hidden:{ opacity:0 ,rotate:90, y:500, x:1500 },
    visible:{
      opacity:1,
      rotate:0,
      y:0,
      x:0,
      transition:{ duration:1, delay:2.0 }
    }
  }


  return (

<svg version="1.1" id="LayerMob" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 1125 2436">
    <linearGradient id="fundoMob" gradientUnits="userSpaceOnUse" x1="561.6711" y1="61.6685" x2="563.3245" y2="2368.0928">
        <stop id="stopMob1" offset="0" />
        <stop id="stopMob2" offset="0.5243" />
        <stop id="stopMob3" offset="1" />
    </linearGradient>
    <rect id="fundoMob" y="0" width="1125" height="2436" />
    <motion.g id="shelfMob" variants={animateStyleShelf} initial="hidden" animate="visible">
        <path class="stMob1" d="M1032.38,1274.2v20.5h-86.93V1174.4H909.8h-17.99h-20.32h-53.64h-36.78v54.39h-5.92h-53.27h-72.63h-57.23
		v69.93h-7.28h-6.1V1174.4h-35.65h-17.99h-20.32h-53.64h-36.78v54.39h-5.92h-53.27h-13.37v-20.71v-36.55h-42.23h-13.07H245.8h-55.3
		h-43.58v123.15H32.91v-20.5H15.66v881.46h17.25v-39.19h208.12v39.19h17.25v-168.48h548.74v168.48h17.25v-39.19h208.12v39.19h17.25
		V1274.2H1032.38z M1032.38,1945.11h-41.84v-75.89h-35.65h-11.03H910.5v-19.2v-83.88h-50.72h-25.6h-9.93v-37.84h208.12V1945.11z
		 M557.11,1788.88v30.44h-31.99h-11.03h-34.24h-46.68h-11.81v-69.93h-55.46h-17.17h-53.27h-37.17v-21.09h548.74v37.84h-1.74h-76.32
		h-52.33v22.73h-7.22h-66.62H557.11z M807.01,1466.59v66.63h-24.41h-56.79h-44.74v27.22h-9.57h-11.03h-34.24h-46.68h-11.81v-69.93
		h-55.46H495.1h-53.27H369.2h-42.92v-11.32h-43.36h-12.18h-1.24h-11.21v-12.61H807.01z M837.68,1533.22h-13.42v-66.63h208.12v219.65
		H881.04v-153.02H837.68z M241.03,1466.59v12.61h-13.19h-56.79h-44.74v207.05h-93.4v-219.65H241.03z M241.03,1728.3v21.09h-18.22
		h-57.23v195.72H32.91V1728.3H241.03z M987.2,1424.52v-105.91h45.19v105.91H987.2z M85.55,1318.61v105.91H32.91v-105.91H85.55z
		 M241.03,2092.55H32.91v-105.38h208.12V2092.55z M824.26,2092.55v-105.38h208.12v105.38H824.26z"/>
        <g class="stMob2">
            <g>
                <rect x="807.01" y="1274.2" class="stMob3" width="17.25" height="881.46" />
                <rect x="1032.38" y="1274.2" class="stMob3" width="17.25" height="881.46" />
                <rect x="815.64" y="1294.7" class="stMob3" width="225.37" height="23.92" />
                <rect x="815.64" y="1693.62" class="stMob3" width="225.37" height="23.92" />
                <rect x="815.64" y="2092.55" class="stMob3" width="225.37" height="23.91" />
            </g>
            <g>
                <rect x="676.63" y="1766.14" class="stMob4" width="183.16" height="178.97" />
                <rect x="728.96" y="1766.14" class="stMob5" width="181.54" height="178.97" />
                <rect x="805.28" y="1766.14" class="stMob6" width="28.91" height="46.05" />
                <rect x="805.28" y="1899.06" class="stMob6" width="28.91" height="46.05" />
                <g>
                    <rect x="850.57" y="1908.42" class="stMob7" width="47.1" height="28.45" />
                    <g>
                        <rect x="852.72" y="1912.41" class="stMob8" width="5" height="20.47" />
                        <rect x="860.75" y="1912.41" class="stMob8" width="1.75" height="20.47" />
                        <rect x="869.69" y="1912.41" class="stMob8" width="4.1" height="20.47" />
                        <rect x="864.52" y="1912.41" class="stMob8" width="2.5" height="20.47" />
                        <rect x="876.85" y="1912.41" class="stMob8" width="1.69" height="20.47" />
                        <rect x="884.85" y="1912.41" class="stMob8" width="3.39" height="20.47" />
                        <rect x="889.4" y="1912.41" class="stMob8" width="1.68" height="20.47" />
                        <rect x="881.02" y="1912.41" class="stMob8" width="2.32" height="20.47" />
                        <rect x="892.89" y="1912.41" class="stMob8" width="2.5" height="20.47" />
                    </g>
                </g>
            </g>
            <rect x="676.63" y="1850.02" class="stMob9" width="233.87" height="95.09" />
            <g>
                <rect x="781.06" y="1174.4" class="stMob4" width="128.74" height="125.8" />
                <rect x="817.84" y="1174.4" class="stMob5" width="127.61" height="125.8" />
                <rect x="871.49" y="1174.4" class="stMob6" width="20.32" height="32.37" />
                <rect x="871.49" y="1267.83" class="stMob6" width="20.32" height="32.37" />
                <g>
                    <rect x="903.32" y="1274.41" class="stMob7" width="33.1" height="20" />
                    <g>
                        <rect x="904.83" y="1277.21" class="stMob8" width="3.51" height="14.39" />
                        <rect x="910.48" y="1277.21" class="stMob8" width="1.23" height="14.39" />
                        <rect x="916.76" y="1277.21" class="stMob8" width="2.88" height="14.39" />
                        <rect x="913.13" y="1277.21" class="stMob8" width="1.76" height="14.39" />
                        <rect x="921.79" y="1277.21" class="stMob8" width="1.19" height="14.39" />
                        <rect x="927.42" y="1277.21" class="stMob8" width="2.38" height="14.39" />
                        <rect x="930.62" y="1277.21" class="stMob8" width="1.18" height="14.39" />
                        <rect x="924.72" y="1277.21" class="stMob8" width="1.63" height="14.39" />
                        <rect x="933.07" y="1277.21" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="826.15" y="1869.22" class="stMob4" width="128.74" height="75.89" />
                <rect x="862.94" y="1869.22" class="stMob5" width="127.61" height="75.89" />
                <rect x="909.62" y="1869.22" class="stMob6" width="34.24" height="22.48" />
                <g>
                    <rect x="869.05" y="1919.32" class="stMob7" width="33.1" height="20" />
                    <g>
                        <rect x="870.56" y="1922.12" class="stMob8" width="3.51" height="14.39" />
                        <rect x="876.21" y="1922.12" class="stMob8" width="1.23" height="14.39" />
                        <rect x="882.49" y="1922.12" class="stMob8" width="2.88" height="14.39" />
                        <rect x="878.86" y="1922.12" class="stMob8" width="1.76" height="14.39" />
                        <rect x="887.52" y="1922.12" class="stMob8" width="1.19" height="14.39" />
                        <rect x="893.15" y="1922.12" class="stMob8" width="2.38" height="14.39" />
                        <rect x="896.35" y="1922.12" class="stMob8" width="1.18" height="14.39" />
                        <rect x="890.45" y="1922.12" class="stMob8" width="1.63" height="14.39" />
                        <rect x="898.8" y="1922.12" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="822.8" y="1298.72" class="stMob4" width="128.74" height="125.8" />
                <rect x="859.59" y="1298.72" class="stMob5" width="127.61" height="125.8" />
                <rect x="906.27" y="1298.72" class="stMob6" width="34.24" height="32.37" />
                <rect x="906.27" y="1392.15" class="stMob6" width="34.24" height="32.37" />
                <g>
                    <rect x="865.7" y="1398.73" class="stMob7" width="33.11" height="20" />
                    <g>
                        <rect x="867.22" y="1401.53" class="stMob8" width="3.51" height="14.39" />
                        <rect x="872.86" y="1401.53" class="stMob8" width="1.23" height="14.39" />
                        <rect x="879.14" y="1401.53" class="stMob8" width="2.88" height="14.39" />
                        <rect x="875.51" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                        <rect x="884.18" y="1401.53" class="stMob8" width="1.19" height="14.39" />
                        <rect x="889.8" y="1401.53" class="stMob8" width="2.38" height="14.39" />
                        <rect x="893" y="1401.53" class="stMob8" width="1.18" height="14.39" />
                        <rect x="887.1" y="1401.53" class="stMob8" width="1.63" height="14.39" />
                        <rect x="895.45" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="592.01" y="1228.8" class="stMob4" width="200.3" height="195.72" />
                <rect x="649.24" y="1228.8" class="stMob5" width="198.54" height="195.72" />
                <rect x="721.87" y="1228.8" class="stMob6" width="53.27" height="50.36" />
                <rect x="721.87" y="1374.16" class="stMob6" width="53.27" height="50.36" />
                <g>
                    <rect x="658.75" y="1384.39" class="stMob7" width="51.51" height="31.12" />
                    <g>
                        <rect x="661.1" y="1388.75" class="stMob8" width="5.47" height="22.39" />
                        <rect x="669.89" y="1388.75" class="stMob8" width="1.92" height="22.39" />
                        <rect x="679.66" y="1388.75" class="stMob8" width="4.48" height="22.39" />
                        <rect x="674.01" y="1388.75" class="stMob8" width="2.73" height="22.39" />
                        <rect x="687.49" y="1388.75" class="stMob8" width="1.85" height="22.39" />
                        <rect x="696.24" y="1388.75" class="stMob8" width="3.7" height="22.39" />
                        <rect x="701.22" y="1388.75" class="stMob8" width="1.84" height="22.39" />
                        <rect x="692.05" y="1388.75" class="stMob8" width="2.54" height="22.39" />
                        <rect x="705.03" y="1388.75" class="stMob8" width="2.73" height="22.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="557.11" y="1788.88" class="stMob4" width="159.89" height="156.24" />
                <rect x="602.79" y="1788.88" class="stMob5" width="158.48" height="156.24" />
                <rect x="669.42" y="1788.88" class="stMob6" width="25.24" height="40.2" />
                <rect x="669.42" y="1904.91" class="stMob6" width="25.24" height="40.2" />
                <g>
                    <rect x="708.95" y="1913.08" class="stMob7" width="41.11" height="24.84" />
                    <g>
                        <rect x="710.83" y="1916.56" class="stMob8" width="4.36" height="17.87" />
                        <rect x="717.84" y="1916.56" class="stMob8" width="1.53" height="17.87" />
                        <rect x="725.64" y="1916.56" class="stMob8" width="3.58" height="17.87" />
                        <rect x="721.13" y="1916.56" class="stMob8" width="2.18" height="17.87" />
                        <rect x="731.9" y="1916.56" class="stMob8" width="1.48" height="17.87" />
                        <rect x="738.88" y="1916.56" class="stMob8" width="2.96" height="17.87" />
                        <rect x="742.85" y="1916.56" class="stMob8" width="1.47" height="17.87" />
                        <rect x="735.53" y="1916.56" class="stMob8" width="2.03" height="17.87" />
                        <rect x="745.9" y="1916.56" class="stMob8" width="2.18" height="17.87" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="396.38" y="1819.32" class="stMob4" width="128.74" height="125.8" />
                <rect x="433.16" y="1819.32" class="stMob5" width="127.61" height="125.8" />
                <rect x="479.85" y="1819.32" class="stMob6" width="34.24" height="32.37" />
                <rect x="479.85" y="1912.75" class="stMob6" width="34.24" height="32.37" />
                <g>
                    <rect x="439.28" y="1919.32" class="stMob7" width="33.11" height="20" />
                    <g>
                        <rect x="440.79" y="1922.12" class="stMob8" width="3.51" height="14.39" />
                        <rect x="446.44" y="1922.12" class="stMob8" width="1.23" height="14.39" />
                        <rect x="452.72" y="1922.12" class="stMob8" width="2.88" height="14.39" />
                        <rect x="449.09" y="1922.12" class="stMob8" width="1.76" height="14.39" />
                        <rect x="457.75" y="1922.12" class="stMob8" width="1.19" height="14.39" />
                        <rect x="463.38" y="1922.12" class="stMob8" width="2.38" height="14.39" />
                        <rect x="466.57" y="1922.12" class="stMob8" width="1.18" height="14.39" />
                        <rect x="460.68" y="1922.12" class="stMob8" width="1.63" height="14.39" />
                        <rect x="469.02" y="1922.12" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="165.58" y="1749.39" class="stMob4" width="200.3" height="195.72" />
                <rect x="222.81" y="1749.39" class="stMob5" width="198.54" height="195.72" />
                <rect x="295.44" y="1749.39" class="stMob6" width="53.27" height="50.36" />
                <rect x="295.44" y="1894.75" class="stMob6" width="53.27" height="50.36" />
                <g>
                    <rect x="232.32" y="1904.98" class="stMob7" width="51.51" height="31.12" />
                    <g>
                        <rect x="234.68" y="1909.35" class="stMob8" width="5.47" height="22.39" />
                        <rect x="243.46" y="1909.35" class="stMob8" width="1.92" height="22.39" />
                        <rect x="253.23" y="1909.35" class="stMob8" width="4.48" height="22.39" />
                        <rect x="247.58" y="1909.35" class="stMob8" width="2.73" height="22.39" />
                        <rect x="261.07" y="1909.35" class="stMob8" width="1.85" height="22.39" />
                        <rect x="269.82" y="1909.35" class="stMob8" width="3.7" height="22.39" />
                        <rect x="274.79" y="1909.35" class="stMob8" width="1.84" height="22.39" />
                        <rect x="265.62" y="1909.35" class="stMob8" width="2.54" height="22.39" />
                        <rect x="278.6" y="1909.35" class="stMob8" width="2.73" height="22.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="146.92" y="1171.54" class="stMob4" width="152.52" height="149.03" />
                <rect x="190.5" y="1171.54" class="stMob5" width="151.17" height="149.03" />
                <rect x="245.8" y="1171.54" class="stMob6" width="40.56" height="38.35" />
                <rect x="245.8" y="1282.22" class="stMob6" width="40.56" height="38.35" />
                <g>
                    <rect x="197.74" y="1290.01" class="stMob7" width="39.22" height="23.69" />
                    <g>
                        <rect x="199.54" y="1293.34" class="stMob8" width="4.16" height="17.05" />
                        <rect x="206.23" y="1293.34" class="stMob8" width="1.46" height="17.05" />
                        <rect x="213.66" y="1293.34" class="stMob8" width="3.41" height="17.05" />
                        <rect x="209.36" y="1293.34" class="stMob8" width="2.08" height="17.05" />
                        <rect x="219.63" y="1293.34" class="stMob8" width="1.41" height="17.05" />
                        <rect x="226.29" y="1293.34" class="stMob8" width="2.82" height="17.05" />
                        <rect x="230.08" y="1293.34" class="stMob8" width="1.4" height="17.05" />
                        <rect x="223.1" y="1293.34" class="stMob8" width="1.93" height="17.05" />
                        <rect x="232.98" y="1293.34" class="stMob8" width="2.08" height="17.05" />
                    </g>
                </g>
            </g>
            <rect x="200.99" y="1208.09" class="stMob9" width="140.69" height="112.48" />
            <g>
                <rect x="414.24" y="1174.4" class="stMob4" width="128.74" height="125.8" />
                <rect x="451.02" y="1174.4" class="stMob5" width="127.61" height="125.8" />
                <rect x="504.66" y="1174.4" class="stMob6" width="20.32" height="32.37" />
                <rect x="504.66" y="1267.83" class="stMob6" width="20.32" height="32.37" />
                <g>
                    <rect x="536.5" y="1274.41" class="stMob7" width="33.1" height="20" />
                    <g>
                        <rect x="538.01" y="1277.21" class="stMob8" width="3.51" height="14.39" />
                        <rect x="543.66" y="1277.21" class="stMob8" width="1.23" height="14.39" />
                        <rect x="549.93" y="1277.21" class="stMob8" width="2.88" height="14.39" />
                        <rect x="546.3" y="1277.21" class="stMob8" width="1.76" height="14.39" />
                        <rect x="554.97" y="1277.21" class="stMob8" width="1.19" height="14.39" />
                        <rect x="560.6" y="1277.21" class="stMob8" width="2.38" height="14.39" />
                        <rect x="563.79" y="1277.21" class="stMob8" width="1.18" height="14.39" />
                        <rect x="557.9" y="1277.21" class="stMob8" width="1.63" height="14.39" />
                        <rect x="566.24" y="1277.21" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="455.98" y="1298.72" class="stMob4" width="128.74" height="125.8" />
                <rect x="492.76" y="1298.72" class="stMob5" width="127.61" height="125.8" />
                <rect x="539.45" y="1298.72" class="stMob6" width="34.24" height="32.37" />
                <rect x="539.45" y="1392.15" class="stMob6" width="34.24" height="32.37" />
                <g>
                    <rect x="498.88" y="1398.73" class="stMob7" width="33.1" height="20" />
                    <g>
                        <rect x="500.39" y="1401.53" class="stMob8" width="3.51" height="14.39" />
                        <rect x="506.04" y="1401.53" class="stMob8" width="1.23" height="14.39" />
                        <rect x="512.32" y="1401.53" class="stMob8" width="2.88" height="14.39" />
                        <rect x="508.69" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                        <rect x="517.35" y="1401.53" class="stMob8" width="1.19" height="14.39" />
                        <rect x="522.98" y="1401.53" class="stMob8" width="2.38" height="14.39" />
                        <rect x="526.17" y="1401.53" class="stMob8" width="1.18" height="14.39" />
                        <rect x="520.28" y="1401.53" class="stMob8" width="1.63" height="14.39" />
                        <rect x="528.62" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="225.18" y="1228.8" class="stMob4" width="200.3" height="195.72" />
                <rect x="282.41" y="1228.8" class="stMob5" width="198.54" height="195.72" />
                <rect x="355.04" y="1228.8" class="stMob6" width="53.27" height="50.36" />
                <rect x="355.04" y="1374.16" class="stMob6" width="53.27" height="50.36" />
                <g>
                    <rect x="291.92" y="1384.39" class="stMob7" width="51.51" height="31.12" />
                    <g>
                        <rect x="294.28" y="1388.75" class="stMob8" width="5.47" height="22.39" />
                        <rect x="303.06" y="1388.75" class="stMob8" width="1.92" height="22.39" />
                        <rect x="312.83" y="1388.75" class="stMob8" width="4.48" height="22.39" />
                        <rect x="307.19" y="1388.75" class="stMob8" width="2.73" height="22.39" />
                        <rect x="320.67" y="1388.75" class="stMob8" width="1.85" height="22.39" />
                        <rect x="329.42" y="1388.75" class="stMob8" width="3.7" height="22.39" />
                        <rect x="334.4" y="1388.75" class="stMob8" width="1.84" height="22.39" />
                        <rect x="325.22" y="1388.75" class="stMob8" width="2.54" height="22.39" />
                        <rect x="338.21" y="1388.75" class="stMob8" width="2.73" height="22.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="681.08" y="1533.22" class="stMob4" width="156.6" height="153.02" />
                <rect x="725.82" y="1533.22" class="stMob5" width="155.22" height="153.02" />
                <rect x="782.61" y="1533.22" class="stMob6" width="41.65" height="39.37" />
                <rect x="782.61" y="1646.87" class="stMob6" width="41.65" height="39.38" />
                <g>
                    <rect x="733.26" y="1654.86" class="stMob7" width="40.27" height="24.33" />
                    <g>
                        <rect x="735.1" y="1658.28" class="stMob8" width="4.27" height="17.51" />
                        <rect x="741.97" y="1658.28" class="stMob8" width="1.5" height="17.51" />
                        <rect x="749.61" y="1658.28" class="stMob8" width="3.5" height="17.51" />
                        <rect x="745.19" y="1658.28" class="stMob8" width="2.14" height="17.51" />
                        <rect x="755.73" y="1658.28" class="stMob8" width="1.45" height="17.51" />
                        <rect x="762.57" y="1658.28" class="stMob8" width="2.9" height="17.51" />
                        <rect x="766.46" y="1658.28" class="stMob8" width="1.44" height="17.51" />
                        <rect x="759.29" y="1658.28" class="stMob8" width="1.98" height="17.51" />
                        <rect x="769.44" y="1658.28" class="stMob8" width="2.14" height="17.51" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="126.31" y="1479.19" class="stMob4" width="156.6" height="207.05" />
                <rect x="171.05" y="1479.19" class="stMob5" width="155.22" height="207.05" />
                <rect x="227.84" y="1479.19" class="stMob6" width="41.65" height="39.37" />
                <rect x="227.84" y="1646.87" class="stMob6" width="41.65" height="39.38" />
                <g>
                    <rect x="178.49" y="1654.86" class="stMob7" width="40.27" height="24.33" />
                    <g>
                        <rect x="180.33" y="1658.28" class="stMob8" width="4.27" height="17.51" />
                        <rect x="187.2" y="1658.28" class="stMob8" width="1.5" height="17.51" />
                        <rect x="194.84" y="1658.28" class="stMob8" width="3.5" height="17.51" />
                        <rect x="190.42" y="1658.28" class="stMob8" width="2.14" height="17.51" />
                        <rect x="200.96" y="1658.28" class="stMob8" width="1.45" height="17.51" />
                        <rect x="207.81" y="1658.28" class="stMob8" width="2.9" height="17.51" />
                        <rect x="211.7" y="1658.28" class="stMob8" width="1.44" height="17.51" />
                        <rect x="204.53" y="1658.28" class="stMob8" width="1.98" height="17.51" />
                        <rect x="214.68" y="1658.28" class="stMob8" width="2.14" height="17.51" />
                    </g>
                </g>
            </g>
            <rect x="270.73" y="1479.19" class="stMob9" width="55.55" height="207.05" />
            <g>
                <rect x="542.77" y="1560.44" class="stMob4" width="128.74" height="125.8" />
                <rect x="579.55" y="1560.44" class="stMob5" width="127.61" height="125.8" />
                <rect x="626.24" y="1560.44" class="stMob6" width="34.24" height="32.37" />
                <rect x="626.24" y="1653.87" class="stMob6" width="34.24" height="32.37" />
                <g>
                    <rect x="585.67" y="1660.45" class="stMob7" width="33.11" height="20" />
                    <g>
                        <rect x="587.18" y="1663.25" class="stMob8" width="3.51" height="14.39" />
                        <rect x="592.83" y="1663.25" class="stMob8" width="1.23" height="14.39" />
                        <rect x="599.11" y="1663.25" class="stMob8" width="2.88" height="14.39" />
                        <rect x="595.48" y="1663.25" class="stMob8" width="1.76" height="14.39" />
                        <rect x="604.14" y="1663.25" class="stMob8" width="1.19" height="14.39" />
                        <rect x="609.77" y="1663.25" class="stMob8" width="2.38" height="14.39" />
                        <rect x="612.96" y="1663.25" class="stMob8" width="1.18" height="14.39" />
                        <rect x="607.07" y="1663.25" class="stMob8" width="1.63" height="14.39" />
                        <rect x="615.41" y="1663.25" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="311.97" y="1490.52" class="stMob4" width="200.3" height="195.72" />
                <rect x="369.2" y="1490.52" class="stMob5" width="198.54" height="195.72" />
                <rect x="441.83" y="1490.52" class="stMob6" width="53.27" height="50.36" />
                <rect x="441.83" y="1635.88" class="stMob6" width="53.27" height="50.36" />
                <g>
                    <rect x="378.71" y="1646.11" class="stMob7" width="51.51" height="31.12" />
                    <g>
                        <rect x="381.07" y="1650.47" class="stMob8" width="5.47" height="22.39" />
                        <rect x="389.85" y="1650.47" class="stMob8" width="1.92" height="22.39" />
                        <rect x="399.62" y="1650.47" class="stMob8" width="4.48" height="22.39" />
                        <rect x="393.97" y="1650.47" class="stMob8" width="2.73" height="22.39" />
                        <rect x="407.46" y="1650.47" class="stMob8" width="1.85" height="22.39" />
                        <rect x="416.21" y="1650.47" class="stMob8" width="3.7" height="22.39" />
                        <rect x="421.18" y="1650.47" class="stMob8" width="1.84" height="22.39" />
                        <rect x="412.01" y="1650.47" class="stMob8" width="2.54" height="22.39" />
                        <rect x="424.99" y="1650.47" class="stMob8" width="2.73" height="22.39" />
                    </g>
                </g>
            </g>
            <g>
                <rect x="85.55" y="1298.72" class="stMob4" width="128.74" height="125.8" />
                <rect x="122.33" y="1298.72" class="stMob5" width="127.61" height="125.8" />
                <rect x="169.02" y="1298.72" class="stMob6" width="34.24" height="32.37" />
                <rect x="169.02" y="1392.15" class="stMob6" width="34.24" height="32.37" />
                <g>
                    <rect x="128.45" y="1398.73" class="stMob7" width="33.11" height="20" />
                    <g>
                        <rect x="129.96" y="1401.53" class="stMob8" width="3.51" height="14.39" />
                        <rect x="135.61" y="1401.53" class="stMob8" width="1.23" height="14.39" />
                        <rect x="141.89" y="1401.53" class="stMob8" width="2.88" height="14.39" />
                        <rect x="138.26" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                        <rect x="146.92" y="1401.53" class="stMob8" width="1.19" height="14.39" />
                        <rect x="152.55" y="1401.53" class="stMob8" width="2.38" height="14.39" />
                        <rect x="155.75" y="1401.53" class="stMob8" width="1.18" height="14.39" />
                        <rect x="149.85" y="1401.53" class="stMob8" width="1.63" height="14.39" />
                        <rect x="158.2" y="1401.53" class="stMob8" width="1.76" height="14.39" />
                    </g>
                </g>
            </g>
            <rect x="214.9" y="1298.72" class="stMob9" width="35.05" height="125.8" />
            <rect x="24.28" y="1424.52" class="stMob10" width="1008.1" height="42.06" />
            <rect x="24.28" y="1686.24" class="stMob10" width="1008.1" height="42.06" />
            <rect x="24.28" y="1945.11" class="stMob10" width="1008.1" height="42.06" />
            <g>
                <rect x="15.66" y="1274.2" class="stMob3" width="17.25" height="881.46" />
                <rect x="241.03" y="1274.2" class="stMob3" width="17.25" height="881.46" />
                <rect x="24.28" y="1294.7" class="stMob3" width="225.37" height="23.92" />
                <rect x="24.28" y="2092.55" class="stMob3" width="225.37" height="23.91" />
            </g>
        </g>
    </motion.g>
    <g id="personMob">
        <polygon class="stMob11" points="141.13,1539.65 138.97,1617.38 179.58,1618.19 182.9,1540.28 	" />
        <g>
            <path class="stMob12" d="M115.65,1402.09v40.07c-0.68-0.05-1.34-0.21-2.03-0.21c-14.6,0-26.44,12.02-26.44,26.84
			c0,14.83,11.84,26.84,26.44,26.84c0.7,0,1.35-0.15,2.03-0.21v9.25c0,34.69,28.12,62.81,62.81,62.81h1.27
			c34.69,0,62.81-28.12,62.81-62.81v-102.58H115.65z"/>
            <path class="stMob13" d="M178.05,1465.64c0,4.79-3.89,8.68-8.68,8.68c-4.79,0-8.68-3.88-8.68-8.68c0-4.79,3.88-8.68,8.68-8.68
			C174.16,1456.96,178.05,1460.84,178.05,1465.64z"/>
            <path class="stMob13" d="M225.9,1465.64c0,4.79-3.88,8.68-8.68,8.68c-4.79,0-8.68-3.88-8.68-8.68c0-4.79,3.88-8.68,8.68-8.68
			C222.02,1456.96,225.9,1460.84,225.9,1465.64z"/>
            <path class="stMob14" d="M165.71,1509.02h50.02c0,0-1.63,24.4-24.4,24.4C168.56,1533.42,165.71,1509.02,165.71,1509.02z" />
            <path class="stMob13" d="M224.87,1447.74h-17.46c-1.73,0-3.13-1.4-3.13-3.13v-0.52c0-1.73,1.4-3.13,3.13-3.13h17.46
			c1.73,0,3.13,1.4,3.13,3.13v0.52C228.01,1446.34,226.6,1447.74,224.87,1447.74z"/>
            <path class="stMob13" d="M178.1,1447.74h-17.46c-1.73,0-3.13-1.4-3.13-3.13v-0.52c0-1.73,1.4-3.13,3.13-3.13h17.46
			c1.73,0,3.13,1.4,3.13,3.13v0.52C181.23,1446.34,179.83,1447.74,178.1,1447.74z"/>
            <path class="stMob13" d="M90.71,1402.09c0,0,6.78-56.4,70.36-44.47c63.58,11.93,95.58,13.56,104.25,2.71c0,0,18.3,59.65-53.21,59.65
			s-68.26-8.68-74.77,5.42c-6.51,14.1-2.71,37.42-2.71,37.42h-16.27c0,0,0.11-25.22-23.8-12.61
			C94.56,1450.22,88.54,1433.54,90.71,1402.09z"/>
        </g>
        <path class="stMob15" d="M273.91,1768.92c1.06-1.66,2.14-3.22,3.23-4.75c-7.6-7.89-15.91-16.6-21.55-22.8
		c-4.21-4.62-7.35-10.1-9.24-16.07l-17.81-91.1c-2.94-15.05-11.79-28.44-24.82-36.53c-0.79-0.49-1.47-0.88-2.02-1.15
		c-29.79-14.58-39.51,23.44-40.09,36.82c-0.17,4.01,0.62,7.96,2.36,11.57l50.98,113.41c2.69,5.58,8.36,9.11,14.56,9.06l33.78,25.09
		C265.74,1784.19,269.43,1775.96,273.91,1768.92z"/>
        <path class="stMob13" d="M197.97,2131.65v66.59h120.32l0-0.29c0.22-15.53-9.31-29.73-23.98-34.83c-17.08-5.94-39.47-17.37-54.59-38.88
		L197.97,2131.65z"/>
        <path class="stMob16" d="M239.73,2124.24l-41.76,7.41l0.3,23.22l69.2-4.64C257.44,2143.85,247.6,2135.43,239.73,2124.24z" />
        <path class="stMob13" d="M96.03,2131.65v66.59h120.32l0-0.29c0.22-15.53-9.31-29.73-23.98-34.83c-17.08-5.94-39.47-17.37-54.59-38.88
		L96.03,2131.65z"/>
        <path class="stMob16" d="M137.78,2124.24l-41.76,7.41l0.3,23.22l69.2-4.64C155.49,2143.85,145.65,2135.43,137.78,2124.24z" />
        <path class="stMob17" d="M218.48,1816.2l8.85-0.34c8.12-82.89-0.23-148.79-7.72-186.66c-4.31-21.81-19.2-39.62-38.59-47.97
		c-12.08,4.67-26.12,6.01-37.37-1.22c-0.99-0.63-1.86-1.38-2.76-2.1c-24.98,6.06-56.58,21.08-61.11,47.07
		c-14.25,81.84,5.54,203.58,4.77,207.41c-2.35,11.68,1.92,307.16,1.92,307.16h74.22l0.89-255.2c12.34,21.85,26.47,81.26,25.29,86.46
		l1.98,161.9l68.8,8.1l7.28-180.61C268.37,1946.63,235.89,1861.93,218.48,1816.2z"/>
        <path class="stMob18" d="M119.78,1794.03c23.19,2.82,46.18,7.33,69.63,7.2c4.87-0.03,9.68-0.02,14.44,0.1
		c11-9.82,5.49-22.6,1.55-28.75c-10.33-16.12-62.49-17.37-69.06-35.57c-7.19-19.96-4.99-41.3-4.33-62.06
		c0.91-28.73-3.03-49.75-30.35-62.9c-4.26-2.05-8.6-3.89-12.98-5.65c-4.47,5.44-7.69,11.61-8.9,18.59
		c-8.86,50.9-4.57,117.16-0.23,160.95C92.46,1789.99,105.55,1792.3,119.78,1794.03z"/>
        <g>
            <path class="stMob17" d="M31.49,1745.13l53.8-134.73c1.49-3.73,3.86-6.98,6.94-9.56c10.25-8.61,39.72-16.41,49.11,15.4
			c1.57,5.32,1.02,14.11-0.81,19.35l-47.19,90.74c-1.74,5,89.29-4.27,89.29-4.27l2.59,50.29c0,0-56.48,2.58-87.69,3.09
			C32.89,1776.5,29.19,1750.89,31.49,1745.13z"/>
            <path class="stMob12" d="M188.33,1721.28c-1.96,0.1-3.85,0.39-5.69,0.78l2.59,50.29c1.87,0.2,3.79,0.29,5.74,0.19
			c16.96-0.87,30.11-13.06,29.38-27.21S205.28,1720.41,188.33,1721.28z"/>
        </g>
        <polygon class="stMob19" points="239.54,1684.36 173.54,1803.73 257.6,1823.2 335.27,1700.18 	" />
        <path class="stMob11" d="M312.51,1739.22c3.06,2.4,1.34,13.78-3.4,24.09c-4.74,10.31-12.5,19.54-15.49,18.35
		c-10.46-4.16-14.52-17.45-9.31-29.17C289.54,1740.77,303.56,1732.2,312.51,1739.22z"/>
    </g>
    <g id="thinkingMob">
        <motion.ellipse id="circulo1" variants={thinking1Animate} initial="hidden" animate="visible" class="stMob14" cx="228.64" cy="1323.5" rx="7.91" ry="7.09" />
        <motion.ellipse id="circulo2" variants={thinking2Animate} initial="hidden" animate="visible" class="stMob14" cx="251.2" cy="1267.32" rx="25.49" ry="22.6" />
        <motion.ellipse id="circulo3" variants={thinking3Animate} initial="hidden" animate="visible" class="stMob14" cx="366.86" cy="1186.2" rx="117.22" ry="76.2" />
        <motion.text variants={thinking3Animate} initial="hidden" animate="visible" transform="matrix(1.1394 0 0 1 333.1694 1230.1084)" class="stMob17 st20 st21">?</motion.text>
    </g>
    <g id="allBoxMob">
        <motion.g id="box5" variants={box5Animate} initial="hidden" animate="visible">
            <rect x="503.32" y="1523.52" class="stMob22" width="311.44" height="452.49" />
            <rect x="609.33" y="1523.52" class="stMob23" width="308.17" height="452.49" />
            <rect x="743.87" y="1523.52" class="stMob24" width="72.3" height="93.28" />
            <rect x="743.87" y="1882.73" class="stMob24" width="72.3" height="93.28" />
            <g>
                <rect x="626.95" y="1901.68" class="stMob25" width="95.41" height="57.64" />
                <g>
                    <rect x="631.31" y="1909.76" class="stMob13" width="10.13" height="41.47" />
                    <rect x="647.59" y="1909.76" class="stMob13" width="3.55" height="41.47" />
                    <rect x="665.68" y="1909.76" class="stMob13" width="8.3" height="41.47" />
                    <rect x="655.22" y="1909.76" class="stMob13" width="5.06" height="41.47" />
                    <rect x="680.19" y="1909.76" class="stMob13" width="3.43" height="41.47" />
                    <rect x="696.4" y="1909.76" class="stMob13" width="6.86" height="41.47" />
                    <rect x="705.62" y="1909.76" class="stMob13" width="3.41" height="41.47" />
                    <rect x="688.63" y="1909.76" class="stMob13" width="4.7" height="41.47" />
                    <rect x="712.68" y="1909.76" class="stMob13" width="5.06" height="41.47" />
                </g>
            </g>
        </motion.g>
        <motion.g id="box4" variants={box4Animate} initial="hidden" animate="visible">
            <rect x="720.23" y="1707.52" class="stMob22" width="251.55" height="245.8" />
            <rect x="792.1" y="1707.52" class="stMob23" width="249.34" height="245.8" />
            <rect x="896.91" y="1707.52" class="stMob24" width="39.71" height="63.25" />
            <rect x="896.91" y="1890.08" class="stMob24" width="39.71" height="63.25" />
            <g>
                <rect x="959.12" y="1902.92" class="stMob25" width="64.69" height="39.08" />
            </g>
        </motion.g>
        <motion.g id="box3" variants={box3Animate} initial="hidden" animate="visible">
            <rect x="801.79" y="1950.43" class="stMob22" width="251.55" height="245.8" />
            <rect x="873.66" y="1950.43" class="stMob23" width="249.34" height="245.8" />
            <rect x="964.88" y="1950.43" class="stMob24" width="66.9" height="63.25" />
            <rect x="964.88" y="2132.99" class="stMob24" width="66.9" height="63.25" />
            <g>
                <rect x="885.61" y="2145.84" class="stMob25" width="64.69" height="39.08" />
            </g>
        </motion.g>
        <motion.g id="box2" variants={box2Animate} initial="hidden" animate="visible">
            <rect x="545.17" y="1277.71" class="stMob22" width="251.55" height="245.8" />
            <rect x="617.04" y="1277.71" class="stMob23" width="249.34" height="245.8" />
            <rect x="708.26" y="1277.71" class="stMob24" width="66.9" height="63.25" />
            <g>
                <rect x="628.99" y="1473.12" class="stMob25" width="64.69" height="39.08" />
            </g>
        </motion.g>
        <motion.g id="box1" variants={box1Animate} initial="hidden" animate="visible">
            <rect x="350.82" y="1813.8" class="stMob22" width="391.38" height="382.43" />
            <rect x="462.65" y="1813.8" class="stMob23" width="387.93" height="382.43" />
            <rect x="604.57" y="1813.8" class="stMob24" width="104.09" height="98.4" />
            <rect x="604.57" y="2097.83" class="stMob24" width="104.09" height="98.4" />
            <g>
                <rect x="481.24" y="2117.82" class="stMob25" width="100.64" height="60.8" />
            </g>
        </motion.g>
    </g>
    <motion.g id="moblileMob" variants={mobileAnimate} initial="hidden" animate="visible">
        <g>
            <path class="stMob26" d="M768.98,2033.16c42.63,0,77.51-34.88,77.51-77.51v-212.58l30.03-9.3l122.46,395.51l-208.59,64.58
			l-33.81-109.2l-63.08-51.51H768.98z"/>
            <path class="stMob26" d="M471.33,1850.26c-10.61-13.99-11.17-33.78,0-48.2V1850.26z" />
            <path class="stMob26" d="M471.33,1663.42v76.67l-10.77-8.8c-16.81-13.73-19.84-38.52-6.31-55.52
			C458.86,1669.99,464.82,1665.86,471.33,1663.42z"/>
            <path class="stMob26" d="M411.5,1523.8c13.54-17.01,38.67-20.03,55.51-6.31l4.32,3.52v101.95l-53.52-43.65
			C400.98,1565.59,397.97,1540.8,411.5,1523.8z"/>
        </g>
        <polygon class="stMob27" points="1011.65,2063.07 743.45,2146.12 832.16,2432.62 1126.07,2432.62 	" />
        <path class="stMob28" d="M547.75,1719.48l-13.43-10.35c-24.41,6.56-36.08,23.01-37.11,47.72l12.65,10.13
		C544.36,1794.46,576.77,1741.22,547.75,1719.48z"/>
        <g>
            <path class="stMob29" d="M472.62,1371.2v584.44c0,42.63,34.88,77.51,77.51,77.51h220.13c42.63,0,77.51-34.88,77.51-77.51V1371.2
			c0-42.63-34.88-77.52-77.51-77.52H550.13C507.49,1293.69,472.62,1328.57,472.62,1371.2z M505.61,1350.68
			c0-0.59,0.49-1.08,1.08-1.08h307c0.6,0,1.09,0.49,1.09,1.08v607.08c0,0.59-0.49,1.08-1.09,1.08h-307c-0.59,0-1.08-0.49-1.08-1.08
			V1350.68z"/>
            <path class="stMob30" d="M717.07,1311.98H603.32c-3.08,0-5.6,2.52-5.6,5.6v0.01c0,3.08,2.52,5.6,5.6,5.6h113.75
			c3.08,0,5.6-2.52,5.6-5.6v-0.01C722.67,1314.51,720.15,1311.98,717.07,1311.98z"/>
            <path class="stMob30" d="M660.19,1979.04c-10.46,0-18.95,8.48-18.95,18.95c0,10.47,8.49,18.95,18.95,18.95
			c10.48,0,18.95-8.48,18.95-18.95C679.15,1987.53,670.67,1979.04,660.19,1979.04z"/>
        </g>
        <path id="screen" class="stMob31" d="M813.47,1351.42h-307c-0.59,0-1.08,0.49-1.08,1.08v607.08c0,0.59,0.49,1.08,1.08,1.08h307
		c0.6,0,1.09-0.49,1.09-1.08v-607.08C814.55,1351.91,814.06,1351.42,813.47,1351.42z"/>
        <path class="stMob26" d="M877.07,1903.42l-26.65,8.25l-7.31-33.87l-58.87-271.92c-12.25-56.55,22.91-75.66,57.76-86.45l69.49,320.98
		C917.32,1867.37,901.84,1895.75,877.07,1903.42z"/>
        <g>
            <path class="stMob26" d="M468.38,1803.46L468.38,1803.46c-13.53,17.01-10.63,41.96,6.31,55.51l57.61,46.06
			c16.94,13.55,41.98,10.7,55.51-6.31l0,0c13.54-17,10.67-41.93-6.31-55.5l-57.6-46.06
			C506.92,1783.58,481.92,1786.45,468.38,1803.46z"/>
            <path class="stMob28" d="M576.21,1848.63l-13.44-10.34c-24.41,6.56-36.08,23.01-37.11,47.72l12.65,10.13
			C572.82,1923.62,605.23,1870.37,576.21,1848.63z"/>
        </g>
        <path class="stMob26" d="M450.17,1680.72L450.17,1680.72c-13.53,17.01-10.64,41.96,6.3,55.52l49.06,39.22
		c16.94,13.55,41.98,10.7,55.51-6.3l0,0c13.53-17,10.67-41.94-6.31-55.5l-49.06-39.24C488.7,1660.85,463.7,1663.72,450.17,1680.72z"
        />
        <path class="stMob28" d="M549.73,1721.16l-13.44-10.34c-24.41,6.56-36.08,23.01-37.11,47.72l12.65,10.13
		C546.34,1796.16,578.74,1742.91,549.73,1721.16z"/>
    </motion.g>
</svg>
  )
}
