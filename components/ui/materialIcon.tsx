import { cn } from "@/lib/utils"

type MaterialIconProps = {
  name: string
  size: number
  className?: string
}

export function MaterialIcon({ name, size, className }: MaterialIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{ fontSize: size }}
      aria-hidden
    >
      {name}
    </span>
  )
}
