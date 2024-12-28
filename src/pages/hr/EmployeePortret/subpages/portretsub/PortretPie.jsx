import React, {useMemo, useState} from 'react';
import {chartConfig} from "../../../js/chartConfig";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import '../../../hr.scss'
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

const PortretPie = () => {
	const [data, setData] = useState([])

	const options = useMemo(() => ({
		accessibility: {...chartConfig.accessibility},
		credits: {...chartConfig.credits},
		chart: {
			type: 'pie',...chartConfig.chart, height: 350},
		title: {...chartConfig.title},
		plotOptions: {
			pie: {
				innerSize: '40%', // Настройка размера внутренней части
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y}'
				},
				showInLegend: true // Показать легенду
			}
		},
		lang: {...chartConfig.lang},
		exporting: {
			enabled: true, // Убедитесь, что экспорт включен
			buttons: {
				contextButton: {
					...chartConfig.exporting.buttons.contextButton,
					menuItems: [
						'viewFullscreen',
						"printChart", "separator",
						"downloadPNG", "downloadJPEG", "downloadPDF",
					],
				},
			},
		},

		series: [{
			name: 'Browser share',
			data: [
				{ name: 'Мужчины', y: 45 },
				{ name: 'Женщины', y: 70 },
			]
		}]
	}), [data])

	return (
		<div>
			<div className='chartHRName'>Социальные характеристики</div>
			<div>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
				/>
			</div>

		</div>
	);
};

export default PortretPie;