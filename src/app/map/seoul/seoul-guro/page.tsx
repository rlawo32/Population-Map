'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import * as styled from "./../../nationwide.style";

const SeoulGuro = () => {
    const router = useRouter();

    const [move, setMove] = useState<number>(1);

    const moveLocationHandler = (e:any, location:string) => {
        setMove(2);

        setTimeout(() => {router.push(`/map/seoul/seoul-${location}`);}, 600)  
    }
    
    return (
        <styled.moveLocation $move={move} $top={13} $left={0}>
            <div className="location_child">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="640px" height="410px">
                    <g><path className="svg_map" fill="#fdfcfd" d="M 351.5,110.5 C 348.909,111.254 347.076,112.921 346,115.5C 343.622,121.635 341.456,127.801 339.5,134C 332.066,132.868 324.566,131.701 317,130.5C 314.476,131.178 312.309,132.512 310.5,134.5C 309.572,135.768 309.405,137.101 310,138.5C 311.946,139.747 313.78,141.08 315.5,142.5C 313.945,144.943 313.278,147.61 313.5,150.5C 307.437,149.583 301.437,148.749 295.5,148C 293.449,152.714 290.615,156.881 287,160.5C 287.16,164.815 285.994,168.649 283.5,172C 282.833,172.667 282.167,172.667 281.5,172C 277.402,165.901 272.069,161.234 265.5,158C 262.141,152.433 257.974,147.6 253,143.5C 248.79,132.749 243.79,122.415 238,112.5C 235.583,109.266 233.083,106.266 230.5,103.5C 236.261,101.723 239.595,97.7229 240.5,91.5C 242.332,90.7515 243.999,89.7515 245.5,88.5C 247.679,89.7567 249.679,91.2567 251.5,93C 253.167,93.6667 254.833,93.6667 256.5,93C 258.743,90.5122 260.743,87.8456 262.5,85C 266.716,83.7964 271.049,83.1298 275.5,83C 278.005,81.2467 280.671,79.7467 283.5,78.5C 288.459,80.764 293.459,82.9306 298.5,85C 299.46,86.4194 300.293,87.9194 301,89.5C 301.725,90.0585 302.558,90.3918 303.5,90.5C 309.683,88.0432 316.016,86.5432 322.5,86C 326.57,93.9738 330.236,102.141 333.5,110.5C 334.5,110.833 335.5,111.167 336.5,111.5C 345.297,109.852 352.797,105.852 359,99.5C 359.315,100.908 358.982,102.241 358,103.5C 354.926,105.071 352.76,107.404 351.5,110.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 557.5,90.5 C 552.728,92.7204 548.062,95.2204 543.5,98C 527.017,111.74 510.35,125.24 493.5,138.5C 491.574,137.939 489.574,137.773 487.5,138C 482.015,133.089 475.681,130.089 468.5,129C 462.113,125.863 455.78,122.53 449.5,119C 447.406,116.579 445.74,113.912 444.5,111C 442.19,110.503 439.857,110.337 437.5,110.5C 434.756,109.928 433.923,108.262 435,105.5C 436.356,104.62 437.856,104.286 439.5,104.5C 439.813,101.753 439.48,99.0865 438.5,96.5C 435.005,95.3454 433.005,93.012 432.5,89.5C 443.423,91.7594 446.756,87.9261 442.5,78C 442.585,76.8926 442.919,75.8926 443.5,75C 445.699,75.7453 448.033,76.5787 450.5,77.5C 454.267,76.5904 455.267,74.4238 453.5,71C 449.004,69.4492 444.671,67.6159 440.5,65.5C 439.353,65.8178 438.519,66.4844 438,67.5C 437.764,69.764 437.264,71.9307 436.5,74C 434.393,74.8542 433.059,74.1875 432.5,72C 434.135,67.901 436.635,64.401 440,61.5C 441.733,63.6015 443.733,63.9348 446,62.5C 448.616,59.2706 450.116,55.6039 450.5,51.5C 451.873,51.3433 453.207,51.51 454.5,52C 456.043,54.9483 458.21,55.7816 461,54.5C 460.736,50.2671 459.902,46.1004 458.5,42C 460.517,37.4303 459.85,33.4303 456.5,30C 463.256,29.081 466.589,25.2477 466.5,18.5C 470.375,19.1258 472.209,17.4592 472,13.5C 473.11,11.9632 474.61,11.2965 476.5,11.5C 476.716,13.6807 475.883,15.3474 474,16.5C 472.893,19.8709 473.893,22.2042 477,23.5C 479.881,21.4761 483.047,20.1427 486.5,19.5C 485.833,21.8194 485.666,24.1527 486,26.5C 487.667,27.1667 489.333,27.8333 491,28.5C 490.951,36.1106 494.451,41.2772 501.5,44C 502.676,46.6855 504.343,49.0188 506.5,51C 514.008,52.4246 521.342,54.4246 528.5,57C 530.753,62.4238 534.753,64.5905 540.5,63.5C 540.351,64.552 540.517,65.552 541,66.5C 544.053,69.8866 546.72,73.5533 549,77.5C 550.763,78.9437 552.763,79.9437 555,80.5C 556.727,83.6179 557.561,86.9513 557.5,90.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 558.5,91.5 C 562.389,102.998 566.389,114.498 570.5,126C 569.303,127.52 567.803,128.687 566,129.5C 565.349,131.235 565.515,132.902 566.5,134.5C 565.221,136.146 563.555,137.313 561.5,138C 560.941,138.725 560.608,139.558 560.5,140.5C 561.406,142.747 562.739,144.747 564.5,146.5C 563.112,148.109 562.112,149.942 561.5,152C 562.079,156.13 562.246,160.296 562,164.5C 568.837,175.513 572.337,187.513 572.5,200.5C 571.292,199.766 569.959,199.433 568.5,199.5C 568.5,198.167 568.5,196.833 568.5,195.5C 566.131,195.149 563.797,194.982 561.5,195C 554.167,200 546.833,205 539.5,210C 537.555,209.872 535.722,210.038 534,210.5C 528.553,201.94 523.886,192.94 520,183.5C 512.49,179.552 505.323,175.052 498.5,170C 493.454,166.288 489.954,161.454 488,155.5C 486.989,154.663 485.822,154.33 484.5,154.5C 488.569,146.261 494.236,139.094 501.5,133C 515.863,122.482 529.863,111.482 543.5,100C 548.406,96.9108 553.406,94.0774 558.5,91.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 168.5,143.5 C 167.987,147.879 167.153,152.213 166,156.5C 161.404,165.365 156.57,174.032 151.5,182.5C 153.43,186.273 155.597,189.94 158,193.5C 162.733,196.36 167.066,199.694 171,203.5C 173.159,211.468 175.326,219.468 177.5,227.5C 152.486,227.643 127.486,228.31 102.5,229.5C 102.069,230.293 101.735,231.127 101.5,232C 102.756,237.706 104.422,243.206 106.5,248.5C 102.771,248.576 99.4381,249.743 96.5,252C 89.4262,258.516 82.4262,265.016 75.5,271.5C 76.292,265.721 74.9586,260.554 71.5,256C 66.9503,254.041 62.6169,251.708 58.5,249C 53.0349,247.275 47.7016,244.941 42.5,242C 34.0059,239.585 27.0059,234.919 21.5,228C 19.4233,227.808 17.4233,227.308 15.5,226.5C 14.7565,223.557 14.2565,220.557 14,217.5C 10.9647,212.094 8.46474,206.427 6.5,200.5C 7.32196,197.171 9.1553,194.505 12,192.5C 12.1922,190.423 12.6922,188.423 13.5,186.5C 18.3178,188.584 23.3178,189.417 28.5,189C 33.1297,186.775 37.2964,183.941 41,180.5C 45.5192,182.472 49.1859,181.472 52,177.5C 47.6114,164.488 51.7781,155.488 64.5,150.5C 65.9843,142.881 67.1509,135.214 68,127.5C 68.5611,125.275 69.5611,123.275 71,121.5C 70.5894,115.484 70.756,109.484 71.5,103.5C 78.5533,100.317 85.8866,97.8167 93.5,96C 96.6571,95.7602 99.8238,95.9269 103,96.5C 106.005,96.5191 108.838,95.8525 111.5,94.5C 116.783,97.3865 122.449,99.2198 128.5,100C 129.709,103.025 129.209,105.859 127,108.5C 125.625,112.898 126.958,116.232 131,118.5C 132.667,121.833 134.333,125.167 136,128.5C 143.389,132.958 150.222,138.124 156.5,144C 158,144.5 159.5,145 161,145.5C 163.21,143.889 165.71,143.222 168.5,143.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfcfc" d="M 230.5,103.5 C 234.247,109.111 237.414,115.111 240,121.5C 241,122.5 242,123.5 243,124.5C 246.264,131.458 249.43,138.458 252.5,145.5C 257.451,148.871 261.117,153.371 263.5,159C 267.337,160.173 270.671,162.173 273.5,165C 282.313,177.336 287.479,175.836 289,160.5C 292.416,156.916 295.249,152.916 297.5,148.5C 300.881,149.182 303.548,150.849 305.5,153.5C 304.296,160.854 302.963,168.187 301.5,175.5C 301.57,176.772 301.903,177.938 302.5,179C 304.436,179.813 306.436,180.313 308.5,180.5C 308.942,184.154 309.276,187.821 309.5,191.5C 320.112,193.983 330.779,196.15 341.5,198C 345.552,201.186 350.218,202.353 355.5,201.5C 358.508,204.936 360.508,209.103 361.5,214C 360.678,216.434 360.344,218.934 360.5,221.5C 361.873,221.657 363.207,221.49 364.5,221C 371.04,217.23 377.707,213.73 384.5,210.5C 384.833,210.833 385.167,211.167 385.5,211.5C 378.622,216.44 371.289,220.606 363.5,224C 357.775,224.717 352.109,224.384 346.5,223C 319.69,215.548 292.69,208.881 265.5,203C 262.5,198.667 259.5,194.333 256.5,190C 252.928,188.845 249.261,188.012 245.5,187.5C 243.845,188.388 242.178,188.888 240.5,189C 238.089,187.045 235.589,185.211 233,183.5C 229.824,173.582 223.157,169.582 213,171.5C 209.35,170.513 205.683,169.513 202,168.5C 199.438,169.388 197.104,170.721 195,172.5C 188.728,168.619 181.894,166.952 174.5,167.5C 174.739,165.533 174.406,163.699 173.5,162C 170.911,160.343 168.244,160.009 165.5,161C 167.745,157.128 169.245,152.962 170,148.5C 170.78,146.613 170.613,144.946 169.5,143.5C 171.811,141.932 174.478,141.098 177.5,141C 180.61,138.343 182.61,135.009 183.5,131C 186.167,131 188.833,131 191.5,131C 194.262,126.859 196.928,122.692 199.5,118.5C 203.506,119.834 207.506,121.168 211.5,122.5C 213.98,121.758 216.313,120.758 218.5,119.5C 221.084,121.153 223.751,121.486 226.5,120.5C 226.833,120 227.167,119.5 227.5,119C 224.459,113.036 225.459,107.87 230.5,103.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfcfc" d="M 572.5,201.5 C 575.549,214.744 578.216,228.078 580.5,241.5C 566.329,252.834 551.995,264 537.5,275C 530.128,283.599 523.128,292.433 516.5,301.5C 509.171,286.543 505.171,270.876 504.5,254.5C 506.385,255.609 508.385,256.443 510.5,257C 516.817,257.765 523.151,258.265 529.5,258.5C 529.319,255.447 529.152,252.447 529,249.5C 533.6,246.737 537.766,243.403 541.5,239.5C 540.5,237.5 539.5,235.5 538.5,233.5C 541.375,232.919 544.042,231.919 546.5,230.5C 543.667,226.167 540.833,221.833 538,217.5C 537.48,215.711 537.813,214.044 539,212.5C 546.413,207.21 553.913,202.043 561.5,197C 563.488,196.82 565.488,196.986 567.5,197.5C 567.384,200.91 569.05,202.244 572.5,201.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfe" d="M 241.5,326.5 C 236.882,330.729 234.048,336.062 233,342.5C 232.214,359.495 231.548,376.495 231,393.5C 228.523,401.294 226.356,400.961 224.5,392.5C 220.614,392.139 217.281,390.639 214.5,388C 207.907,388.963 201.241,389.297 194.5,389C 190.715,386.516 186.549,385.016 182,384.5C 177.72,386.255 173.22,387.422 168.5,388C 165.244,391.46 161.244,392.96 156.5,392.5C 157.004,388.493 157.17,384.493 157,380.5C 153.546,377.077 150.713,373.244 148.5,369C 144.34,366.916 140.007,365.416 135.5,364.5C 130.198,365.435 125.198,367.268 120.5,370C 119.9,373.535 117.9,375.868 114.5,377C 102.438,377.299 90.4381,376.966 78.5,376C 73.9399,377.529 69.7732,379.696 66,382.5C 65.4054,381.101 65.5721,379.768 66.5,378.5C 66.0233,377.522 65.3567,376.689 64.5,376C 58.8333,375.333 53.1667,375.333 47.5,376C 45.2936,378.209 44.9602,380.709 46.5,383.5C 44.314,384.221 42.1474,384.887 40,385.5C 39.9304,388.657 40.7637,391.657 42.5,394.5C 40.1146,397.382 37.6146,400.049 35,402.5C 32.236,397.032 27.736,394.532 21.5,395C 20,393.5 18.5,392 17,390.5C 17.3528,386.422 18.3528,382.422 20,378.5C 24.6498,376.196 27.3165,372.529 28,367.5C 29.1667,366.333 30.3333,365.167 31.5,364C 35.1108,363.096 38.6108,361.929 42,360.5C 48.4011,350.966 52.2344,340.466 53.5,329C 53.6373,326.444 52.804,324.277 51,322.5C 50.3186,318.798 50.4852,315.131 51.5,311.5C 50.9757,309.617 50.3091,307.784 49.5,306C 50.8333,303 50.8333,300 49.5,297C 56.9003,294.089 63.9003,290.423 70.5,286C 73,283.5 75.5,281 78,278.5C 78.4094,276.305 77.9094,274.305 76.5,272.5C 81.0607,268.556 85.7274,264.722 90.5,261C 94.4089,253.88 100.409,250.046 108.5,249.5C 106.549,243.863 104.882,238.03 103.5,232C 103.645,231.228 103.978,230.561 104.5,230C 131.5,229.667 158.5,229.333 185.5,229C 188.136,228.066 190.803,227.232 193.5,226.5C 195.5,227.5 197.5,228.5 199.5,229.5C 205.465,229.349 210.632,227.349 215,223.5C 217.213,224.739 219.213,224.406 221,222.5C 223.12,223.459 225.287,223.626 227.5,223C 235.304,220.011 243.137,217.178 251,214.5C 250.887,220.464 249.887,226.13 248,231.5C 251.559,233.13 254.892,235.13 258,237.5C 258.667,241.167 258.667,244.833 258,248.5C 256.019,250.359 255.019,252.692 255,255.5C 248.079,260.654 243.079,267.321 240,275.5C 235.028,281.07 228.862,284.07 221.5,284.5C 221.297,286.39 221.963,287.89 223.5,289C 227.164,290.002 230.331,291.836 233,294.5C 234.036,297.971 234.869,301.471 235.5,305C 238.833,305.333 242.167,305.667 245.5,306C 246.308,306.308 246.975,306.808 247.5,307.5C 244.057,311.851 243.724,316.351 246.5,321C 243.921,322.076 242.254,323.909 241.5,326.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 581.5,243.5 C 584.187,269.353 597.187,288.186 620.5,300C 624.813,301.607 629.146,302.94 633.5,304C 624.876,316.748 616.376,329.581 608,342.5C 606.47,346.09 605.136,349.757 604,353.5C 597.861,354.878 591.694,356.212 585.5,357.5C 586.303,356.577 586.47,355.577 586,354.5C 584.184,353.671 582.351,352.837 580.5,352C 577.514,345.687 572.514,342.687 565.5,343C 563.413,342.208 561.579,341.041 560,339.5C 559.587,336.768 558.92,334.101 558,331.5C 555.597,327.94 553.43,324.273 551.5,320.5C 551.785,318.431 552.952,317.098 555,316.5C 555.684,315.216 555.517,314.049 554.5,313C 543.036,307.511 531.036,303.845 518.5,302C 524.44,292.792 531.107,284.126 538.5,276C 551.167,266 563.833,256 576.5,246C 578.078,244.906 579.745,244.072 581.5,243.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfcfd" d="M 338.5,262.5 C 331.72,271.883 325.053,281.383 318.5,291C 310.797,292.177 303.797,295.01 297.5,299.5C 294.452,305.636 291.785,311.97 289.5,318.5C 286.53,318.995 284.196,320.495 282.5,323C 283.727,324.587 283.394,325.921 281.5,327C 273.002,330.53 264.668,330.197 256.5,326C 252.179,325.501 247.846,325.334 243.5,325.5C 244.622,324.053 246.122,323.053 248,322.5C 246.752,319.054 246.419,315.388 247,311.5C 248.353,310.315 249.52,308.981 250.5,307.5C 249.91,306.201 248.91,305.368 247.5,305C 243.886,304.064 240.22,303.564 236.5,303.5C 236.998,299.781 236.164,296.447 234,293.5C 230.688,290.769 227.188,288.436 223.5,286.5C 231.079,285.291 237.246,281.624 242,275.5C 245.066,267.36 250.066,260.693 257,255.5C 259.655,257.053 262.488,258.22 265.5,259C 286.848,259.154 308.182,258.821 329.5,258C 331.349,259.093 333.016,260.426 334.5,262C 336.019,261.669 337.352,261.836 338.5,262.5 Z"/></g>
                    <g><path className="svg_map" fill="#fbfafc" d="M 583.5,358.5 C 571.421,356.875 559.421,354.709 547.5,352C 538.707,349.517 531.207,345.017 525,338.5C 522.996,333.15 519.996,328.484 516,324.5C 508.153,315.987 499.653,308.154 490.5,301C 487.26,298.909 483.926,297.076 480.5,295.5C 479.729,290.689 478.062,286.189 475.5,282C 476,281.833 476.5,281.667 477,281.5C 481.712,283.209 486.212,285.375 490.5,288C 493.5,288.333 496.5,288.667 499.5,289C 504.394,290.686 507.894,293.853 510,298.5C 514.981,303.789 521.148,305.956 528.5,305C 536.092,307.864 543.758,310.531 551.5,313C 552.167,313.667 552.833,314.333 553.5,315C 550.42,316.711 549.254,319.211 550,322.5C 554.875,327.918 557.875,334.251 559,341.5C 563.749,344.512 568.915,346.345 574.5,347C 576.887,351.053 580.22,354.053 584.5,356C 583.748,356.671 583.414,357.504 583.5,358.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 386.5,214.5 C 385.251,216.136 383.584,217.303 381.5,218C 380.167,219.667 380.167,221.333 381.5,223C 383.256,223.202 384.922,223.702 386.5,224.5C 385.627,226.413 384.627,228.247 383.5,230C 378.497,232.246 374.663,235.746 372,240.5C 365.571,246.097 358.071,249.597 349.5,251C 345.639,253.696 342.306,256.863 339.5,260.5C 338.198,259.193 336.865,259.193 335.5,260.5C 332.347,257.16 328.514,255.493 324,255.5C 304.197,257.26 284.364,257.76 264.5,257C 262.385,256.443 260.385,255.609 258.5,254.5C 257.105,252.081 257.605,250.081 260,248.5C 262.857,239.238 259.69,233.571 250.5,231.5C 249.018,228.743 249.518,226.41 252,224.5C 252.246,221.11 252.746,217.777 253.5,214.5C 257.935,212.186 262.602,210.353 267.5,209C 268.566,207.841 268.233,207.008 266.5,206.5C 266.369,205.624 266.702,204.957 267.5,204.5C 296.598,212.066 325.765,219.4 355,226.5C 366.318,225.173 376.318,220.84 385,213.5C 385.383,214.056 385.883,214.389 386.5,214.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfcfd" d="M 478.5,294.5 C 473.556,291.78 468.389,289.446 463,287.5C 460.204,288.936 457.371,290.436 454.5,292C 448.847,293.44 443.347,295.273 438,297.5C 437.772,291.806 440.272,287.973 445.5,286C 450.788,281.692 452.621,276.192 451,269.5C 449.503,267.323 447.503,265.99 445,265.5C 442.438,266.388 440.104,267.721 438,269.5C 436.216,268.691 434.383,268.024 432.5,267.5C 429.801,269.347 426.801,270.347 423.5,270.5C 422.779,267.183 422.612,263.849 423,260.5C 425.185,258.46 427.685,257.126 430.5,256.5C 430.286,258.144 430.62,259.644 431.5,261C 433.473,261.495 435.473,261.662 437.5,261.5C 437.682,259.409 437.348,257.409 436.5,255.5C 439.199,252.097 438.866,248.93 435.5,246C 434.333,245.833 433.167,245.667 432,245.5C 427.887,247.458 423.553,249.124 419,250.5C 417.144,249.264 415.311,249.264 413.5,250.5C 413.388,253.255 412.888,255.922 412,258.5C 410.103,260.016 407.936,260.683 405.5,260.5C 405.628,257.487 404.628,254.987 402.5,253C 403.459,250.88 403.626,248.713 403,246.5C 401.536,245.541 400.703,244.208 400.5,242.5C 401.5,240.5 402.5,238.5 403.5,236.5C 402.833,234.833 402.167,233.167 401.5,231.5C 403.291,228.752 403.791,225.752 403,222.5C 399.681,216.773 394.847,213.439 388.5,212.5C 415.889,198.303 442.889,183.303 469.5,167.5C 469.833,168 470.167,168.5 470.5,169C 469.283,171.368 468.449,173.868 468,176.5C 467.889,211.613 469.889,246.613 474,281.5C 475.807,285.756 477.307,290.089 478.5,294.5 Z"/></g>
                    <g><path className="svg_map" fill="#fdfdfd" d="M 266.5,206.5 C 253.896,211.765 240.896,216.598 227.5,221C 225.287,221.626 223.12,221.459 221,220.5C 218.022,221.911 214.855,222.911 211.5,223.5C 211.023,224.478 210.357,225.311 209.5,226C 206.139,226.337 202.806,226.837 199.5,227.5C 198.018,225.885 196.184,224.885 194,224.5C 189.26,226.294 184.426,227.627 179.5,228.5C 177.492,220.133 175.325,211.8 173,203.5C 171.954,201.91 170.787,200.41 169.5,199C 161.94,195.607 156.606,190.107 153.5,182.5C 156.829,176.984 159.995,171.318 163,165.5C 168.947,160.605 172.78,161.771 174.5,169C 182.049,168.908 189.049,170.741 195.5,174.5C 197.482,172.874 199.649,171.54 202,170.5C 205.683,171.513 209.35,172.513 213,173.5C 221.985,171.597 227.985,174.93 231,183.5C 233.466,186.2 236.3,188.367 239.5,190C 244.861,189.497 250.194,189.997 255.5,191.5C 258.837,196.823 262.503,201.823 266.5,206.5 Z"/></g>
                    <g><path className="svg_map" fill="#fefdfd" d="M 351.5,111.5 C 351.62,117.265 353.62,122.432 357.5,127C 360.833,127.667 364.167,127.667 367.5,127C 367.918,123.417 369.918,121.917 373.5,122.5C 378.813,123.4 383.813,125.233 388.5,128C 391.5,128.667 394.5,128.667 397.5,128C 400.966,125.611 403.966,122.778 406.5,119.5C 410.418,123.426 413.085,128.093 414.5,133.5C 414.183,136.726 414.016,140.059 414,143.5C 410.781,144.793 407.781,146.46 405,148.5C 403.472,151.417 402.139,154.417 401,157.5C 401.128,160.486 401.128,163.486 401,166.5C 399.333,168.833 397.667,171.167 396,173.5C 394.202,179.895 392.202,186.228 390,192.5C 389.216,197.887 389.382,203.22 390.5,208.5C 389.672,209.415 388.672,210.081 387.5,210.5C 386.468,208.96 385.135,208.46 383.5,209C 376.5,212.833 369.5,216.667 362.5,220.5C 363.483,212.611 361.316,205.611 356,199.5C 351.213,201.418 347.046,200.584 343.5,197C 339.5,196.667 335.5,196.333 331.5,196C 328.785,194.092 325.785,192.759 322.5,192C 318.427,191.488 314.427,190.655 310.5,189.5C 311.222,186.543 311.055,183.543 310,180.5C 307.223,179.364 304.723,177.864 302.5,176C 304.525,168.555 306.192,161.055 307.5,153.5C 307.833,152.833 308.167,152.167 308.5,151.5C 310.371,152.767 312.204,152.767 314,151.5C 314.989,148.544 315.822,145.544 316.5,142.5C 316.191,139.508 314.524,138.175 311.5,138.5C 311.757,135.075 313.59,133.075 317,132.5C 324.94,133.425 332.774,134.592 340.5,136C 342.719,129.9 344.886,123.733 347,117.5C 348.277,115.253 349.777,113.253 351.5,111.5 Z"/></g>
                    <g><path className="svg_map" fill="#fefdfd" d="M 437.5,111.5 C 439.5,111.5 441.5,111.5 443.5,111.5C 444.757,116.602 447.757,120.435 452.5,123C 458.112,125.139 463.446,127.806 468.5,131C 475.681,132.089 482.015,135.089 487.5,140C 489.207,140.195 490.874,140.195 492.5,140C 489.333,143.833 486.167,147.667 483,151.5C 482.333,152.5 482.333,153.5 483,154.5C 486.43,155.999 488.43,158.666 489,162.5C 493.856,168.02 499.356,172.853 505.5,177C 511.103,179.048 515.936,182.214 520,186.5C 523.236,195.302 527.236,203.635 532,211.5C 533.949,211.463 535.782,211.963 537.5,213C 535.789,214.133 535.289,215.633 536,217.5C 538.833,221.667 541.667,225.833 544.5,230C 542.19,230.497 539.857,230.663 537.5,230.5C 537.154,233.602 537.821,236.435 539.5,239C 535.759,242.286 531.925,245.453 528,248.5C 527.503,251.146 527.336,253.813 527.5,256.5C 521.139,256.397 514.806,255.897 508.5,255C 506.559,253.097 504.226,252.264 501.5,252.5C 502.924,268.363 506.924,283.53 513.5,298C 512.668,298.688 512.002,298.521 511.5,297.5C 507.255,290.375 500.922,286.875 492.5,287C 486.967,283.28 480.967,280.78 474.5,279.5C 472.479,250.857 470.813,222.191 469.5,193.5C 469.667,187.5 469.833,181.5 470,175.5C 470.837,173.162 471.67,170.828 472.5,168.5C 472.253,165.918 470.92,165.085 468.5,166C 448.5,177.667 428.5,189.333 408.5,201C 402.911,203.437 397.244,205.603 391.5,207.5C 390.822,193.039 394.322,179.706 402,167.5C 401.101,159.916 403.268,153.416 408.5,148C 416.202,146.328 418.536,141.828 415.5,134.5C 419.776,137.071 424.442,138.738 429.5,139.5C 430.108,135.528 430.608,131.528 431,127.5C 434.047,122.526 436.214,117.192 437.5,111.5 Z"/></g>
                </svg>
            </div>
        </styled.moveLocation>
    )
}

export default SeoulGuro;