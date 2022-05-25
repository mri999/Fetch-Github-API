import React, { memo } from 'react'

function HoriozontalText({ title, subTitle }) {
  return (
    <div style={{ display: 'flex' }}>
      <p className="title">{title}:&nbsp;</p>
      <p className="subTitle">{subTitle}</p>
    </div>
  )
}

export default memo(HoriozontalText)
