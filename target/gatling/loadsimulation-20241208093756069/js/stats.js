var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "139",
        "ko": "61"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "166",
        "ko": "147"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "20109",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "1075",
        "ok": "827",
        "ko": "1641"
    },
    "standardDeviation": {
        "total": "4600",
        "ok": "1995",
        "ko": "7736"
    },
    "percentiles1": {
        "total": "294",
        "ok": "307",
        "ko": "248"
    },
    "percentiles2": {
        "total": "598",
        "ok": "698",
        "ko": "520"
    },
    "percentiles3": {
        "total": "2369",
        "ok": "2377",
        "ko": "1722"
    },
    "percentiles4": {
        "total": "10176",
        "ok": "8335",
        "ko": "30048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 112,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 61,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.083",
        "ok": "1.448",
        "ko": "0.635"
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
        "total": "200",
        "ok": "139",
        "ko": "61"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "166",
        "ko": "147"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "20109",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "1075",
        "ok": "827",
        "ko": "1641"
    },
    "standardDeviation": {
        "total": "4600",
        "ok": "1995",
        "ko": "7736"
    },
    "percentiles1": {
        "total": "294",
        "ok": "307",
        "ko": "248"
    },
    "percentiles2": {
        "total": "598",
        "ok": "698",
        "ko": "520"
    },
    "percentiles3": {
        "total": "2369",
        "ok": "2377",
        "ko": "1722"
    },
    "percentiles4": {
        "total": "10176",
        "ok": "8335",
        "ko": "30048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 112,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 61,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.083",
        "ok": "1.448",
        "ko": "0.635"
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
