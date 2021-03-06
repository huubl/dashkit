$(function () {

  var _chart1, _chart2, _chart3;

  var tooltip = $('[data-toggle="tooltip"]');
  tooltip.length && tooltip.tooltip();

  // chart order
  function drawOrder(_data) {
    _chart1 = new Chart(document.getElementById('ordersChart'), {
      type: "bar",
      data: _data,
      options: {
        tooltips: {
          enabled: false,
          mode: "index",
          intersect: false,
          custom: function (r) {
            var a = $("#chart-tooltip");
            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
              if (r.body) {
                var e = r.title || [],
                  l = r.body.map(function (a) {
                    return a.lines
                  }),
                  n = "";
                n += '<div class="arrow"></div>', e.forEach(function (a) {
                  n += '<h3 class="popover-header text-center">' + a + "</h3>"
                }), l.forEach(function (a, e) {
                  var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                    o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                  n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
                }), a.html(n)
              }
              var t = $(this._chart.canvas),
                o = (t.outerWidth(), t.outerHeight(), t.offset().top),
                s = t.offset().left,
                i = a.outerWidth(),
                c = a.outerHeight(),
                d = o + r.caretY - c - 16,
                u = s + r.caretX - i / 2;
              a.css({
                top: "calc(" + d + "px - 1.5%)",
                left: u + "px",
                display: "block"
              })
            } else a.css("display", "none")
          },
          callbacks: {
            label: function (a, e) {
              var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
              return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>"
            },
            labelColor: function (tooltipItem, chart) {
              return {
                backgroundColor: '#2C7BE5'
              };
            }
          }
        },
        scales: {
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.5,
            barThickness: 10,
            ticks: {
              fontWeight: 700,
              fontSize: 13,
              fontColor: '#90a0b7',
            },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            ticks: {
              fontWeight: 700,
              fontSize: 14,
              fontColor: '#90a0b7',
              beginAtZero: true,
              callback: function (a) {
                if (!(a % 10)) return "$" + a + "k"
              }
            },
            gridLines: {
              drawBorder: false,
              borderDash: [2, 4],
              color: "#e6edf7"
            }
          }]
        },
        legend: {
          display: false,
        }
      }
    })
  }

  var dataOrder = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
      backgroundColor: "#2c7be5",
      borderColor: "#2c7be5",
    }]
  }

  drawOrder(dataOrder);

  $("#cardToggle").change(function (e) {
    if ($(this).is(':checked')) {
      dataOrder.datasets.push(
        {
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: "#d2ddec",
          borderColor: "#d2ddec",
          label: "Affiliate"
        }
      )
    } else {
      dataOrder.datasets.splice(-1, 1);
    }
    _chart1.update();
  });

  // chart devices

  function drawDevice(_data) {
    _chart2 = new Chart(document.getElementById('deviceChart'), {
      type: 'doughnut',
      data: _data,
      options: {
        responsive: true,
        maintainAspectRatio: !1,
        tooltips: {
          enabled: false,
          mode: "index",
          intersect: false,
          custom: function (r) {
            var a = $("#chart-tooltip");
            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
              if (r.body) {
                var e = r.title || [],
                  l = r.body.map(function (a) {
                    return a.lines
                  }),
                  n = "";
                n += '<div class="arrow"></div>', e.forEach(function (a) {
                  n += '<h3 class="popover-header text-center">' + a + "</h3>"
                }), l.forEach(function (a, e) {
                  var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                    o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                  n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
                }), a.html(n)
              }
              var t = $(this._chart.canvas),
                o = (t.outerWidth(), t.outerHeight(), t.offset().top),
                s = t.offset().left,
                i = a.outerWidth(),
                c = a.outerHeight(),
                d = o + r.caretY - c - 16,
                u = s + r.caretX - i / 2;
              a.css({
                top: "calc(" + d + "px - 1.5%)",
                left: u + "px",
                display: "block"
              })
            } else a.css("display", "none")
          },
          callbacks: {
            title: function (a, e) {
              return e.labels[a[0].index]
            },
            label: function (a, e) {
              var t = "";
              return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>"
            }
          }
        },
        cutoutPercentage: 86,
        legend: {
          display: false
        }
      }
    });
  }

  var dataDevices = {
    labels: ["Desktop", "Table", "Mobile"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#2c7be5', '#a6c5f7', '#d2ddec'],
        borderWidth: 1,
        borderColor: '#fff',
        borderHover: '#fff',
      }
    ]
  }

  drawDevice(dataDevices);

  $("#devicesDirect").on("click", function () {
    $(".js-nav-cards-devices").removeClass("active");
    $(this).addClass("active");
    dataDevices.datasets[0].data = [15, 45, 20];
    _chart2.update();
  });

  $("#devicesChart").on("click", function () {
    $(".js-nav-cards-devices").removeClass("active");
    $(this).addClass("active");
    dataDevices.datasets[0].data = [60, 25, 15];
    _chart2.update();
  });

  // performance

  function drawPerformance(_data) {
    _chart3 = new Chart(document.getElementById('performance'), {
      type: "line",
      data: _data,
      options: {
        tooltips: {
          enabled: false,
          mode: "index",
          intersect: false,
          custom: function (r) {
            var a = $("#chart-tooltip");
            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
              if (r.body) {
                var e = r.title || [],
                  l = r.body.map(function (a) {
                    return a.lines
                  }),
                  n = "";
                n += '<div class="arrow"></div>', e.forEach(function (a) {
                  n += '<h3 class="popover-header text-center">' + a + "</h3>"
                }), l.forEach(function (a, e) {
                  var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                    o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                  n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
                }), a.html(n)
              }
              var t = $(this._chart.canvas),
                o = (t.outerWidth(), t.outerHeight(), t.offset().top),
                s = t.offset().left,
                i = a.outerWidth(),
                c = a.outerHeight(),
                d = o + r.caretY - c - 16,
                u = s + r.caretX - i / 2;
              a.css({
                top: "calc(" + d + "px - 1.5%)",
                left: u + "px",
                display: "block"
              })
            } else a.css("display", "none")
          },
          callbacks: {
            label: function (a, e) {
              var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
              return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>"
            },
            labelColor: function (tooltipItem, chart) {
              return {
                backgroundColor: '#2C7BE5'
              };
            }
          }
        },
        scales: {
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.5,
            barThickness: 10,
            ticks: {
              fontWeight: 700,
              fontSize: 13,
              fontColor: '#90a0b7',
            },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            ticks: {
              fontWeight: 700,
              fontSize: 14,
              fontColor: '#90a0b7',
              beginAtZero: true,
              callback: function (a) {
                if (!(a % 10)) return "$" + a + "k"
              }
            },
            gridLines: {
              drawBorder: false,
              borderDash: [2, 4],
              color: "#e6edf7",
              zeroLineColor: "#e6edf7"
            }
          }]
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    })
  }

  var dataPerformance = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Performance",
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
      backgroundColor: "transparent",
      borderColor: "#2c7be5"
    }]
  }

  drawPerformance(dataPerformance)

  $("#performanceAll").on("click", function () {
    $(".js-nav-cards-item").removeClass("active");
    $(this).addClass("active");
    dataPerformance.datasets[0].data = [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40];
    _chart3.update();
  });

  $("#performanceDirect").on("click", function () {
    $(".js-nav-cards-item").removeClass("active");
    $(this).addClass("active");
    dataPerformance.datasets[0].data = [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39];
    _chart3.update();
  });

  $("#performanceOrganic").on("click", function () {
    $(".js-nav-cards-item").removeClass("active");
    $(this).addClass("active");
    dataPerformance.datasets[0].data = [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15, 37];
    _chart3.update();
  });

  $('#js-table-goal').DataTable();

  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".navbar-user_drop").eq(0).insertAfter(".sidebar__logo").eq(0);
    $(".navbar-user_drop").removeClass("dropup").addClass("dropdown");
    $(".main-nav>.navbar-nav").append('<li class="nav-item"><a class="nav-link collapsed level1 navbar-user__search" href="#sidebarModalSearch" data-toggle="modal"><i class="fe fe-search"></i> <span class="text-link"> Notification</span></a></li>')
  }
  else {
    $(".nav-collapse").removeAttr("style");
    $(".navbar-user_drop").insertAfter(".navbar-user__noti");
    $(".navbar-user_drop").removeClass("dropdown").addClass("dropup");
    $(".main-nav>.navbar-nav>.nav-item>.navbar-user__search").remove();
  }

  $(window).resize(function () {
    if ($(this).width() <= 768) {
      $(".navbar-user_drop").eq(0).insertAfter(".sidebar__logo").eq(0);
      $(".navbar-user_drop").removeClass("dropup").addClass("dropdown");
      $(".main-nav>.navbar-nav").append('<li class="nav-item"><a class="nav-link collapsed level1 navbar-user__search" href="#sidebarModalSearch" data-toggle="modal"><i class="fe fe-search"></i> <span class="text-link"> Notification</span></a></li>')
    } else {
      $(".nav-collapse").removeAttr("style");
      $(".navbar-user_drop").insertAfter(".navbar-user__noti");
      $(".navbar-user_drop").removeClass("dropdown").addClass("dropup");
      $(".main-nav>.navbar-nav>.nav-item>.navbar-user__search").remove();
    }
  });

  $(".navbar-toggler").click(function (e) {
    e.preventDefault();
    $("#sidebarCollapse").slideToggle("300");

  });
});