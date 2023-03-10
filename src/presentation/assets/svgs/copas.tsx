import React from 'react'

type IconCard = {
  color?: string,
  size?: string
}

function Copas({ color = '#db2537', size = '50px' }: IconCard): JSX.Element {
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
        d="M 257.00,120.00
           C 245.14,108.14 225.45,87.31 213.00,77.90
             193.89,63.45 166.10,53.04 142.00,53.00
             118.15,52.96 100.73,55.40 79.00,66.27
             68.34,71.60 54.43,81.58 46.17,90.09
             27.24,109.59 11.33,141.39 11.00,169.00
             10.85,182.54 10.47,192.59 13.42,206.00
             22.96,249.25 49.17,270.17 79.00,300.00
             79.00,300.00 138.00,358.99 138.00,358.99
             138.00,358.99 152.00,372.00 152.00,372.00
             152.00,372.00 215.00,435.00 215.00,435.00
             226.95,446.95 235.64,458.78 254.00,459.00
             272.03,459.21 277.60,454.40 290.00,442.00
             290.00,442.00 306.00,426.00 306.00,426.00
             306.00,426.00 400.00,332.00 400.00,332.00
             400.00,332.00 412.00,320.96 412.00,320.96
             412.00,320.96 448.00,285.00 448.00,285.00
             458.26,274.74 468.83,264.68 477.52,253.00
             489.97,236.28 500.75,209.03 501.00,188.00
             501.26,165.29 500.93,151.57 491.99,130.00
             485.98,115.51 478.07,103.37 467.17,92.09
             456.79,81.35 447.23,73.86 434.00,66.89
             395.82,46.76 348.05,49.10 311.00,70.43
             296.01,79.06 287.96,88.04 276.00,100.00
             270.45,105.55 261.30,113.99 257.00,120.00 Z"
      />
    </svg>

  )
}

export default Copas
