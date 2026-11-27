import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Our type scale from globals.css. tailwind-merge doesn't know custom names,
// so without this it treats `text-body` as a colour and deletes real colours
// like `text-primary-foreground` (the black-on-black button bug).
const typeScale = [
  "display-lg",
  "display-md",
  "display-sm",
  "title",
  "body",
  "body-sm",
  "label",
  "label-sm",
  "meta",
  "small",
  "overline",
]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: typeScale }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}