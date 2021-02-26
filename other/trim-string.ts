export function trimString(x: string) {
  return x.replace(/[^A-Z0-9]/ig, "_");;
}
