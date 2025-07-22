import React from 'react'

interface RoutineIconProps {
  isSelected: boolean
}

const RoutineIcon: React.FC<RoutineIconProps> = ({ isSelected }) => {
  const color = isSelected ? 'var(--main)' : 'var(--icon)'

  return (
    <svg width="23" height="23" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.875 16.208H3.3125" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M7.146 16.208H19.1252" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M1.875 10.458H3.3125" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M7.146 10.458H19.1252" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10.021 4.70801H19.1252" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M1.875 4.70801L3.79167 6.62467L8.58333 1.83301"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RoutineIcon
