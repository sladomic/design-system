# Button

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                                               | Type                                                                                                     | Default     |
| --------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `bottomRounded` | `bottom-rounded` | If `true` the bottom corners get rounded                                                                                                                                                                                                                                                  | `boolean`                                                                                                | `false`     |
| `color`         | `color`          | The color to use from your application's color palette.                                                                                                                                                                                                                                   | `"danger" \| "info" \| "info-light" \| "link" \| "primary" \| "primary-light" \| "success" \| "warning"` | `'primary'` |
| `disabled`      | `disabled`       | If `true`, the user cannot interact with the button.                                                                                                                                                                                                                                      | `boolean`                                                                                                | `false`     |
| `download`      | `download`       | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string \| undefined`                                                                                    | `undefined` |
| `expanded`      | `expanded`       | If `true` the button has a full width                                                                                                                                                                                                                                                     | `boolean`                                                                                                | `false`     |
| `href`          | `href`           | Specifies the URL of the page the link goes to                                                                                                                                                                                                                                            | `string \| undefined`                                                                                    | `undefined` |
| `icon`          | `icon`           | Name of the left button icon                                                                                                                                                                                                                                                              | `string`                                                                                                 | `''`        |
| `iconPosition`  | `icon-position`  | Size of the button                                                                                                                                                                                                                                                                        | `"left" \| "right"`                                                                                      | `'left'`    |
| `iconRight`     | `icon-right`     | Name of the right button icon                                                                                                                                                                                                                                                             | `string`                                                                                                 | `''`        |
| `inverted`      | `inverted`       | If `true` the button is inverted                                                                                                                                                                                                                                                          | `boolean`                                                                                                | `false`     |
| `isActive`      | `is-active`      | If `true` the button has a active theme                                                                                                                                                                                                                                                   | `boolean`                                                                                                | `false`     |
| `link`          | `link`           | Turn the button in to a link.                                                                                                                                                                                                                                                             | `boolean`                                                                                                | `false`     |
| `loading`       | `loading`        | If `true` the label is hidden and a loading spinner is shown instead.                                                                                                                                                                                                                     | `boolean`                                                                                                | `false`     |
| `name`          | `name`           | The name of the button, which is submitted with the form data.                                                                                                                                                                                                                            | `string \| undefined`                                                                                    | `''`        |
| `outlined`      | `outlined`       | If `true` the button is outlined                                                                                                                                                                                                                                                          | `boolean`                                                                                                | `false`     |
| `rel`           | `rel`            | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string \| undefined`                                                                                    | `undefined` |
| `size`          | `size`           | Size of the button                                                                                                                                                                                                                                                                        | `"" \| "small"`                                                                                          | `''`        |
| `square`        | `square`         | If `true` the width of the buttons is limited                                                                                                                                                                                                                                             | `boolean`                                                                                                | `false`     |
| `target`        | `target`         | Specifies where to display the linked URL. Only applies when an `href` is provided.                                                                                                                                                                                                       | `" _parent" \| "_blank" \| "_self" \| "_top"`                                                            | `'_self'`   |
| `topRounded`    | `top-rounded`    | If `true` the top corners get rounded                                                                                                                                                                                                                                                     | `boolean`                                                                                                | `false`     |
| `type`          | `type`           | The type of button.                                                                                                                                                                                                                                                                       | `"button" \| "reset" \| "submit"`                                                                        | `'button'`  |
| `value`         | `value`          | The value of the button, which is submitted with the form data.                                                                                                                                                                                                                           | `number \| string \| undefined`                                                                          | `''`        |


## Events

| Event          | Description                                 | Type                      |
| -------------- | ------------------------------------------- | ------------------------- |
| `balBlur`      | Emitted when the button loses focus.        | `CustomEvent<void>`       |
| `balDidRender` | Emitted when the button has been  rendered. | `CustomEvent<void>`       |
| `balFocus`     | Emitted when the button has focus.          | `CustomEvent<void>`       |
| `balNavigate`  | Emitted when the link element has clicked.  | `CustomEvent<MouseEvent>` |


## Dependencies

### Used by

 - [bal-accordion](../bal-accordion)
 - [bal-card-button](../bal-card-button)
 - [bal-data-value](../bal-data-value)
 - [bal-hint](../bal-hint)
 - [bal-snackbar](../bal-snackbar)
 - [bal-tabs](../bal-tabs)

### Depends on

- [bal-spinner](../bal-spinner)
- [bal-icon](../bal-icon)
- [bal-text](../bal-text)

### Graph
```mermaid
graph TD;
  bal-button --> bal-spinner
  bal-button --> bal-icon
  bal-button --> bal-text
  bal-accordion --> bal-button
  bal-card-button --> bal-button
  bal-data-value --> bal-button
  bal-hint --> bal-button
  bal-snackbar --> bal-button
  bal-tabs --> bal-button
  style bal-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
