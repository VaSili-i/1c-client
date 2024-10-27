export type Mods = Record<string, boolean | string | undefined>;

export function joinClassName(
  mainClass: string,
  mod: Mods = {},
  ...otherClass: Array<string | undefined>
): string {
  const modsClassName = Object.entries(mod)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const joinClassName = [mainClass, ...modsClassName, ...otherClass.filter(Boolean)].join(' ');
  return joinClassName;
}
