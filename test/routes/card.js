import { puffin } from '@mkenzo_8/puffin'
const { Card } = require('../../src/main')
const CardRouter = puffin.element(`
    <div>
        <Card>
            <h2>Card 1</h2>
            <p>Small text</p>
        </Card>
        <Card>
            <h2>Card 2</h2>
            <p>Small text</p>
        </Card>
    </div>`,
    {
        components:{
            Card
        }
    })

export default CardRouter