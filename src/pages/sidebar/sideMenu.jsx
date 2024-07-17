import ListItemButton from "@mui/material/ListItemButton";
import '../layout.scss'
import {Divider, ListItemIcon, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import guardian_black from '../../img/sidebar/guardian_black.png'
import {setActive} from "./SideMenuSlice";
import {Link} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import sales_black from "../../img/sidebar/sales_black.png";
import goal_black from "../../img/sidebar/goal_black.png";
import economics_black from "../../img/sidebar/economics_black.png";
import finance_black from "../../img/sidebar/finance_black.png";
import equality_black from "../../img/sidebar/equality_black.png";
import resources_black from "../../img/sidebar/resources_black.png";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import production_black from "../../img/sidebar/production_black.png";

const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()

    const neon = useTheme('neonGreen')
    const color = useTheme('divider')

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <SimpleTreeView>
                <TreeItem itemId={'Проекты'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <ListItemIcon sx={{width: '44px'}}><HomeRepairServiceIcon sx={{color: neon}}/></ListItemIcon>
                                  <div>Проекты</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Динамика'} ico={<DonutSmallIcon sx={{color: neon}}/>} link={'realisation'}/>
                    <Tree name={'Реализация'} img={production_black} link={'realisation'}/>
                </TreeItem>
                <Divider sx={{borderColor: color}}/>
                <Tree name={'Продажи'} img={sales_black} link={'sales'}/>
                <Tree name={'Цели показатели'} img={goal_black} link={'goals'}/>
                <Tree name={'Экономика'} img={economics_black} link={'economics'}/>
                <Tree name={'Финансы'} img={finance_black} link={'finance'}/>
                <Tree name={'Баланс'} img={equality_black} link={'balance'}/>
                <Tree name={'Ресурсы'} img={resources_black} link={'resources'}/>
                <Tree name={'ПРР'} img={guardian_black} link={'lost_develop'}/>
            </SimpleTreeView>
        </div>
    );
};

export default SideMenu;

const Tree = ({name, img = false, ico = false, link = false, children})=>{
    const links = link ? `/${link}` : ''
    const color = useTheme('divider')

    return (
        <Link to={links}>
            <TreeItem itemId={name + Math.random()}
            label={
                <ListItemButton sx={{height: 40}}>
                    { img &&
                        <img className='menuIcon' src={img} alt={name}
                             /*style={{filter: useTheme() ? 'brightness(0) invert(1)': null}}*/
                        />
                    }
                    { ico &&
                        <ListItemIcon sx={{width: '44px'}}>{ico}</ListItemIcon>
                    }
                    <div>{name}</div>
                </ListItemButton>
            }>{children}</TreeItem>
            <Divider sx={{borderColor: color}}/>
        </Link>
    )
}

