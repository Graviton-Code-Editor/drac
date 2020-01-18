import { puffin } from '@mkenzo_8/puffin'

const { Text } = require('../../src/main')

const HomeRoute = puffin.element(`
    <div>
        <Text>This is a text</Text>
    </div>`,
    {
        components:{
            Text
        }
    }
)

export default HomeRoute
