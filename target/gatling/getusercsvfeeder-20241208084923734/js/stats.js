var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8",
        "ok": "4",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "349",
        "ok": "349",
        "ko": "354"
    },
    "maxResponseTime": {
        "total": "734",
        "ok": "734",
        "ko": "477"
    },
    "meanResponseTime": {
        "total": "437",
        "ok": "461",
        "ko": "412"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "158",
        "ko": "44"
    },
    "percentiles1": {
        "total": "401",
        "ok": "381",
        "ko": "408"
    },
    "percentiles2": {
        "total": "427",
        "ok": "481",
        "ko": "427"
    },
    "percentiles3": {
        "total": "644",
        "ok": "683",
        "ko": "467"
    },
    "percentiles4": {
        "total": "716",
        "ok": "724",
        "ko": "475"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
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
        "ok": "4",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "349",
        "ok": "349",
        "ko": "354"
    },
    "maxResponseTime": {
        "total": "734",
        "ok": "734",
        "ko": "477"
    },
    "meanResponseTime": {
        "total": "437",
        "ok": "461",
        "ko": "412"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "158",
        "ko": "44"
    },
    "percentiles1": {
        "total": "401",
        "ok": "381",
        "ko": "408"
    },
    "percentiles2": {
        "total": "427",
        "ok": "481",
        "ko": "427"
    },
    "percentiles3": {
        "total": "644",
        "ok": "683",
        "ko": "467"
    },
    "percentiles4": {
        "total": "716",
        "ok": "724",
        "ko": "475"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
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
