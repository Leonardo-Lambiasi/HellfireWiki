import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "selo",
  {
    variants: {
      variant: {
        default: "selo-padrao",
        secondary: "selo-secundario",
        destructive: "selo-destrutivo",
        outline: "selo-contorno",
        "fundo-da-grota": "selo-grota",
        gold: "selo-dourado",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
