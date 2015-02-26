/**
 * Created by Ben Ari on 26/02/2015.
 */


var pieChartRicruteBoys = new d3pie("recruitBoysChart", {

    "size": {
        "canvasHeight": 300,
        "canvasWidth": 300,
        "pieOuterRadius": "80%",
        "pieInnerRadius": "88%"
    },
    "data": {
        "sortOrder": "value-desc",
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 0.4,
            "color": "#ffffff"
        },
        "content": [
            {
                "label": "",
                "value": 65,
                "color": "#ffffff"
            },
            {
                "label": "",
                "value": 35,
                "color": "#000000"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 15
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 2
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "fontSize": 13,
            "decimalPlaces": null
        },
        "value": {
            "color": "#FFFFFF",
            "fontSize": 28,
            "decimalPlaces": 0
        },
        "lines": {
            "enabled": true
        }
    },
    "effects": {
        "load": {
            "speed": 1100
        },
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 16
        },
        "highlightSegmentOnMouseover": false,
        "highlightLuminosity": 0.99
    },
    "misc": {
        "colors": {
            "segmentStroke": "#ffffff"
        },
        "gradient": {
            "enabled": false,
            "percentage": 100
        },
        "canvasPadding": {
            "top": 1,
            "left": 5
        }
    },
    "callbacks": {
        "onMouseoverSegment":null,
        "onMouseoutSegment":null
    }
});

var pieChartRicruteGirls = new d3pie("recruitGirlsChart", {

    "size": {
        "canvasHeight": 300,
        "canvasWidth": 300,
        "pieOuterRadius": "80%",
        "pieInnerRadius": "88%"
    },
    "data": {
        "sortOrder": "value-desc",
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 0.4,
            "color": "#ffffff"
        },
        "content": [
            {
                "label": "",
                "value": 43,
                "color": "#ffffff"
            },
            {
                "label": "",
                "value": 57,
                "color": "#000000"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 15
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 2
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "fontSize": 13,
            "decimalPlaces": null
        },
        "value": {
            "color": "#FFFFFF",
            "fontSize": 28,
            "decimalPlaces": 0
        },
        "lines": {
            "enabled": true
        }
    },
    "effects": {
        "load": {
            "speed": 1100
        },
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 16
        },
        "highlightSegmentOnMouseover": false,
        "highlightLuminosity": 0.99
    },
    "misc": {
        "colors": {
            "segmentStroke": "#000000"
        },
        "gradient": {
            "enabled": false,
            "percentage": 100
        },
        "canvasPadding": {
            "top": 1,
            "left": 5
        }
    },
    "callbacks": {
        "onMouseoverSegment":null,
        "onMouseoutSegment":null
    }
});
