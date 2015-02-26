/**
 * Created by Ben Ari on 25/02/2015.
 */

var pieKindergarten = new d3pie("womenRaiseChart", {

    "size": {
        "canvasHeight": 300,
        "canvasWidth": 300,
        "pieOuterRadius": "80%"
    },
    "data": {
        "sortOrder": "value-asc",
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 0.4,
            "color": "#0e0d0d"
        },
        "content": [
            {
                "label": "",
                "value": 0.7,
                "color": "#ffffff"
            },
            {
                "label": "",
                "value": 99.3,
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
            "color": "#ffffff",
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
