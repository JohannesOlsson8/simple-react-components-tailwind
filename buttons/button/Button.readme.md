# Button

A button(with or without icon.
If you don't want any text, please use IconButton instead.

## Props

| Props     | Type                               | Required | Default     | Description                                     |
| :-------- | :--------------------------------- | :------- | :---------- | :---------------------------------------------- |
| children  | ReactNode                          | Yes      |             |                                                 |
| variant   | 'contained' / 'outlined' / 'ghost' | No       | 'contained' | Appearance of the button                        |
| icon      | ReactNode                          | No       |             | An icon placed to the left of the content       |
| loading   | boolean                            | No       |             | Adding a spinner and makes the button disabled  |
| HTMLProps | HTMLButtonElement                  | No       |             | Spreading all button props, such as onClick etc |

## Dependency

None
