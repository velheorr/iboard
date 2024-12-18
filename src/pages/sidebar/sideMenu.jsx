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

import i1 from '../../img/new/1.png'
import i2 from '../../img/new/2.png'
import i3 from '../../img/new/3.png'
import i4 from '../../img/new/4.png'
import i5 from '../../img/new/5.png'
import i6 from '../../img/new/6.png'
import i7 from '../../img/new/7.png'
import i8 from '../../img/new/8.png'
import i9 from '../../img/new/9.png'
import i10 from '../../img/new/10.png'
import i11 from '../../img/new/11.png'
import i12 from '../../img/new/12.png'
import i13 from '../../img/new/13.png'
import i14 from '../../img/new/14.png'
import i15 from '../../img/new/15.png'
import i16 from '../../img/new/16.png'
import i17 from '../../img/new/17.png'
import i18 from '../../img/new/18.png'
import i19 from '../../img/new/19.png'
import i20 from '../../img/new/20.png'
import i21 from '../../img/new/21.png'
import i22 from '../../img/new/22.png'




const SideMenu = () => {
    const dispatch = useDispatch()
    const color = useTheme('divider')
    const themeColor = useTheme() ? '' : 'themeColor'

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <SimpleTreeView>
                <TreeItem itemId={'fgf'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={projects} alt={'fff'}/>
                                  <div>Test</div>
                              </ListItemButton>
                          }>


                    <Tree name={'4'} img={i4} link={'dynamic'} />
                    <Tree name={'5'} img={i5} link={'dynamic'} />
                    <Tree name={'6'} img={i6} link={'dynamic'} />
                    <Tree name={'7'} img={i7} link={'dynamic'} />

                    <Tree name={'9'} img={i9} link={'dynamic'} />
                    <Tree name={'10'} img={i10} link={'dynamic'} />
                    <Tree name={'11'} img={i11} link={'dynamic'} />
                    <Tree name={'12'} img={i12} link={'dynamic'} />
                    <Tree name={'13'} img={i13} link={'dynamic'} />
                    <Tree name={'14'} img={i14} link={'dynamic'} />

                    <Tree name={'16'} img={i16} link={'dynamic'} />
                    <Tree name={'17'} img={i17} link={'dynamic'} />
                    <Tree name={'18'} img={i18} link={'dynamic'} />




                </TreeItem>

                <TreeItem itemId={'Реализация'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={projects} alt={'Реализация'}/>
                                  <div>Реализация</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Динамика'} img={dynamic} link={'dynamic'} />
                    <Tree name={'Производство'} img={i22} link={'proizvodstvo'}/>
                    <Tree name={'Процентование'} img={production_black} link={'proc'}/>
                </TreeItem>
                <Tree name={'Продажи'} img={sales_black} link={'sales'}/>
                {/*<Tree name={'Цели показатели'} img={goal_black} link={'goals'}/>*/}
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
                {/*<Tree name={'Финансы'} img={finance_black} link={'finance'}/>*/}
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
                {/*<Tree name={'Персонал'} img={resources_black} link={'hr'}/>*/}
                <TreeItem itemId={'Персонал_'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={finance_black} alt={'Персонал'}/>
                                  <div>Персонал</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Уволенные'} img={i1} link={'employeeLeave'} />
                    <Tree name={'Портрет сотрудника'} img={i3} link={'employeeLeavePortret'} />
                    <Tree name={'Кадры'} img={i19} link={'kadru'} />

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

