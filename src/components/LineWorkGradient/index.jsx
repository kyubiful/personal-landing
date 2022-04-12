export const LineWorkGradient = ({ className, color1, color2, color3 }) => {
  // color 1 #F64F59
  // color 2 #C471ED
  // color 3 #12C2E9
  return (
    <svg className={className} viewBox="0 0 51 356" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_103_2129)">
        <rect width="11" height="316" transform="translate(20 20)" fill="url(#paint0_linear_103_2129)"/>
        <line x1="25" y1="21" x2="25" y2="335" stroke="url(#paint1_linear_103_2129)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="25" cy="130" r="5" fill="url(#paint2_linear_103_2129)"/>
        <circle cx="25" cy="49" r="5" fill="url(#paint3_linear_103_2129)"/>
        <circle cx="25" cy="211" r="5" fill="url(#paint4_linear_103_2129)"/>
        <circle cx="25" cy="292" r="5" fill="url(#paint5_linear_103_2129)"/>
      </g>
      <defs>
        <filter id="filter0_f_103_2129" x="0" y="0" width="51" height="356" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_103_2129"/>
        </filter>
        <linearGradient id="paint0_linear_103_2129" x1="5.00512" y1="-11.9999" x2="5.00972" y2="324.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
        <linearGradient id="paint1_linear_103_2129" x1="23.5" y1="20" x2="23.4996" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
        <linearGradient id="paint2_linear_103_2129" x1="20" y1="130" x2="30" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
        <linearGradient id="paint3_linear_103_2129" x1="20" y1="49" x2="30" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
        <linearGradient id="paint4_linear_103_2129" x1="20" y1="211" x2="30" y2="211" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
        <linearGradient id="paint5_linear_103_2129" x1="20" y1="292" x2="30" y2="292" gradientUnits="userSpaceOnUse">
          <stop stopColor={color1}/>
          <stop offset="0.479167" stopColor={color2}/>
          <stop offset="1" stopColor={color3}/>
        </linearGradient>
      </defs>
    </svg>

  )
}
