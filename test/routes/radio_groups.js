import { puffin } from '@mkenzo_8/puffin'
const { RadioGroup} = require('../../src/main')
const RadioGroupRouter = puffin.element(`
    <div>
        <RadioGroup radioSelected="$radioSelected">
            <label>Option 1</label>
            <label checked="">Option 2 (default)</label>
            <label>Option 3</label>
        </RadioGroup>
    </div>`,
    {
        components:{
            RadioGroup
        }
    })

export default RadioGroupRouter