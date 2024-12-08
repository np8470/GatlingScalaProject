var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "percentiles2": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "percentiles3": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles4": {
        "total": "824",
        "ok": "824",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "0.4",
        "ok": "0.4",
        "ko": "-"
    }
},
contents: {
"req_to-get-all-user-9d68f": {
        type: "REQUEST",
        name: "To Get all Users",
path: "To Get all Users",
pathFormatted: "req_to-get-all-user-9d68f",
stats: {
    "name": "To Get all Users",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "percentiles2": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "percentiles3": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "percentiles4": {
        "total": "829",
        "ok": "829",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
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
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_to-get-specific-fb3c6": {
        type: "REQUEST",
        name: "To get specific users",
path: "To get specific users",
pathFormatted: "req_to-get-specific-fb3c6",
stats: {
    "name": "To get specific users",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles2": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles3": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles4": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
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
