import * as React from "react";
import { colors } from "../../colors";
import { useCheckHoverIconCatalog } from '../../providers/hoverIconCatalog';
const UserIcon = (props: any) => {
  const {highLightIcon} = props
  const {hover} = useCheckHoverIconCatalog()    
  const color = hover===2 || highLightIcon ? colors.hoverIcon : colors.defaultIcon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="M9.988 9.988c1.38 0 2.559-.488 3.532-1.46.976-.977 1.464-2.153 1.464-3.532s-.488-2.559-1.464-3.531C12.547.488 11.367 0 9.988 0S7.434.488 6.457 1.465c-.977.972-1.46 2.152-1.46 3.531s.483 2.555 1.46 3.531c.977.973 2.152 1.461 3.531 1.461Zm0 0"
      />
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: color,
          fillOpacity: 1,
        }}
        d="M19.102 15.262c-.032-.438-.094-.91-.184-1.414-.09-.508-.207-.98-.344-1.414a6.716 6.716 0 0 0-.558-1.266 4.485 4.485 0 0 0-.809-1.055 3.33 3.33 0 0 0-1.11-.695 3.879 3.879 0 0 0-1.452-.262c-.079 0-.258.094-.547.281-.286.184-.61.395-.97.626-.358.226-.827.437-1.401.62a5.6 5.6 0 0 1-1.739.282c-.582 0-1.16-.094-1.734-.281-.578-.184-1.047-.395-1.406-.621-.36-.231-.684-.442-.97-.626-.284-.187-.468-.28-.546-.28-.527 0-1.012.085-1.45.261a3.412 3.412 0 0 0-1.112.695c-.305.29-.57.64-.805 1.055-.235.41-.422.832-.559 1.266-.14.433-.254.906-.347 1.414-.09.504-.153.976-.18 1.414-.031.441-.047.89-.047 1.347 0 1.04.316 1.864.95 2.465.632.602 1.476.906 2.523.906h11.367c1.05 0 1.89-.304 2.523-.906.637-.601.953-1.422.953-2.465a21.752 21.752 0 0 0-.046-1.347Zm0 0"
      />
    </svg>
  );
};

export default UserIcon;
