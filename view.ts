type Person = {
  firsName: string
  lastName: string
  age: number
  isEmployed: boolean
}
type AgeOfPerson = Person['age']
