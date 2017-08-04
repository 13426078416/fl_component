import RButton from './Button';
import SearchBar from './SearchBar';
import RTable from './Table';
import EditableCell from './Table/EditableCell';
import MarkTable from './MarkTable';
import Message from './Message';
import AvaterItem from './AvaterItem';
import RAvatar from './Avatar';
import CodeMirrorCom from './CodeMirror';
import IconButton from './IconButton';
import RPagination from './Pagination';
import RTabs from './Tabs';
import Hs from './Hs';
import RIcon from './Icon';
import Blank from './Blank';
import RPopconfirm from './Popconfirm';
import RSwitch from './Switch';
import RForm from './Form';
import RInput from './Input';
import RSelect from './Select';
import RRadio from './Radio';
import RCheckbox from './Checkbox';
import RSlider from './Slider';
import RDatePicker from './DatePicker';
import RUpload from './Upload';
import format from './format';
import Link from './Link';
import { Layout, Content } from './Layout';
import { Row, Col } from 'antd';
import localStorage from './localStorage';
import Services from '../services/services';
module.exports = {
  Button:RButton,
  CodeMirror:CodeMirrorCom,
  Layout,
  Content,
  Icon:RIcon,
  Input:RInput,
  Message,
  SearchBar,
  Hs,
  MarkTable,
  AvaterItem,
  IconButton,
  EditableCell,
  Popconfirm:RPopconfirm,
  Row,
  Col,
  Blank,
  Avatar:RAvatar,
  Switch:RSwitch,
  Select:RSelect,
  DatePicker:RDatePicker,
  Checkbox:RCheckbox,
  Form:RForm,
  Tabs:RTabs,
  Radio:RRadio,
  Slider:RSlider,
  Upload:RUpload,
  Pagination:RPagination,
  Table:RTable,
  format,
  fetch:Services.getData,
  Link,
  localStorage
}
