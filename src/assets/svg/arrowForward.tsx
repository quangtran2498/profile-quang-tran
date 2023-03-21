
import * as React from "react"

const ArrowForward = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
    <path
      style={{
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "#fff",
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M5 12h14M12 5l7 7-7 7"
      transform="scale(.75)"
    />
  </svg>
)

export default ArrowForward
