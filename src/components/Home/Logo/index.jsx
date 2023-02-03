import './index.scss';
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoJ from '../../../assets/images/logo-j.png';

const Logo = () => {
        const bgRef = useRef()
        const outlineLogoRef = useRef()
        const solidLogoRef = useRef()
      
        useEffect(() => {
          gsap.registerPlugin(DrawSVGPlugin)
      
          gsap
            .timeline()
            .to(bgRef.current, {
              duration: 1,
              opacity: 1,
            })
            .from(outlineLogoRef.current, {
              drawSVG: 0,
              duration: 20,
            })
      
          gsap.fromTo(
            solidLogoRef.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: 4,
              duration: 4,
            }
          )
        }, [])

        return (
                <div className="logo-container" ref={bgRef}>
                <img
                  className="solid-logo"
                  ref={solidLogoRef}
                  src={LogoJ}
                  alt="J"
                />
          
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="622.000000pt" height="977.000000pt" viewBox="0 0 622.000000 977.000000"
                 preserveAspectRatio="xMidYMid meet">
                  <g
                    className="svg-container"
                    transform="translate(0.000000,977.000000) scale(0.100000,-0.100000)"
                    fill="none"
                  >
                    <path
                      ref={outlineLogoRef}
                      d="M5210 9553 c-536 -112 -978 -207 -981 -211 -4 -4 -3 -1287 2 -2852 9
                      -2794 6 -3229 -22 -3485 -44 -409 -149 -674 -329 -838 -108 -97 -260 -160
                      -475 -197 -256 -44 -445 -14 -576 92 -57 46 -131 160 -166 259 -88 243 -121
                      635 -94 1130 7 121 10 223 7 226 -5 6 -1876 -384 -1885 -392 -11 -12 -13 -562
                      -2 -701 22 -282 88 -680 145 -876 62 -211 212 -532 323 -688 88 -124 321 -356
                      440 -440 294 -206 663 -346 1038 -396 171 -23 584 -14 780 15 502 77 962 222
                      1307 412 123 67 322 201 428 286 188 151 403 386 531 580 82 125 194 343 244
                      478 138 368 222 960 267 1870 10 201 12 791 10 2610 -2 1293 -7 2569 -10 2836
                      l-7 486 -975 -204z"  />
                  </g>
                </svg>
              </div>
        )
}

export default Logo