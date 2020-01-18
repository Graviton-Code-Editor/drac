import { puffin } from '@mkenzo_8/puffin'
const { Button, RadioGroup, NavBar} = require('../../src/main')
const ButtonsRouter = puffin.element(`
    <div>
        <Button>A button</Button>
    </div>`,
    {
        components:{
            Button
        }
    })

export default ButtonsRouter