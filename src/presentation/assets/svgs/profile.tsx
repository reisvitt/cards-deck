import React from 'react'

type IconCard = {
  color?: string,
  size?: string
}

function Profile({ color = '#000', size = '50px' }: IconCard): JSX.Element {
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
        d="M 237.00,0.42
           C 221.31,2.79 210.42,5.14 196.00,12.37
             158.58,31.12 129.07,73.49 129.00,116.00
             128.97,137.20 129.24,150.73 137.45,171.00
             152.97,209.31 189.30,238.53 230.00,245.25
             234.91,246.06 240.02,246.94 245.00,247.00
             269.45,247.28 287.80,244.91 310.00,233.63
             322.72,227.16 333.06,218.06 343.00,208.00
             352.82,198.06 360.01,186.65 365.77,174.00
             371.14,162.20 375.84,143.98 376.00,131.00
             376.20,113.99 375.53,100.46 370.25,84.00
             359.61,50.79 332.96,22.56 301.00,8.87
             282.58,0.98 256.85,-2.00 237.00,0.42 Z
           M 240.00,31.29
           C 277.50,27.78 310.49,41.63 331.30,74.00
             361.10,120.35 341.60,185.71 291.00,208.14
             276.14,214.73 264.04,216.18 248.00,216.00
             211.50,215.57 176.85,189.04 164.70,155.00
             157.42,134.63 158.34,107.01 166.45,87.00
             174.70,66.66 194.88,46.51 215.00,37.87
             222.90,34.48 231.53,32.58 240.00,31.29 Z
           M 143.00,247.61
           C 126.95,249.75 114.96,252.56 101.00,261.54
             65.90,284.11 51.65,328.86 45.58,368.00
             45.58,368.00 42.00,400.00 42.00,400.00
             41.83,415.17 40.80,436.77 44.74,451.00
             54.94,487.79 86.84,511.94 125.00,512.00
             125.00,512.00 386.00,512.00 386.00,512.00
             395.31,511.99 403.12,510.33 412.00,507.71
             419.60,505.46 425.28,502.77 432.00,498.58
             453.21,485.34 465.07,464.36 468.57,440.00
             468.57,440.00 469.17,431.00 469.17,431.00
             469.17,431.00 469.99,423.00 469.99,423.00
             469.99,423.00 469.00,406.00 469.00,406.00
             468.97,387.54 466.40,369.02 462.42,351.00
             459.58,338.13 456.79,327.21 451.57,315.00
             445.61,301.06 435.78,283.71 424.91,273.17
             409.18,257.92 385.05,247.26 363.00,247.00
             359.10,246.96 353.67,246.74 350.00,247.79
             342.19,250.01 320.70,265.25 312.00,270.40
             298.53,278.37 273.75,285.81 258.00,286.00
             236.94,286.24 215.22,279.54 197.00,269.13
             187.98,263.97 169.89,250.32 161.00,247.61
             156.72,246.57 147.53,246.87 143.00,247.61 Z
           M 146.00,278.29
           C 154.44,277.58 158.21,281.16 165.00,285.67
             165.00,285.67 186.00,298.74 186.00,298.74
             209.48,310.88 233.53,317.31 260.00,317.00
             281.57,316.74 308.16,307.90 327.00,297.69
             327.00,297.69 349.00,283.95 349.00,283.95
             352.37,281.81 356.02,278.85 360.00,278.23
             362.83,277.78 366.18,278.45 369.00,278.92
             384.25,281.49 394.25,286.76 404.96,298.00
             422.13,316.01 430.38,345.97 434.41,370.00
             435.89,378.81 437.96,392.26 438.04,401.00
             438.04,401.00 438.04,415.00 438.04,415.00
             438.04,415.00 438.91,422.00 438.91,422.00
             439.12,425.83 438.52,427.47 438.17,431.00
             436.56,447.07 432.24,459.07 419.00,469.48
             410.89,475.87 400.26,479.80 390.00,481.00
             390.00,481.00 382.00,481.00 382.00,481.00
             382.00,481.00 335.00,482.00 335.00,482.00
             335.00,482.00 140.00,482.00 140.00,482.00
             140.00,482.00 128.00,481.09 128.00,481.09
             110.08,479.86 95.20,476.08 83.53,461.00
             70.33,443.95 72.77,422.23 73.00,402.00
             73.11,392.84 75.05,380.17 76.59,371.00
             81.18,343.64 91.11,308.24 114.00,290.53
             123.45,283.21 134.40,280.05 146.00,278.29 Z"
      />
    </svg>

  )
}

export default Profile
