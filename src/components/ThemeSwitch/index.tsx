import { Switch } from '@arco-design/web-react';
import { IconSun, IconMoon } from '@arco-design/web-react/icon'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { toggleTheme } from 'reducers/globalSlice'
import './index.scss'

export default function ThemeSwitch () {

  const darkTheme = useSelector((state: RootStateOrAny) => state.global.darkTheme)
  const dispatch = useDispatch()

  return (
    <div className={`theme-switch ${darkTheme ? 'theme-switch-dark' : ''}`}>
      <IconSun></IconSun>
      <Switch onChange={() => {dispatch(toggleTheme())}} className="theme-switch__switch"/>
      <IconMoon></IconMoon>
    </div>
  )
}