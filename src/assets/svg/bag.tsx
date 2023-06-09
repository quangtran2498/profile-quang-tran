import * as React from "react"
import { colors } from "../../colors";
import { useCheckHoverIconCatalog } from '../../providers/hoverIconCatalog';
const BagIcon = (props:any) => {
  const {highLightIcon} = props
  const {hover} = useCheckHoverIconCatalog()  
  const color = hover===3 || highLightIcon? colors.hoverIcon : colors.defaultIcon
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 6.35 6.35"
      {...props}
    >
      <path
        style={{
          fill: color,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M10.2 4.143c-.476 0-.91.154-1.259.45-.349.297-.62.777-.62 1.333 0 .023.006.044.007.066h-4.59c-.386 0-.645.26-.683.647v2.257l6.9 2.612c.303-.58.895-.981 1.582-.994.012-.004.021-.008.033-.008h.813c.013 0 .026.008.039.008a1.827 1.827 0 0 1 1.578.998l6.963-2.756v-2.08c-.017-.406-.295-.684-.7-.684h-4.585c0-.022.008-.043.008-.066 0-.556-.273-1.035-.622-1.332a1.91 1.91 0 0 0-1.257-.451h-3.608zm0 1.351h3.607c.255 0 .465.099.586.201.12.103.136.172.136.23 0 .026-.01.045-.013.067h1.015c-.11.192-.269.359-.459.483-.352.229-.79.34-1.265.34h-3.608c-.475 0-.913-.111-1.265-.34a1.433 1.433 0 0 1-.46-.483H9.49c-.003-.022-.013-.041-.013-.066 0-.059.016-.128.136-.23a.924.924 0 0 1 .586-.202zM20.968 9.97l-6.754 2.676v.582c0 1.015-.828 1.853-1.834 1.853h-.81c-1.007 0-1.833-.838-1.833-1.853v-.586l-6.705-2.543v8.78c0 .349.312.72.703.72h16.53c.39 0 .703-.372.703-.72v-8.91zm-9.399 1.67v.002c-.064 0-.119.02-.175.03-.032.008-.067.003-.096.018-.241.095-.398.317-.422.61a.561.567 0 0 1-.02.107v.824c0 .422.296.72.713.72h.81c.419 0 .714-.298.714-.72v-.822a.561.567 0 0 1-.018-.101c-.02-.299-.176-.524-.42-.618a.787.787 0 0 0-.273-.05h-.813z"
        transform="scale(.26458)"
      />
    </svg>

  )
}


export default BagIcon
