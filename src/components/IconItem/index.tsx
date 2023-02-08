import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { IconItemContainer, IconItemVariant } from "./IconItem.styles";

interface IconItemProps {
  variant: IconItemVariant;
  label: string;
}

interface IconComponentVariantProps {
  variant: IconItemVariant;
}

function IconComponentVariant({variant}:IconComponentVariantProps){
  switch (variant) {
    case 'shoppingCart':
      return <ShoppingCart size={16} weight="fill" color="white" />
    case 'coffee':
      return <Coffee size={16} weight="fill" color="white" />
    case 'package':
      return <Package size={16} weight="fill" color="white" />
    case 'timer':
      return <Timer size={16} weight="fill" color="white" />
    default:
      return <></>
  }
  
}

export function IconItem({ variant, label }: IconItemProps) {
  return (
    <IconItemContainer variant={variant}>
      <div>
        <IconComponentVariant variant={variant} />
      </div>
      <span>{label}</span>
    </IconItemContainer>
  );
}
