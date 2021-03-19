import Vue from 'vue';
// 部分引入組件
import {
    Container,
    Header,
    Aside,
    Main,
    Row,
    Col,
    Icon,
    Button,

    Form,
    FormItem,
    Radio,
    Checkbox,
    Input,
    Select,
    Option,
    TimePicker,
    DatePicker,

    Table,
    TableColumn,
    Tag,
    Pagination,
    Avatar,
    
    Loading,
    Message,
    MessageBox,

    Submenu,
    Menu,
    MenuItem,
    Tabs,
    TabPane,
    Dropdown,
    DropdownItem,
    DropdownMenu,

    Dialog,
    Tooltip,
    Card,
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)

Vue.use(FormItem)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(TimePicker)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Avatar)
Vue.use(Loading)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Card)