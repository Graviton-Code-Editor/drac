<p align="center">
   <h1>Drac</h1>
</p>

Drac is the Design system used in Graviton. This packages is a set of [PuffinJS](https://github.com/PuffinJS/puffin) components.

## 🌱 Components
* Button
* Card
* Radio Group
* Navigation Bar
* Text
* H1...H6 titles

## 🍜 Usage

```javascript 
import { element } from '@mkenzo_8/puffin'
import { Button } from '@mkenzo_8/puffin-drac'

const helloButton = () => {
	return element({
		components: {
			Button
		}
	})`
		<Button>Hello World</Button>
	`
}
```

## ⚠ Warning
I do not consider myself an UI designer.

## 🤔Testing

```shell 
npm test
```
