### 💅🏻 Drac

Drac is the Design system used in [Graviton Editor](https://github.com/Graviton-Code-Editor/Graviton-App). 
This package is a set of [PuffinJS](https://github.com/PuffinJS/puffin) components.

## 🌱 Components
* Button
* Card
* Radio Group
* Navigation Bar
* Text
* H1...H6 titles
* Input

## 🍜 Usage

Installation:
```sh
npm run install @mkenzo_8/puffin-drac
```

Example:
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

## 🤔 Testing
Clone the repository:
```shell
git clone https://github.com/Graviton-Code-Editor/drac.git
```

Install dependencies:
```shell
npm install
```

Test it:
```shell 
npm test
```
