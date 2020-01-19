import { puffin } from '@mkenzo_8/puffin'

const { Text , Titles } = require('../../src/main')

const TextRoute = puffin.element(`
    <div>
        <H1>This is an H1</H1>
        <Text>This is a text</Text>
        <H2>This is an H2</H2>
        <Text>This is a text</Text>
        <H3>This is an H3</H3>
        <Text>This is a text</Text>
        
    </div>`,
    {
        components:{
            Text,
            H1:Titles.h1,
            H2:Titles.h2,
            H3:Titles.h3
        }
    }
)

export default TextRoute
