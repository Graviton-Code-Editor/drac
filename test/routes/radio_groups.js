import { puffin } from '@mkenzo_8/puffin'
const { Button, RadioGroup, NavBar} = require('../../src/main')
const RadioGroupRouter = puffin.element(`
    <div>
        <RadioGroup radioSelected="$radioSelected">
            <label>Configuration of something</label>
            <label checked="">Option 1</label>
        </RadioGroup>
    </div>`,
    {
        components:{
            RadioGroup
        }
    })

export default RadioGroupRouter