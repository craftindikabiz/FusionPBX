const collapes1 = document.getElementById("collapes1");
const collapes2 = document.getElementById("collapes2");
const collapes3 = document.getElementById("collapes3");
const collapes4 = document.getElementById("collapes4");
const collapes5 = document.getElementById("collapes5");
const collapes6 = document.getElementById("collapes6");
const collapes7 = document.getElementById("collapes7");
const collapes8 = document.getElementById("collapes8");
// const collapes9 = document.getElementById("collapes9");
// const collapes10 = document.getElementById("collapes10");

const chart1 = document.getElementById("chart1");
const chart2 = document.getElementById("chart2");
const chart3 = document.getElementById("chart3");
const chart4 = document.getElementById("chart4");
const chart5 = document.getElementById("chart5");
const chart6 = document.getElementById("chart6");
const chart7 = document.getElementById("chart7");
const chart8 = document.getElementById("chart8");
// const chart9 = document.getElementById("chart9");
// const chart10 = document.getElementById("chart10");

collapes1.addEventListener("click", () => {
  chart1.classList.toggle("collapes");
});
collapes2.addEventListener("click", () => {
  chart2.classList.toggle("collapes");
});
collapes3.addEventListener("click", () => {
  chart3.classList.toggle("collapes");
});
collapes4.addEventListener("click", () => {
  chart4.classList.toggle("collapes");
});
collapes5.addEventListener("click", () => {
  chart5.classList.toggle("collapes");
});
collapes6.addEventListener("click", () => {
  chart6.classList.toggle("collapes");
});
collapes7.addEventListener("click", () => {
  chart7.classList.toggle("collapes");
});
collapes8.addEventListener("click", () => {
  chart8.classList.toggle("collapes");
});
// collapes9.addEventListener("click", () => {
//   chart9.classList.toggle("collapes");
//    document.querySelector("#chart9 .btn").classList.toggle("hidden")
// });
// collapes10.addEventListener("click", () => {
//   chart10.classList.toggle("collapes");
//   document.querySelector("#chart10 .btn").classList.toggle("hidden")
// });
// -----------------------chaerts-------------------------------
// const ctx1 = document.getElementById("myChart1");
// const ctx2 = document.getElementById("myChart2");
// const ctx3 = document.getElementById("myChart3");
const ctx4 = document.getElementById("myChart4");
const ctx5 = document.getElementById("myChart5");
// const ctx6 = document.getElementById("myChart6");
const ctx7 = document.getElementById("myChart7");
const ctx8 = document.getElementById("myChart8");
// const ctx9 = document.getElementById("myChart9");
// const ctx10 = document.getElementById("myChart10");

const chart_counter = {
  id: "chart_counter",
  beforeDatasetDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = " 40px sans-serif";
    ctx.fillStyle = "#0b165f";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("19", xCoor, yCoor);
  },
};
const chart_counter2 = {
  id: "chart_counter2",
  beforeDatasetDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = " 25px sans-serif";
    ctx.fillStyle = "#003f5c";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("2%", xCoor, yCoor);
  },
};

// new Chart(ctx1, {
//   type: "doughnut",
//   data: {
//     labels: ["Red", "Blue"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [300, 0.01],
//         borderWidth: 0,
//         backgroundColor: ["#f43f5e", "#d4d4d8"],
//         hoverOffset: 1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         filter: (tooltipItem) => {
//           return tooltipItem.dataIndex === 0;
//         },
//       },
//     },
//   },
// });
// new Chart(ctx2, {
//   type: "doughnut",
//   data: {
//     labels: ["Red", "Blue"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [300, 0.01],
//         borderWidth: 0,
//         backgroundColor: ["#3b82f6", "#d4d4d8"],
//         hoverOffset: 1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         filter: (tooltipItem) => {
//           return tooltipItem.dataIndex === 0;
//         },
//       },
//     },
//   },
// });
// new Chart(ctx3, {
//   type: "doughnut",
//   data: {
//     labels: ["Red", "Blue"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [300, 0.01],
//         borderWidth: 0,
//         backgroundColor: ["#ff9224", "#d4d4d8"],
//         borderColor: "#0b165f",
//         hoverOffset: 1.1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         filter: (tooltipItem) => {
//           return tooltipItem.dataIndex === 0;
//         },
//       },
//     },
//   },
// });
// const x = 19;
new Chart(ctx4, {
  type: "doughnut",

  data: {
    labels: ["Red", "Blue"],

    datasets: [
      {
        label: "My First Dataset",
        data: [2, 100 - 2],
        borderWidth: 0,
        backgroundColor: ["#003f5c", "#d4d4d8"],
        borderColor: "#003f5c",
        hoverOffset: 1.1,
      },
    ],
  },
  // plugins: [chart_counter2],
  options: {
    aspectRatio: 1.3,
    cutout: "75%",
    circumference: 180,
    rotation: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
  },
});
new Chart(ctx5, {
  type: "doughnut",

  data: {
    labels: ["Red", "Blue"],

    datasets: [
      {
        label: "My First Dataset",
        data: [20, 100 - 2],
        borderWidth: 0,
        backgroundColor: ["#f95d6a", "#d4d4d8"],
        borderColor: "#f95d6a",
        hoverOffset: 1.1,
      },
    ],
  },

  options: {
    aspectRatio: 1.3,
    cutout: "75%",
    circumference: 180,
    rotation: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
  },
});

// new Chart(ctx6, {
//   type: "doughnut",
//   data: {
//     labels: ["Red", "Blue"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [300, 0.01],
//         borderWidth: 0,
//         backgroundColor: ["#2dd4bf", "#d4d4d8"],
//         hoverOffset: 1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         filter: (tooltipItem) => {
//           return tooltipItem.dataIndex === 0;
//         },
//       },
//     },
//   },
// });
new Chart(ctx7, {
  type: "doughnut",
  data: {
    labels: [`Active:${3}`, `Inactive${0}`],
    datasets: [
      {
        labels: ["Active","Inactive"],
        data: [3, 2],
        borderWidth: 0,
        backgroundColor: ["#a3e635", "#d4d4d8"],
        hoverOffset: 1,
      },
    ],
  },
  // plugins: [chart_counter],
  options: {
    aspectRatio: 1.2,
    cutout: "75%",
    plugins: {
      legend: {
        display:false,
        labels: {
          boxWidth: 12,
        },
      },
      // tooltip: {
      //   filter: (tooltipItem) => {
      //     return tooltipItem.dataIndex === 0;
      //   },
      // },
    },
  },
});
new Chart(ctx8, {
  type: "bar",
  data: {
    
    labels: [
      `Active:${3}`,
      `Call Forward:${2}`,
      `Follow Me:${1}`,
      `Don't Disturb:${1}`,
    ],
    datasets: [
      {
        
        labels: ["Active", "Call Forward", "Follow Me", "Do Not Disturb"],
        data: [3, 2, 1, 1],
        borderWidth: 0,
        backgroundColor: ["#16a34a", "#0ea5e9", "#e11d48", "#a21caf"],
        hoverOffset: 3,
      },
    ],
  },
  // plugins: [chart_counter],
  options: {
    aspectRatio: 1,
    cutout: "75%",
    plugins: {
      legend: {
        display:false,
        // position: "chartArea",
        // textDirection: "rtl",
        // labels: {
        //   boxWidth: 11,
        // },
      },
      // tooltip: {
      //   filter: (tooltipItem) => {
      //     return tooltipItem.dataIndex === 0;
      //   },
      // },
    },
  },
});
// new Chart(ctx9, {
//   type: "doughnut",
//   data: {
//     labels: [`Forwording:${x}`, "Active"],
//     datasets: [
//       {
//         label: "Active",
//         data: [x, 0.01],
//         borderWidth: 0,
//         backgroundColor: ["#bc5090", "#d4d4d8"],
//         hoverOffset: 1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         labels: {
//           boxWidth: 12,
//         },
//       },
//       // tooltip: {
//       //   filter: (tooltipItem) => {
//       //     return tooltipItem.dataIndex === 0;
//       //   },
//       // },
//     },
//   },
// });
// new Chart(ctx10, {
//   type: "doughnut",
//   data: {
//     labels: [`Undefinde:${x}`, "Definde"],
//     datasets: [
//       {
//         label: "Active",
//         data: [x, 0.0001],
//         borderWidth: 0,
//         backgroundColor: ["#003f5c", "#d4d4d8"],
//         hoverOffset: 1,
//       },
//     ],
//   },
//   plugins: [chart_counter],
//   options: {
//     aspectRatio: 2,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         labels: {
//           boxWidth: 12,
//         },
//       },
//       // tooltip: {
//       //   filter: (tooltipItem) => {
//       //     return tooltipItem.dataIndex === 0;
//       //   },
//       // },
//     },
//   },
// });

// -----------------------collapes button----------------------
const collapesAll =document.getElementById("collapesAll");

let count=0;
collapesAll.addEventListener("click",()=>{
  document.querySelector("#chart10 .btn").classList.toggle("hidden")
     document.querySelector("#chart9 .btn").classList.toggle("hidden")
if(count===0){
  document.querySelector("#collapesAll span").textContent="Expand All"
  document.querySelector("#collapesAll i").classList.remove("fa-compress")  
  document.querySelector("#collapesAll i").classList.add("fa-expand")  
  for(let i=1;i<=10;i++){
    document.getElementById(`chart${i}`).classList.add("collapes"); 
    count=1;
}}else{
  document.querySelector("#collapesAll span").textContent="Collapses All"
  document.querySelector("#collapesAll i").classList.add("fa-compress")  
  document.querySelector("#collapesAll i").classList.remove("fa-expand")  
  for(let i=1;i<=10;i++){
    document.getElementById(`chart${i}`).classList.remove("collapes"); 
    count=0;
}
}
  }

)
// ---------------edit button ------------------------------------------
// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragend', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// containers.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container, e.clientY)
//     const draggable = document.querySelector('.dragging')
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
// })

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2
//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child }
//     } else {
//       return closest
//     }
//   }, { offset: Number.NEGATIVE_INFINITY }).element
// }
// function init() {
//   dragula([document.querySelector("#container")])
// }

function slist (target) {
  // (A) SET CSS + GET ALL LIST ITEMS
  target.classList.add("slist");
  let items = target.getElementsByTagName("section"), current = null;

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    var btn = document.querySelector('.btn');

    i.draggable = true;
    
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.ondragstart = e => {
      current = i;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    };
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.ondragenter = e => {
      if (i != current) { i.classList.add("active"); }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.ondragleave = () => i.classList.remove("active");

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.ondragend = () => { for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
    }};
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = e => e.preventDefault();
 
    // (B7) ON DROP - DO SOMETHING
    i.ondrop = e => {
      e.preventDefault();
      if (i != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (i == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };
  }
}