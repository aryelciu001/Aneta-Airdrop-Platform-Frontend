import { Select } from '@arco-design/web-react'
import './index.scss'

const Option = Select.Option;
const options = ['a', 'b']
interface Props {
  className: string
}

export default function TokenSelect({ className }: Props) {
  return (
    <Select
      className={className}
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