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
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4585",
        "ok": "4585",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2795",
        "ok": "2795",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4585",
        "ok": "4585",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5982",
        "ok": "5982",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7100",
        "ok": "7100",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7323",
        "ok": "7323",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.154",
        "ok": "0.154",
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
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "0.077",
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
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "0.077",
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
