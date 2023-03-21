import * as React from "react"
import { colors } from "../../colors";
import { useCheckHoverIconCatalog } from '../../providers/hoverIconCatalog';
const BlogIcon = (props:any) => {
  const {hover} = useCheckHoverIconCatalog()    
  const color = hover===5 ? colors.hoverIcon : colors.defaultIcon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="M11.125 11.25h-1.75c-.375 0-.625-.25-.625-.625v-1.75c0-.188.063-.313.188-.438l6.624-6.624A.567.567 0 0 1 16 1.625c.188 0 .313.063.438.188l1.75 1.75c.25.25.25.624 0 .874l-6.625 6.625a.567.567 0 0 1-.438.188Zm0 0"
      />
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="M12.438 11.938c-.376.374-.813.562-1.313.562h-1.75A1.842 1.842 0 0 1 7.5 10.625v-1.75c0-.5.188-1 .563-1.313l3.75-3.812H5.625A1.842 1.842 0 0 0 3.75 5.625v8.75c0 1.063.813 1.875 1.875 1.875h8.75a1.842 1.842 0 0 0 1.875-1.875V8.187Zm0 0"
      />
    </svg>
  )
}


export default BlogIcon

