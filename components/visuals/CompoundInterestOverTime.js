import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import * as buck from 'buckjs';

const CompoundInterestOverTime = ({
  principal,
  interestRate,
  yearsToCompound
}) => {
  const [amounts, setAmounts] = useState([]);
  const [years, setYears] = useState([]);

  const displayChart = (years, amounts) => {
    Highcharts.chart("interestContainer", {
      chart: {
        type: "column"
      },

      title: {
        text: "Compound Interest Over Time"
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical"
      },

      xAxis: {
        categories: years,
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: true,
        title: {
          text: "Amount"
        }
      },

      series: [
        {
          name: "Expected",
          data: amounts
        }
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal"
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -5
                },
                title: {
                  text: null
                }
              },
              subtitle: {
                text: null
              },
              credits: {
                enabled: false
              }
            }
          }
        ]
      }
    });
  };

  const calculateData = () => {
    const currentYear = new Date().getFullYear();
    for (var i = 1; i <= yearsToCompound; i++) {
      const tempYears = years;
      tempYears.push(currentYear + i);
      setYears(tempYears);

      const tempAmounts = amounts;
      tempAmounts.push(
        +buck.annualCompoundInterestByYear(principal, interestRate, i)
      );
      setAmounts(tempAmounts);
    }
    displayChart(years, amounts);
  };

  useEffect(() => {
    calculateData();
  }, []);
  return <div id="interestContainer" />;
};

export default CompoundInterestOverTime;
