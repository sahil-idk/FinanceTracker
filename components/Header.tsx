import React from 'react'

const Header = ({
    type,
    title,
    user,
    subtext

}:HeaderBoxProps) => {
  return (
    <div>
      <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-bankGradient">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
</div>                                                                        
    </div>
  )
}

export default Header
