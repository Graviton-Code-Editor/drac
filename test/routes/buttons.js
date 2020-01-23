import { puffin } from '@mkenzo_8/puffin'
const { Button } = require('../../src/main')
const ButtonsRouter = puffin.element(`
    <div>
        <Button>Button</Button>
        <Button>Another Button</Button>
        <Button class="disabled">Disabled</Button>
    </div>`,
    {
        components:{
            Button
        }
    })

export default ButtonsRouter