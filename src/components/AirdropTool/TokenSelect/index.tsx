import { Select } from '@arco-design/web-react'
import './index.scss'

const Option = Select.Option;
const options = ['a', 'b']

export default function TokenSelect() {
  return (
    <Select
      placeholder='Select token'
      onChange={(value) => console.log(value)}
      showSearch
    >
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}