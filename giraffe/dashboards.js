var graphite_url = "http://graphite.gingerlime.com";  // enter your graphite url, e.g. http://your.graphite.com

var dashboards = 
[
  { "name": "Measure",
    "refresh": 3000,
    "scheme": "colorwheel",
    "metrics": 
    [
      {
        "alias": "password success",
        "target": "aliasByNode(stats.counters.events.password.success.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
      {
        "alias": "password fail",
        "target": "aliasByNode(stats.counters.events.password.fail.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
    ]
  },
  { "name": "Measure more",
    "refresh": 3000,
    "scheme": "colorwheel",
    "metrics": 
    [
      {
        "alias": "password success",
        "target": "aliasByNode(stats.counters.events.password.success.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
      {
        "alias": "password fail",
        "target": "aliasByNode(stats.counters.events.password.fail.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
      {
        "alias": "password usage",
        "target": "aliasByNode(stats.counters.events.password.*.count,4)",
        "renderer": "area",
        "summary": "sum",
      },
    ]
  },
  { "name": "Measure almost everything",
    "refresh": 3000,
    "scheme": "colorwheel",
    "metrics": 
    [
      {
        "alias": "password ratio",
        "target": 'alias(asPercent(stats.counters.events.password.fail.count, stats.counters.events.password.success.count), "ratio")',
        "renderer": "line",
        "interpolation": "cardinal",
        "summary": "last",
        "min": 0,
        "null_as": 0,
        "colspan": 3,
      },
      {
        "alias": "password fail",
        "target": "aliasByNode(stats.counters.events.password.fail.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
      {
        "alias": "password success",
        "target": "aliasByNode(stats.counters.events.password.success.count,4)",
        "renderer": "bar",
        "summary": "sum",
      },
      {
        "alias": "password usage",
        "target": "aliasByNode(stats.counters.events.password.*.count,4)",
        "renderer": "area",
        "summary": "sum",
      },
    ]
  },
  { "name": "Measure everything",
    "refresh": 3000,
    "scheme": "colorwheel",
    "metrics": 
    [
      {
        "alias": "statsd timing",
        "target": 'aliasByMetric(stats.timers.authentication.{mean,upper,upper_90})',
        "renderer": "line",
        "unstack": true,
        "interpolation": "cardinal",
        "min": 0,
        "null_as": 0,
        "colspan": 3,
      },
    ]
  },
];

var scheme = [
              '#423d4f',
              '#4a6860',
              '#848f39',
              '#a2b73c',
              '#ddcb53',
              '#c5a32f',
              '#7d5836',
              '#963b20',
              '#7c2626',
              ].reverse();

function relative_period() { return (typeof period == 'undefined') ? 1 : parseInt(period / 7) + 1; }
function entire_period() { return (typeof period == 'undefined') ? 1 : period; }
function at_least_a_day() { return entire_period() >= 1440 ? entire_period() : 1440; }
