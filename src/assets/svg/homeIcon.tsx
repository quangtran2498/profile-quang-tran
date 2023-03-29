import * as React from "react";
import { colors } from "../../colors";
import { useCheckHoverIconCatalog } from '../../providers/hoverIconCatalog';
const HomeIcon = (props: any) => {
  const {highLightIcon} = props
  const {hover} = useCheckHoverIconCatalog()    
  const color = hover===1 || highLightIcon ? colors.hoverIcon : colors.defaultIcon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="m10.008 5.258-7.14 5.883c0 .011 0 .023-.005.039-.004.015-.008.027-.008.035v5.96c0 .216.079.403.239.56a.765.765 0 0 0 .558.234h4.766v-4.766h3.176v4.766h4.77a.771.771 0 0 0 .558-.235.765.765 0 0 0 .234-.558v-5.961a.197.197 0 0 0-.011-.074Zm0 0"
      />
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="m19.875 9.8-2.719-2.257V2.477a.383.383 0 0 0-.398-.395h-2.383a.389.389 0 0 0-.285.11.389.389 0 0 0-.11.285v2.421l-3.03-2.53a1.45 1.45 0 0 0-.942-.325c-.363 0-.68.11-.945.324L.136 9.801a.378.378 0 0 0-.137.27.401.401 0 0 0 .09.288l.77.918a.418.418 0 0 0 .257.137c.102.012.2-.02.301-.086l8.59-7.164 8.59 7.164a.374.374 0 0 0 .257.086h.04a.428.428 0 0 0 .261-.137l.77-.918a.403.403 0 0 0 .086-.293.363.363 0 0 0-.137-.265Zm0 0"
      />
    </svg>
  );
};

export default HomeIcon;
