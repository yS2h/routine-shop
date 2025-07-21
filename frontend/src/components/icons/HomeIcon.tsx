import React from 'react'

interface HomeIconProps {
  isSelected: boolean
}

const HomeIcon: React.FC<HomeIconProps> = ({ isSelected }) => {
  const color = isSelected ? 'var(--main)' : 'var(--icon)'

  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 11.5765C1.5 10.313 2.09693 9.12386 3.11007 8.36896L10.6101 2.78073C12.0282 1.7241 13.9718 1.7241 15.3899 2.78073L22.8899 8.36896C23.9031 9.12386 24.5 10.313 24.5 11.5765V20C24.5 22.2091 22.7091 24 20.5 24H5.5C3.29086 24 1.5 22.2091 1.5 20V11.5765Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="8.88867"
        y1="17.8887"
        x2="17.1109"
        y2="17.8887"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default HomeIcon
