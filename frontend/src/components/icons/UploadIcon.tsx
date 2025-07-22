import React from 'react'

interface UploadIconProps {
  isSelected: boolean
}

const UploadIcon: React.FC<UploadIconProps> = ({ isSelected }) => {
  const color = isSelected ? 'var(--main)' : 'var(--icon)'

  return (
    <svg width="21" height="20" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.38428 6.625L8.42717 1.58211C8.81769 1.19158 9.45086 1.19158 9.84138 1.58211L14.8843 6.625"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.13428 1.87988V13.3799"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1.875"
        y1="17.1885"
        x2="17.125"
        y2="17.1885"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default UploadIcon
