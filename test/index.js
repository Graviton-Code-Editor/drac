import {puffin} from '@mkenzo_8/puffin'

const { Button, RadioGroup} = require('../src/main')

const App = puffin.element(`
    <div>
        <Button>continue</Button>
        <RadioGroup radioSelected="$radioSelected">
            <label>Configuration of something</label>
            <label checked="">Option 1</label>
        </RadioGroup>
    </div>
`,{
    methods:[
        function radioSelected(e){
            console.log(e.detail.target)
        }
    ],
    components:{
        Button,
        RadioGroup
    }
})


puffin.render(App,document.getElementById("app"))