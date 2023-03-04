import React from 'react'

type IconCard = {
  color?: string,
  size?: string
}

function Espadas({ color = '#000', size = '50px' }: IconCard): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        id="Selection"
        fill={color}
        stroke={color}
        strokeWidth="1"
        d="M 205.00,381.00
           C 205.00,381.00 193.58,443.00 193.58,443.00
             191.78,452.96 188.59,465.14 189.04,475.00
             189.77,491.21 202.49,500.98 218.00,501.00
             218.00,501.00 294.00,501.00 294.00,501.00
             309.51,500.98 322.23,491.21 322.96,475.00
             323.42,464.74 320.26,453.20 318.42,443.00
             318.42,443.00 307.00,381.00 307.00,381.00
             326.28,390.27 343.00,397.74 365.00,398.00
             385.91,398.24 405.03,394.99 424.00,385.74
             455.74,370.27 478.53,341.16 486.87,307.00
             488.34,300.98 489.92,292.14 490.00,286.00
             490.26,263.80 488.32,245.27 478.19,225.00
             465.49,199.59 439.23,177.23 419.00,157.00
             419.00,157.00 334.00,72.00 334.00,72.00
             334.00,72.00 293.00,31.00 293.00,31.00
             282.83,20.83 274.50,11.19 259.00,11.00
             254.90,10.95 249.94,10.75 246.00,11.76
             232.50,15.22 223.45,26.55 214.00,36.00
             214.00,36.00 184.00,66.00 184.00,66.00
             184.00,66.00 83.00,167.00 83.00,167.00
             83.00,167.00 46.24,205.00 46.24,205.00
             32.61,222.82 22.27,249.40 22.00,272.00
             21.71,297.29 25.12,316.69 37.87,339.00
             53.12,365.66 78.57,385.25 108.00,393.71
             115.52,395.87 125.19,397.90 133.00,398.00
             150.33,398.20 162.08,398.33 179.00,392.97
             188.17,390.07 196.70,385.78 205.00,381.00 Z"
      />
    </svg>

  )
}

export default Espadas