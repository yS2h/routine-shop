import React from 'react'

interface ProfileIconProps {
  isSelected: boolean
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ isSelected }) => {
  const color = isSelected ? 'var(--main)' : 'var(--icon)'

  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.5" cy="4.70801" r="2.875" stroke={color} strokeWidth="2" />
      <path
        d="M17.1668 17.1663C17.1668 13.4614 13.7343 10.458 9.50016 10.458C5.26598 10.458 1.8335 13.4614 1.8335 17.1663"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default ProfileIcon
