# InputField

Input for text and number

## Props

| Props      | Type               | Required | Default | Description                                                                    |
| :--------- | :----------------- | :------- | :------ | :----------------------------------------------------------------------------- |
| type       | 'text' or 'number' | No       | 'text'  | Type for input                                                                 |
| label      | string             | Yes      |         | Label above input field                                                        |
| hideLabel  | bool               | No       |         | If hiding the label, the input will be provided with the labal as placeholder. |
| validation | IValidation        | No       |         | Validation for error                                                           |
| helperText | string             | No       |         | Provid extra information to help the user                                      |

### IValidation

| Props   | Type    | Required | Default                                                      |
| :------ | :------ | :------- | :----------------------------------------------------------- |
| error   | boolean | Yes      | This will show the message and change the color of the input |
| message | string  | No       | A message will be visible underneath the input               |

## Dependency

None
