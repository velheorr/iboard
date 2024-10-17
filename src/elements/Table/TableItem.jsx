import './table.scss'
import BlockShadow from "../BlockShadow";

const TableItem = ({children, extra = ''}) => {
    return (
        /*<BlockShadow>*/
            <div className={`tableItem ${extra}`} style={{margin: '5px'}}>
                {children}
            </div>
        /*</BlockShadow>*/
    );
};

export default TableItem;