import ListItemButton from "@mui/material/ListItemButton";
import '../layout.scss'
import {Divider, ListItemIcon} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import guardian_black from '../../img/sidebar/guardian_black.png'
import {Link} from "react-router-dom";
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

const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()

    const neon = useTheme('neonGreen')
    const color = useTheme('divider')
    const themeColor = useTheme() ? '' : 'themeColor'

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <SimpleTreeView>
                <TreeItem itemId={'Проекты'}
                          label={
                              <ListItemButton sx={{height: 35}}>
                                  <img className={`menuIcon ${themeColor}`} src={projects} alt={'Проекты'}/>
                                  <div>Проекты</div>
                              </ListItemButton>
                          }>
                    <Tree name={'Динамика'} img={dynamic} link={'realisation'}/>
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
    const themeColor = useTheme() ? 'xxx' : 'themeColor'

    return (
        <Link to={links}>
            <TreeItem itemId={name + Math.random()} className={themeColor}
            label={
                <ListItemButton sx={{height: 40}}>
                    { img &&
                        <img className={`menuIcon ${themeColor}`} src={img} alt={name}
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

