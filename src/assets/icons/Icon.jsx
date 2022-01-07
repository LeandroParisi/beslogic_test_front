/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { Tooltip } from 'components'
import styles from './Icon.module.scss'
import { tooltips } from './iconsLib'

const Icon = ({
  icon, color, className, size, onClick, noTooltip, tooltipText, type, inlineTooltip, isDisabled,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const { iconName } = icon
  
  const tooltip = tooltipText || tooltips[iconName] || tooltips[icon]
  const hasTooltip = !noTooltip && !!tooltip

  const customIconsLib = {
    pix: () => (
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path d="M2474 5110 c-132 -14 -270 -69 -378 -150 -28 -21 -276 -264 -551
-539 l-500 -501 78 0 c94 0 201 -21 288 -56 135 -55 187 -99 629 -539 334
-332 432 -424 458 -430 75 -16 72 -18 532 439 256 255 458 447 490 468 129 82
261 118 435 118 l120 0 -500 501 c-275 275 -527 520 -560 544 -159 115 -346
165 -541 145z m178 -321 c123 -26 143 -42 470 -367 l307 -305 -56 -34 c-97
-58 -178 -132 -518 -472 l-330 -331 -370 368 c-219 219 -394 384 -429 407
l-59 38 319 317 c334 332 355 348 469 376 65 16 131 17 197 3z"
        />
        <path d="M494 3368 c-176 -178 -332 -339 -346 -358 -44 -61 -99 -179 -119
-259 -43 -163 -22 -377 51 -522 58 -115 114 -180 428 -493 l310 -308 198 5
c341 8 304 -15 845 523 402 400 441 436 505 466 62 30 78 33 159 33 169 -1
145 17 655 -490 563 -560 520 -535 920 -535 l205 0 321 323 c177 177 336 343
353 370 149 221 175 516 66 754 -18 39 -48 93 -65 120 -18 26 -177 193 -354
371 l-321 322 -215 0 c-241 0 -303 -10 -404 -62 -50 -26 -138 -109 -501 -469
-510 -507 -492 -494 -655 -494 -162 0 -139 -17 -645 485 -431 428 -442 438
-525 478 -106 52 -168 62 -380 62 l-165 0 -321 -322z m746 -35 c25 -17 211
-198 415 -402 l370 -371 -380 -380 c-282 -282 -393 -387 -429 -405 -44 -22
-63 -25 -161 -25 l-111 0 -275 278 c-303 304 -317 324 -341 461 -9 56 -9 86 0
142 24 137 38 157 341 462 l276 279 125 -4 c122 -3 126 -4 170 -35z m3211
-240 c294 -296 312 -320 338 -441 15 -72 14 -127 -4 -195 -32 -121 -44 -138
-334 -429 l-275 -278 -146 0 c-121 0 -152 4 -185 19 -26 13 -171 150 -425 405
l-385 386 385 386 c254 255 399 392 425 405 33 15 64 19 185 19 l146 0 275
-277z"
        />
        <path d="M2480 2219 c-14 -6 -212 -196 -440 -423 -228 -227 -438 -429 -466
-449 -123 -89 -259 -136 -417 -144 l-109 -6 499 -499 c274 -275 525 -519 559
-544 269 -194 639 -194 908 0 34 25 286 270 561 545 l500 501 -115 0 c-171 0
-292 32 -428 111 -40 24 -186 162 -492 466 -239 237 -448 437 -463 442 -34 13
-64 13 -97 0z m810 -1126 c30 -21 74 -51 97 -64 l42 -25 -302 -301 c-321 -320
-343 -337 -470 -369 -110 -29 -254 -1 -352 67 -22 15 -174 162 -339 327 l-298
300 63 42 c39 26 210 188 429 406 l365 363 355 -353 c195 -194 380 -371 410
-393z"
        />
      </g>
    ),
  }

  return (
    <div
      onClick={() => !isDisabled && onClick && onClick()}
      className={classNames(
        styles.iconContainer,
        className,
        { [styles[type]]: type },
        { [styles.clickable]: onClick },
        { [styles.disabled]: isDisabled },
      )}
      style={{ fontSize: size }}
      role="button"
      tabIndex={0}
      onFocus={() => hasTooltip && setShowTooltip(true)}
      onMouseOver={() => hasTooltip && setShowTooltip(true)}
      onMouseOut={() => hasTooltip && setShowTooltip(false)}
      onBlur={() => hasTooltip && setShowTooltip(false)}
    >
      <FontAwesomeIcon icon={icon} color={color} size={size} />
      {hasTooltip && showTooltip && <Tooltip text={tooltip} inlineTooltip={inlineTooltip} />}

    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(['default', null]),
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  noTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  inlineTooltip: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Icon.defaultProps = {
  inlineTooltip: false,
  color: 'white',
  className: '',
  size: '25px',
  onClick: null,
  noTooltip: false,
  tooltipText: '',
  type: null,
  isDisabled: false,
}

export default Icon
