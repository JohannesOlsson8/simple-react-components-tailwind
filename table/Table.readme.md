# Table

Table

## Props

| Props   | Type                                                                       | Required | Default | Description   |
| :------ | :------------------------------------------------------------------------- | :------- | :------ | :------------ |
| columns | { key: string; label: string; formatter?: (row: T) => React.ReactNode }[]; | Yes      |         |               |
| data    | T[]                                                                        | Yes      |         |               |
| actions | IAction<T>[]                                                               | No       |         |               |
| loading | boolean                                                                    | No       |         | Loading state |

### IAction

| Props  | Type       | Required | Default | Description |
| :----- | :--------- | :------- | :------ | :---------- |
| label  | string     | Yes      |         |             |
| button | IButton<T> | Yes      |         |             |

#### IButton

| Props   | Type              | Required | Default | Description |
| :------ | :---------------- | :------- | :------ | :---------- |
| tooltip | string            | Yes      |         |             |
| icon    | ReactNode         | Yes      |         |             |
| action  | (row: T) => void; | Yes      |         |             |
