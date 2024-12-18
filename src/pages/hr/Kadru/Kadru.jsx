import '../hr.scss'
import KadruVoronka from "./subpages/KadruVoronka";
import KadruStackedBar from "./subpages/KadruStackedBar";
import KadruFot from "./subpages/KadruFOT";
import Settings from "./Settings";

const Kadru = () => {

    const blocks = [
        {
            name: 'Штат, чел',
            amount: '300',
        },
        {
            name: 'Вакансии',
            amount: '8',
        },
        {
            name: 'Текучесть общая',
            amount: '15%',
        },
        {
            name: 'Текучесть рабочих',
            amount: '20%',
        },
        {
            name: 'ФОТ, руб',
            amount: '8 млн',
        },
    ]

    return (
        <div>
            <div className='miniHRblocks'>
                {
                    blocks.map((item,i) =>{
                        return <div key={i}>
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                        </div>
                    })
                }
                <Settings/>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '49%'}}><KadruStackedBar/></div>
                <div style={{width: '49%'}}><KadruVoronka/></div>


            </div>
            <KadruFot/>

        </div>
    );
};

export default Kadru;