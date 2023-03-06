export namespace UserProps {
  export type Model = {
    name?: string
  }

  export type CurrentModel = {
    user: Model
  }
}

export interface User {
  me: () => Promise<UserProps.CurrentModel>
}
