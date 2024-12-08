var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "585",
        "ok": "585",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5868",
        "ok": "5868",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2684",
        "ok": "2684",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1768",
        "ok": "1768",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2289",
        "ok": "2289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3896",
        "ok": "3896",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5403",
        "ok": "5403",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5775",
        "ok": "5775",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.211",
        "ok": "0.211",
        "ko": "-"
    }
},
contents: {
"req_get-specific-us-2484a": {
        type: "REQUEST",
        name: "Get Specific User using JSON Feeder",
path: "Get Specific User using JSON Feeder",
pathFormatted: "req_get-specific-us-2484a",
stats: {
    "name": "Get Specific User using JSON Feeder",
    "numberOfRequests": {
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "585",
        "ok": "585",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5868",
        "ok": "5868",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2684",
        "ok": "2684",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1768",
        "ok": "1768",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2289",
        "ok": "2289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3896",
        "ok": "3896",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5403",
        "ok": "5403",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5775",
        "ok": "5775",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.211",
        "ok": "0.211",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
