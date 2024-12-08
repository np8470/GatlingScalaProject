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
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "855",
        "ok": "855",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "495",
        "ok": "495",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "percentiles2": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles3": {
        "total": "715",
        "ok": "715",
        "ko": "-"
    },
    "percentiles4": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.381",
        "ok": "0.381",
        "ko": "-"
    }
},
contents: {
"req_get-user-using--9b1f6": {
        type: "REQUEST",
        name: "Get User using CSV Feeder",
path: "Get User using CSV Feeder",
pathFormatted: "req_get-user-using--9b1f6",
stats: {
    "name": "Get User using CSV Feeder",
    "numberOfRequests": {
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "855",
        "ok": "855",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "495",
        "ok": "495",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "percentiles2": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles3": {
        "total": "715",
        "ok": "715",
        "ko": "-"
    },
    "percentiles4": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.381",
        "ok": "0.381",
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
