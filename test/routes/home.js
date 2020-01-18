import { puffin } from '@mkenzo_8/puffin'

const { Text } = require('../../src/main')

const HomeRoute = puffin.element(`
    <div>
        <Text>This demo shows the implemented Drac's components in PuffinJS</Text>
    </div>`,
    {
        components:{
            Text
        }
    }
)

export default HomeRoute
