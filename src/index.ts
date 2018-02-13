// tslint:disable:max-line-length
export function set<T, K extends keyof T>(obj: T, path: [K], value: T[K]): T
export function set<A, KA extends keyof A, KB extends keyof (A[KA])>(obj: A, path: [KA, KB], value: A[KA][KB]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB])>(obj: A, path: [KA, KB, KC], value: A[KA][KB][KC]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC])>(obj: A, path: [KA, KB, KC, KD], value: A[KA][KB][KC][KD]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD])>(obj: A, path: [KA, KB, KC, KD, KE], value: A[KA][KB][KC][KD][KE]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE])>(obj: A, path: [KA, KB, KC, KD, KE, KF], value: A[KA][KB][KC][KD][KE][KF]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG], value: A[KA][KB][KC][KD][KE][KF][KG]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH], value: A[KA][KB][KC][KD][KE][KF][KG][KH]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG]), KI extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH, KI], value: A[KA][KB][KC][KD][KE][KF][KG][KH][KI]): A
export function set<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG]), KI extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH]), KJ extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH][KI])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH, KI, KJ], value: A[KA][KB][KC][KD][KE][KF][KG][KH][KI][KJ]): A
// tslint:enable:max-line-length
export function set<T extends object>(obj: T, path: Array<string>, value: any): T { // tslint:disable-line:no-any
  if (path.length === 0) {
    return obj
  }

  const [key, ...keys] = path
  if (keys.length === 0) {
    return {
      ...obj as any, // tslint:disable-line:no-any
      [key]: value,
    }
  }

  return {
    ...obj as any, // tslint:disable-line:no-any
    [key]: set(obj[key], keys as any, value), // tslint:disable-line:no-any
  }
}

// tslint:disable:max-line-length
export function get<T, K extends keyof T>(obj: T, path: [K]): T[K]
export function get<A, KA extends keyof A, KB extends keyof (A[KA])>(obj: A, path: [KA, KB]):  A[KA][KB]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB])>(obj: A, path: [KA, KB, KC]): A[KA][KB][KC]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC])>(obj: A, path: [KA, KB, KC, KD]): A[KA][KB][KC][KD]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD])>(obj: A, path: [KA, KB, KC, KD, KE]): A[KA][KB][KC][KD][KE]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE])>(obj: A, path: [KA, KB, KC, KD, KE, KF]): A[KA][KB][KC][KD][KE][KF]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG]): A[KA][KB][KC][KD][KE][KF][KG]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH]): A[KA][KB][KC][KD][KE][KF][KG][KH]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG]), KI extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH, KI]): A[KA][KB][KC][KD][KE][KF][KG][KH][KI]
export function get<A, KA extends keyof A, KB extends keyof (A[KA]), KC extends keyof (A[KA][KB]), KD extends keyof (A[KA][KB][KC]), KE extends keyof (A[KA][KB][KC][KD]), KF extends keyof (A[KA][KB][KC][KD][KE]), KG extends keyof (A[KA][KB][KC][KD][KE][KF]), KH extends keyof (A[KA][KB][KC][KD][KE][KF][KG]), KI extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH]), KJ extends keyof (A[KA][KB][KC][KD][KE][KF][KG][KH][KI])>(obj: A, path: [KA, KB, KC, KD, KE, KF, KG, KH, KI, KJ]): A[KA][KB][KC][KD][KE][KF][KG][KH][KI][KJ]
// tslint:enable:max-line-length
export function get<T extends object>(obj: T, path: Array<string>): T { // tslint:disable-line:no-any
    if (path.length === 0) {
        return obj
    }
    const [key, ...keys] = path
    return get(obj[key], keys as any) // tslint:disable-line:no-any
}