const LogoSvg = ( width, height ) => {
  return (
  <svg width={width} height={height} viewBox={`0 0 1044 1044`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
      <feFlood flood-color="#0998A0" result="glowColor" />
      <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <g clip-path="url(#clip0_1_2)">
    <path className="logoPath" d="M93.444 535.007L93.6955 449.024L238.444 449.007L238.194 534.991L93.444 535.007Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
    <path className="logoPath" d="M239.189 333.986L93.4587 334.007L93.7007 235.029L166.581 235.018L239.429 235.008L239.189 333.986Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
    <path className="logoPath" d="M434.75 91.9245C514.903 91.8778 580.213 155.228 583.312 234.608L93.9172 234.892L93.9998 92.1233L434.75 91.9245Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
    <path className="logoPath" d="M582.439 264.01L582.183 564.946L439.449 565.005L439.705 264.068L582.439 264.01Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
    <path className="logoPath" d="M241.95 708.361C161.797 708.408 96.4888 645.06 93.3904 565.68L582.305 565.393L582.223 708.162L241.95 708.361Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
    <path className="logoPath" d="M93.447 449.003L93.5047 334.204L384.441 334.011L384.42 375.55C384.397 416.782 355.278 448.826 320.998 448.849L93.447 449.003Z" stroke="#01C8D4" stroke-width="12" filter="url(#glow)"/>
  </g>
</svg>

  )
}

export default LogoSvg;