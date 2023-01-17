export const barCharts = {
    type: "bar",
    data: {
      labels: ["Juridico", "Finanças", "Tecnologia", "Marketing"],
      datasets: [
        {
          data: [20, 10, 5, 15],
          backgroundColor: ["#3F2180", "#EA3A86", "#A8CD5A", "#49B7D6"],
        },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: false
      }
    }
  };
  
  export default barCharts;