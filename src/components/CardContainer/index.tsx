import { ReactNode } from "react";

import { CardWrapper } from "@/components/CardContainer/styles";

interface CardContainerProps {
  children: ReactNode;
  hasBorderBottom?: boolean;
}

export function CardContainer({
  children,
  hasBorderBottom = true,
}: CardContainerProps) {
  return (
    <CardWrapper $hasBorderBottom={hasBorderBottom}>{children}</CardWrapper>
  );
}
