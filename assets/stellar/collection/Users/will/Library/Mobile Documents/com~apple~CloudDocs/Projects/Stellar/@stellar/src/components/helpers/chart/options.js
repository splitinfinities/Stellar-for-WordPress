import Highcharts from 'highcharts';
// @ts-ignore
Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (p, point, mouseEvents) {
    p.call(this, point, mouseEvents);
    const label = this.label;
    if (label && point) {
        label.attr({
            fill: point.series.color || point.color
        });
    }
});
Highcharts.setOptions({
    exporting: {
        chartOptions: {
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    lang: {
        thousandsSep: ','
    }
});
export const theme = {
    exporting: {
        enabled: true,
        chartOptions: {
            chart: {
                style: {
                    fontFamily: 'Arial'
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        style: {
            fontFamily: "var(--font-heading)",
            fontSize: "1rem"
        }
    },
    lang: {
        decimalPoint: '.',
        thousandsSep: ','
    },
    series: [],
    legend: {
        backgroundColor: "white",
    },
    credits: {
        enabled: false
    },
    tooltip: {
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 9,
        style: {
            color: 'white',
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: 'white',
            borderStyle: 'solid'
        }
    }
};
export class HighchartsModel {
    serialize() {
        return this;
    }
}
