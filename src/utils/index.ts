export const getRootCSS = (root: string) => (
  getComputedStyle(document.documentElement).getPropertyValue(root).trim()
)