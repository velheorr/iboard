import ListItemButton from "@mui/material/ListItemButton";
import '../layout.scss'
import {Divider, ListItemIcon} from "@mui/material";
import {useDispatch} from "react-redux";
import guardian_black from '../../img/sidebar/guardian_black.png'
import {Link, NavLink} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import sales_black from "../../img/sidebar/sales_black.png";
import goal_black from "../../img/sidebar/goal_black.png";
import economics_black from "../../img/sidebar/economics_black.png";
import finance_black from "../../img/sidebar/finance_black.png";
import equality_black from "../../img/sidebar/equality_black.png";
import resources_black from "../../img/sidebar/resources_black.png";
import production_black from "../../img/sidebar/production_black.png";
import dynamic from "../../img/sidebar/dynamic.png";
import projects from "../../img/sidebar/projects.png";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import {setActive} from "./SideMenuSlice";
import kadru from '../../img/sidebar/kadru.png'
import portret from '../../img/sidebar/portret.png'
import hrleave from '../../img/sidebar/hrleave.png'
import personal from '../../img/sidebar/personal.png'
import proizvodstvo from '../../img/sidebar/proizvodstvo.png'

import i6 from '../../img/new/6.png'
import i9 from '../../img/new/9.png'
import i10 from '../../img/new/10.png'
import i12 from '../../img/new/12.png'





const SideMenu = () => {
    const dispatch = useDispatch()
    const color = useTheme('divider')
    const themeColor = useTheme() ? '' : 'themeColor'

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <SimpleTreeView>
                <TreeItem itemId={'Реализация'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={projects} alt={'Реализация'}/>
                                  <div>Реализация</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Динамика'} img={dynamic} link={'dynamic'} />
                    <Tree name={'Производство'} img={proizvodstvo} link={'proizvodstvo'}/>
                    <Tree name={'Процентование'} img={production_black} link={'proc'}/>
                </TreeItem>
                <Tree name={'Продажи'} img={sales_black} link={'sales'}/>
                <TreeItem itemId={'Цели показатели_'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={goal_black} alt={'Цели показатели'}/>
                                  <div>Цели показатели</div>
                              </ListItemButton>
                          }>
                    <Tree name={'KPI по Объектам'} img={i6} link={'goals'} />
                    <Tree name={'KPI по Сотруднику'} img={i9} link={'goals'} />

                </TreeItem>
                <Tree name={'Экономика'} img={economics_black} link={'economics'}/>
                <TreeItem itemId={'Финансы_'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={finance_black} alt={'Финансы'}/>
                                  <div>Финансы</div>
                              </ListItemButton>
                          }>
                    <Tree name={'ГДеньги'} img={i12} link={'kmoney'} />
                    <Tree name={'ГДеньги2'} img={i10} link={'kmoney'} />

                </TreeItem>

                <Tree name={'Баланс'} img={equality_black} link={'balance'}/>
                <Tree name={'Ресурсы'} img={resources_black} link={'resources'}/>
                <TreeItem itemId={'Персонал_'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={personal} alt={'Персонал'}/>
                                  <div>Персонал</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Уволенные'} img={hrleave} link={'employeeLeave'} />
                    <Tree name={'Портрет сотрудника'} img={portret} link={'employeeLeavePortret'} />
                    <Tree name={'Кадры'} img={kadru} link={'kadru'} />
                </TreeItem>

                <Tree name={'ПРР'} img={guardian_black} link={'lost_develop'}/>
            </SimpleTreeView>
            <SimpleTreeView sx={{position: 'absolute', bottom: 0, width: '100%'}}>
                <Link to={'/versionLog'} onClick={()=>{dispatch(setActive('versionLog'))}}>
                    <Tree name={'О версии'} ico={<PrivacyTipIcon/>} link={'versionLog'} />
                </Link>
            </SimpleTreeView>
        </div>
    );
};

export default SideMenu;

const Tree = ({name, img = false, ico = false, link = false, children})=>{
    const links = link ? `/${link}` : ''
    const color = useTheme('divider')
    const themeColor = useTheme() ? 'xxx' : 'themeColor'
    const dispatch = useDispatch()
    const neon = useTheme('neonGreen')

    const activate = (page)=>{
        dispatch(setActive(page))
    }

    return (
        <NavLink to={links} onClick={()=>{activate(name)}}>
            <TreeItem itemId={name + Math.random()} className={themeColor}
            label={
                <ListItemButton sx={{height: 40}}>
                    { img &&
                        <img className={`menuIcon ${themeColor}`} src={img} alt={name}/>
                    }
                    { ico &&
                        <ListItemIcon className={`menuIcon img `} sx={{width: '44px', color: neon}}>{ico}</ListItemIcon>
                    }
                    <div>{name}</div>
                </ListItemButton>
            }>{children}</TreeItem>
            <Divider sx={{borderColor: color}}/>
        </NavLink>
    )
}

