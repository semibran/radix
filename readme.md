# radix
> Convert whole numbers to any base

## usage

### `encode(digits, number) -> string`
Encodes `number` into a `string` using `digits`.
```js
> var binary = ["0", "1"]
> encode(binary, 255)
"11111111"
```

### `decode(digits, string) -> number`
Decodes `string` back into a `number` using `digits`.
```js
> var hex = "0123456789ABCDEF"
> decode(hex, "DEADBEEF")
3735928559
```

Returns `NaN` if `string` contains a character not included in `digits`.
```js
> decode(hex, "GOTEM")
NaN
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
